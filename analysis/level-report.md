# Level Difficulty Report

Generated: 2026-02-05T21:08:32.603Z

---

## Level 1: First Steps
**Difficulty Label:** Beginner | **Computed Tier:** easy (22/100)

### Structural Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Tubes | 2 (0 empty) | ok |
| Total Pieces | 4 | |
| Fill Ratio | 50% | !! |
| Empty Slots | 4 | |
| Unique Values | 2, 4, 8 (3) | |
| Capacity Variance | 0.00 | !! |
| Total Value | 16 | |
| Theoretical Min | 1 | |
| Target | 1 | |

### Blocking Metrics

| Metric | Value |
|--------|-------|
| Avg Blocking Depth | 0.00 |
| Max Blocking Depth | 0 |
| Merge Pairs Accessible | 1 |
| Merge Pairs Blocked | 0 |
| Total Merge Pairs | 1 |

### Solution Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Optimal Moves | 1 | !! |
| Total Merges | 1 | |
| Chain Reactions (2+) | 1 | |
| Longest Chain | 3 | |
| Moves per Merge | 1.00 | |
| Moves per Chain | 1.00 | !! |

### Branching Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Avg Branching Factor | 2.00 | ok |
| Max Branching Factor | 2 | |
| Decision Point Ratio | 100.0% | |
| Dead-End Count | 0 | |
| Dead-End Ratio | 0.0% | !! |
| States Explored | 1 | |
| Solve Time | 0ms | |

### Composite Score

| Component | Score |
|-----------|-------|
| Structural | 22.6 |
| Solution | 0 |
| Strategic | 38 |
| **Composite** | **22** |
| **Tier** | **easy** |

### Solution Path

| Step | From | To | Value | Merged | Chain | Results |
|------|------|----|-------|--------|-------|---------|
| 1 | T1 | T0 | 2 | yes | 3 | 4->8->16 |

### Issues

- TOO_SHORT
- TOO_EMPTY
- NO_TRAPS
- CHAIN_INFLATION
- UNIFORM_CAPACITY
- FEW_TUBES

---

## Level 2: Blocked Path
**Difficulty Label:** Beginner | **Computed Tier:** easy (15.4/100)

### Structural Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Tubes | 3 (1 empty) | ok |
| Total Pieces | 4 | |
| Fill Ratio | 33% | !! |
| Empty Slots | 8 | |
| Unique Values | 2, 4, 8 (3) | |
| Capacity Variance | 0.00 | !! |
| Total Value | 16 | |
| Theoretical Min | 1 | |
| Target | 1 | |

### Blocking Metrics

| Metric | Value |
|--------|-------|
| Avg Blocking Depth | 1.00 |
| Max Blocking Depth | 1 |
| Merge Pairs Accessible | 0 |
| Merge Pairs Blocked | 1 |
| Total Merge Pairs | 1 |

### Solution Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Optimal Moves | 3 | !! |
| Total Merges | 2 | |
| Chain Reactions (2+) | 1 | |
| Longest Chain | 2 | |
| Moves per Merge | 1.50 | |
| Moves per Chain | 3.00 | ok |

### Branching Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Avg Branching Factor | 1.33 | !! |
| Max Branching Factor | 4 | |
| Decision Point Ratio | 33.3% | |
| Dead-End Count | 2 | |
| Dead-End Ratio | 33.3% | ok |
| States Explored | 6 | |
| Solve Time | 0ms | |

### Composite Score

| Component | Score |
|-----------|-------|
| Structural | 0 |
| Solution | 12.3 |
| Strategic | 29.3 |
| **Composite** | **15.4** |
| **Tier** | **easy** |

### Solution Path

| Step | From | To | Value | Merged | Chain | Results |
|------|------|----|-------|--------|-------|---------|
| 1 | T0 | T2 | 8 | no | 0 | - |
| 2 | T1 | T0 | 2 | yes | 2 | 4->8 |
| 3 | T0 | T2 | 8 | yes | 1 | 16 |

### Issues

- TOO_SHORT
- TOO_EMPTY
- LINEAR_PATH
- UNIFORM_CAPACITY
- FEW_TUBES

---

## Level 3: Chain Reaction
**Difficulty Label:** Beginner | **Computed Tier:** easy (18.2/100)

### Structural Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Tubes | 3 (0 empty) | ok |
| Total Pieces | 5 | |
| Fill Ratio | 50% | !! |
| Empty Slots | 5 | |
| Unique Values | 2, 4, 8, 16 (4) | |
| Capacity Variance | 0.22 | ok |
| Total Value | 32 | |
| Theoretical Min | 1 | |
| Target | 1 | |

### Blocking Metrics

| Metric | Value |
|--------|-------|
| Avg Blocking Depth | 0.00 |
| Max Blocking Depth | 0 |
| Merge Pairs Accessible | 1 |
| Merge Pairs Blocked | 0 |
| Total Merge Pairs | 1 |

### Solution Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Optimal Moves | 2 | !! |
| Total Merges | 2 | |
| Chain Reactions (2+) | 1 | |
| Longest Chain | 3 | |
| Moves per Merge | 1.00 | |
| Moves per Chain | 2.00 | ok |

### Branching Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Avg Branching Factor | 1.50 | !! |
| Max Branching Factor | 4 | |
| Decision Point Ratio | 25.0% | |
| Dead-End Count | 1 | |
| Dead-End Ratio | 25.0% | ok |
| States Explored | 4 | |
| Solve Time | 0ms | |

### Composite Score

| Component | Score |
|-----------|-------|
| Structural | 27 |
| Solution | 7.4 |
| Strategic | 19.6 |
| **Composite** | **18.2** |
| **Tier** | **easy** |

### Solution Path

| Step | From | To | Value | Merged | Chain | Results |
|------|------|----|-------|--------|-------|---------|
| 1 | T2 | T0 | 2 | yes | 1 | 4 |
| 2 | T1 | T0 | 4 | yes | 3 | 8->16->32 |

### Issues

- TOO_SHORT
- TOO_EMPTY
- LINEAR_PATH
- FEW_TUBES

---

## Level 4: Capacity Intro
**Difficulty Label:** Beginner | **Computed Tier:** easy (25.1/100)

### Structural Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Tubes | 2 (0 empty) | ok |
| Total Pieces | 5 | |
| Fill Ratio | 83% | ok |
| Empty Slots | 1 | |
| Unique Values | 2, 4, 8, 16 (4) | |
| Capacity Variance | 0.00 | !! |
| Total Value | 32 | |
| Theoretical Min | 1 | |
| Target | 1 | |

### Blocking Metrics

| Metric | Value |
|--------|-------|
| Avg Blocking Depth | 0.00 |
| Max Blocking Depth | 0 |
| Merge Pairs Accessible | 1 |
| Merge Pairs Blocked | 0 |
| Total Merge Pairs | 1 |

### Solution Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Optimal Moves | 2 | !! |
| Total Merges | 2 | |
| Chain Reactions (2+) | 2 | |
| Longest Chain | 2 | |
| Moves per Merge | 1.00 | |
| Moves per Chain | 1.00 | !! |

### Branching Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Avg Branching Factor | 1.50 | !! |
| Max Branching Factor | 2 | |
| Decision Point Ratio | 50.0% | |
| Dead-End Count | 0 | |
| Dead-End Ratio | 0.0% | !! |
| States Explored | 2 | |
| Solve Time | 0ms | |

### Composite Score

| Component | Score |
|-----------|-------|
| Structural | 58 |
| Solution | 5.2 |
| Strategic | 15.3 |
| **Composite** | **25.1** |
| **Tier** | **easy** |

### Solution Path

| Step | From | To | Value | Merged | Chain | Results |
|------|------|----|-------|--------|-------|---------|
| 1 | T0 | T1 | 2 | yes | 2 | 4->8 |
| 2 | T1 | T0 | 8 | yes | 2 | 16->32 |

### Issues

- TOO_SHORT
- NO_TRAPS
- LINEAR_PATH
- CHAIN_INFLATION
- UNIFORM_CAPACITY
- FEW_TUBES

---

## Level 5: Double Chain
**Difficulty Label:** Beginner | **Computed Tier:** medium (40.8/100)

### Structural Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Tubes | 3 (0 empty) | ok |
| Total Pieces | 9 | |
| Fill Ratio | 69% | ok |
| Empty Slots | 4 | |
| Unique Values | 2, 4, 8, 16 (4) | |
| Capacity Variance | 0.22 | ok |
| Total Value | 64 | |
| Theoretical Min | 1 | |
| Target | 1 | |

### Blocking Metrics

| Metric | Value |
|--------|-------|
| Avg Blocking Depth | 1.83 |
| Max Blocking Depth | 4 |
| Merge Pairs Accessible | 1 |
| Merge Pairs Blocked | 5 |
| Total Merge Pairs | 6 |

### Solution Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Optimal Moves | 4 | !! |
| Total Merges | 3 | |
| Chain Reactions (2+) | 3 | |
| Longest Chain | 3 | |
| Moves per Merge | 1.33 | |
| Moves per Chain | 1.33 | !! |

### Branching Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Avg Branching Factor | 1.21 | !! |
| Max Branching Factor | 4 | |
| Decision Point Ratio | 42.9% | |
| Dead-End Count | 6 | |
| Dead-End Ratio | 42.9% | ok |
| States Explored | 14 | |
| Solve Time | 0ms | |

### Composite Score

| Component | Score |
|-----------|-------|
| Structural | 58.2 |
| Solution | 19 |
| Strategic | 44.2 |
| **Composite** | **40.8** |
| **Tier** | **medium** |

### Solution Path

| Step | From | To | Value | Merged | Chain | Results |
|------|------|----|-------|--------|-------|---------|
| 1 | T1 | T2 | 2 | yes | 3 | 4->8->16 |
| 2 | T1 | T0 | 4 | yes | 3 | 8->16->32 |
| 3 | T1 | T0 | 16 | no | 0 | - |
| 4 | T2 | T0 | 16 | yes | 2 | 32->64 |

### Issues

- TOO_SHORT
- LINEAR_PATH
- CHAIN_INFLATION
- FEW_TUBES

---

## Level 6: Tower Block
**Difficulty Label:** Easy | **Computed Tier:** medium (35.9/100)

### Structural Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Tubes | 3 (0 empty) | ok |
| Total Pieces | 9 | |
| Fill Ratio | 75% | ok |
| Empty Slots | 3 | |
| Unique Values | 2, 4, 8, 16, 32 (5) | |
| Capacity Variance | 0.00 | !! |
| Total Value | 72 | |
| Theoretical Min | 2 | |
| Target | 2 | |

### Blocking Metrics

| Metric | Value |
|--------|-------|
| Avg Blocking Depth | 1.00 |
| Max Blocking Depth | 2 |
| Merge Pairs Accessible | 3 |
| Merge Pairs Blocked | 3 |
| Total Merge Pairs | 6 |

### Solution Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Optimal Moves | 5 | !! |
| Total Merges | 4 | |
| Chain Reactions (2+) | 3 | |
| Longest Chain | 2 | |
| Moves per Merge | 1.25 | |
| Moves per Chain | 1.67 | !! |

### Branching Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Avg Branching Factor | 1.40 | !! |
| Max Branching Factor | 6 | |
| Decision Point Ratio | 40.5% | |
| Dead-End Count | 11 | |
| Dead-End Ratio | 26.2% | ok |
| States Explored | 42 | |
| Solve Time | 0ms | |

### Composite Score

| Component | Score |
|-----------|-------|
| Structural | 50.5 |
| Solution | 26.9 |
| Strategic | 31.6 |
| **Composite** | **35.9** |
| **Tier** | **medium** |

### Solution Path

| Step | From | To | Value | Merged | Chain | Results |
|------|------|----|-------|--------|-------|---------|
| 1 | T0 | T1 | 2 | yes | 2 | 4->8 |
| 2 | T1 | T0 | 8 | yes | 1 | 16 |
| 3 | T1 | T2 | 2 | yes | 2 | 4->8 |
| 4 | T2 | T1 | 8 | no | 0 | - |
| 5 | T2 | T0 | 16 | yes | 2 | 32->64 |

### Issues

- TOO_SHORT
- LINEAR_PATH
- CHAIN_INFLATION
- UNIFORM_CAPACITY
- FEW_TUBES

---

## Level 7: Three Way
**Difficulty Label:** Easy | **Computed Tier:** medium (50.2/100)

### Structural Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Tubes | 4 (0 empty) | ok |
| Total Pieces | 12 | |
| Fill Ratio | 75% | ok |
| Empty Slots | 4 | |
| Unique Values | 2, 4, 8, 16, 64 (5) | |
| Capacity Variance | 0.00 | !! |
| Total Value | 132 | |
| Theoretical Min | 2 | |
| Target | 2 | |

### Blocking Metrics

| Metric | Value |
|--------|-------|
| Avg Blocking Depth | 1.80 |
| Max Blocking Depth | 3 |
| Merge Pairs Accessible | 1 |
| Merge Pairs Blocked | 9 |
| Total Merge Pairs | 10 |

### Solution Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Optimal Moves | 8 | ok |
| Total Merges | 8 | |
| Chain Reactions (2+) | 2 | |
| Longest Chain | 2 | |
| Moves per Merge | 1.00 | |
| Moves per Chain | 4.00 | ok |

### Branching Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Avg Branching Factor | 1.51 | !! |
| Max Branching Factor | 9 | |
| Decision Point Ratio | 39.0% | |
| Dead-End Count | 531 | |
| Dead-End Ratio | 31.1% | ok |
| States Explored | 1.710 | |
| Solve Time | 8ms | |

### Composite Score

| Component | Score |
|-----------|-------|
| Structural | 59 |
| Solution | 52.9 |
| Strategic | 41.5 |
| **Composite** | **50.2** |
| **Tier** | **medium** |

### Solution Path

| Step | From | To | Value | Merged | Chain | Results |
|------|------|----|-------|--------|-------|---------|
| 1 | T1 | T3 | 4 | yes | 1 | 8 |
| 2 | T0 | T1 | 2 | yes | 2 | 4->8 |
| 3 | T3 | T1 | 8 | yes | 1 | 16 |
| 4 | T0 | T1 | 16 | yes | 1 | 32 |
| 5 | T0 | T2 | 8 | yes | 2 | 16->32 |
| 6 | T2 | T1 | 32 | yes | 1 | 64 |
| 7 | T3 | T2 | 2 | yes | 1 | 4 |
| 8 | T1 | T3 | 64 | yes | 1 | 128 |

