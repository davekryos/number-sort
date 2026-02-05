// analyzer.js — Difficulty metrics computation for Number Sort levels
// Computes structural, blocking, solution, branching metrics and composite scores.

// --- Helpers ---

/** Binary popcount — number of 1-bits. Used for theoretical minimum piece count. */
function popcount(n) {
  let count = 0;
  while (n > 0) {
    count += n & 1;
    n >>>= 1;
  }
  return count;
}

/** Min-max normalization to [0, 1]. Returns 0 if min === max. */
function normalize(value, min, max) {
  if (max === min) return 0;
  return (value - min) / (max - min);
}

// --- A. Structural Metrics (layout only, no solver needed) ---

/**
 * @param {object} level
 * @returns {object}
 */
function computeStructuralMetrics(level) {
  const tubes = level.tubes;
  const tubeCount = tubes.length;
  const emptyTubeCount = tubes.filter(t => t.initialPieces.length === 0).length;

  const allPieces = tubes.flatMap(t => (t.initialPieces || []).filter(p => p != null));
  const totalPieces = allPieces.length;
  const totalCapacity = tubes.reduce((sum, t) => sum + t.capacity, 0);
  const fillRatio = totalCapacity > 0 ? totalPieces / totalCapacity : 0;
  const emptySlots = totalCapacity - totalPieces;

  const uniqueValues = [...new Set(allPieces)].sort((a, b) => a - b);
  const valueCount = uniqueValues.length;

  // Capacity variance (population variance)
  const caps = tubes.map(t => t.capacity);
  const avgCap = caps.reduce((a, b) => a + b, 0) / caps.length;
  const capacityVariance = caps.reduce((sum, c) => sum + (c - avgCap) ** 2, 0) / caps.length;

  const totalValue = allPieces.reduce((a, b) => a + b, 0);
  const theoreticalMin = popcount(totalValue);

  const reductionRatio = totalPieces > 0 ? level.targetPieceCount / totalPieces : 1;

  return {
    tubeCount, emptyTubeCount, totalPieces, totalCapacity,
    fillRatio, emptySlots, uniqueValues, valueCount,
    capacityVariance, totalValue, theoreticalMin,
    reductionRatio, targetPieceCount: level.targetPieceCount,
  };
}

// --- B. Blocking Metrics (from layout) ---

/**
 * For each pair of same-value pieces in different tubes,
 * count how many pieces sit above each, preventing direct merge.
 * @param {object} level
 * @returns {object}
 */
function computeBlockingMetrics(level) {
  const tubes = level.tubes.map(t => (t.initialPieces || []).filter(p => p != null));

  // value → [{tubeIdx, piecesAbove}]
  const valuePositions = {};
  for (let ti = 0; ti < tubes.length; ti++) {
    const tube = tubes[ti];
    for (let pi = 0; pi < tube.length; pi++) {
      const val = tube[pi];
      const piecesAbove = tube.length - 1 - pi;
      if (!valuePositions[val]) valuePositions[val] = [];
      valuePositions[val].push({ tubeIdx: ti, piecesAbove });
    }
  }

  let totalBlockingDepth = 0;
  let maxBlockingDepth = 0;
  let mergePairsAccessible = 0;
  let mergePairsBlocked = 0;
  let pairCount = 0;

  for (const val of Object.keys(valuePositions)) {
    const positions = valuePositions[val];
    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        if (positions[i].tubeIdx === positions[j].tubeIdx) continue; // same tube
        pairCount++;
        const blocking = positions[i].piecesAbove + positions[j].piecesAbove;
        totalBlockingDepth += blocking;
        if (blocking > maxBlockingDepth) maxBlockingDepth = blocking;
        if (positions[i].piecesAbove === 0 && positions[j].piecesAbove === 0) {
          mergePairsAccessible++;
        } else {
          mergePairsBlocked++;
        }
      }
    }
  }

  const avgBlockingDepth = pairCount > 0 ? totalBlockingDepth / pairCount : 0;

  return {
    avgBlockingDepth, maxBlockingDepth,
    mergePairsAccessible, mergePairsBlocked,
    totalMergePairs: pairCount,
  };
}

