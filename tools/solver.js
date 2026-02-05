// solver.js — BFS solver for Number Sort levels
// Finds optimal (minimum move) solutions with full path tracking and metrics collection.
// Fixes the move validation bug in src/editor/solver.ts (missing value <= target top rule).

/**
 * @typedef {{from: number, to: number, movedValue: number, merged: boolean, chainLength: number, mergeResults: number[]}} MoveRecord
 * @typedef {{parentHash: string|null, move: MoveRecord|null, depth: number, validMoveCount: number, pieceCount: number}} BFSNode
 * @typedef {{
 *   levelId: number,
 *   solvable: boolean,
 *   optimalMoves: number,
 *   solutionPath: MoveRecord[],
 *   totalStatesExplored: number,
 *   uniqueStatesReached: number,
 *   maxDepthReached: number,
 *   deadEndCount: number,
 *   maxBranchingFactor: number,
 *   avgBranchingFactor: number,
 *   branchingFactors: number[],
 *   timeMs: number,
 *   timedOut: boolean,
 *   decisionPoints: number
 * }} SolverResult
 */

// --- Deque: efficient FIFO queue (avoids O(n) Array.shift) ---

class Deque {
  constructor() {
    /** @type {any[]} */ this._data = [];
    this._head = 0;
  }
  push(item) {
    this._data.push(item);
  }
  shift() {
    if (this._head >= this._data.length) return undefined;
    const item = this._data[this._head];
    this._data[this._head] = undefined; // allow GC
    this._head++;
    if (this._head > 1000 && this._head > this._data.length / 2) {
      this._data = this._data.slice(this._head);
      this._head = 0;
    }
    return item;
  }
  get size() {
    return this._data.length - this._head;
  }
}

// --- Core helpers ---

/**
 * Permutation-invariant state hash.
 * Sorts tubes lexicographically so tube order doesn't matter.
 * @param {number[][]} tubes
 * @returns {string}
 */
function hashState(tubes) {
  return tubes.map(t => t.join(',')).sort().join('|');
}

/**
 * @param {number[][]} tubes
 * @returns {number}
 */
function countPieces(tubes) {
  let sum = 0;
  for (let i = 0; i < tubes.length; i++) sum += tubes[i].length;
  return sum;
}

/**
 * @param {number[][]} tubes
 * @param {number} targetPieceCount
 * @returns {boolean}
 */
function isWin(tubes, targetPieceCount) {
  return countPieces(tubes) <= targetPieceCount;
}

/**
 * Correct move validation (fixes the bug in editor/solver.ts).
 * Rules:
 *   1. Source tube must not be empty
 *   2. Target tube must have capacity
 *   3. If target is empty → always valid
 *   4. If target has pieces → movingValue <= targetTopValue
 *
 * @param {number[]} fromTube
 * @param {number[]} toTube
 * @param {number} toCapacity
 * @returns {boolean}
 */
function canMove(fromTube, toTube, toCapacity) {
  if (fromTube.length === 0) return false;
  if (toTube.length >= toCapacity) return false;
  if (toTube.length === 0) return true;
  return fromTube[fromTube.length - 1] <= toTube[toTube.length - 1];
}

/**
 * Apply a move from fromIdx to toIdx, including chain reactions.
 * Returns null if the move is invalid.
 *
 * @param {number[][]} tubes
 * @param {number[]} capacities
 * @param {number} fromIdx
 * @param {number} toIdx
 * @returns {{tubes: number[][], movedValue: number, merged: boolean, chainLength: number, mergeResults: number[]} | null}
 */