### Issues

- LINEAR_PATH
- UNIFORM_CAPACITY
- FEW_TUBES

---

## Level 8: Narrow Buffer
**Difficulty Label:** Easy | **Computed Tier:** medium (45.6/100)

### Structural Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Tubes | 4 (0 empty) | ok |
| Total Pieces | 9 | |
| Fill Ratio | 75% | ok |
| Empty Slots | 3 | |
| Unique Values | 2, 4, 8, 32, 64 (5) | |
| Capacity Variance | 0.00 | !! |
| Total Value | 132 | |
| Theoretical Min | 2 | |
| Target | 2 | |

### Blocking Metrics

| Metric | Value |
|--------|-------|
| Avg Blocking Depth | 2.40 |
| Max Blocking Depth | 4 |
| Merge Pairs Accessible | 1 |
| Merge Pairs Blocked | 4 |
| Total Merge Pairs | 5 |

### Solution Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Optimal Moves | 9 | ok |
| Total Merges | 4 | |
| Chain Reactions (2+) | 3 | |
| Longest Chain | 2 | |
| Moves per Merge | 2.25 | |
| Moves per Chain | 3.00 | ok |

### Branching Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Avg Branching Factor | 1.24 | !! |
| Max Branching Factor | 6 | |
| Decision Point Ratio | 32.1% | |
| Dead-End Count | 62 | |
| Dead-End Ratio | 33.7% | ok |
| States Explored | 184 | |
| Solve Time | 1ms | |

### Composite Score

| Component | Score |
|-----------|-------|
| Structural | 50.5 |
| Solution | 47.3 |
| Strategic | 40.7 |
| **Composite** | **45.6** |
| **Tier** | **medium** |

### Solution Path

| Step | From | To | Value | Merged | Chain | Results |
|------|------|----|-------|--------|-------|---------|
| 1 | T0 | T2 | 2 | no | 0 | - |
| 2 | T1 | T2 | 2 | yes | 1 | 4 |
| 3 | T0 | T1 | 4 | yes | 2 | 8->16 |
| 4 | T0 | T1 | 8 | no | 0 | - |
| 5 | T3 | T0 | 64 | no | 0 | - |
| 6 | T3 | T1 | 8 | yes | 2 | 16->32 |
| 7 | T1 | T0 | 32 | no | 0 | - |
| 8 | T2 | T1 | 4 | no | 0 | - |
| 9 | T2 | T0 | 32 | yes | 2 | 64->128 |

### Issues

- LINEAR_PATH
- UNIFORM_CAPACITY
- FEW_TUBES

---

## Level 9: Asymmetric
**Difficulty Label:** Easy | **Computed Tier:** medium (45.8/100)

### Structural Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Tubes | 4 (1 empty) | ok |
| Total Pieces | 10 | |
| Fill Ratio | 71% | ok |
| Empty Slots | 4 | |
| Unique Values | 2, 4, 8, 16, 32 (5) | |
| Capacity Variance | 0.75 | ok |
| Total Value | 96 | |
| Theoretical Min | 2 | |
| Target | 2 | |

### Blocking Metrics

| Metric | Value |
|--------|-------|
| Avg Blocking Depth | 2.83 |
| Max Blocking Depth | 4 |
| Merge Pairs Accessible | 1 |
| Merge Pairs Blocked | 5 |
| Total Merge Pairs | 6 |

### Solution Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Optimal Moves | 7 | !! |
| Total Merges | 5 | |
| Chain Reactions (2+) | 2 | |
| Longest Chain | 3 | |
| Moves per Merge | 1.40 | |
| Moves per Chain | 3.50 | ok |

### Branching Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Avg Branching Factor | 1.42 | !! |
| Max Branching Factor | 7 | |
| Decision Point Ratio | 36.0% | |
| Dead-End Count | 97 | |
| Dead-End Ratio | 28.6% | ok |
| States Explored | 339 | |
| Solve Time | 1ms | |

### Composite Score

| Component | Score |
|-----------|-------|
| Structural | 49.7 |
| Solution | 42.6 |
| Strategic | 45.2 |
| **Composite** | **45.8** |
| **Tier** | **medium** |

### Solution Path

| Step | From | To | Value | Merged | Chain | Results |
|------|------|----|-------|--------|-------|---------|
| 1 | T0 | T2 | 2 | yes | 1 | 4 |
| 2 | T0 | T2 | 4 | yes | 1 | 8 |
| 3 | T1 | T3 | 32 | no | 0 | - |
| 4 | T1 | T2 | 8 | yes | 2 | 16->32 |
| 5 | T1 | T0 | 4 | no | 0 | - |
| 6 | T2 | T3 | 32 | yes | 1 | 64 |
| 7 | T2 | T0 | 4 | yes | 3 | 8->16->32 |

### Issues

- TOO_SHORT
- LINEAR_PATH
- FEW_TUBES

---

## Level 10: Buried Treasure
**Difficulty Label:** Medium | **Computed Tier:** medium (39.2/100)

### Structural Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Tubes | 4 (1 empty) | ok |
| Total Pieces | 7 | |
| Fill Ratio | 58% | !! |
| Empty Slots | 5 | |
| Unique Values | 2, 4, 8 (3) | |
| Capacity Variance | 1.00 | ok |
| Total Value | 32 | |
| Theoretical Min | 1 | |
| Target | 1 | |

### Blocking Metrics

| Metric | Value |
|--------|-------|
| Avg Blocking Depth | 1.80 |
| Max Blocking Depth | 3 |
| Merge Pairs Accessible | 0 |
| Merge Pairs Blocked | 5 |
| Total Merge Pairs | 5 |

### Solution Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Optimal Moves | 7 | !! |
| Total Merges | 6 | |
| Chain Reactions (2+) | 0 | |
| Longest Chain | 1 | |
| Moves per Merge | 1.17 | |
| Moves per Chain | 7.00 | ok |

### Branching Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Avg Branching Factor | 1.07 | !! |
| Max Branching Factor | 6 | |
| Decision Point Ratio | 29.1% | |
| Dead-End Count | 89 | |
| Dead-End Ratio | 44.7% | ok |
| States Explored | 199 | |
| Solve Time | 1ms | |

### Composite Score

| Component | Score |
|-----------|-------|
| Structural | 41.8 |
| Solution | 40.4 |
| Strategic | 36.3 |
| **Composite** | **39.2** |
| **Tier** | **medium** |

### Solution Path

| Step | From | To | Value | Merged | Chain | Results |
|------|------|----|-------|--------|-------|---------|
| 1 | T1 | T3 | 8 | no | 0 | - |
| 2 | T1 | T2 | 4 | yes | 1 | 8 |
| 3 | T0 | T1 | 2 | yes | 1 | 4 |
| 4 | T0 | T2 | 8 | yes | 1 | 16 |
| 5 | T0 | T1 | 4 | yes | 1 | 8 |
| 6 | T1 | T3 | 8 | yes | 1 | 16 |
| 7 | T2 | T3 | 16 | yes | 1 | 32 |

### Issues

- TOO_SHORT
- TOO_EMPTY
- LINEAR_PATH
- FEW_TUBES

---

## Level 11: Deep Dig
**Difficulty Label:** Medium | **Computed Tier:** medium (39.2/100)

### Structural Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Tubes | 4 (1 empty) | ok |
| Total Pieces | 7 | |
| Fill Ratio | 70% | ok |
| Empty Slots | 3 | |
| Unique Values | 2, 4, 8 (3) | |
| Capacity Variance | 0.25 | ok |
| Total Value | 32 | |
| Theoretical Min | 1 | |
| Target | 1 | |

### Blocking Metrics

| Metric | Value |
|--------|-------|
| Avg Blocking Depth | 1.60 |
| Max Blocking Depth | 3 |
| Merge Pairs Accessible | 1 |
| Merge Pairs Blocked | 4 |
| Total Merge Pairs | 5 |

### Solution Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Optimal Moves | 5 | !! |
| Total Merges | 5 | |
| Chain Reactions (2+) | 1 | |
| Longest Chain | 2 | |
| Moves per Merge | 1.00 | |
| Moves per Chain | 5.00 | ok |

### Branching Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Avg Branching Factor | 1.52 | !! |
| Max Branching Factor | 5 | |
| Decision Point Ratio | 38.9% | |
| Dead-End Count | 11 | |
| Dead-End Ratio | 20.4% | ok |
| States Explored | 54 | |
| Solve Time | 0ms | |

### Composite Score

| Component | Score |
|-----------|-------|
| Structural | 54.8 |
| Solution | 28 |
| Strategic | 36 |
| **Composite** | **39.2** |
| **Tier** | **medium** |

### Solution Path

| Step | From | To | Value | Merged | Chain | Results |
|------|------|----|-------|--------|-------|---------|
| 1 | T1 | T2 | 4 | yes | 1 | 8 |
| 2 | T0 | T1 | 2 | yes | 1 | 4 |
| 3 | T0 | T2 | 8 | yes | 1 | 16 |
| 4 | T0 | T1 | 4 | yes | 2 | 8->16 |
| 5 | T1 | T2 | 16 | yes | 1 | 32 |

### Issues

- TOO_SHORT
- LINEAR_PATH
- FEW_TUBES

---

## Level 12: Triple Lock
**Difficulty Label:** Medium | **Computed Tier:** medium (51.3/100)

### Structural Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Tubes | 4 (0 empty) | ok |
| Total Pieces | 11 | |
| Fill Ratio | 73% | ok |
| Empty Slots | 4 | |
| Unique Values | 2, 4, 8, 16, 64 (5) | |
| Capacity Variance | 0.19 | ok |
| Total Value | 128 | |
| Theoretical Min | 1 | |
| Target | 1 | |

### Blocking Metrics

| Metric | Value |
|--------|-------|
| Avg Blocking Depth | 1.50 |
| Max Blocking Depth | 3 |
| Merge Pairs Accessible | 1 |
| Merge Pairs Blocked | 9 |
| Total Merge Pairs | 10 |

### Solution Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Optimal Moves | 5 | !! |
| Total Merges | 4 | |
| Chain Reactions (2+) | 4 | |
| Longest Chain | 3 | |
| Moves per Merge | 1.25 | |
| Moves per Chain | 1.25 | !! |

### Branching Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Avg Branching Factor | 2.10 | ok |
| Max Branching Factor | 7 | |
| Decision Point Ratio | 61.3% | |
| Dead-End Count | 66 | |
| Dead-End Ratio | 19.1% | ok |
| States Explored | 346 | |
| Solve Time | 1ms | |

### Composite Score

| Component | Score |
|-----------|-------|
| Structural | 66.1 |
| Solution | 35.6 |
| Strategic | 52.1 |
| **Composite** | **51.3** |
| **Tier** | **medium** |

### Solution Path

| Step | From | To | Value | Merged | Chain | Results |
|------|------|----|-------|--------|-------|---------|
| 1 | T3 | T2 | 8 | yes | 2 | 16->32 |
| 2 | T3 | T0 | 4 | yes | 2 | 8->16 |
| 3 | T0 | T2 | 16 | no | 0 | - |
| 4 | T0 | T1 | 2 | yes | 3 | 4->8->16 |
| 5 | T1 | T2 | 16 | yes | 3 | 32->64->128 |

### Issues

- TOO_SHORT
- CHAIN_INFLATION
- FEW_TUBES

---

## Level 13: Tight Quarters
**Difficulty Label:** Medium | **Computed Tier:** medium (36.8/100)

### Structural Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Tubes | 3 (0 empty) | ok |
| Total Pieces | 7 | |
| Fill Ratio | 78% | ok |
| Empty Slots | 2 | |
| Unique Values | 2, 4, 16, 32 (4) | |
| Capacity Variance | 0.00 | !! |
| Total Value | 64 | |
| Theoretical Min | 1 | |
| Target | 1 | |

### Blocking Metrics

| Metric | Value |
|--------|-------|
| Avg Blocking Depth | 1.50 |
| Max Blocking Depth | 3 |
| Merge Pairs Accessible | 1 |
| Merge Pairs Blocked | 3 |
| Total Merge Pairs | 4 |

### Solution Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Optimal Moves | 5 | !! |
| Total Merges | 3 | |
| Chain Reactions (2+) | 3 | |
| Longest Chain | 2 | |
| Moves per Merge | 1.67 | |
| Moves per Chain | 1.67 | !! |

### Branching Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Avg Branching Factor | 1.31 | !! |
| Max Branching Factor | 4 | |
| Decision Point Ratio | 23.1% | |
| Dead-End Count | 3 | |
| Dead-End Ratio | 23.1% | ok |
| States Explored | 13 | |
| Solve Time | 0ms | |

### Composite Score

| Component | Score |
|-----------|-------|
| Structural | 62.2 |
| Solution | 22.3 |
| Strategic | 28.5 |
| **Composite** | **36.8** |
| **Tier** | **medium** |

### Solution Path

| Step | From | To | Value | Merged | Chain | Results |
|------|------|----|-------|--------|-------|---------|
| 1 | T0 | T1 | 2 | yes | 2 | 4->8 |
| 2 | T2 | T1 | 4 | no | 0 | - |
| 3 | T0 | T2 | 16 | no | 0 | - |
| 4 | T0 | T1 | 4 | yes | 2 | 8->16 |
| 5 | T1 | T2 | 16 | yes | 2 | 32->64 |

### Issues

- TOO_SHORT
- LINEAR_PATH
- CHAIN_INFLATION
- UNIFORM_CAPACITY
- FEW_TUBES

---

## Level 14: Scattered Seeds
**Difficulty Label:** Medium | **Computed Tier:** medium (38.2/100)

### Structural Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Tubes | 3 (0 empty) | ok |
| Total Pieces | 7 | |
| Fill Ratio | 64% | !! |
| Empty Slots | 4 | |
| Unique Values | 2, 4, 8 (3) | |
| Capacity Variance | 0.22 | ok |
| Total Value | 32 | |
| Theoretical Min | 1 | |
| Target | 1 | |

### Blocking Metrics

| Metric | Value |
|--------|-------|
| Avg Blocking Depth | 1.60 |
| Max Blocking Depth | 3 |
| Merge Pairs Accessible | 1 |
| Merge Pairs Blocked | 4 |
| Total Merge Pairs | 5 |

### Solution Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Optimal Moves | 5 | !! |
| Total Merges | 5 | |
| Chain Reactions (2+) | 1 | |
| Longest Chain | 2 | |
| Moves per Merge | 1.00 | |
| Moves per Chain | 5.00 | ok |