// --- C. Solution Metrics (from solver result) ---

/**
 * @param {import('./solver.js').SolverResult} solverResult
 * @returns {object}
 */
function computeSolutionMetrics(solverResult) {
  if (!solverResult.solvable) {
    return {
      solvable: false,
      optimalMoves: -1,
      totalMerges: 0,
      totalChainReactions: 0,
      longestChain: 0,
      movesPerMerge: 0,
      movesPerChain: 0,
    };
  }

  const path = solverResult.solutionPath;
  const optimalMoves = path.length;
  const totalMerges = path.filter(m => m.merged).length;
  const totalChainReactions = path.filter(m => m.chainLength >= 2).length;
  const longestChain = path.reduce((max, m) => Math.max(max, m.chainLength), 0);
  const movesPerMerge = totalMerges > 0 ? optimalMoves / totalMerges : optimalMoves;
  const movesPerChain = totalChainReactions > 0 ? optimalMoves / totalChainReactions : optimalMoves;

  return {
    solvable: true,
    optimalMoves,
    totalMerges,
    totalChainReactions,
    longestChain,
    movesPerMerge,
    movesPerChain,
  };
}

// --- D. Branching Metrics (from BFS data) ---

/**
 * @param {import('./solver.js').SolverResult} solverResult
 * @returns {object}
 */
function computeBranchingMetrics(solverResult) {
  return {
    avgBranchingFactor: solverResult.avgBranchingFactor,
    maxBranchingFactor: solverResult.maxBranchingFactor,
    decisionPointRatio: solverResult.totalStatesExplored > 0
      ? solverResult.decisionPoints / solverResult.totalStatesExplored
      : 0,
    deadEndCount: solverResult.deadEndCount,
    deadEndRatio: solverResult.totalStatesExplored > 0
      ? solverResult.deadEndCount / solverResult.totalStatesExplored
      : 0,
    totalStatesExplored: solverResult.totalStatesExplored,
    uniqueStatesReached: solverResult.uniqueStatesReached,
  };
}

// --- E. Composite Difficulty Score (two-pass: collect all, then normalize) ---

/**
 * Takes raw metrics for ALL levels (array), returns composite scores.
 * Two-pass: first collects min/max, then normalizes.
 *
 * @param {{structural: object, blocking: object, solution: object, branching: object}[]} allRawMetrics
 * @returns {{compositeScore: number, tier: string, structuralScore: number, solutionScore: number, strategicScore: number}[]}
 */
