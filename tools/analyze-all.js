#!/usr/bin/env node
// analyze-all.js — CLI runner: solve all levels, compute metrics, generate reports.
// Usage:
//   node tools/analyze-all.js              # all levels
//   node tools/analyze-all.js --level 5    # single level

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { solve, verifySolution } from './solver.js';
import {
  computeStructuralMetrics,
  computeBlockingMetrics,
  computeSolutionMetrics,
  computeBranchingMetrics,
  computeCompositeScores,
  detectIssues,
} from './analyzer.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// --- CLI argument parsing ---
const args = process.argv.slice(2);
let singleLevel = null;
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--level' && args[i + 1]) {
    singleLevel = parseInt(args[i + 1], 10);
    i++;
  }
}

// --- Main ---
function main() {
  const levelsPath = path.join(projectRoot, 'src', 'data', 'levels.json');
  const levelsData = JSON.parse(fs.readFileSync(levelsPath, 'utf8'));
  let levels = levelsData.levels;

  if (singleLevel !== null) {
    levels = levels.filter(l => l.id === singleLevel);
    if (levels.length === 0) {
      console.error(`Level ${singleLevel} not found.`);
      process.exit(1);
    }
  }

  console.log(`\nNumber Sort Level Analyzer`);
  console.log(`=========================`);
  console.log(`Analyzing ${levels.length} level(s)...\n`);

  // Phase 1: Solve all levels, collect raw metrics
  const rawResults = [];
  const totalStart = Date.now();

  for (const level of levels) {
    console.log(`--- Level ${level.id}: "${level.name}" (${level.difficulty}) ---`);

    const structural = computeStructuralMetrics(level);
    const blocking = computeBlockingMetrics(level);

    console.log(`  Pieces: ${structural.totalPieces}, Tubes: ${structural.tubeCount}, Fill: ${(structural.fillRatio * 100).toFixed(0)}%, Target: ${level.targetPieceCount}`);
    console.log(`  Solving...`);

    const solverResult = solve(level);

    if (solverResult.solvable) {
      const verification = verifySolution(level, solverResult.solutionPath);
      if (!verification.valid) {
        console.error(`  !! VERIFICATION FAILED: ${verification.reason}`);
      } else {
        const merges = solverResult.solutionPath.filter(m => m.merged).length;
        const chains = solverResult.solutionPath.filter(m => m.chainLength >= 2).length;
        console.log(`  SOLVED: ${solverResult.optimalMoves} moves (${merges} merges, ${chains} chains) | ${solverResult.totalStatesExplored.toLocaleString()} states | ${solverResult.timeMs}ms`);
      }
    } else {
      const reason = solverResult.timedOut ? 'TIMEOUT' : 'EXHAUSTED';
      console.log(`  UNSOLVABLE (${reason}) | ${solverResult.totalStatesExplored.toLocaleString()} states | ${solverResult.timeMs}ms`);
    }

    const solution = computeSolutionMetrics(solverResult);
    const branching = computeBranchingMetrics(solverResult);
    const issues = detectIssues(level, structural, blocking, solution, branching);

    if (issues.length > 0) {
      console.log(`  Issues: ${issues.join(', ')}`);
    }

    rawResults.push({
      level: { id: level.id, name: level.name, difficulty: level.difficulty, targetPieceCount: level.targetPieceCount, tubeCount: level.tubes.length },
      structural,
      blocking,
      solution,
      branching,
      solverResult: {
        levelId: solverResult.levelId,
        solvable: solverResult.solvable,
        optimalMoves: solverResult.optimalMoves,
        solutionPath: solverResult.solutionPath,
        totalStatesExplored: solverResult.totalStatesExplored,
        uniqueStatesReached: solverResult.uniqueStatesReached,
        maxDepthReached: solverResult.maxDepthReached,
        deadEndCount: solverResult.deadEndCount,
        maxBranchingFactor: solverResult.maxBranchingFactor,
        avgBranchingFactor: solverResult.avgBranchingFactor,
        timeMs: solverResult.timeMs,
        timedOut: solverResult.timedOut,
        decisionPoints: solverResult.decisionPoints,
        // branchingFactors omitted (too large)
      },
      issues,
    });

    console.log('');
  }

  const totalTime = Date.now() - totalStart;

  // Phase 2: Compute composite scores (two-pass normalization)
  console.log(`Computing composite scores...`);
  const allRawMetrics = rawResults.map(r => ({
    structural: r.structural,
    blocking: r.blocking,
    solution: r.solution,
    branching: r.branching,
  }));
  const compositeScores = computeCompositeScores(allRawMetrics);
  rawResults.forEach((r, i) => {
    r.composite = compositeScores[i];
  });

  // Phase 3: Generate output
  const analysisDir = path.join(projectRoot, 'analysis');
  if (!fs.existsSync(analysisDir)) {
    fs.mkdirSync(analysisDir, { recursive: true });
  }

  generateJsonReport(rawResults, analysisDir);
  generateLevelReport(rawResults, analysisDir);
  generateSummaryReport(rawResults, analysisDir, totalTime);

  console.log(`\nDone! Total time: ${(totalTime / 1000).toFixed(1)}s`);
  console.log(`Reports written to ${analysisDir}/`);
}