### Branching Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Avg Branching Factor | 1.46 | !! |
| Max Branching Factor | 4 | |
| Decision Point Ratio | 46.4% | |
| Dead-End Count | 8 | |
| Dead-End Ratio | 28.6% | ok |
| States Explored | 28 | |
| Solve Time | 0ms | |

### Composite Score

| Component | Score |
|-----------|-------|
| Structural | 48 |
| Solution | 25.3 |
| Strategic | 40.5 |
| **Composite** | **38.2** |
| **Tier** | **medium** |

### Solution Path

| Step | From | To | Value | Merged | Chain | Results |
|------|------|----|-------|--------|-------|---------|
| 1 | T0 | T2 | 4 | yes | 1 | 8 |
| 2 | T1 | T0 | 2 | yes | 1 | 4 |
| 3 | T1 | T2 | 8 | yes | 1 | 16 |
| 4 | T1 | T0 | 4 | yes | 2 | 8->16 |
| 5 | T0 | T2 | 16 | yes | 1 | 32 |

### Issues

- TOO_SHORT
- TOO_EMPTY
- LINEAR_PATH
- FEW_TUBES

---

## Level 15: Inverted Stack
**Difficulty Label:** Medium | **Computed Tier:** easy (26.7/100)

### Structural Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Tubes | 3 (1 empty) | ok |
| Total Pieces | 5 | |
| Fill Ratio | 38% | !! |
| Empty Slots | 8 | |
| Unique Values | 2, 4, 8, 16 (4) | |
| Capacity Variance | 0.22 | ok |
| Total Value | 32 | |
| Theoretical Min | 1 | |
| Target | 1 | |

### Blocking Metrics

| Metric | Value |
|--------|-------|
| Avg Blocking Depth | 3.00 |
| Max Blocking Depth | 3 |
| Merge Pairs Accessible | 0 |
| Merge Pairs Blocked | 1 |
| Total Merge Pairs | 1 |

### Solution Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Optimal Moves | 5 | !! |
| Total Merges | 2 | |
| Chain Reactions (2+) | 1 | |
| Longest Chain | 3 | |
| Moves per Merge | 2.50 | |
| Moves per Chain | 5.00 | ok |

### Branching Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Avg Branching Factor | 1.45 | !! |
| Max Branching Factor | 3 | |
| Decision Point Ratio | 45.5% | |
| Dead-End Count | 2 | |
| Dead-End Ratio | 18.2% | ok |
| States Explored | 11 | |
| Solve Time | 1ms | |

### Composite Score

| Component | Score |
|-----------|-------|
| Structural | 10.6 |
| Solution | 21.7 |
| Strategic | 42.5 |
| **Composite** | **26.7** |
| **Tier** | **easy** |

### Solution Path

| Step | From | To | Value | Merged | Chain | Results |
|------|------|----|-------|--------|-------|---------|
| 1 | T0 | T2 | 16 | no | 0 | - |
| 2 | T0 | T2 | 8 | no | 0 | - |
| 3 | T0 | T2 | 4 | no | 0 | - |
| 4 | T0 | T1 | 2 | yes | 1 | 4 |
| 5 | T1 | T2 | 4 | yes | 3 | 8->16->32 |

### Issues

- TOO_SHORT
- TOO_EMPTY
- LINEAR_PATH
- FEW_TUBES

---

## Level 16: Narrow Escape
**Difficulty Label:** Medium | **Computed Tier:** medium (35.8/100)

### Structural Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Tubes | 4 (1 empty) | ok |
| Total Pieces | 7 | |
| Fill Ratio | 54% | !! |
| Empty Slots | 6 | |
| Unique Values | 2, 4, 8 (3) | |
| Capacity Variance | 0.19 | ok |
| Total Value | 32 | |
| Theoretical Min | 1 | |
| Target | 1 | |

### Blocking Metrics

| Metric | Value |
|--------|-------|
| Avg Blocking Depth | 1.80 |
| Max Blocking Depth | 3 |
| Merge Pairs Accessible | 1 |
| Merge Pairs Blocked | 4 |
| Total Merge Pairs | 5 |

### Solution Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Optimal Moves | 5 | !! |
| Total Merges | 4 | |
| Chain Reactions (2+) | 2 | |
| Longest Chain | 2 | |
| Moves per Merge | 1.25 | |
| Moves per Chain | 2.50 | ok |

### Branching Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Avg Branching Factor | 1.57 | !! |
| Max Branching Factor | 5 | |
| Decision Point Ratio | 45.7% | |
| Dead-End Count | 12 | |
| Dead-End Ratio | 26.1% | ok |
| States Explored | 46 | |
| Solve Time | 0ms | |

### Composite Score

| Component | Score |
|-----------|-------|
| Structural | 36 |
| Solution | 27.3 |
| Strategic | 42.1 |
| **Composite** | **35.8** |
| **Tier** | **medium** |

### Solution Path

| Step | From | To | Value | Merged | Chain | Results |
|------|------|----|-------|--------|-------|---------|
| 1 | T0 | T2 | 2 | no | 0 | - |
| 2 | T1 | T2 | 2 | yes | 2 | 4->8 |
| 3 | T0 | T2 | 8 | yes | 1 | 16 |
| 4 | T0 | T1 | 4 | yes | 2 | 8->16 |
| 5 | T1 | T2 | 16 | yes | 1 | 32 |

### Issues

- TOO_SHORT
- TOO_EMPTY
- LINEAR_PATH
- FEW_TUBES

---

## Level 17: Four Corners
**Difficulty Label:** Medium | **Computed Tier:** easy (34.3/100)

### Structural Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Tubes | 4 (1 empty) | ok |
| Total Pieces | 7 | |
| Fill Ratio | 47% | !! |
| Empty Slots | 8 | |
| Unique Values | 2, 4, 8 (3) | |
| Capacity Variance | 0.19 | ok |
| Total Value | 32 | |
| Theoretical Min | 1 | |
| Target | 1 | |

### Blocking Metrics

| Metric | Value |
|--------|-------|
| Avg Blocking Depth | 1.80 |
| Max Blocking Depth | 3 |
| Merge Pairs Accessible | 0 |
| Merge Pairs Blocked | 5 |
| Total Merge Pairs | 5 |

### Solution Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Optimal Moves | 7 | !! |
| Total Merges | 4 | |
| Chain Reactions (2+) | 2 | |
| Longest Chain | 2 | |
| Moves per Merge | 1.75 | |
| Moves per Chain | 3.50 | ok |

### Branching Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Avg Branching Factor | 1.19 | !! |
| Max Branching Factor | 6 | |
| Decision Point Ratio | 30.3% | |
| Dead-End Count | 76 | |
| Dead-End Ratio | 39.0% | ok |
| States Explored | 195 | |
| Solve Time | 1ms | |

### Composite Score

| Component | Score |
|-----------|-------|
| Structural | 25.2 |
| Solution | 40.3 |
| Strategic | 36.4 |
| **Composite** | **34.3** |
| **Tier** | **easy** |

### Solution Path

| Step | From | To | Value | Merged | Chain | Results |
|------|------|----|-------|--------|-------|---------|
| 1 | T0 | T2 | 2 | no | 0 | - |
| 2 | T0 | T1 | 8 | yes | 1 | 16 |
| 3 | T1 | T3 | 16 | no | 0 | - |
| 4 | T0 | T1 | 4 | yes | 1 | 8 |
| 5 | T1 | T3 | 8 | no | 0 | - |
| 6 | T1 | T2 | 2 | yes | 2 | 4->8 |
| 7 | T2 | T3 | 8 | yes | 2 | 16->32 |

### Issues

- TOO_SHORT
- TOO_EMPTY
- LINEAR_PATH
- FEW_TUBES

---

## Level 18: Deep Freeze
**Difficulty Label:** Medium | **Computed Tier:** easy (30/100)

### Structural Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Tubes | 3 (1 empty) | ok |
| Total Pieces | 5 | |
| Fill Ratio | 42% | !! |
| Empty Slots | 7 | |
| Unique Values | 2, 4, 8, 16 (4) | |
| Capacity Variance | 0.67 | ok |
| Total Value | 32 | |
| Theoretical Min | 1 | |
| Target | 1 | |

### Blocking Metrics

| Metric | Value |
|--------|-------|
| Avg Blocking Depth | 3.00 |
| Max Blocking Depth | 3 |
| Merge Pairs Accessible | 0 |
| Merge Pairs Blocked | 1 |
| Total Merge Pairs | 1 |

### Solution Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Optimal Moves | 6 | !! |
| Total Merges | 3 | |
| Chain Reactions (2+) | 1 | |
| Longest Chain | 2 | |
| Moves per Merge | 2.00 | |
| Moves per Chain | 6.00 | ok |

### Branching Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Avg Branching Factor | 1.41 | !! |
| Max Branching Factor | 4 | |
| Decision Point Ratio | 41.2% | |
| Dead-End Count | 4 | |
| Dead-End Ratio | 23.5% | ok |
| States Explored | 17 | |
| Solve Time | 0ms | |

### Composite Score

| Component | Score |
|-----------|-------|
| Structural | 15.7 |
| Solution | 26.9 |
| Strategic | 42.9 |
| **Composite** | **30** |
| **Tier** | **easy** |

### Solution Path

| Step | From | To | Value | Merged | Chain | Results |
|------|------|----|-------|--------|-------|---------|
| 1 | T0 | T2 | 16 | no | 0 | - |
| 2 | T0 | T2 | 8 | no | 0 | - |
| 3 | T0 | T2 | 4 | no | 0 | - |
| 4 | T0 | T1 | 2 | yes | 1 | 4 |
| 5 | T2 | T1 | 4 | yes | 1 | 8 |
| 6 | T1 | T2 | 8 | yes | 2 | 16->32 |

### Issues

- TOO_SHORT
- TOO_EMPTY
- LINEAR_PATH
- FEW_TUBES

---

## Level 19: Cross Traffic
**Difficulty Label:** Medium | **Computed Tier:** easy (32.7/100)

### Structural Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Tubes | 4 (1 empty) | ok |
| Total Pieces | 7 | |
| Fill Ratio | 47% | !! |
| Empty Slots | 8 | |
| Unique Values | 2, 4, 8 (3) | |
| Capacity Variance | 0.19 | ok |
| Total Value | 32 | |
| Theoretical Min | 1 | |
| Target | 1 | |

### Blocking Metrics

| Metric | Value |
|--------|-------|
| Avg Blocking Depth | 1.80 |
| Max Blocking Depth | 3 |
| Merge Pairs Accessible | 1 |
| Merge Pairs Blocked | 4 |
| Total Merge Pairs | 5 |

### Solution Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Optimal Moves | 4 | !! |
| Total Merges | 2 | |
| Chain Reactions (2+) | 2 | |
| Longest Chain | 3 | |
| Moves per Merge | 2.00 | |
| Moves per Chain | 2.00 | ok |

### Branching Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Avg Branching Factor | 1.68 | !! |
| Max Branching Factor | 7 | |
| Decision Point Ratio | 50.0% | |
| Dead-End Count | 10 | |
| Dead-End Ratio | 26.3% | ok |
| States Explored | 38 | |
| Solve Time | 0ms | |

### Composite Score

| Component | Score |
|-----------|-------|
| Structural | 25.2 |
| Solution | 23 |
| Strategic | 45.7 |
| **Composite** | **32.7** |
| **Tier** | **easy** |

### Solution Path

| Step | From | To | Value | Merged | Chain | Results |
|------|------|----|-------|--------|-------|---------|
| 1 | T1 | T0 | 2 | yes | 3 | 4->8->16 |
| 2 | T1 | T0 | 8 | no | 0 | - |
| 3 | T1 | T0 | 4 | no | 0 | - |
| 4 | T2 | T0 | 4 | yes | 3 | 8->16->32 |

### Issues

- TOO_SHORT
- TOO_EMPTY
- LINEAR_PATH
- FEW_TUBES

---

## Level 20: The Gauntlet
**Difficulty Label:** Medium | **Computed Tier:** easy (33.1/100)

### Structural Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Tubes | 4 (1 empty) | ok |
| Total Pieces | 7 | |
| Fill Ratio | 47% | !! |
| Empty Slots | 8 | |
| Unique Values | 2, 4, 8 (3) | |
| Capacity Variance | 0.19 | ok |
| Total Value | 32 | |
| Theoretical Min | 1 | |
| Target | 1 | |

### Blocking Metrics

| Metric | Value |
|--------|-------|
| Avg Blocking Depth | 1.40 |
| Max Blocking Depth | 3 |
| Merge Pairs Accessible | 1 |
| Merge Pairs Blocked | 4 |
| Total Merge Pairs | 5 |

### Solution Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Optimal Moves | 4 | !! |
| Total Merges | 4 | |
| Chain Reactions (2+) | 1 | |
| Longest Chain | 3 | |
| Moves per Merge | 1.00 | |
| Moves per Chain | 4.00 | ok |

### Branching Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Avg Branching Factor | 1.93 | !! |
| Max Branching Factor | 6 | |
| Decision Point Ratio | 48.1% | |
| Dead-End Count | 7 | |
| Dead-End Ratio | 25.9% | ok |
| States Explored | 27 | |
| Solve Time | 0ms | |

### Composite Score

| Component | Score |
|-----------|-------|
| Structural | 25.2 |
| Solution | 21.6 |
| Strategic | 47.7 |
| **Composite** | **33.1** |
| **Tier** | **easy** |

### Solution Path

| Step | From | To | Value | Merged | Chain | Results |
|------|------|----|-------|--------|-------|---------|
| 1 | T0 | T2 | 4 | yes | 1 | 8 |
| 2 | T0 | T2 | 8 | yes | 1 | 16 |
| 3 | T0 | T1 | 2 | yes | 3 | 4->8->16 |
| 4 | T1 | T2 | 16 | yes | 1 | 32 |

### Issues

- TOO_SHORT
- TOO_EMPTY
- LINEAR_PATH
- FEW_TUBES

---

## Level 21: Heavy Lifting
**Difficulty Label:** Hard | **Computed Tier:** easy (34.8/100)

### Structural Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Tubes | 4 (1 empty) | ok |
| Total Pieces | 8 | |
| Fill Ratio | 50% | !! |
| Empty Slots | 8 | |
| Unique Values | 2, 4, 8, 32 (4) | |
| Capacity Variance | 0.50 | ok |
| Total Value | 64 | |
| Theoretical Min | 1 | |
| Target | 1 | |

