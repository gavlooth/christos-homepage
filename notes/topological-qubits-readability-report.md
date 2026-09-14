# Readability & cognitive-load report — *Defect-engineered topological qubits*

Source: `notes/assets/defects-to-topological-qubits.md`
Scale: ~281,000 words · 23,697 lines · 866 headings · 36 chapters + 3 assessment units + 8 appendices + glossary + bibliography.

**Note on the source of truth.** The `.md` is a generated export (line 1: "Edit the HTML source, not this export"). All fixes must be made in `notes/pages/defects-to-topological-qubits.html` and re-exported via `npm run notes:export:qubits`. Line numbers below refer to the `.md` for navigation; find the matching passage in the HTML to edit.

---

## 1. Executive summary

The document is unusually well-scaffolded for its difficulty: a reading guide (line 22), a notation table (40–72), a two-tier glossary (22427+), and per-chapter *Common errors / Concept checks / Sources* blocks. The prose is careful and precise. The cognitive-load problems are therefore **not** bad writing — they are **structural and density** problems that compound over 281k words:

| # | Issue | Severity | Where |
|---|-------|----------|-------|
| A | Broken ASCII tables (248 lines with raw `\|`) and misaligned ASCII diagrams (103 blocks) | **High** | Anyon/fusion chs 14–20, appendices D–E |
| B | Duplicated content: intro-form vs "-expanded" form of the same section (26 pairs) | **High** | Assessments I–III (chs 37–41) |
| C | Term-clumping: many new terms defined per paragraph, faster than they can settle | **High** | chs 14–19, appendix D |
| D | Non-repeatability: heavy terms defined once, used chapters later with no local re-anchor | **High** | F/R-moves, quantum dimension, gap taxonomy |
| E | Heading fragmentation & deep nesting (up to h6; 866 headings total) | Medium | ch 5 gap section, assessments |
| F | Confusing chapter→assessment renumbering | Medium | Part XI (37/38→I, 39/40→II, 41→III) |
| G | Notation reuse acknowledged but still a live load ($c$, $\alpha$, $\Delta_C$ vs $\Delta_{\text{topo}}$) | Medium | throughout |
| H | Sheer length with no per-part "you are here / prerequisites" recap | Medium | all Part dividers |

Priorities for iteration: **A and B first** (mechanical, high payoff), then **C/D** (needs authoring), then **E–H** (polish).

---

## 2. Systemic issues in detail

### A. Broken ASCII tables and diagrams — *High, mechanical*
- 248 lines contain literal `\|`. Example, the Ising fusion table (lines 5645–5651) renders as raw escaped pipes instead of a table:
  ```
  $\times$ \| $1$ \| $\psi$ \| $\sigma$ \| \|
  ```
  This is the single worst readability hit in the hardest part of the book — the reader meets the core fusion algebra as visual noise.
- 103 indented ASCII diagrams (fusion trees, braids) use `\ /` and `|` that collapse when rendered (e.g. lines 5671–5674, 5688–5714, 5726–5730). The vertical alignment that carries the meaning is lost.
- **Fix:** in the HTML source, convert these to real `<table>`s and to SVG/`<pre>` figures. You already ship SVGs for other diagrams (`assets/defects-to-topological-qubits/*.svg`) — extend that to fusion tables, fusion trees, and braid worldlines.

### B. Intro-form / expanded-form duplication — *High*
- 26 headings carry `{#...-expanded}` anchors that repeat a section already stated in an intro `####` form. Example in Assessment I:
  - line 15307 `#### Two Criteria for Ranking Obstacles`
  - line 15341 `##### Two criteria for ranking obstacles {#two-criteria-for-ranking-obstacles-expanded}`
  The conjunctive-chain diagram also appears twice (15250–15255 and 15298–15303).
- This is almost certainly the HTML "Detailed treatment" expand/collapse pattern flattening into the linear markdown as verbatim repetition. In the interactive HTML it may be fine; **in the exported `.md` / PDF it reads as the same thing said twice**, which erodes trust and doubles the load in the densest chapters.
- **Fix:** ensure the export collapses or clearly demarcates "Detailed treatment" blocks (e.g. a `<details>`-equivalent marker or a horizontal rule + label) so the reader knows the expanded version is optional depth, not new material.