function applyMove(tubes, capacities, fromIdx, toIdx) {
  if (!canMove(tubes[fromIdx], tubes[toIdx], capacities[toIdx])) return null;

  const newTubes = tubes.map(t => [...t]);
  const piece = newTubes[fromIdx].pop();
  newTubes[toIdx].push(piece);

  // Chain reaction on target tube
  let chainLength = 0;
  const mergeResults = [];
  const target = newTubes[toIdx];
  while (target.length >= 2) {
    const top = target[target.length - 1];
    const second = target[target.length - 2];
    if (top === second) {
      target.pop();
      target.pop();
      const merged = top * 2;
      target.push(merged);
      chainLength++;
      mergeResults.push(merged);
    } else {
      break;
    }
  }

  return { tubes: newTubes, movedValue: piece, merged: chainLength > 0, chainLength, mergeResults };
}

// --- Main BFS solver ---

/**
 * @param {object} level - Level object from levels.json
 * @param {{maxStates?: number, timeoutMs?: number}} [options]
 * @returns {SolverResult}
 */
function solve(level, options = {}) {
  const { maxStates = 1_000_000, timeoutMs = 60_000 } = options;
  const startTime = Date.now();

  const initialTubes = level.tubes.map(t =>
    (t.initialPieces || []).filter(p => p !== null && p !== undefined)
  );
  const capacities = level.tubes.map(t => t.capacity);
  const targetPieceCount = level.targetPieceCount;
  const numTubes = initialTubes.length;

  const emptyResult = (extra = {}) => ({
    levelId: level.id,
    solvable: false,
    optimalMoves: -1,
    solutionPath: [],
    totalStatesExplored: 0,
    uniqueStatesReached: 0,
    maxDepthReached: 0,
    deadEndCount: 0,
    maxBranchingFactor: 0,
    avgBranchingFactor: 0,
    branchingFactors: [],
    timeMs: Date.now() - startTime,
    timedOut: false,
    decisionPoints: 0,
    ...extra,
  });

  const initialPieceCount = countPieces(initialTubes);
  if (initialPieceCount === 0) {
    return emptyResult({ solvable: true, optimalMoves: 0 });
  }

  // Immediate win check
  if (isWin(initialTubes, targetPieceCount)) {
    return emptyResult({ solvable: true, optimalMoves: 0 });
  }

  const initialHash = hashState(initialTubes);

  /** @type {Map<string, BFSNode>} */
  const visited = new Map();
  visited.set(initialHash, {
    parentHash: null,
    move: null,
    depth: 0,
    validMoveCount: 0,
    pieceCount: initialPieceCount,
  });

  const queue = new Deque();
  queue.push({ hash: initialHash, tubes: initialTubes });

  let statesExplored = 0;
  let maxDepth = 0;
  let deadEndCount = 0;
  let totalBranching = 0;
  let maxBranching = 0;
  let decisionPoints = 0;
  let winHash = null;
  const branchingFactors = [];

  while (queue.size > 0 && statesExplored < maxStates) {
    if (Date.now() - startTime > timeoutMs) break;

    const { hash: currentHash, tubes: currentTubes } = queue.shift();
    statesExplored++;

    if (statesExplored % 50_000 === 0) {
      const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
      console.log(`  Level ${level.id}: ${statesExplored.toLocaleString()} states explored, queue: ${queue.size.toLocaleString()}, ${elapsed}s`);
    }

    const currentNode = visited.get(currentHash);
    let validMoves = 0;

    for (let fromIdx = 0; fromIdx < numTubes; fromIdx++) {
      if (currentTubes[fromIdx].length === 0) continue;

      let seenEmptyForThisFrom = false;

      for (let toIdx = 0; toIdx < numTubes; toIdx++) {
        if (fromIdx === toIdx) continue;

        // Empty tube equivalence pruning
        if (currentTubes[toIdx].length === 0) {
          if (seenEmptyForThisFrom) continue;
          seenEmptyForThisFrom = true;
        }

        const result = applyMove(currentTubes, capacities, fromIdx, toIdx);
        if (!result) continue;

        const newHash = hashState(result.tubes);
        if (visited.has(newHash)) continue;

        validMoves++;
        const newDepth = currentNode.depth + 1;
        if (newDepth > maxDepth) maxDepth = newDepth;

        /** @type {MoveRecord} */
        const move = {
          from: fromIdx,
          to: toIdx,
          movedValue: result.movedValue,
          merged: result.merged,
          chainLength: result.chainLength,
          mergeResults: result.mergeResults,
        };

        const newPieceCount = countPieces(result.tubes);
        visited.set(newHash, {
          parentHash: currentHash,
          move,
          depth: newDepth,
          validMoveCount: 0,
          pieceCount: newPieceCount,
        });

        // Win check — BFS guarantees shortest path
        if (newPieceCount <= targetPieceCount) {
          winHash = newHash;
          break;
        }

        queue.push({ hash: newHash, tubes: result.tubes });
      }
      if (winHash) break;
    }

    // Record branching data
    currentNode.validMoveCount = validMoves;
    branchingFactors.push(validMoves);
    totalBranching += validMoves;
    if (validMoves > maxBranching) maxBranching = validMoves;
    if (validMoves > 1) decisionPoints++;
    if (validMoves === 0 && !isWin(currentTubes, targetPieceCount)) deadEndCount++;

    if (winHash) break;
  }

  // Reconstruct solution path
  const solutionPath = [];
  if (winHash) {
    let hash = winHash;
    while (hash !== null) {
      const node = visited.get(hash);
      if (node.move) solutionPath.unshift(node.move);
      hash = node.parentHash;
    }
  }

  const timeMs = Date.now() - startTime;
  const timedOut = !winHash && (Date.now() - startTime >= timeoutMs || statesExplored >= maxStates);

  return {
    levelId: level.id,
    solvable: winHash !== null,
    optimalMoves: winHash ? solutionPath.length : -1,
    solutionPath,
    totalStatesExplored: statesExplored,
    uniqueStatesReached: visited.size,
    maxDepthReached: maxDepth,
    deadEndCount,
    maxBranchingFactor: maxBranching,
    avgBranchingFactor: statesExplored > 0 ? totalBranching / statesExplored : 0,
    branchingFactors,
    timeMs,
    timedOut,
    decisionPoints,
  };
}