### Blocking Metrics

| Metric | Value |
|--------|-------|
| Avg Blocking Depth | 1.60 |
| Max Blocking Depth | 3 |
| Merge Pairs Accessible | 1 |
| Merge Pairs Blocked | 4 |
| Total Merge Pairs | 5 |

### Solution Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Optimal Moves | 6 | !! |
| Total Merges | 5 | |
| Chain Reactions (2+) | 1 | |
| Longest Chain | 3 | |
| Moves per Merge | 1.20 | |
| Moves per Chain | 6.00 | ok |

### Branching Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Avg Branching Factor | 1.39 | !! |
| Max Branching Factor | 7 | |
| Decision Point Ratio | 35.5% | |
| Dead-End Count | 27 | |
| Dead-End Ratio | 35.5% | ok |
| States Explored | 76 | |
| Solve Time | 0ms | |

### Composite Score

| Component | Score |
|-----------|-------|
| Structural | 30.8 |
| Solution | 32.9 |
| Strategic | 39.3 |
| **Composite** | **34.8** |
| **Tier** | **easy** |

### Solution Path

| Step | From | To | Value | Merged | Chain | Results |
|------|------|----|-------|--------|-------|---------|
| 1 | T0 | T2 | 4 | yes | 1 | 8 |
| 2 | T0 | T2 | 8 | yes | 1 | 16 |
| 3 | T0 | T3 | 32 | no | 0 | - |
| 4 | T0 | T1 | 2 | yes | 3 | 4->8->16 |
| 5 | T1 | T2 | 16 | yes | 1 | 32 |
| 6 | T2 | T3 | 32 | yes | 1 | 64 |

### Issues

- TOO_SHORT
- TOO_EMPTY
- LINEAR_PATH
- FEW_TUBES

---

## Level 22: Locked Vault
**Difficulty Label:** Hard | **Computed Tier:** medium (38.9/100)

### Structural Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Tubes | 4 (1 empty) | ok |
| Total Pieces | 8 | |
| Fill Ratio | 50% | !! |
| Empty Slots | 8 | |
| Unique Values | 2, 4, 8, 32 (4) | |
| Capacity Variance | 0.50 | ok |
| Total Value | 64 | |
| Theoretical Min | 1 | |
| Target | 1 | |

### Blocking Metrics

| Metric | Value |
|--------|-------|
| Avg Blocking Depth | 2.40 |
| Max Blocking Depth | 4 |
| Merge Pairs Accessible | 1 |
| Merge Pairs Blocked | 4 |
| Total Merge Pairs | 5 |

### Solution Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Optimal Moves | 6 | !! |
| Total Merges | 3 | |
| Chain Reactions (2+) | 2 | |
| Longest Chain | 3 | |
| Moves per Merge | 2.00 | |
| Moves per Chain | 3.00 | ok |

### Branching Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Avg Branching Factor | 1.68 | !! |
| Max Branching Factor | 6 | |
| Decision Point Ratio | 41.1% | |
| Dead-End Count | 25 | |
| Dead-End Ratio | 27.8% | ok |
| States Explored | 90 | |
| Solve Time | 0ms | |

### Composite Score

| Component | Score |
|-----------|-------|
| Structural | 30.8 |
| Solution | 33.6 |
| Strategic | 49 |
| **Composite** | **38.9** |
| **Tier** | **medium** |

### Solution Path

| Step | From | To | Value | Merged | Chain | Results |
|------|------|----|-------|--------|-------|---------|
| 1 | T0 | T1 | 2 | yes | 3 | 4->8->16 |
| 2 | T0 | T3 | 32 | no | 0 | - |
| 3 | T0 | T1 | 8 | no | 0 | - |
| 4 | T0 | T1 | 4 | no | 0 | - |
| 5 | T2 | T1 | 4 | yes | 3 | 8->16->32 |
| 6 | T1 | T3 | 32 | yes | 1 | 64 |

### Issues

- TOO_SHORT
- TOO_EMPTY
- LINEAR_PATH
- FEW_TUBES

---

## Level 23: Triple Threat
**Difficulty Label:** Hard | **Computed Tier:** medium (48/100)

### Structural Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Tubes | 5 (1 empty) | ok |
| Total Pieces | 12 | |
| Fill Ratio | 63% | !! |
| Empty Slots | 7 | |
| Unique Values | 2, 4, 8, 16 (4) | |
| Capacity Variance | 0.16 | ok |
| Total Value | 64 | |
| Theoretical Min | 1 | |
| Target | 1 | |

### Blocking Metrics

| Metric | Value |
|--------|-------|
| Avg Blocking Depth | 1.93 |
| Max Blocking Depth | 3 |
| Merge Pairs Accessible | 3 |
| Merge Pairs Blocked | 12 |
| Total Merge Pairs | 15 |

### Solution Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Optimal Moves | 8 | ok |
| Total Merges | 6 | |
| Chain Reactions (2+) | 4 | |
| Longest Chain | 3 | |
| Moves per Merge | 1.33 | |
| Moves per Chain | 2.00 | ok |

### Branching Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Avg Branching Factor | 1.21 | !! |
| Max Branching Factor | 11 | |
| Decision Point Ratio | 27.8% | |
| Dead-End Count | 1149 | |
| Dead-End Ratio | 44.7% | ok |
| States Explored | 2.569 | |
| Solve Time | 17ms | |

### Composite Score

| Component | Score |
|-----------|-------|
| Structural | 52.9 |
| Solution | 54.5 |
| Strategic | 39.4 |
| **Composite** | **48** |
| **Tier** | **medium** |

### Solution Path

| Step | From | To | Value | Merged | Chain | Results |
|------|------|----|-------|--------|-------|---------|
| 1 | T2 | T1 | 2 | yes | 3 | 4->8->16 |
| 2 | T0 | T1 | 4 | no | 0 | - |
| 3 | T2 | T0 | 8 | yes | 2 | 16->32 |
| 4 | T0 | T4 | 32 | no | 0 | - |
| 5 | T0 | T3 | 2 | yes | 2 | 4->8 |
| 6 | T2 | T1 | 4 | yes | 1 | 8 |
| 7 | T3 | T1 | 8 | yes | 2 | 16->32 |
| 8 | T1 | T4 | 32 | yes | 1 | 64 |

### Issues

- TOO_EMPTY
- LINEAR_PATH
- FEW_TUBES

---

## Level 24: Cascade Chaos
**Difficulty Label:** Hard | **Computed Tier:** medium (43.5/100)

### Structural Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Tubes | 4 (1 empty) | ok |
| Total Pieces | 9 | |
| Fill Ratio | 53% | !! |
| Empty Slots | 8 | |
| Unique Values | 2, 4, 8, 16 (4) | |
| Capacity Variance | 0.69 | ok |
| Total Value | 64 | |
| Theoretical Min | 1 | |
| Target | 1 | |

### Blocking Metrics

| Metric | Value |
|--------|-------|
| Avg Blocking Depth | 2.67 |
| Max Blocking Depth | 4 |
| Merge Pairs Accessible | 0 |
| Merge Pairs Blocked | 6 |
| Total Merge Pairs | 6 |

### Solution Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Optimal Moves | 8 | ok |
| Total Merges | 4 | |
| Chain Reactions (2+) | 3 | |
| Longest Chain | 3 | |
| Moves per Merge | 2.00 | |
| Moves per Chain | 2.67 | ok |

### Branching Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Avg Branching Factor | 1.42 | !! |
| Max Branching Factor | 7 | |
| Decision Point Ratio | 35.9% | |
| Dead-End Count | 147 | |
| Dead-End Ratio | 33.4% | ok |
| States Explored | 440 | |
| Solve Time | 1ms | |

### Composite Score

| Component | Score |
|-----------|-------|
| Structural | 35.7 |
| Solution | 47.3 |
| Strategic | 46.4 |
| **Composite** | **43.5** |
| **Tier** | **medium** |

### Solution Path

| Step | From | To | Value | Merged | Chain | Results |
|------|------|----|-------|--------|-------|---------|
| 1 | T0 | T3 | 16 | no | 0 | - |
| 2 | T0 | T3 | 8 | no | 0 | - |
| 3 | T0 | T1 | 2 | yes | 2 | 4->8 |
| 4 | T0 | T1 | 4 | no | 0 | - |
| 5 | T2 | T1 | 4 | yes | 3 | 8->16->32 |
| 6 | T1 | T0 | 32 | no | 0 | - |
| 7 | T1 | T3 | 8 | yes | 2 | 16->32 |
| 8 | T0 | T3 | 32 | yes | 1 | 64 |

### Issues

- TOO_EMPTY
- LINEAR_PATH
- FEW_TUBES

---

## Level 25: Maze Runner
**Difficulty Label:** Hard | **Computed Tier:** medium (40.9/100)

### Structural Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Tubes | 4 (1 empty) | ok |
| Total Pieces | 8 | |
| Fill Ratio | 53% | !! |
| Empty Slots | 7 | |
| Unique Values | 2, 4, 8, 32 (4) | |
| Capacity Variance | 0.19 | ok |
| Total Value | 64 | |
| Theoretical Min | 1 | |
| Target | 1 | |

### Blocking Metrics

| Metric | Value |
|--------|-------|
| Avg Blocking Depth | 1.80 |
| Max Blocking Depth | 4 |
| Merge Pairs Accessible | 1 |
| Merge Pairs Blocked | 4 |
| Total Merge Pairs | 5 |

### Solution Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Optimal Moves | 6 | !! |
| Total Merges | 5 | |
| Chain Reactions (2+) | 1 | |
| Longest Chain | 3 | |
| Moves per Merge | 1.20 | |
| Moves per Chain | 6.00 | ok |

### Branching Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Avg Branching Factor | 1.88 | !! |
| Max Branching Factor | 7 | |
| Decision Point Ratio | 53.4% | |
| Dead-End Count | 16 | |
| Dead-End Ratio | 21.9% | ok |
| States Explored | 73 | |
| Solve Time | 0ms | |

### Composite Score

| Component | Score |
|-----------|-------|
| Structural | 36.1 |
| Solution | 32.8 |
| Strategic | 50.5 |
| **Composite** | **40.9** |
| **Tier** | **medium** |

### Solution Path

| Step | From | To | Value | Merged | Chain | Results |
|------|------|----|-------|--------|-------|---------|
| 1 | T0 | T2 | 4 | yes | 1 | 8 |
| 2 | T0 | T3 | 32 | no | 0 | - |
| 3 | T0 | T2 | 8 | yes | 1 | 16 |
| 4 | T0 | T1 | 2 | yes | 3 | 4->8->16 |
| 5 | T1 | T2 | 16 | yes | 1 | 32 |
| 6 | T2 | T3 | 32 | yes | 1 | 64 |

### Issues

- TOO_SHORT
- TOO_EMPTY
- LINEAR_PATH
- FEW_TUBES

---

## Level 26: Pressure Point
**Difficulty Label:** Hard | **Computed Tier:** medium (38.6/100)

### Structural Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Tubes | 4 (1 empty) | ok |
| Total Pieces | 8 | |
| Fill Ratio | 50% | !! |
| Empty Slots | 8 | |
| Unique Values | 2, 4, 8, 32 (4) | |
| Capacity Variance | 0.50 | ok |
| Total Value | 64 | |
| Theoretical Min | 1 | |
| Target | 1 | |

### Blocking Metrics

| Metric | Value |
|--------|-------|
| Avg Blocking Depth | 2.60 |
| Max Blocking Depth | 4 |
| Merge Pairs Accessible | 0 |
| Merge Pairs Blocked | 5 |
| Total Merge Pairs | 5 |

### Solution Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Optimal Moves | 6 | !! |
| Total Merges | 4 | |
| Chain Reactions (2+) | 3 | |
| Longest Chain | 2 | |
| Moves per Merge | 1.50 | |
| Moves per Chain | 2.00 | ok |

### Branching Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Avg Branching Factor | 1.39 | !! |
| Max Branching Factor | 8 | |
| Decision Point Ratio | 38.2% | |
| Dead-End Count | 44 | |
| Dead-End Ratio | 35.8% | ok |
| States Explored | 123 | |
| Solve Time | 1ms | |

### Composite Score

| Component | Score |
|-----------|-------|
| Structural | 30.8 |
| Solution | 34.9 |
| Strategic | 47.1 |
| **Composite** | **38.6** |
| **Tier** | **medium** |

### Solution Path

| Step | From | To | Value | Merged | Chain | Results |
|------|------|----|-------|--------|-------|---------|
| 1 | T0 | T3 | 32 | no | 0 | - |
| 2 | T0 | T1 | 2 | yes | 1 | 4 |
| 3 | T2 | T1 | 4 | yes | 2 | 8->16 |
| 4 | T1 | T3 | 16 | no | 0 | - |
| 5 | T1 | T0 | 4 | yes | 2 | 8->16 |
| 6 | T0 | T3 | 16 | yes | 2 | 32->64 |

### Issues

- TOO_SHORT
- TOO_EMPTY
- LINEAR_PATH
- FEW_TUBES

---

## Level 27: Deep Dive
**Difficulty Label:** Hard | **Computed Tier:** medium (39/100)

### Structural Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Tubes | 4 (1 empty) | ok |
| Total Pieces | 8 | |
| Fill Ratio | 50% | !! |
| Empty Slots | 8 | |
| Unique Values | 2, 4, 8, 32 (4) | |
| Capacity Variance | 0.50 | ok |
| Total Value | 64 | |
| Theoretical Min | 1 | |
| Target | 1 | |

### Blocking Metrics

| Metric | Value |
|--------|-------|
| Avg Blocking Depth | 2.20 |
| Max Blocking Depth | 3 |
| Merge Pairs Accessible | 0 |
| Merge Pairs Blocked | 5 |
| Total Merge Pairs | 5 |

### Solution Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Optimal Moves | 7 | !! |
| Total Merges | 3 | |
| Chain Reactions (2+) | 3 | |
| Longest Chain | 3 | |
| Moves per Merge | 2.33 | |
| Moves per Chain | 2.33 | ok |

### Branching Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Avg Branching Factor | 1.53 | !! |
| Max Branching Factor | 7 | |
| Decision Point Ratio | 38.7% | |
| Dead-End Count | 47 | |
| Dead-End Ratio | 34.3% | ok |
| States Explored | 137 | |
| Solve Time | 0ms | |

### Composite Score

| Component | Score |
|-----------|-------|
| Structural | 30.8 |
| Solution | 38.9 |
| Strategic | 45.3 |
| **Composite** | **39** |
| **Tier** | **medium** |