### C. Term-clumping (new-term rate too high) — *High*
Worst offenders, where several first-use terms land in adjacent sentences with no worked example between them:
- **Ch 14 (Fusion & topological charge), 5628–5807:** fusion coefficient, multiplicity-free, fusion space $V_{ab}^c$, trivalent vertex, fusion tree, F-move, R-move, antiparticle, vacuum channel, associativity/dimension-counting — introduced in ~180 lines.
- **Ch 15 (Fibonacci), 6069–6417** and **Ch 19 (Chirality), 7751–8116:** chiral central charge, Drinfeld center, half-braiding, doubled order stacked quickly.
- **Appendix D (category theory), 20035–20470:** semisimple, monoidal product, associator, ribbon, modularity — a term wall.
- **Fix:** cap new-term density (rule of thumb: ≤1 bolded first-use per ~2 paragraphs), and insert a tiny concrete instance immediately after each definition (the Ising numbers are perfect for this and are already nearby). Consider a per-chapter "Terms introduced here" strip so the reader can pre-load.

### D. Non-repeatability of hard concepts — *High*
Key objects are defined once and then used many chapters later with no local re-anchor:
- **F-move / R-move:** defined ch 14 (5722, 5885), reused in chs 15, 16, 18, 24, appendix E — often with no one-line reminder.
- **Quantum dimension:** ch 14 (5835) → ch 15 (6160) → ch 19 (7873).
- **Gap taxonomy** ($\Delta_C$ vs $\Delta_{\text{topo}}$ vs microscopic $J,K$): defined in the notation table (43–49) and ch 5, but the *distinction* is load-bearing in chs 22–36 and is re-derived rather than recalled.
- **Fix:** add a one-sentence "recall:" callout at each far reuse, linking back to the definition anchor. You already use stable anchors (e.g. `#gap-energy-before-filling`) — exploit them for back-references, not just forward TOC links.

### E. Heading fragmentation & deep nesting — *Medium*
- 866 headings across 23.7k lines. Ch 5's gap/localization treatment (1836–1970) is split into ~20 single-question `####` micro-sections. The Q&A phrasing ("What is the spectral gap?") is a genuinely good chunking device — but at this granularity the TOC becomes a wall and the reader loses the through-line.
- Assessments nest to **h6** (10 `######` headings, e.g. 15381 `###### Required many-body interaction algebra`). Six levels exceeds what a reader can hold as a path.
- **Fix:** cap depth at h4 in body chapters and h5 in assessments; fold the smallest Q&A chunks into grouped sections with the questions as bold lead-ins rather than headings.

### F. Chapter → assessment renumbering — *Medium*
- The reading guide (line 36) admits: "Assessment I combines former Chapters 37–38; Assessment II combines 39–40; Assessment III develops Chapter 41." Yet headings still read `### Chapter 38 --- The strongest case against` (15242) *inside* "Assessment I". A reader tracking numbers sees 37 and 38 collide.
- **Fix:** pick one scheme. If assessments are the unit, drop the residual "Chapter 3x" headings (or demote them to non-numbered subsection titles).

### G. Notation reuse — *Medium*
- The notation table (65) flags that $c$, $\alpha$ are reused and $u, K_4$ change meaning in ch 41. This is honest but still a load. $\Delta_C/\Delta_c$ (48) differ only by case for related-but-distinct quantities — an easy misread.
- **Fix:** rename case-only-distinct symbols; where reuse is unavoidable, repeat the local definition at each reuse site rather than relying on the global table.

### H. No per-part orientation — *Medium*
- Part dividers (e.g. 76, 922, 1669, 4742, 6531) give one framing sentence but no "prerequisites / what you'll be able to do after this / est. reading time." Over 11 parts, readers lose their place.
- **Fix:** add a 3-line header to each Part: *Assumes · Introduces · Needed later in.* This directly reduces the "did I miss something?" tax that drives re-reading.