// --- Solution verification ---

/**
 * Replay the solution path from initial state, verifying every move.
 * @param {object} level
 * @param {MoveRecord[]} solutionPath
 * @returns {{valid: boolean, failedAtStep?: number, reason?: string}}
 */
function verifySolution(level, solutionPath) {
  let tubes = level.tubes.map(t =>
    (t.initialPieces || []).filter(p => p !== null && p !== undefined)
  );
  const capacities = level.tubes.map(t => t.capacity);

  for (let i = 0; i < solutionPath.length; i++) {
    const move = solutionPath[i];

    if (!canMove(tubes[move.from], tubes[move.to], capacities[move.to])) {
      return { valid: false, failedAtStep: i, reason: `canMove returned false for move ${move.from}->${move.to}` };
    }

    const result = applyMove(tubes, capacities, move.from, move.to);
    if (!result) {
      return { valid: false, failedAtStep: i, reason: `applyMove returned null` };
    }

    if (result.chainLength !== move.chainLength) {
      return {
        valid: false,
        failedAtStep: i,
        reason: `chainLength mismatch: expected ${move.chainLength}, got ${result.chainLength}`,
      };
    }

    if (result.movedValue !== move.movedValue) {
      return {
        valid: false,
        failedAtStep: i,
        reason: `movedValue mismatch: expected ${move.movedValue}, got ${result.movedValue}`,
      };
    }

    tubes = result.tubes;
  }

  const finalPieces = countPieces(tubes);
  if (finalPieces > level.targetPieceCount) {
    return {
      valid: false,
      failedAtStep: -1,
      reason: `Final pieces ${finalPieces} > target ${level.targetPieceCount}`,
    };
  }

  return { valid: true };
}

export { solve, verifySolution, canMove, applyMove, hashState, countPieces, isWin, Deque };