### Solution Path

| Step | From | To | Value | Merged | Chain | Results |
|------|------|----|-------|--------|-------|---------|
| 1 | T0 | T3 | 8 | no | 0 | - |
| 2 | T2 | T3 | 4 | no | 0 | - |
| 3 | T0 | T2 | 32 | no | 0 | - |
| 4 | T0 | T3 | 4 | yes | 2 | 8->16 |
| 5 | T0 | T1 | 2 | yes | 3 | 4->8->16 |
| 6 | T1 | T2 | 16 | no | 0 | - |
| 7 | T3 | T2 | 16 | yes | 2 | 32->64 |

### Issues

- TOO_SHORT
- TOO_EMPTY
- LINEAR_PATH
- FEW_TUBES

---

## Level 28: Bottleneck
**Difficulty Label:** Hard | **Computed Tier:** medium (48.6/100)

### Structural Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Tubes | 5 (0 empty) | ok |
| Total Pieces | 12 | |
| Fill Ratio | 71% | ok |
| Empty Slots | 5 | |
| Unique Values | 2, 4, 8, 16 (4) | |
| Capacity Variance | 0.24 | ok |
| Total Value | 64 | |
| Theoretical Min | 1 | |
| Target | 1 | |

### Blocking Metrics

| Metric | Value |
|--------|-------|
| Avg Blocking Depth | 1.47 |
| Max Blocking Depth | 4 |
| Merge Pairs Accessible | 6 |
| Merge Pairs Blocked | 9 |
| Total Merge Pairs | 15 |

### Solution Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Optimal Moves | 7 | !! |
| Total Merges | 6 | |
| Chain Reactions (2+) | 4 | |
| Longest Chain | 3 | |
| Moves per Merge | 1.17 | |
| Moves per Chain | 1.75 | !! |

### Branching Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Avg Branching Factor | 1.47 | !! |
| Max Branching Factor | 9 | |
| Decision Point Ratio | 37.3% | |
| Dead-End Count | 142 | |
| Dead-End Ratio | 31.7% | ok |
| States Explored | 448 | |
| Solve Time | 2ms | |

### Composite Score

| Component | Score |
|-----------|-------|
| Structural | 63.8 |
| Solution | 43.8 |
| Strategic | 41 |
| **Composite** | **48.6** |
| **Tier** | **medium** |

### Solution Path

| Step | From | To | Value | Merged | Chain | Results |
|------|------|----|-------|--------|-------|---------|
| 1 | T0 | T3 | 2 | yes | 3 | 4->8->16 |
| 2 | T0 | T3 | 16 | yes | 1 | 32 |
| 3 | T0 | T2 | 4 | yes | 2 | 8->16 |
| 4 | T1 | T4 | 2 | yes | 1 | 4 |
| 5 | T2 | T3 | 16 | no | 0 | - |
| 6 | T4 | T1 | 4 | yes | 2 | 8->16 |
| 7 | T1 | T3 | 16 | yes | 2 | 32->64 |

### Issues

- TOO_SHORT
- LINEAR_PATH
- CHAIN_INFLATION
- FEW_TUBES

---

## Level 29: Five Fingers
**Difficulty Label:** Hard | **Computed Tier:** medium (48/100)

### Structural Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Tubes | 5 (0 empty) | ok |
| Total Pieces | 12 | |
| Fill Ratio | 63% | !! |
| Empty Slots | 7 | |
| Unique Values | 2, 4, 8, 16 (4) | |
| Capacity Variance | 0.16 | ok |
| Total Value | 64 | |
| Theoretical Min | 1 | |
| Target | 1 | |

### Blocking Metrics

| Metric | Value |
|--------|-------|
| Avg Blocking Depth | 1.53 |
| Max Blocking Depth | 3 |
| Merge Pairs Accessible | 4 |
| Merge Pairs Blocked | 11 |
| Total Merge Pairs | 15 |

### Solution Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Optimal Moves | 8 | ok |
| Total Merges | 6 | |
| Chain Reactions (2+) | 3 | |
| Longest Chain | 3 | |
| Moves per Merge | 1.33 | |
| Moves per Chain | 2.67 | ok |

### Branching Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Avg Branching Factor | 1.34 | !! |
| Max Branching Factor | 14 | |
| Decision Point Ratio | 33.2% | |
| Dead-End Count | 922 | |
| Dead-End Ratio | 41.6% | ok |
| States Explored | 2.217 | |
| Solve Time | 13ms | |

### Composite Score

| Component | Score |
|-----------|-------|
| Structural | 52.9 |
| Solution | 53.9 |
| Strategic | 39.9 |
| **Composite** | **48** |
| **Tier** | **medium** |

### Solution Path

| Step | From | To | Value | Merged | Chain | Results |
|------|------|----|-------|--------|-------|---------|
| 1 | T0 | T3 | 4 | yes | 2 | 8->16 |
| 2 | T0 | T3 | 16 | yes | 1 | 32 |
| 3 | T0 | T1 | 2 | yes | 3 | 4->8->16 |
| 4 | T1 | T3 | 16 | no | 0 | - |
| 5 | T2 | T4 | 2 | yes | 1 | 4 |
| 6 | T2 | T3 | 8 | no | 0 | - |
| 7 | T2 | T4 | 4 | yes | 1 | 8 |
| 8 | T4 | T3 | 8 | yes | 3 | 16->32->64 |

### Issues

- TOO_EMPTY
- LINEAR_PATH
- FEW_TUBES

---

## Level 30: Narrow Corridor
**Difficulty Label:** Hard | **Computed Tier:** medium (40.6/100)

### Structural Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Tubes | 4 (1 empty) | ok |
| Total Pieces | 8 | |
| Fill Ratio | 62% | !! |
| Empty Slots | 5 | |
| Unique Values | 2, 4, 8, 32 (4) | |
| Capacity Variance | 0.19 | ok |
| Total Value | 64 | |
| Theoretical Min | 1 | |
| Target | 1 | |

### Blocking Metrics

| Metric | Value |
|--------|-------|
| Avg Blocking Depth | 1.60 |
| Max Blocking Depth | 2 |
| Merge Pairs Accessible | 1 |
| Merge Pairs Blocked | 4 |
| Total Merge Pairs | 5 |

### Solution Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Optimal Moves | 7 | !! |
| Total Merges | 4 | |
| Chain Reactions (2+) | 2 | |
| Longest Chain | 3 | |
| Moves per Merge | 1.75 | |
| Moves per Chain | 3.50 | ok |

### Branching Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Avg Branching Factor | 1.30 | !! |
| Max Branching Factor | 6 | |
| Decision Point Ratio | 35.1% | |
| Dead-End Count | 70 | |
| Dead-End Ratio | 36.6% | ok |
| States Explored | 191 | |
| Solve Time | 1ms | |

### Composite Score

| Component | Score |
|-----------|-------|
| Structural | 47.3 |
| Solution | 40.3 |
| Strategic | 35.7 |
| **Composite** | **40.6** |
| **Tier** | **medium** |

### Solution Path

| Step | From | To | Value | Merged | Chain | Results |
|------|------|----|-------|--------|-------|---------|
| 1 | T0 | T1 | 4 | yes | 2 | 8->16 |
| 2 | T0 | T3 | 32 | no | 0 | - |
| 3 | T1 | T3 | 16 | no | 0 | - |
| 4 | T2 | T0 | 2 | yes | 1 | 4 |
| 5 | T2 | T3 | 8 | no | 0 | - |
| 6 | T0 | T2 | 4 | yes | 1 | 8 |
| 7 | T2 | T3 | 8 | yes | 3 | 16->32->64 |

### Issues

- TOO_SHORT
- TOO_EMPTY
- LINEAR_PATH
- FEW_TUBES

---

## Level 31: Tower Defense
**Difficulty Label:** Hard | **Computed Tier:** hard (66.4/100)

### Structural Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Tubes | 5 (1 empty) | ok |
| Total Pieces | 16 | |
| Fill Ratio | 80% | ok |
| Empty Slots | 4 | |
| Unique Values | 2, 4, 8, 16, 32 (5) | |
| Capacity Variance | 0.40 | ok |
| Total Value | 128 | |
| Theoretical Min | 1 | |
| Target | 1 | |

### Blocking Metrics

| Metric | Value |
|--------|-------|
| Avg Blocking Depth | 3.27 |
| Max Blocking Depth | 6 |
| Merge Pairs Accessible | 1 |
| Merge Pairs Blocked | 21 |
| Total Merge Pairs | 22 |

### Solution Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Optimal Moves | 9 | ok |
| Total Merges | 8 | |
| Chain Reactions (2+) | 4 | |
| Longest Chain | 3 | |
| Moves per Merge | 1.13 | |
| Moves per Chain | 2.25 | ok |

### Branching Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Avg Branching Factor | 1.72 | !! |
| Max Branching Factor | 9 | |
| Decision Point Ratio | 46.1% | |
| Dead-End Count | 1067 | |
| Dead-End Ratio | 28.3% | ok |
| States Explored | 3.769 | |
| Solve Time | 24ms | |

### Composite Score

| Component | Score |
|-----------|-------|
| Structural | 81.4 |
| Solution | 59.7 |
| Strategic | 60.1 |
| **Composite** | **66.4** |
| **Tier** | **hard** |

### Solution Path

| Step | From | To | Value | Merged | Chain | Results |
|------|------|----|-------|--------|-------|---------|
| 1 | T2 | T1 | 2 | yes | 3 | 4->8->16 |
| 2 | T0 | T1 | 16 | yes | 1 | 32 |
| 3 | T0 | T1 | 32 | yes | 1 | 64 |
| 4 | T0 | T1 | 8 | no | 0 | - |
| 5 | T3 | T1 | 8 | yes | 1 | 16 |
| 6 | T0 | T3 | 2 | yes | 3 | 4->8->16 |
| 7 | T0 | T2 | 4 | yes | 3 | 8->16->32 |
| 8 | T3 | T1 | 16 | yes | 1 | 32 |
| 9 | T2 | T1 | 32 | yes | 2 | 64->128 |

### Issues

- LINEAR_PATH
- FEW_TUBES

---

## Level 32: Minefield
**Difficulty Label:** Hard | **Computed Tier:** hard (68.1/100)

### Structural Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Tubes | 6 (0 empty) | ok |
| Total Pieces | 18 | |
| Fill Ratio | 78% | ok |
| Empty Slots | 5 | |
| Unique Values | 2, 4, 8, 16, 32 (5) | |
| Capacity Variance | 0.14 | ok |
| Total Value | 128 | |
| Theoretical Min | 1 | |
| Target | 1 | |

### Blocking Metrics

| Metric | Value |
|--------|-------|
| Avg Blocking Depth | 2.06 |
| Max Blocking Depth | 5 |
| Merge Pairs Accessible | 10 |
| Merge Pairs Blocked | 22 |
| Total Merge Pairs | 32 |

### Solution Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Optimal Moves | 11 | ok |
| Total Merges | 10 | |
| Chain Reactions (2+) | 6 | |
| Longest Chain | 3 | |
| Moves per Merge | 1.10 | |
| Moves per Chain | 1.83 | !! |

### Branching Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Avg Branching Factor | 1.31 | !! |
| Max Branching Factor | 18 | |
| Decision Point Ratio | 31.4% | |
| Dead-End Count | 82854 | |
| Dead-End Ratio | 45.1% | ok |
| States Explored | 183.571 | |
| Solve Time | 1975ms | |

### Composite Score

| Component | Score |
|-----------|-------|
| Structural | 81.1 |
| Solution | 82.9 |
| Strategic | 47.3 |
| **Composite** | **68.1** |
| **Tier** | **hard** |

### Solution Path

| Step | From | To | Value | Merged | Chain | Results |
|------|------|----|-------|--------|-------|---------|
| 1 | T1 | T2 | 2 | yes | 1 | 4 |
| 2 | T5 | T4 | 2 | yes | 2 | 4->8 |
| 3 | T1 | T4 | 8 | yes | 2 | 16->32 |
| 4 | T0 | T4 | 32 | yes | 1 | 64 |
| 5 | T0 | T2 | 4 | yes | 2 | 8->16 |
| 6 | T2 | T4 | 16 | no | 0 | - |
| 7 | T2 | T1 | 4 | yes | 1 | 8 |
| 8 | T0 | T1 | 8 | yes | 2 | 16->32 |
| 9 | T0 | T3 | 2 | yes | 3 | 4->8->16 |
| 10 | T3 | T4 | 16 | yes | 1 | 32 |
| 11 | T1 | T4 | 32 | yes | 2 | 64->128 |

### Issues

- LINEAR_PATH
- CHAIN_INFLATION

---

## Level 33: Deadlock
**Difficulty Label:** Hard | **Computed Tier:** hard (66.9/100)

### Structural Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Tubes | 5 (1 empty) | ok |
| Total Pieces | 16 | |
| Fill Ratio | 80% | ok |
| Empty Slots | 4 | |
| Unique Values | 2, 4, 8, 16, 32 (5) | |
| Capacity Variance | 0.40 | ok |
| Total Value | 128 | |
| Theoretical Min | 1 | |
| Target | 1 | |

### Blocking Metrics

| Metric | Value |
|--------|-------|
| Avg Blocking Depth | 3.41 |
| Max Blocking Depth | 7 |
| Merge Pairs Accessible | 1 |
| Merge Pairs Blocked | 21 |
| Total Merge Pairs | 22 |

### Solution Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Optimal Moves | 9 | ok |
| Total Merges | 7 | |
| Chain Reactions (2+) | 5 | |
| Longest Chain | 3 | |
| Moves per Merge | 1.29 | |
| Moves per Chain | 1.80 | !! |

### Branching Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Avg Branching Factor | 1.64 | !! |
| Max Branching Factor | 10 | |
| Decision Point Ratio | 43.9% | |
| Dead-End Count | 1494 | |
| Dead-End Ratio | 27.8% | ok |
| States Explored | 5.383 | |
| Solve Time | 28ms | |

### Composite Score

| Component | Score |
|-----------|-------|
| Structural | 81.4 |
| Solution | 61.2 |
| Strategic | 60.5 |
| **Composite** | **66.9** |
| **Tier** | **hard** |

### Solution Path