// --- Report generators ---

function generateJsonReport(results, dir) {
  const outputPath = path.join(dir, 'level-report.json');
  // Strip solutionPath from JSON to keep size reasonable (it's in the MD report)
  const cleaned = results.map(r => ({
    ...r,
    solverResult: { ...r.solverResult, solutionPath: undefined },
  }));
  fs.writeFileSync(outputPath, JSON.stringify(cleaned, null, 2));
  console.log(`  Written: ${outputPath}`);
}

function generateLevelReport(results, dir) {
  const outputPath = path.join(dir, 'level-report.md');
  let md = '# Level Difficulty Report\n\n';
  md += `Generated: ${new Date().toISOString()}\n\n`;
  md += '---\n\n';

  for (const r of results) {
    const { level, structural, blocking, solution, branching, composite, issues, solverResult } = r;

    md += `## Level ${level.id}: ${level.name}\n`;
    md += `**Difficulty Label:** ${level.difficulty} | **Computed Tier:** ${composite.tier} (${composite.compositeScore}/100)\n\n`;

    // Structural metrics
    md += '### Structural Metrics\n\n';
    md += '| Metric | Value | Status |\n';
    md += '|--------|-------|--------|\n';
    md += `| Tubes | ${structural.tubeCount} (${structural.emptyTubeCount} empty) | ${structural.emptyTubeCount >= 2 ? '!!' : 'ok'} |\n`;
    md += `| Total Pieces | ${structural.totalPieces} | |\n`;
    md += `| Fill Ratio | ${(structural.fillRatio * 100).toFixed(0)}% | ${structural.fillRatio < 0.65 ? '!!' : 'ok'} |\n`;
    md += `| Empty Slots | ${structural.emptySlots} | |\n`;
    md += `| Unique Values | ${structural.uniqueValues.join(', ')} (${structural.valueCount}) | |\n`;
    md += `| Capacity Variance | ${structural.capacityVariance.toFixed(2)} | ${structural.capacityVariance === 0 ? '!!' : 'ok'} |\n`;
    md += `| Total Value | ${structural.totalValue} | |\n`;
    md += `| Theoretical Min | ${structural.theoreticalMin} | |\n`;
    md += `| Target | ${structural.targetPieceCount} | |\n\n`;

    // Blocking metrics
    md += '### Blocking Metrics\n\n';
    md += '| Metric | Value |\n';
    md += '|--------|-------|\n';
    md += `| Avg Blocking Depth | ${blocking.avgBlockingDepth.toFixed(2)} |\n`;
    md += `| Max Blocking Depth | ${blocking.maxBlockingDepth} |\n`;
    md += `| Merge Pairs Accessible | ${blocking.mergePairsAccessible} |\n`;
    md += `| Merge Pairs Blocked | ${blocking.mergePairsBlocked} |\n`;
    md += `| Total Merge Pairs | ${blocking.totalMergePairs} |\n\n`;

    // Solution metrics
    md += '### Solution Metrics\n\n';
    md += '| Metric | Value | Status |\n';
    md += '|--------|-------|--------|\n';
    if (solution.solvable) {
      md += `| Optimal Moves | ${solution.optimalMoves} | ${solution.optimalMoves < 8 ? '!!' : 'ok'} |\n`;
      md += `| Total Merges | ${solution.totalMerges} | |\n`;
      md += `| Chain Reactions (2+) | ${solution.totalChainReactions} | |\n`;
      md += `| Longest Chain | ${solution.longestChain} | |\n`;
      md += `| Moves per Merge | ${solution.movesPerMerge.toFixed(2)} | |\n`;
      md += `| Moves per Chain | ${solution.movesPerChain.toFixed(2)} | ${solution.movesPerChain < 2.0 && solution.totalChainReactions > 0 ? '!!' : 'ok'} |\n`;
    } else {
      md += `| Solvable | NO | !! |\n`;
      md += `| Timed Out | ${solverResult.timedOut ? 'YES' : 'NO'} | |\n`;
    }
    md += '\n';

    // Branching metrics
    md += '### Branching Metrics\n\n';
    md += '| Metric | Value | Status |\n';
    md += '|--------|-------|--------|\n';
    md += `| Avg Branching Factor | ${branching.avgBranchingFactor.toFixed(2)} | ${branching.avgBranchingFactor < 2.0 ? '!!' : 'ok'} |\n`;
    md += `| Max Branching Factor | ${branching.maxBranchingFactor} | |\n`;
    md += `| Decision Point Ratio | ${(branching.decisionPointRatio * 100).toFixed(1)}% | |\n`;
    md += `| Dead-End Count | ${branching.deadEndCount} | |\n`;
    md += `| Dead-End Ratio | ${(branching.deadEndRatio * 100).toFixed(1)}% | ${branching.deadEndRatio < 0.05 && solution.optimalMoves > 0 ? '!!' : 'ok'} |\n`;
    md += `| States Explored | ${branching.totalStatesExplored.toLocaleString()} | |\n`;
    md += `| Solve Time | ${solverResult.timeMs}ms | |\n\n`;

    // Composite scores
    md += '### Composite Score\n\n';
    md += `| Component | Score |\n`;
    md += `|-----------|-------|\n`;
    md += `| Structural | ${composite.structuralScore} |\n`;
    md += `| Solution | ${composite.solutionScore} |\n`;
    md += `| Strategic | ${composite.strategicScore} |\n`;
    md += `| **Composite** | **${composite.compositeScore}** |\n`;
    md += `| **Tier** | **${composite.tier}** |\n\n`;

    // Solution path
    if (solution.solvable && solverResult.solutionPath && solverResult.solutionPath.length > 0) {
      md += '### Solution Path\n\n';
      md += '| Step | From | To | Value | Merged | Chain | Results |\n';
      md += '|------|------|----|-------|--------|-------|---------|\n';
      for (let si = 0; si < solverResult.solutionPath.length; si++) {
        const m = solverResult.solutionPath[si];
        md += `| ${si + 1} | T${m.from} | T${m.to} | ${m.movedValue} | ${m.merged ? 'yes' : 'no'} | ${m.chainLength} | ${m.mergeResults.join('->') || '-'} |\n`;
      }
      md += '\n';
    }

    // Issues
    if (issues.length > 0) {
      md += `### Issues\n\n`;
      for (const issue of issues) {
        md += `- ${issue}\n`;
      }
      md += '\n';
    }

    md += '---\n\n';
  }

  fs.writeFileSync(outputPath, md);
  console.log(`  Written: ${outputPath}`);
}