function computeCompositeScores(allRawMetrics) {
  // Extract feature arrays
  const f = {
    fillRatio: allRawMetrics.map(m => m.structural.fillRatio),
    invReductionRatio: allRawMetrics.map(m => 1 - m.structural.reductionRatio),
    totalPieces: allRawMetrics.map(m => m.structural.totalPieces),
    invEmptySlots: allRawMetrics.map(m => -m.structural.emptySlots), // fewer = harder
    valueCount: allRawMetrics.map(m => m.structural.valueCount),
    optimalMoves: allRawMetrics.map(m => Math.max(m.solution.optimalMoves, 0)),
    logStatesExplored: allRawMetrics.map(m => Math.log1p(m.branching.totalStatesExplored)),
    avgBlockingDepth: allRawMetrics.map(m => m.blocking.avgBlockingDepth),
    maxBlockingDepth: allRawMetrics.map(m => m.blocking.maxBlockingDepth),
    avgBranchingFactor: allRawMetrics.map(m => m.branching.avgBranchingFactor),
    deadEndRatio: allRawMetrics.map(m => m.branching.deadEndRatio),
    decisionPointRatio: allRawMetrics.map(m => m.branching.decisionPointRatio),
  };

  // Min-max per feature
  const mm = {};
  for (const [key, values] of Object.entries(f)) {
    mm[key] = { min: Math.min(...values), max: Math.max(...values) };
  }

  return allRawMetrics.map((_m, i) => {
    // Structural score (0-1): how complex is the layout
    const structuralScore =
      normalize(f.fillRatio[i], mm.fillRatio.min, mm.fillRatio.max) * 0.25 +
      normalize(f.invReductionRatio[i], mm.invReductionRatio.min, mm.invReductionRatio.max) * 0.25 +
      normalize(f.totalPieces[i], mm.totalPieces.min, mm.totalPieces.max) * 0.25 +
      normalize(f.invEmptySlots[i], mm.invEmptySlots.min, mm.invEmptySlots.max) * 0.25;

    // Solution score (0-1): how hard is the optimal solution
    const solutionScore =
      normalize(f.optimalMoves[i], mm.optimalMoves.min, mm.optimalMoves.max) * 0.5 +
      normalize(f.logStatesExplored[i], mm.logStatesExplored.min, mm.logStatesExplored.max) * 0.5;

    // Strategic score (0-1): decision complexity
    const strategicScore =
      normalize(f.avgBlockingDepth[i], mm.avgBlockingDepth.min, mm.avgBlockingDepth.max) * 0.25 +
      normalize(f.maxBlockingDepth[i], mm.maxBlockingDepth.min, mm.maxBlockingDepth.max) * 0.15 +
      normalize(f.avgBranchingFactor[i], mm.avgBranchingFactor.min, mm.avgBranchingFactor.max) * 0.20 +
      normalize(f.deadEndRatio[i], mm.deadEndRatio.min, mm.deadEndRatio.max) * 0.20 +
      normalize(f.decisionPointRatio[i], mm.decisionPointRatio.min, mm.decisionPointRatio.max) * 0.20;

    // Composite: weighted average, scaled to 0-100
    const compositeScore = (structuralScore * 0.3 + solutionScore * 0.3 + strategicScore * 0.4) * 100;
    const rounded = Math.round(compositeScore * 10) / 10;

    let tier;
    if (rounded <= 15) tier = 'tutorial';
    else if (rounded <= 35) tier = 'easy';
    else if (rounded <= 55) tier = 'medium';
    else if (rounded <= 75) tier = 'hard';
    else tier = 'expert';

    return {
      compositeScore: rounded,
      tier,
      structuralScore: Math.round(structuralScore * 1000) / 10,
      solutionScore: Math.round(solutionScore * 1000) / 10,
      strategicScore: Math.round(strategicScore * 1000) / 10,
    };
  });
}

// --- F. Issue Detection ---

/**
 * @param {object} level
 * @param {object} structural
 * @param {object} blocking
 * @param {object} solution
 * @param {object} branching
 * @returns {string[]}
 */
function detectIssues(level, structural, blocking, solution, branching) {
  const issues = [];

  if (!solution.solvable) {
    issues.push('UNSOLVABLE');
  }
  if (solution.optimalMoves >= 0 && solution.optimalMoves < 8) {
    issues.push('TOO_SHORT');
  }
  if (structural.fillRatio < 0.65) {
    issues.push('TOO_EMPTY');
  }
  if (structural.emptyTubeCount >= 2) {
    issues.push('EXCESS_BUFFER');
  }
  if (branching.deadEndRatio < 0.05 && solution.optimalMoves > 0) {
    issues.push('NO_TRAPS');
  }
  if (branching.avgBranchingFactor < 2.0 && solution.optimalMoves > 0) {
    issues.push('LINEAR_PATH');
  }
  if (solution.movesPerChain < 2.0 && solution.totalChainReactions > 0) {
    issues.push('CHAIN_INFLATION');
  }
  if (structural.capacityVariance === 0) {
    issues.push('UNIFORM_CAPACITY');
  }
  if (structural.tubeCount < 6) {
    issues.push('FEW_TUBES');
  }
  if (structural.theoreticalMin > level.targetPieceCount) {
    issues.push('IMPOSSIBLE_TARGET');
  }

  return issues;
}

export {
  computeStructuralMetrics,
  computeBlockingMetrics,
  computeSolutionMetrics,
  computeBranchingMetrics,
  computeCompositeScores,
  detectIssues,
  popcount,
  normalize,
};