| Step | From | To | Value | Merged | Chain | Results |
|------|------|----|-------|--------|-------|---------|
| 1 | T1 | T2 | 2 | yes | 3 | 4->8->16 |
| 2 | T0 | T2 | 16 | yes | 1 | 32 |
| 3 | T0 | T2 | 32 | yes | 1 | 64 |
| 4 | T3 | T1 | 8 | yes | 2 | 16->32 |
| 5 | T0 | T3 | 2 | yes | 3 | 4->8->16 |
| 6 | T1 | T2 | 32 | no | 0 | - |
| 7 | T1 | T0 | 4 | yes | 2 | 8->16 |
| 8 | T0 | T2 | 16 | no | 0 | - |
| 9 | T3 | T2 | 16 | yes | 3 | 32->64->128 |

### Issues

- LINEAR_PATH
- CHAIN_INFLATION
- FEW_TUBES

---

## Level 34: Chain Gang
**Difficulty Label:** Hard | **Computed Tier:** hard (74.4/100)

### Structural Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Tubes | 6 (0 empty) | ok |
| Total Pieces | 19 | |
| Fill Ratio | 83% | ok |
| Empty Slots | 4 | |
| Unique Values | 2, 4, 8, 16, 32 (5) | |
| Capacity Variance | 0.14 | ok |
| Total Value | 128 | |
| Theoretical Min | 1 | |
| Target | 1 | |

### Blocking Metrics

| Metric | Value |
|--------|-------|
| Avg Blocking Depth | 2.41 |
| Max Blocking Depth | 6 |
| Merge Pairs Accessible | 7 |
| Merge Pairs Blocked | 32 |
| Total Merge Pairs | 39 |

### Solution Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Optimal Moves | 13 | ok |
| Total Merges | 9 | |
| Chain Reactions (2+) | 6 | |
| Longest Chain | 3 | |
| Moves per Merge | 1.44 | |
| Moves per Chain | 2.17 | ok |

### Branching Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Avg Branching Factor | 1.23 | !! |
| Max Branching Factor | 16 | |
| Decision Point Ratio | 30.2% | |
| Dead-End Count | 169602 | |
| Dead-End Ratio | 46.3% | ok |
| States Explored | 366.264 | |
| Solve Time | 3751ms | |

### Composite Score

| Component | Score |
|-----------|-------|
| Structural | 88.9 |
| Solution | 92.9 |
| Strategic | 49.8 |
| **Composite** | **74.4** |
| **Tier** | **hard** |

### Solution Path

| Step | From | To | Value | Merged | Chain | Results |
|------|------|----|-------|--------|-------|---------|
| 1 | T1 | T2 | 2 | yes | 1 | 4 |
| 2 | T1 | T2 | 4 | yes | 2 | 8->16 |
| 3 | T0 | T2 | 8 | no | 0 | - |
| 4 | T4 | T2 | 8 | yes | 2 | 16->32 |
| 5 | T5 | T3 | 2 | yes | 3 | 4->8->16 |
| 6 | T0 | T3 | 16 | yes | 1 | 32 |
| 7 | T1 | T3 | 32 | yes | 1 | 64 |
| 8 | T0 | T1 | 4 | no | 0 | - |
| 9 | T0 | T4 | 2 | yes | 3 | 4->8->16 |
| 10 | T2 | T3 | 32 | no | 0 | - |
| 11 | T2 | T1 | 4 | yes | 2 | 8->16 |
| 12 | T1 | T3 | 16 | no | 0 | - |
| 13 | T4 | T3 | 16 | yes | 3 | 32->64->128 |

### Issues

- LINEAR_PATH

---

## Level 35: Switchback
**Difficulty Label:** Hard | **Computed Tier:** hard (68.1/100)

### Structural Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Tubes | 5 (1 empty) | ok |
| Total Pieces | 16 | |
| Fill Ratio | 80% | ok |
| Empty Slots | 4 | |
| Unique Values | 2, 4, 8, 16, 32 (5) | |
| Capacity Variance | 0.40 | ok |
| Total Value | 128 | |
| Theoretical Min | 1 | |
| Target | 1 | |

### Blocking Metrics

| Metric | Value |
|--------|-------|
| Avg Blocking Depth | 3.68 |
| Max Blocking Depth | 6 |
| Merge Pairs Accessible | 0 |
| Merge Pairs Blocked | 22 |
| Total Merge Pairs | 22 |

### Solution Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Optimal Moves | 11 | ok |
| Total Merges | 7 | |
| Chain Reactions (2+) | 6 | |
| Longest Chain | 3 | |
| Moves per Merge | 1.57 | |
| Moves per Chain | 1.83 | !! |

### Branching Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Avg Branching Factor | 1.46 | !! |
| Max Branching Factor | 10 | |
| Decision Point Ratio | 39.7% | |
| Dead-End Count | 2801 | |
| Dead-End Ratio | 30.2% | ok |
| States Explored | 9.261 | |
| Solve Time | 46ms | |

### Composite Score

| Component | Score |
|-----------|-------|
| Structural | 81.4 |
| Solution | 70.5 |
| Strategic | 56.3 |
| **Composite** | **68.1** |
| **Tier** | **hard** |

### Solution Path

| Step | From | To | Value | Merged | Chain | Results |
|------|------|----|-------|--------|-------|---------|
| 1 | T0 | T4 | 32 | no | 0 | - |
| 2 | T0 | T4 | 16 | no | 0 | - |
| 3 | T0 | T2 | 2 | yes | 3 | 4->8->16 |
| 4 | T0 | T2 | 8 | no | 0 | - |
| 5 | T1 | T4 | 16 | yes | 2 | 32->64 |
| 6 | T3 | T2 | 8 | yes | 2 | 16->32 |
| 7 | T1 | T3 | 2 | yes | 3 | 4->8->16 |
| 8 | T0 | T1 | 4 | yes | 2 | 8->16 |
| 9 | T1 | T2 | 16 | no | 0 | - |
| 10 | T3 | T2 | 16 | yes | 2 | 32->64 |
| 11 | T2 | T4 | 64 | yes | 1 | 128 |

### Issues

- LINEAR_PATH
- CHAIN_INFLATION
- FEW_TUBES

---

## Level 36: Iron Curtain
**Difficulty Label:** Expert | **Computed Tier:** hard (56.5/100)

### Structural Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Tubes | 5 (1 empty) | ok |
| Total Pieces | 13 | |
| Fill Ratio | 65% | ok |
| Empty Slots | 7 | |
| Unique Values | 2, 4, 8, 16, 64 (5) | |
| Capacity Variance | 0.40 | ok |
| Total Value | 128 | |
| Theoretical Min | 1 | |
| Target | 1 | |

### Blocking Metrics

| Metric | Value |
|--------|-------|
| Avg Blocking Depth | 2.60 |
| Max Blocking Depth | 5 |
| Merge Pairs Accessible | 3 |
| Merge Pairs Blocked | 12 |
| Total Merge Pairs | 15 |

### Solution Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Optimal Moves | 10 | ok |
| Total Merges | 8 | |
| Chain Reactions (2+) | 3 | |
| Longest Chain | 3 | |
| Moves per Merge | 1.25 | |
| Moves per Chain | 3.33 | ok |

### Branching Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Avg Branching Factor | 1.29 | !! |
| Max Branching Factor | 13 | |
| Decision Point Ratio | 31.2% | |
| Dead-End Count | 3815 | |
| Dead-End Ratio | 43.8% | ok |
| States Explored | 8.720 | |
| Solve Time | 46ms | |

### Composite Score

| Component | Score |
|-----------|-------|
| Structural | 56.3 |
| Solution | 66.7 |
| Strategic | 49.1 |
| **Composite** | **56.5** |
| **Tier** | **hard** |

### Solution Path

| Step | From | To | Value | Merged | Chain | Results |
|------|------|----|-------|--------|-------|---------|
| 1 | T1 | T2 | 2 | yes | 3 | 4->8->16 |
| 2 | T0 | T2 | 16 | yes | 1 | 32 |
| 3 | T1 | T2 | 8 | no | 0 | - |
| 4 | T0 | T1 | 4 | yes | 1 | 8 |
| 5 | T0 | T4 | 64 | no | 0 | - |
| 6 | T0 | T1 | 8 | yes | 1 | 16 |
| 7 | T0 | T3 | 2 | yes | 2 | 4->8 |
| 8 | T3 | T2 | 8 | yes | 1 | 16 |
| 9 | T1 | T2 | 16 | yes | 2 | 32->64 |
| 10 | T2 | T4 | 64 | yes | 1 | 128 |

### Issues

- LINEAR_PATH
- FEW_TUBES

---

## Level 37: Fortress
**Difficulty Label:** Expert | **Computed Tier:** hard (56.6/100)

### Structural Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Tubes | 5 (1 empty) | ok |
| Total Pieces | 13 | |
| Fill Ratio | 65% | ok |
| Empty Slots | 7 | |
| Unique Values | 2, 4, 8, 16, 64 (5) | |
| Capacity Variance | 0.40 | ok |
| Total Value | 128 | |
| Theoretical Min | 1 | |
| Target | 1 | |

### Blocking Metrics

| Metric | Value |
|--------|-------|
| Avg Blocking Depth | 2.73 |
| Max Blocking Depth | 6 |
| Merge Pairs Accessible | 3 |
| Merge Pairs Blocked | 12 |
| Total Merge Pairs | 15 |

### Solution Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Optimal Moves | 10 | ok |
| Total Merges | 7 | |
| Chain Reactions (2+) | 4 | |
| Longest Chain | 3 | |
| Moves per Merge | 1.43 | |
| Moves per Chain | 2.50 | ok |

### Branching Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Avg Branching Factor | 1.21 | !! |
| Max Branching Factor | 13 | |
| Decision Point Ratio | 30.2% | |
| Dead-End Count | 3089 | |
| Dead-End Ratio | 43.1% | ok |
| States Explored | 7.174 | |
| Solve Time | 39ms | |

### Composite Score

| Component | Score |
|-----------|-------|
| Structural | 56.3 |
| Solution | 65.9 |
| Strategic | 49.7 |
| **Composite** | **56.6** |
| **Tier** | **hard** |

### Solution Path

| Step | From | To | Value | Merged | Chain | Results |
|------|------|----|-------|--------|-------|---------|
| 1 | T2 | T1 | 2 | yes | 3 | 4->8->16 |
| 2 | T0 | T1 | 16 | yes | 1 | 32 |
| 3 | T0 | T1 | 8 | no | 0 | - |
| 4 | T0 | T4 | 64 | no | 0 | - |
| 5 | T0 | T3 | 2 | yes | 2 | 4->8 |
| 6 | T0 | T1 | 4 | no | 0 | - |
| 7 | T2 | T3 | 8 | yes | 1 | 16 |
| 8 | T2 | T1 | 4 | yes | 2 | 8->16 |
| 9 | T3 | T1 | 16 | yes | 2 | 32->64 |
| 10 | T1 | T4 | 64 | yes | 1 | 128 |

### Issues

- LINEAR_PATH
- FEW_TUBES

---

## Level 38: Labyrinth
**Difficulty Label:** Expert | **Computed Tier:** medium (44.2/100)

### Structural Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Tubes | 4 (0 empty) | ok |
| Total Pieces | 10 | |
| Fill Ratio | 63% | !! |
| Empty Slots | 6 | |
| Unique Values | 2, 4, 8, 32, 64 (5) | |
| Capacity Variance | 0.50 | ok |
| Total Value | 128 | |
| Theoretical Min | 1 | |
| Target | 1 | |

### Blocking Metrics

| Metric | Value |
|--------|-------|
| Avg Blocking Depth | 1.13 |
| Max Blocking Depth | 3 |
| Merge Pairs Accessible | 3 |
| Merge Pairs Blocked | 5 |
| Total Merge Pairs | 8 |

### Solution Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Optimal Moves | 8 | ok |
| Total Merges | 4 | |
| Chain Reactions (2+) | 3 | |
| Longest Chain | 3 | |
| Moves per Merge | 2.00 | |
| Moves per Chain | 2.67 | ok |

### Branching Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Avg Branching Factor | 1.35 | !! |
| Max Branching Factor | 9 | |
| Decision Point Ratio | 34.4% | |
| Dead-End Count | 180 | |
| Dead-End Ratio | 37.6% | ok |
| States Explored | 479 | |
| Solve Time | 2ms | |

### Composite Score

| Component | Score |
|-----------|-------|
| Structural | 50.7 |
| Solution | 47.6 |
| Strategic | 36.7 |
| **Composite** | **44.2** |
| **Tier** | **medium** |

### Solution Path

| Step | From | To | Value | Merged | Chain | Results |
|------|------|----|-------|--------|-------|---------|
| 1 | T1 | T2 | 2 | yes | 3 | 4->8->16 |
| 2 | T1 | T2 | 8 | no | 0 | - |
| 3 | T1 | T2 | 4 | no | 0 | - |
| 4 | T0 | T1 | 64 | no | 0 | - |
| 5 | T0 | T3 | 2 | yes | 1 | 4 |
| 6 | T0 | T1 | 32 | no | 0 | - |
| 7 | T3 | T2 | 4 | yes | 3 | 8->16->32 |
| 8 | T2 | T1 | 32 | yes | 2 | 64->128 |

### Issues

- TOO_EMPTY
- LINEAR_PATH
- FEW_TUBES

---

## Level 39: The Abyss
**Difficulty Label:** Expert | **Computed Tier:** medium (42.4/100)

### Structural Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Tubes | 3 (1 empty) | ok |
| Total Pieces | 7 | |
| Fill Ratio | 50% | !! |
| Empty Slots | 7 | |
| Unique Values | 2, 4, 8, 16, 32, 64 (6) | |
| Capacity Variance | 0.89 | ok |
| Total Value | 128 | |
| Theoretical Min | 1 | |
| Target | 1 | |

### Blocking Metrics

| Metric | Value |
|--------|-------|
| Avg Blocking Depth | 5.00 |
| Max Blocking Depth | 5 |
| Merge Pairs Accessible | 0 |
| Merge Pairs Blocked | 1 |
| Total Merge Pairs | 1 |

### Solution Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Optimal Moves | 10 | ok |
| Total Merges | 3 | |
| Chain Reactions (2+) | 2 | |
| Longest Chain | 3 | |
| Moves per Merge | 3.33 | |
| Moves per Chain | 5.00 | ok |

### Branching Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Avg Branching Factor | 1.22 | !! |
| Max Branching Factor | 3 | |
| Decision Point Ratio | 30.0% | |
| Dead-End Count | 10 | |
| Dead-End Ratio | 20.0% | ok |
| States Explored | 50 | |
| Solve Time | 0ms | |