---

## 3. Document map — cognitive load by section

Load = subjective reading difficulty (● low ●● medium ●●● high ●●●● very high). "Flags" reference the issues above.

| Part / Chapter | Lines | Load | Primary flags |
|---|---|---|---|
| Front matter (guide, notation) | 1–75 | ●● | Notation table is strong; G |
| **I. Foundations** | 76–921 | | |
| 1 Stern–Gerlach | 82–465 | ●● | Clean; good on-ramp |
| 2 Two-level pairs / entanglement | 466–921 | ●●● | density operators + partial trace clump (562–645) |
| **II. Qubits & information** | 922–1668 | | |
| 3 Prep/control/measure | 928–1290 | ●●● | Bloch parameterization (1014) dense |
| 4 Relaxation/dephasing/fidelity | 1291–1668 | ●●● | many fidelity variants back-to-back (1456–1556) — C |
| **III. Crystals & defects** | 1669–2604 | | |
| 5 Symmetry & localization | 1675–2129 | ●●● | E (over-fragmented gap section 1836–1970) |
| 6 Vacancy / spin | 2130–2604 | ●●● | Hamiltonian terms stacked (2336–2470) — C |
| **IV. Defect-spin platforms** | 2605–3911 | | |
| 7 NV centers | 2611–3024 | ●● | well-tabulated (2839) |
| 8 Cr in corundum | 3025–3509 | ●● | comparison table (3279) good |
| 9 SiC & others | 3510–3911 | ●● | breadth, low depth |
| **V. Interacting defects** | 3912–4741 | | |
| 10 Two-spin interactions | 3918–4358 | ●●● | 8 coupling mechanisms in a row (4050–4207) — C |
| 11 Three-spin encoding | 4359–4741 | ●●● | DFS/noiseless-subsystem (4525–4562) — D |
| **VI. Topology & anyons** | 4742–6062 | | |
| 12 Winding/homotopy/protection | 4746–5167 | ●●● | topological-order jump (4981) |
| 13 Exchange of identical particles | 5168–5589 | ●●●● | braid group (5240), 2D rep (5319) — C, A(diagrams) |
| 14 Fusion & topological charge | 5590–6062 | ●●●● | **A (broken fusion table 5645), C, D** — core bottleneck |
| **VII. Fibonacci anyons** | 6063–6530 | | |
| 15 Fibonacci pair | 6069–6530 | ●●●● | A, C, D (F/R reuse) |
| **VIII. Topological lattice models** | 6531–8900 | | |
| 16 Stabilizer checks | 6537–6970 | ●●●● | dense operator algebra; A |
| 17 Kitaev honeycomb | 6971–7331 | ●●●● | Majorana rep + gauge (7065) — C |
| 18 String-nets | 7332–7744 | ●●●● | A (diagrams), C |
| 19 Chirality | 7751–8156 | ●●●● | C (Drinfeld center, chiral central charge) |
| 20 Digital emulation | 8157–8492 | ●●● | "four distinct objects" framing helps |
| 21 Digital prep / phases | 8493–8900 | ●●● | correlation-length/finite-size (8631) |
| **IX. Engineering from clusters** | 8901–11013 | | |
| 22 Effective interactions | 8907–9337 | ●●●● | Schrieffer–Wolff (9091) — D (also App F) |
| 23 Perturbative gadgets | 9338–9709 | ●●●● | order-counting dense |
| 24 Eight-stage architecture | 9710–10105 | ●●●● | pulls together F/R, gap taxonomy — D-heavy |
| 25 Target/placement/interaction graphs | 10106–10587 | ●●● | many candidate lattices (10310–10433) — C |
| 26 Diamond microscopic operators | 10601–11013 | ●●●● | full Hamiltonian (10660) — C |
| **X. Scales, noise, analysis** | 11014–15213 | | |
| 27 Unit conversion | 11020–11433 | ●● | valuable; keep prominent |
| 28 Placement & yield | 11434–11877 | ●●● | dipole breakdown (11566) |
| 29 Coupling vs topological gap | 11878–12332 | ●●●● | **D (gap taxonomy climax)**, scale budgets (12104) |
| 30 Encoding-dependent noise | 12333–12749 | ●●● | noise taxonomy (12513) — C |
| 31 Limits of protection | 12750–13196 | ●●● | good narrative |
| 32 Peaks vs braiding | 13197–13681 | ●●● | platform comparison |
| 33 Competitor platforms | 13682–14025 | ●● | numbered category errors (13922) good |
| 34 Commanded vs realized positions | 14026–14418 | ●● | Title-Case headings inconsistent w/ rest |
| 35 Addressing & readout | 14419–14861 | ●●● | nine-stage schedule (14688) |
| 36 Measurement of topological info | 14862–15213 | ●●● | hierarchy framing helps |
| **XI. Assessment** | 15214–18593 | | |
| I Proposal & limits (37/38) | 15220–16449 | ●●●● | **B (duplication), E (h6), F** |
| II Requirements→tests (39/40) | 16450–17779 | ●●●● | **B, E** |
| III Four-cluster assessment (41) | 17780–18593 | ●●●● | **B**; Title-Case heading drift |
| **Appendices A–H** | 18594–22006 | | |
| A Vector spaces | 18600–19122 | ●● | good refresher placement (but placed last) |
| B Tensor products | 19123–19663 | ●●● | |
| C Groups/braids | 19664–20034 | ●●● | D (braid reps echo ch 13) |
| D Categories | 20035–20469 | ●●●● | **C (term wall), A** |
| E Fusion-tree consistency | 20470–20911 | ●●●● | A, D (pentagon/hexagon) |
| F Schrieffer–Wolff | 20912–21244 | ●●● | D (should be cross-linked from ch 22) |
| G Stabilizers | 21245–21615 | ●●● | |
| H Tensor networks | 21616–22006 | ●●● | |
| Global evidence table | 22007–22426 | ●● | strong asset |
| Glossary (2-tier) | 22427–22952 | ● | strong asset — surface it earlier |
| Bibliography | 22953–end | ● | |