function generateSummaryReport(results, dir, totalTimeMs) {
  const outputPath = path.join(dir, 'summary.md');
  let md = '# Level Analysis Summary\n\n';
  md += `Generated: ${new Date().toISOString()} | Total analysis time: ${(totalTimeMs / 1000).toFixed(1)}s\n\n`;

  // 1. Tier distribution
  md += '## Tier Distribution\n\n';
  const tierCounts = { tutorial: 0, easy: 0, medium: 0, hard: 0, expert: 0 };
  for (const r of results) {
    tierCounts[r.composite.tier]++;
  }
  md += '| Tier | Count |\n';
  md += '|------|-------|\n';
  for (const [tier, count] of Object.entries(tierCounts)) {
    md += `| ${tier} | ${count} |\n`;
  }
  md += '\n';

  // 2. Averages
  md += '## Averages\n\n';
  const solvable = results.filter(r => r.solution.solvable);
  const avgMoves = solvable.length > 0 ? solvable.reduce((s, r) => s + r.solution.optimalMoves, 0) / solvable.length : 0;
  const avgFill = results.reduce((s, r) => s + r.structural.fillRatio, 0) / results.length;
  const avgBranch = results.reduce((s, r) => s + r.branching.avgBranchingFactor, 0) / results.length;
  const avgDeadEnd = results.reduce((s, r) => s + r.branching.deadEndRatio, 0) / results.length;
  const avgComposite = results.reduce((s, r) => s + r.composite.compositeScore, 0) / results.length;

  md += `| Metric | Value |\n`;
  md += `|--------|-------|\n`;
  md += `| Avg Optimal Moves | ${avgMoves.toFixed(1)} |\n`;
  md += `| Avg Fill Ratio | ${(avgFill * 100).toFixed(0)}% |\n`;
  md += `| Avg Branching Factor | ${avgBranch.toFixed(2)} |\n`;
  md += `| Avg Dead-End Ratio | ${(avgDeadEnd * 100).toFixed(1)}% |\n`;
  md += `| Avg Composite Score | ${avgComposite.toFixed(1)} |\n`;
  md += `| Solvable | ${solvable.length}/${results.length} |\n\n`;

  // 3. Top issues
  md += '## Top Issues\n\n';
  const issueCounts = {};
  for (const r of results) {
    for (const issue of r.issues) {
      issueCounts[issue] = (issueCounts[issue] || 0) + 1;
    }
  }
  const sortedIssues = Object.entries(issueCounts).sort((a, b) => b[1] - a[1]);
  md += '| Issue | Count | Levels |\n';
  md += '|-------|-------|--------|\n';
  for (const [issue, count] of sortedIssues) {
    const levelIds = results.filter(r => r.issues.includes(issue)).map(r => r.level.id).join(', ');
    md += `| ${issue} | ${count} | ${levelIds} |\n`;
  }
  md += '\n';

  // 4. Difficulty curve
  md += '## Difficulty Curve\n\n';
  md += 'Level ID order vs composite score:\n\n';
  md += '| Level | Name | Label | Tier | Score | Moves | States |\n';
  md += '|-------|------|-------|------|-------|-------|--------|\n';
  for (const r of results) {
    md += `| ${r.level.id} | ${r.level.name} | ${r.level.difficulty} | ${r.composite.tier} | ${r.composite.compositeScore} | ${r.solution.optimalMoves} | ${r.branching.totalStatesExplored.toLocaleString()} |\n`;
  }
  md += '\n';

  // Check monotonicity
  let increasing = 0;
  let decreasing = 0;
  for (let i = 1; i < results.length; i++) {
    if (results[i].composite.compositeScore > results[i - 1].composite.compositeScore) increasing++;
    else if (results[i].composite.compositeScore < results[i - 1].composite.compositeScore) decreasing++;
  }
  md += `Monotonicity: ${increasing} increases, ${decreasing} decreases out of ${results.length - 1} transitions.\n`;
  if (increasing > decreasing * 1.5) {
    md += 'Difficulty curve is **generally increasing** (good).\n\n';
  } else if (decreasing > increasing * 1.5) {
    md += 'Difficulty curve is **generally decreasing** (needs reordering).\n\n';
  } else {
    md += 'Difficulty curve is **flat/mixed** (needs attention).\n\n';
  }

  // 5. Outliers
  md += '## Outliers\n\n';
  const difficultyOrder = { 'Beginner': 0, 'Easy': 1, 'Medium': 2, 'Hard': 3, 'Expert': 4, 'Master': 5, 'Grandmaster': 6 };
  const tierOrder = { 'tutorial': 0, 'easy': 1, 'medium': 2, 'hard': 3, 'expert': 4 };
  let outliers = [];
  for (const r of results) {
    const labelRank = difficultyOrder[r.level.difficulty] || 0;
    const tierRank = tierOrder[r.composite.tier] || 0;
    const diff = Math.abs(labelRank - tierRank);
    if (diff >= 2) {
      outliers.push({ level: r.level.id, name: r.level.name, label: r.level.difficulty, tier: r.composite.tier, score: r.composite.compositeScore });
    }
  }
  if (outliers.length === 0) {
    md += 'No significant outliers detected.\n\n';
  } else {
    md += '| Level | Name | Label | Computed Tier | Score |\n';
    md += '|-------|------|-------|---------------|-------|\n';
    for (const o of outliers) {
      md += `| ${o.level} | ${o.name} | ${o.label} | ${o.tier} | ${o.score} |\n`;
    }
    md += '\n';
  }

  // 6. Recommendations
  md += '## Recommendations\n\n';
  if (issueCounts['TOO_SHORT'] > 5) {
    md += `- **Increase solution depth**: ${issueCounts['TOO_SHORT']} levels solve in <8 moves. Add more blocking or reduce empty tubes.\n`;
  }
  if (issueCounts['TOO_EMPTY'] > 5) {
    md += `- **Increase fill ratio**: ${issueCounts['TOO_EMPTY']} levels have <65% fill. Add more pieces or reduce tube capacity.\n`;
  }
  if (issueCounts['EXCESS_BUFFER'] > 5) {
    md += `- **Reduce empty tubes**: ${issueCounts['EXCESS_BUFFER']} levels have 2+ empty tubes, making them too forgiving.\n`;
  }
  if (issueCounts['NO_TRAPS'] > 5) {
    md += `- **Add trap moves**: ${issueCounts['NO_TRAPS']} levels have <5% dead-end ratio. Rearrange pieces to create dead ends.\n`;
  }
  if (issueCounts['LINEAR_PATH'] > 5) {
    md += `- **Increase branching**: ${issueCounts['LINEAR_PATH']} levels have avg branching <2.0. More tubes or capacity variety helps.\n`;
  }
  if (issueCounts['UNIFORM_CAPACITY'] > 5) {
    md += `- **Vary tube capacities**: ${issueCounts['UNIFORM_CAPACITY']} levels use uniform capacity. Mix sizes (3, 4, 5) for strategy.\n`;
  }
  if (issueCounts['FEW_TUBES'] > results.length * 0.6) {
    md += `- **Consider more tubes**: Most levels have <6 tubes. 5-6 tubes enables richer strategies.\n`;
  }
  if (issueCounts['UNSOLVABLE'] > 0) {
    md += `- **Fix unsolvable levels**: ${issueCounts['UNSOLVABLE']} level(s) could not be solved. May need redesign or solver limit increase.\n`;
  }
  if (outliers.length > 3) {
    md += `- **Reorder levels**: ${outliers.length} levels have computed difficulty far from their label. Consider reordering.\n`;
  }
  if (!issueCounts['TOO_SHORT'] && !issueCounts['TOO_EMPTY'] && !issueCounts['UNSOLVABLE'] && outliers.length === 0) {
    md += 'All levels look well-designed. No major recommendations.\n';
  }
  md += '\n';

  fs.writeFileSync(outputPath, md);
  console.log(`  Written: ${outputPath}`);
}

// --- Run ---
main();