### Composite Score

| Component | Score |
|-----------|-------|
| Structural | 30.5 |
| Solution | 45.5 |
| Strategic | 49 |
| **Composite** | **42.4** |
| **Tier** | **medium** |

### Solution Path

| Step | From | To | Value | Merged | Chain | Results |
|------|------|----|-------|--------|-------|---------|
| 1 | T0 | T2 | 32 | no | 0 | - |
| 2 | T0 | T2 | 16 | no | 0 | - |
| 3 | T0 | T2 | 8 | no | 0 | - |
| 4 | T1 | T2 | 2 | no | 0 | - |
| 5 | T0 | T1 | 64 | no | 0 | - |
| 6 | T0 | T1 | 4 | no | 0 | - |
| 7 | T0 | T1 | 2 | no | 0 | - |
| 8 | T2 | T1 | 2 | yes | 2 | 4->8 |
| 9 | T1 | T2 | 8 | yes | 3 | 16->32->64 |
| 10 | T1 | T2 | 64 | yes | 1 | 128 |

### Issues

- TOO_EMPTY
- LINEAR_PATH
- FEW_TUBES

---

## Level 40: Crucible
**Difficulty Label:** Expert | **Computed Tier:** medium (46.7/100)

### Structural Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Tubes | 4 (1 empty) | ok |
| Total Pieces | 9 | |
| Fill Ratio | 56% | !! |
| Empty Slots | 7 | |
| Unique Values | 2, 4, 8, 32, 64 (5) | |
| Capacity Variance | 0.50 | ok |
| Total Value | 128 | |
| Theoretical Min | 1 | |
| Target | 1 | |

### Blocking Metrics

| Metric | Value |
|--------|-------|
| Avg Blocking Depth | 3.00 |
| Max Blocking Depth | 5 |
| Merge Pairs Accessible | 0 |
| Merge Pairs Blocked | 5 |
| Total Merge Pairs | 5 |

### Solution Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Optimal Moves | 9 | ok |
| Total Merges | 5 | |
| Chain Reactions (2+) | 2 | |
| Longest Chain | 3 | |
| Moves per Merge | 1.80 | |
| Moves per Chain | 4.50 | ok |

### Branching Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Avg Branching Factor | 1.28 | !! |
| Max Branching Factor | 7 | |
| Decision Point Ratio | 30.9% | |
| Dead-End Count | 145 | |
| Dead-End Ratio | 38.3% | ok |
| States Explored | 379 | |
| Solve Time | 1ms | |

### Composite Score

| Component | Score |
|-----------|-------|
| Structural | 41 |
| Solution | 50.2 |
| Strategic | 48.3 |
| **Composite** | **46.7** |
| **Tier** | **medium** |

### Solution Path

| Step | From | To | Value | Merged | Chain | Results |
|------|------|----|-------|--------|-------|---------|
| 1 | T0 | T3 | 32 | no | 0 | - |
| 2 | T0 | T3 | 8 | no | 0 | - |
| 3 | T0 | T1 | 2 | yes | 3 | 4->8->16 |
| 4 | T2 | T1 | 4 | no | 0 | - |
| 5 | T0 | T2 | 64 | no | 0 | - |
| 6 | T0 | T1 | 4 | yes | 1 | 8 |
| 7 | T1 | T3 | 8 | yes | 1 | 16 |
| 8 | T1 | T3 | 16 | yes | 2 | 32->64 |
| 9 | T2 | T3 | 64 | yes | 1 | 128 |

### Issues

- TOO_EMPTY
- LINEAR_PATH
- FEW_TUBES

---

## Level 41: Chaos Theory
**Difficulty Label:** Expert | **Computed Tier:** medium (47/100)

### Structural Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Tubes | 4 (1 empty) | ok |
| Total Pieces | 9 | |
| Fill Ratio | 56% | !! |
| Empty Slots | 7 | |
| Unique Values | 2, 4, 8, 32, 64 (5) | |
| Capacity Variance | 0.50 | ok |
| Total Value | 128 | |
| Theoretical Min | 1 | |
| Target | 1 | |

### Blocking Metrics

| Metric | Value |
|--------|-------|
| Avg Blocking Depth | 2.60 |
| Max Blocking Depth | 4 |
| Merge Pairs Accessible | 0 |
| Merge Pairs Blocked | 5 |
| Total Merge Pairs | 5 |

### Solution Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Optimal Moves | 10 | ok |
| Total Merges | 5 | |
| Chain Reactions (2+) | 3 | |
| Longest Chain | 2 | |
| Moves per Merge | 2.00 | |
| Moves per Chain | 3.33 | ok |

### Branching Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Avg Branching Factor | 1.31 | !! |
| Max Branching Factor | 7 | |
| Decision Point Ratio | 32.9% | |
| Dead-End Count | 248 | |
| Dead-End Ratio | 37.3% | ok |
| States Explored | 665 | |
| Solve Time | 1ms | |

### Composite Score

| Component | Score |
|-----------|-------|
| Structural | 41 |
| Solution | 56.1 |
| Strategic | 44.8 |
| **Composite** | **47** |
| **Tier** | **medium** |

### Solution Path

| Step | From | To | Value | Merged | Chain | Results |
|------|------|----|-------|--------|-------|---------|
| 1 | T0 | T3 | 8 | no | 0 | - |
| 2 | T1 | T2 | 2 | no | 0 | - |
| 3 | T1 | T3 | 8 | yes | 1 | 16 |
| 4 | T1 | T3 | 4 | no | 0 | - |
| 5 | T0 | T1 | 64 | no | 0 | - |
| 6 | T0 | T3 | 4 | yes | 1 | 8 |
| 7 | T0 | T1 | 32 | no | 0 | - |
| 8 | T0 | T2 | 2 | yes | 2 | 4->8 |
| 9 | T2 | T3 | 8 | yes | 2 | 16->32 |
| 10 | T3 | T1 | 32 | yes | 2 | 64->128 |

### Issues

- TOO_EMPTY
- LINEAR_PATH
- FEW_TUBES

---

## Level 42: Six Deep
**Difficulty Label:** Expert | **Computed Tier:** medium (46.6/100)

### Structural Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Tubes | 4 (1 empty) | ok |
| Total Pieces | 9 | |
| Fill Ratio | 56% | !! |
| Empty Slots | 7 | |
| Unique Values | 2, 4, 8, 32, 64 (5) | |
| Capacity Variance | 0.50 | ok |
| Total Value | 128 | |
| Theoretical Min | 1 | |
| Target | 1 | |

### Blocking Metrics

| Metric | Value |
|--------|-------|
| Avg Blocking Depth | 2.60 |
| Max Blocking Depth | 4 |
| Merge Pairs Accessible | 0 |
| Merge Pairs Blocked | 5 |
| Total Merge Pairs | 5 |

### Solution Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Optimal Moves | 10 | ok |
| Total Merges | 6 | |
| Chain Reactions (2+) | 2 | |
| Longest Chain | 2 | |
| Moves per Merge | 1.67 | |
| Moves per Chain | 5.00 | ok |

### Branching Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Avg Branching Factor | 1.17 | !! |
| Max Branching Factor | 7 | |
| Decision Point Ratio | 31.2% | |
| Dead-End Count | 315 | |
| Dead-End Ratio | 41.1% | ok |
| States Explored | 767 | |
| Solve Time | 2ms | |

### Composite Score

| Component | Score |
|-----------|-------|
| Structural | 41 |
| Solution | 56.7 |
| Strategic | 43.3 |
| **Composite** | **46.6** |
| **Tier** | **medium** |

### Solution Path

| Step | From | To | Value | Merged | Chain | Results |
|------|------|----|-------|--------|-------|---------|
| 1 | T0 | T3 | 32 | no | 0 | - |
| 2 | T2 | T0 | 4 | yes | 2 | 8->16 |
| 3 | T0 | T3 | 16 | no | 0 | - |
| 4 | T0 | T2 | 64 | no | 0 | - |
| 5 | T1 | T0 | 2 | yes | 1 | 4 |
| 6 | T1 | T2 | 8 | no | 0 | - |
| 7 | T0 | T1 | 4 | yes | 1 | 8 |
| 8 | T1 | T2 | 8 | yes | 1 | 16 |
| 9 | T2 | T3 | 16 | yes | 2 | 32->64 |
| 10 | T2 | T3 | 64 | yes | 1 | 128 |

### Issues

- TOO_EMPTY
- LINEAR_PATH
- FEW_TUBES

---

## Level 43: Pressure Cooker
**Difficulty Label:** Expert | **Computed Tier:** medium (44.6/100)

### Structural Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Tubes | 5 (1 empty) | ok |
| Total Pieces | 10 | |
| Fill Ratio | 56% | !! |
| Empty Slots | 8 | |
| Unique Values | 2, 4, 8, 32, 64 (5) | |
| Capacity Variance | 0.24 | ok |
| Total Value | 128 | |
| Theoretical Min | 1 | |
| Target | 1 | |

### Blocking Metrics

| Metric | Value |
|--------|-------|
| Avg Blocking Depth | 1.38 |
| Max Blocking Depth | 3 |
| Merge Pairs Accessible | 3 |
| Merge Pairs Blocked | 5 |
| Total Merge Pairs | 8 |

### Solution Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Optimal Moves | 9 | ok |
| Total Merges | 5 | |
| Chain Reactions (2+) | 3 | |
| Longest Chain | 3 | |
| Moves per Merge | 1.80 | |
| Moves per Chain | 3.00 | ok |

### Branching Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Avg Branching Factor | 1.33 | !! |
| Max Branching Factor | 10 | |
| Decision Point Ratio | 32.7% | |
| Dead-End Count | 856 | |
| Dead-End Ratio | 41.3% | ok |
| States Explored | 2.075 | |
| Solve Time | 10ms | |

### Composite Score

| Component | Score |
|-----------|-------|
| Structural | 40.1 |
| Solution | 57.2 |
| Strategic | 38.6 |
| **Composite** | **44.6** |
| **Tier** | **medium** |

### Solution Path

| Step | From | To | Value | Merged | Chain | Results |
|------|------|----|-------|--------|-------|---------|
| 1 | T1 | T2 | 2 | yes | 1 | 4 |
| 2 | T0 | T2 | 4 | yes | 2 | 8->16 |
| 3 | T0 | T4 | 64 | no | 0 | - |
| 4 | T0 | T3 | 2 | yes | 1 | 4 |
| 5 | T1 | T4 | 32 | no | 0 | - |
| 6 | T2 | T4 | 16 | no | 0 | - |
| 7 | T2 | T1 | 4 | no | 0 | - |
| 8 | T3 | T1 | 4 | yes | 2 | 8->16 |
| 9 | T1 | T4 | 16 | yes | 3 | 32->64->128 |

### Issues

- TOO_EMPTY
- LINEAR_PATH
- FEW_TUBES

---

## Level 44: Gridlock
**Difficulty Label:** Expert | **Computed Tier:** medium (46.9/100)

### Structural Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Tubes | 4 (1 empty) | ok |
| Total Pieces | 9 | |
| Fill Ratio | 56% | !! |
| Empty Slots | 7 | |
| Unique Values | 2, 4, 8, 32, 64 (5) | |
| Capacity Variance | 0.50 | ok |
| Total Value | 128 | |
| Theoretical Min | 1 | |
| Target | 1 | |

### Blocking Metrics

| Metric | Value |
|--------|-------|
| Avg Blocking Depth | 2.80 |
| Max Blocking Depth | 5 |
| Merge Pairs Accessible | 0 |
| Merge Pairs Blocked | 5 |
| Total Merge Pairs | 5 |

### Solution Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Optimal Moves | 9 | ok |
| Total Merges | 6 | |
| Chain Reactions (2+) | 2 | |
| Longest Chain | 2 | |
| Moves per Merge | 1.50 | |
| Moves per Chain | 4.50 | ok |

### Branching Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Avg Branching Factor | 1.31 | !! |
| Max Branching Factor | 7 | |
| Decision Point Ratio | 32.4% | |
| Dead-End Count | 182 | |
| Dead-End Ratio | 37.5% | ok |
| States Explored | 485 | |
| Solve Time | 1ms | |

### Composite Score

| Component | Score |
|-----------|-------|
| Structural | 41 |
| Solution | 51.2 |
| Strategic | 48 |
| **Composite** | **46.9** |
| **Tier** | **medium** |

### Solution Path

| Step | From | To | Value | Merged | Chain | Results |
|------|------|----|-------|--------|-------|---------|
| 1 | T0 | T3 | 32 | no | 0 | - |
| 2 | T0 | T2 | 4 | yes | 1 | 8 |
| 3 | T2 | T3 | 8 | no | 0 | - |
| 4 | T0 | T2 | 64 | no | 0 | - |
| 5 | T1 | T0 | 2 | yes | 1 | 4 |
| 6 | T1 | T3 | 8 | yes | 1 | 16 |
| 7 | T1 | T0 | 4 | yes | 2 | 8->16 |
| 8 | T0 | T3 | 16 | yes | 2 | 32->64 |
| 9 | T2 | T3 | 64 | yes | 1 | 128 |

### Issues

- TOO_EMPTY
- LINEAR_PATH
- FEW_TUBES

---

## Level 45: The Inferno
**Difficulty Label:** Expert | **Computed Tier:** medium (47.7/100)

### Structural Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Tubes | 4 (1 empty) | ok |
| Total Pieces | 9 | |
| Fill Ratio | 56% | !! |
| Empty Slots | 7 | |
| Unique Values | 2, 4, 8, 32, 64 (5) | |
| Capacity Variance | 0.50 | ok |
| Total Value | 128 | |
| Theoretical Min | 1 | |
| Target | 1 | |

### Blocking Metrics

| Metric | Value |
|--------|-------|
| Avg Blocking Depth | 3.20 |
| Max Blocking Depth | 5 |
| Merge Pairs Accessible | 0 |
| Merge Pairs Blocked | 5 |
| Total Merge Pairs | 5 |

### Solution Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Optimal Moves | 9 | ok |
| Total Merges | 4 | |
| Chain Reactions (2+) | 3 | |
| Longest Chain | 3 | |
| Moves per Merge | 2.25 | |
| Moves per Chain | 3.00 | ok |

### Branching Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Avg Branching Factor | 1.35 | !! |
| Max Branching Factor | 7 | |
| Decision Point Ratio | 34.2% | |
| Dead-End Count | 133 | |
| Dead-End Ratio | 37.6% | ok |
| States Explored | 354 | |
| Solve Time | 1ms | |