---

## 4. Recommended iteration order

1. **Mechanical, high payoff (do first):**
   - Fix the 248 `\|` broken tables and 103 ASCII diagrams in the HTML source → real tables + SVG. Start with chs 13–18 (the ●●●● cluster).
   - Resolve the 26 intro/expanded duplications in the export (chs 37–41).
   - Cap heading depth at h4/h5; collapse the ch 5 gap micro-sections.
   - Settle the chapter/assessment numbering (F).

2. **Authoring, targeted at the ●●●● spine (chs 13–19, 22–24, 29, appendices D–E):**
   - Add a concrete instance immediately after each first-use definition.
   - Add "recall:" back-reference callouts for F/R-moves, quantum dimension, gap taxonomy at each far reuse (D).
   - Add a "Terms introduced here" strip to chs 14, 15, 17, 18, 19 and appendix D.

3. **Polish / orientation:**
   - Add "Assumes · Introduces · Needed later in" headers to each Part.
   - Move a pointer to the Glossary and Appendix A into the reading guide (they're strong but buried at the end).
   - Rename case-only-distinct symbols ($\Delta_C$ vs $\Delta_c$).
   - Normalize Title-Case vs sentence-case headings (chs 34, 41 drift).

---

## 5. What is already working (keep)

- Reading guide with four entry points (26–33) and the notation table (40–72).
- Per-chapter *Common conceptual errors* + *Concept checks* + *Sources* triad — excellent for consolidation and repeatability; keep it uniform (a few chapters drop one).
- Q&A micro-headings as a chunking device (ch 5) — good idea, just over-applied.
- Two-tier glossary (short + contextual) and the Global evidence table — high-value; surface both earlier.
- The steelman / conjunctive-chain framing in the assessments (15278+) — strong rhetorical scaffolding once the duplication is removed.