### Composite Score

| Component | Score |
|-----------|-------|
| Structural | 41 |
| Solution | 49.9 |
| Strategic | 51.2 |
| **Composite** | **47.7** |
| **Tier** | **medium** |

### Solution Path

| Step | From | To | Value | Merged | Chain | Results |
|------|------|----|-------|--------|-------|---------|
| 1 | T0 | T3 | 32 | no | 0 | - |
| 2 | T0 | T1 | 2 | yes | 3 | 4->8->16 |
| 3 | T1 | T3 | 16 | no | 0 | - |
| 4 | T0 | T1 | 64 | no | 0 | - |
| 5 | T0 | T1 | 8 | no | 0 | - |
| 6 | T0 | T1 | 4 | no | 0 | - |
| 7 | T2 | T1 | 4 | yes | 2 | 8->16 |
| 8 | T1 | T3 | 16 | yes | 2 | 32->64 |
| 9 | T1 | T3 | 64 | yes | 1 | 128 |

### Issues

- TOO_EMPTY
- LINEAR_PATH
- FEW_TUBES

---

## Level 46: Master Class
**Difficulty Label:** Master | **Computed Tier:** hard (63.1/100)

### Structural Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Tubes | 4 (1 empty) | ok |
| Total Pieces | 12 | |
| Fill Ratio | 63% | !! |
| Empty Slots | 7 | |
| Unique Values | 2, 4, 8, 16, 32, 128 (6) | |
| Capacity Variance | 0.69 | ok |
| Total Value | 256 | |
| Theoretical Min | 1 | |
| Target | 1 | |

### Blocking Metrics

| Metric | Value |
|--------|-------|
| Avg Blocking Depth | 4.00 |
| Max Blocking Depth | 6 |
| Merge Pairs Accessible | 0 |
| Merge Pairs Blocked | 7 |
| Total Merge Pairs | 7 |

### Solution Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Optimal Moves | 15 | ok |
| Total Merges | 6 | |
| Chain Reactions (2+) | 4 | |
| Longest Chain | 3 | |
| Moves per Merge | 2.50 | |
| Moves per Chain | 3.75 | ok |

### Branching Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Avg Branching Factor | 1.24 | !! |
| Max Branching Factor | 7 | |
| Decision Point Ratio | 32.2% | |
| Dead-End Count | 2743 | |
| Dead-End Ratio | 38.9% | ok |
| States Explored | 7.043 | |
| Solve Time | 21ms | |

### Composite Score

| Component | Score |
|-----------|-------|
| Structural | 52.9 |
| Solution | 83.7 |
| Strategic | 55.3 |
| **Composite** | **63.1** |
| **Tier** | **hard** |

### Solution Path

| Step | From | To | Value | Merged | Chain | Results |
|------|------|----|-------|--------|-------|---------|
| 1 | T0 | T3 | 8 | no | 0 | - |
| 2 | T2 | T3 | 4 | no | 0 | - |
| 3 | T0 | T2 | 32 | no | 0 | - |
| 4 | T1 | T2 | 16 | no | 0 | - |
| 5 | T1 | T2 | 2 | no | 0 | - |
| 6 | T1 | T3 | 4 | yes | 2 | 8->16 |
| 7 | T0 | T1 | 16 | no | 0 | - |
| 8 | T3 | T1 | 16 | yes | 2 | 32->64 |
| 9 | T0 | T3 | 128 | no | 0 | - |
| 10 | T0 | T1 | 4 | no | 0 | - |
| 11 | T0 | T2 | 2 | yes | 1 | 4 |
| 12 | T1 | T2 | 4 | yes | 1 | 8 |
| 13 | T1 | T3 | 64 | no | 0 | - |
| 14 | T1 | T2 | 8 | yes | 3 | 16->32->64 |
| 15 | T2 | T3 | 64 | yes | 2 | 128->256 |

### Issues

- TOO_EMPTY
- LINEAR_PATH
- FEW_TUBES

---

## Level 47: Endgame
**Difficulty Label:** Master | **Computed Tier:** hard (63.6/100)

### Structural Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Tubes | 4 (1 empty) | ok |
| Total Pieces | 12 | |
| Fill Ratio | 63% | !! |
| Empty Slots | 7 | |
| Unique Values | 2, 4, 8, 16, 32, 128 (6) | |
| Capacity Variance | 0.69 | ok |
| Total Value | 256 | |
| Theoretical Min | 1 | |
| Target | 1 | |

### Blocking Metrics

| Metric | Value |
|--------|-------|
| Avg Blocking Depth | 4.29 |
| Max Blocking Depth | 7 |
| Merge Pairs Accessible | 0 |
| Merge Pairs Blocked | 7 |
| Total Merge Pairs | 7 |

### Solution Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Optimal Moves | 14 | ok |
| Total Merges | 7 | |
| Chain Reactions (2+) | 3 | |
| Longest Chain | 3 | |
| Moves per Merge | 2.00 | |
| Moves per Chain | 4.67 | ok |

### Branching Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Avg Branching Factor | 1.37 | !! |
| Max Branching Factor | 8 | |
| Decision Point Ratio | 33.6% | |
| Dead-End Count | 1677 | |
| Dead-End Ratio | 36.2% | ok |
| States Explored | 4.634 | |
| Solve Time | 14ms | |

### Composite Score

| Component | Score |
|-----------|-------|
| Structural | 52.9 |
| Solution | 78.4 |
| Strategic | 60.6 |
| **Composite** | **63.6** |
| **Tier** | **hard** |

### Solution Path

| Step | From | To | Value | Merged | Chain | Results |
|------|------|----|-------|--------|-------|---------|
| 1 | T1 | T3 | 32 | no | 0 | - |
| 2 | T0 | T3 | 16 | no | 0 | - |
| 3 | T1 | T0 | 2 | no | 0 | - |
| 4 | T1 | T2 | 4 | yes | 1 | 8 |
| 5 | T0 | T2 | 2 | no | 0 | - |
| 6 | T1 | T3 | 16 | yes | 2 | 32->64 |
| 7 | T0 | T3 | 32 | no | 0 | - |
| 8 | T1 | T3 | 8 | no | 0 | - |
| 9 | T0 | T1 | 128 | no | 0 | - |
| 10 | T0 | T3 | 8 | yes | 1 | 16 |
| 11 | T0 | T2 | 2 | yes | 1 | 4 |
| 12 | T0 | T2 | 4 | yes | 2 | 8->16 |
| 13 | T2 | T3 | 16 | yes | 3 | 32->64->128 |
| 14 | T1 | T3 | 128 | yes | 1 | 256 |

### Issues

- TOO_EMPTY
- LINEAR_PATH
- FEW_TUBES

---

## Level 48: Trial by Fire
**Difficulty Label:** Master | **Computed Tier:** hard (62.2/100)

### Structural Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Tubes | 4 (1 empty) | ok |
| Total Pieces | 12 | |
| Fill Ratio | 63% | !! |
| Empty Slots | 7 | |
| Unique Values | 2, 4, 8, 16, 32, 128 (6) | |
| Capacity Variance | 0.69 | ok |
| Total Value | 256 | |
| Theoretical Min | 1 | |
| Target | 1 | |

### Blocking Metrics

| Metric | Value |
|--------|-------|
| Avg Blocking Depth | 4.00 |
| Max Blocking Depth | 7 |
| Merge Pairs Accessible | 0 |
| Merge Pairs Blocked | 7 |
| Total Merge Pairs | 7 |

### Solution Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Optimal Moves | 13 | ok |
| Total Merges | 8 | |
| Chain Reactions (2+) | 2 | |
| Longest Chain | 3 | |
| Moves per Merge | 1.63 | |
| Moves per Chain | 6.50 | ok |

### Branching Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Avg Branching Factor | 1.23 | !! |
| Max Branching Factor | 7 | |
| Decision Point Ratio | 34.3% | |
| Dead-End Count | 2895 | |
| Dead-End Ratio | 40.2% | ok |
| States Explored | 7.206 | |
| Solve Time | 23ms | |

### Composite Score

| Component | Score |
|-----------|-------|
| Structural | 52.9 |
| Solution | 76.6 |
| Strategic | 58.3 |
| **Composite** | **62.2** |
| **Tier** | **hard** |

### Solution Path

| Step | From | To | Value | Merged | Chain | Results |
|------|------|----|-------|--------|-------|---------|
| 1 | T1 | T3 | 32 | no | 0 | - |
| 2 | T0 | T1 | 16 | yes | 1 | 32 |
| 3 | T0 | T3 | 8 | no | 0 | - |
| 4 | T0 | T1 | 32 | yes | 1 | 64 |
| 5 | T0 | T2 | 4 | yes | 1 | 8 |
| 6 | T2 | T3 | 8 | yes | 1 | 16 |
| 7 | T0 | T2 | 128 | no | 0 | - |
| 8 | T1 | T2 | 64 | no | 0 | - |
| 9 | T1 | T0 | 2 | yes | 1 | 4 |
| 10 | T1 | T3 | 8 | no | 0 | - |
| 11 | T0 | T1 | 4 | yes | 1 | 8 |
| 12 | T1 | T3 | 8 | yes | 3 | 16->32->64 |
| 13 | T3 | T2 | 64 | yes | 2 | 128->256 |

### Issues

- TOO_EMPTY
- LINEAR_PATH
- FEW_TUBES

---

## Level 49: Nightmare
**Difficulty Label:** Master | **Computed Tier:** hard (59.1/100)

### Structural Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Tubes | 4 (1 empty) | ok |
| Total Pieces | 12 | |
| Fill Ratio | 63% | !! |
| Empty Slots | 7 | |
| Unique Values | 2, 4, 8, 16, 32, 128 (6) | |
| Capacity Variance | 0.69 | ok |
| Total Value | 256 | |
| Theoretical Min | 1 | |
| Target | 1 | |

### Blocking Metrics

| Metric | Value |
|--------|-------|
| Avg Blocking Depth | 4.14 |
| Max Blocking Depth | 7 |
| Merge Pairs Accessible | 0 |
| Merge Pairs Blocked | 7 |
| Total Merge Pairs | 7 |

### Solution Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Optimal Moves | 9 | ok |
| Total Merges | 5 | |
| Chain Reactions (2+) | 4 | |
| Longest Chain | 3 | |
| Moves per Merge | 1.80 | |
| Moves per Chain | 2.25 | ok |

### Branching Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Avg Branching Factor | 1.87 | !! |
| Max Branching Factor | 7 | |
| Decision Point Ratio | 54.1% | |
| Dead-End Count | 183 | |
| Dead-End Ratio | 19.9% | ok |
| States Explored | 921 | |
| Solve Time | 2ms | |

### Composite Score

| Component | Score |
|-----------|-------|
| Structural | 52.9 |
| Solution | 53.9 |
| Strategic | 67.7 |
| **Composite** | **59.1** |
| **Tier** | **hard** |

### Solution Path

| Step | From | To | Value | Merged | Chain | Results |
|------|------|----|-------|--------|-------|---------|
| 1 | T1 | T3 | 32 | no | 0 | - |
| 2 | T0 | T3 | 16 | no | 0 | - |
| 3 | T2 | T1 | 4 | yes | 3 | 8->16->32 |
| 4 | T0 | T2 | 128 | no | 0 | - |
| 5 | T0 | T1 | 32 | yes | 1 | 64 |
| 6 | T1 | T2 | 64 | no | 0 | - |
| 7 | T1 | T0 | 2 | yes | 3 | 4->8->16 |
| 8 | T0 | T3 | 16 | yes | 2 | 32->64 |
| 9 | T3 | T2 | 64 | yes | 2 | 128->256 |

### Issues

- TOO_EMPTY
- LINEAR_PATH
- FEW_TUBES

---

## Level 50: Final Boss
**Difficulty Label:** Grandmaster | **Computed Tier:** hard (64.5/100)

### Structural Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Tubes | 5 (1 empty) | ok |
| Total Pieces | 15 | |
| Fill Ratio | 65% | ok |
| Empty Slots | 8 | |
| Unique Values | 2, 4, 8, 16, 32, 128 (6) | |
| Capacity Variance | 1.04 | ok |
| Total Value | 256 | |
| Theoretical Min | 1 | |
| Target | 1 | |

### Blocking Metrics

| Metric | Value |
|--------|-------|
| Avg Blocking Depth | 3.25 |
| Max Blocking Depth | 6 |
| Merge Pairs Accessible | 1 |
| Merge Pairs Blocked | 15 |
| Total Merge Pairs | 16 |

### Solution Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Optimal Moves | 13 | ok |
| Total Merges | 9 | |
| Chain Reactions (2+) | 4 | |
| Longest Chain | 3 | |
| Moves per Merge | 1.44 | |
| Moves per Chain | 3.25 | ok |

### Branching Metrics

| Metric | Value | Status |
|--------|-------|--------|
| Avg Branching Factor | 1.27 | !! |
| Max Branching Factor | 11 | |
| Decision Point Ratio | 31.3% | |
| Dead-End Count | 29873 | |
| Dead-End Ratio | 42.9% | ok |
| States Explored | 69.702 | |
| Solve Time | 426ms | |

### Composite Score

| Component | Score |
|-----------|-------|
| Structural | 57.5 |
| Solution | 86 |
| Strategic | 53.5 |
| **Composite** | **64.5** |
| **Tier** | **hard** |

### Solution Path

| Step | From | To | Value | Merged | Chain | Results |
|------|------|----|-------|--------|-------|---------|
| 1 | T2 | T3 | 2 | yes | 2 | 4->8 |
| 2 | T1 | T3 | 8 | yes | 1 | 16 |
| 3 | T1 | T3 | 16 | yes | 1 | 32 |
| 4 | T0 | T3 | 32 | yes | 1 | 64 |
| 5 | T0 | T2 | 4 | yes | 2 | 8->16 |
| 6 | T0 | T4 | 128 | no | 0 | - |
| 7 | T0 | T2 | 8 | no | 0 | - |
| 8 | T0 | T1 | 2 | yes | 1 | 4 |
| 9 | T1 | T2 | 4 | no | 0 | - |
| 10 | T1 | T3 | 32 | no | 0 | - |
| 11 | T1 | T2 | 4 | yes | 3 | 8->16->32 |
| 12 | T2 | T3 | 32 | yes | 2 | 64->128 |
| 13 | T3 | T4 | 128 | yes | 1 | 256 |

### Issues

- LINEAR_PATH
- FEW_TUBES

---

