# Measuring readability and pedagogical structure: literature and a tool plan

*A design essay. Case study and test corpus: `notes/pages/defects-to-topological-qubits.html` and the manual audit in `notes/topological-qubits-readability-report.md`.*

---

## 1. Motivation

The readability audit of the topological-qubits reader was done by hand: read the
document, rate each section's cognitive load, flag term-clumping, broken tables,
non-repeated definitions, notation collisions, and fragmented headings. The work
was valuable but slow and unrepeatable — every edit invalidates it.

The question is how much of that audit can be systematized. A tool can collect
repeatable observations and propose contextual findings; it cannot infer
comprehension from surface statistics alone. The research below offers several
complementary perspectives, not a single validated readability score.

---

## 2. What the literature actually says

### 2.1 Readability formulas — surface metrics, shallow value

The familiar formulas score a text from word and sentence length alone:

- Flesch (1948), *A new readability yardstick* → Flesch Reading Ease; Kincaid et
  al. (1975) → Flesch–Kincaid grade level.
- Gunning (1952) Fog index; Dale–Chall (1948/1995, familiar-word list);
  McLaughlin (1969) SMOG; Coleman–Liau (1975).

They are cheap and correlate with difficulty, but they measure symptoms, not
causes: a formula cannot tell why a passage is hard, and "fixing" its score
(shorter sentences) can make prose worse. Bailin & Grafstein (2001) and Redish
(2000) are the standard critiques. **Use formulas only as a relative flag across
sections, never as a target.**

### 2.2 Cognitive load theory — the "why" behind the audit

This is the frame the manual report was implicitly using.

- Sweller (1988; 1994; 2011); Sweller, van Merriënboer & Paas (1998; 2019
  review). Cognitive load theory distinguishes material-related **intrinsic**
  load from presentation-related **extraneous** load. **Germane** effort is
  treated differently across formulations; these are not three quantities a
  text analyzer can directly measure.
- Mayer (2009), *Multimedia Learning* — the coherence, signaling, redundancy,
  and split-attention principles.
- Miller (1956), working-memory limits; Chandler & Sweller (1991),
  split-attention; Kalyuga et al. (2003), the **expertise-reversal effect**.

Mapping to the audit: term-clumping may add avoidable presentation load, but
category theory also contains intrinsically demanding dependencies. Broken
tables can force readers to reconstruct relationships. These are hypotheses
about reader effort, not diagnoses established by counting terms or headings.
Multiple entry points make prior knowledge and reading route essential inputs.

### 2.3 Text cohesion and comprehension — the deep layer, and the key precedent

- Kintsch & van Dijk (1978); Kintsch (1988; 1998) — the Construction–Integration
  model of how readers build a mental representation.
- McNamara et al. (1996) — effects of cohesion depend on prior knowledge and
  the comprehension task; more explicit cohesion is not uniformly better.
- Britton & Gülgöz (1991) — rewrote a textbook using Kintsch's model and measured
  comprehension gains. This is, in effect, an experimental version of what we did
  by hand.
- **Coh-Metrix** (Graesser, McNamara, Louwerse & Cai 2004; McNamara et al. 2014)
  — an existing tool computing ~100 cohesion and readability indices. **TAACO**
  (cohesion) and **TAALES** (lexical sophistication), Crossley et al., are
  companion tools. This family is the closest prior art to the tool proposed
  below, and any implementation should borrow its indices rather than reinvent
  them.

### 2.4 Structure and signaling — headings, previews, organizers

- Ausubel (1960), advance organizers — the orientation blocks added to every
  chapter are exactly this device.
- Meyer (1975), top-level text structure; Lorch (1989), signaling devices
  (headings, previews, connectives) and their effect on recall.
- Gagné's Nine Events and Merrill's First Principles, for the instructional-design
  view of how a unit should be sequenced.

### 2.5 Modern NLP readability

Collins-Thompson (2014) surveys computational readability; Vajjala & Meurers and
Martinc et al. (2021) cover feature-based and neural approaches. These matter for
the optional learned features below but are not required for a first version.

*(Citations are author/year + title from memory; verify DOIs and pull newer work
before publishing anything that leans on them.)*

### 2.6 The gap

Coh-Metrix, TAACO and TAALES are relevant precedents for prose-level cohesion
and lexical measures. Their exact coverage, licenses and available versions
must be checked before selecting indices or claiming a research gap. This
project's additional requirements are document-scale source mapping, scoped
terminology and notation evidence, reading-route dependencies, and checks of
specific rendered editions. The literature list remains provisional.

---

## 3. Design principle: observations are not judgments

Use two analysis engines, with an explicit boundary between what they establish:

- **Mechanical analysis** records headings, token counts, explicit links,
  annotated definitions, symbol spellings and measured rendering failures.
  Reproducible output can still be wrong if extraction or interpretation is
  wrong. A case-similar symbol pair is an observation, not proof of a collision.
- **Contextual analysis** proposes missing bridges, ambiguity, excessive
  introduction density and audience-relative difficulty. An LLM supplies
  candidates with cited evidence and may abstain. Human review determines
  whether a proposed intervention is warranted.

Every finding distinguishes an observation, a heuristic candidate and a
reviewed conclusion. The tool does not promise to reproduce the manual audit
or measure comprehension until evaluation supports those claims.

## 4. Inputs and analysis contract

### 4.1 Reader and document inputs

Each run records:

- Immutable source revision and content hash; document language and edition.
- Reader profile: assumed knowledge, specialist knowledge not assumed, and
  reading objective. The initial calibration profile is a mathematics-PhD
  reader without assumed specialist physics knowledge; it is not universal.
- Reading route: ordered section anchors, including selected appendices or
  optional material. Default to document order and label that assumption.
- Target surfaces: HTML with specified viewport and browser, or PDF with a
  specified export configuration. Source-only runs cannot certify rendering.
- Analyzer configuration, rubric version and model configuration, if used.

“Not introduced in the document,” “not encountered on this route,” and “not
part of the reader's assumed knowledge” are different conditions.

### 4.2 Mechanical observations and heuristic candidates

| Dimension | Observable output | Interpretation boundary |
|---|---|---|
| Structure | Heading hierarchy, section lengths, explicit orientation blocks | Depth or a missing labeled block alone does not establish poor pedagogy |
| Formulas | Per-section scores with tokenization policy and eligible text count | Relative flags only; omit undersized or unsuitable samples |
| Cohesion | Specified lexical overlap indices; optional embedding similarity | Similarity is not comprehension or reliable referent resolution |
| Terminology | First occurrences of identified terms, bold-term counts, glossary links, annotated definitions and reuse distances | Bold text is an incomplete proxy; unannotated definitions require review |
| Notation | TeX spellings, locations and case-similar pairs within recorded scopes | Meaning collisions and intentional aliases require annotations or semantic review |
| References | Explicit resolved/unresolved edges and direction along the route | Forward references are not automatically defects; absent edges cannot reveal unstated prerequisites |
| Source integrity | Suspicious pipe-table and ASCII patterns, malformed structures | Candidate source defects, not proof of broken layout |

Term matching records normalization and alias rules rather than silently
equating different spellings. Reuse distance is measured between successive
occurrences and from the latest evidenced definition or reminder, in route
blocks and words. It does not imply that the reader forgot the concept.
Bibliography, navigation, code and mathematical notation must not silently
enter prose formulas; report their exclusion and extraction coverage.

### 4.3 Contextual analysis

The LLM reviews complete explanatory units with local surrounding prose,
table headers/captions, and relevant prior definitions. It can propose:

- Missing object, action or mechanism bridges; unclear referents.
- Terms introduced faster than their explanations can be understood.
- Missing prerequisite explanations or local reminders.
- Possible notation-meaning conflicts within the relevant scope.
- An ordinal difficulty rating and the smallest useful repair.

Each proposal cites source evidence and identifies the reader assumption it
depends on. Rate intrinsic difficulty separately from suspected avoidable
presentation problems; hard but well-explained material is not a defect.
Do not prescribe a recall box or worked example merely to satisfy a template.

Maintain a definition index with source spans, scope, aliases and route
availability. A running summary is a retrieval aid, never sole evidence that
a concept was explained. Retrieve original passages before judging a missing
definition. If required context is unavailable or truncated, mark the judgment
incomplete rather than inventing a prerequisite or assigning a confident score.

## 5. Architecture and output

```text
source + revision + reader profile + reading route
    |
    +--> raw source and source map
    |         |
    |         +--> normalized AST --> mechanical observations
    |         |                  +--> evidence index --> contextual candidates
    |         +--> source-pattern candidates
    |
    +--> edition build --> browser/PDF checks --> surface observations
                                                  |
observations + candidates + review decisions ------+
    |
    +--> finding records + section scorecard
    +--> version comparison --> Markdown report / optional HTML dashboard
                           +--> restricted CI gate
```

### 5.1 Preserve evidence through normalization

Start with canonical HTML; add Markdown and LaTeX adapters only with their own
extraction fixtures. Pandoc AST is a candidate representation, not a guarantee
of lossless conversion. Keep original TeX, whitespace-sensitive blocks, table
relationships, figure references, heading IDs, optional-content boundaries and
source spans alongside normalized prose. Report unsupported constructs.

The HTML manuscript is authoritative; exported Markdown and PDF are distinct
surfaces. Link export findings back to source where possible; mark unmapped
findings explicitly instead of presenting export line numbers as editable HTML.

### 5.2 Check the rendered surface separately

Source heuristics nominate suspicious content. Browser checks observe actual
MathJax errors, failed assets and unintended clipping under recorded viewport,
font and browser settings. PDF checks use the pinned export pipeline and page
locations. Intentional scroll containers are not automatically overflow defects.
ASCII alignment and complex table legibility may still require visual review.

Reuse applicable checks in `notes/print-qubits.mjs` and the Markdown round-trip
checks in `notes/export-qubits.py`. They establish specific preservation or
rendering properties, not general readability. Record environment/build failure
separately from a document defect; an unexecuted check is not a pass.

### 5.3 Finding and run records

Define a versioned JSON schema before writing analyzers. Each finding includes:

- Rule ID and version; observation/candidate/reviewed status; dimension.
- Document revision, section anchor, source span and exact evidence excerpt.
- Target edition and surface location when applicable.
- Severity with rationale; uncertainty or abstention; reader/route dependence.
- Related definition/reference evidence and optional proposed repair.
- Review disposition, kept separate from the original analyzer output.

The run manifest records input hashes, adapter/analyzer versions, thresholds,
reader profile, route, rubric, model identifier, generation settings, prompt
hash and extraction/context coverage. Retain model responses for auditability;
a pinned model is not a promise of deterministic generation.

Do not identify findings by line number or whole-document hash. Match across
revisions by rule, stable section/block anchor and local evidence fingerprint.
Use explicit anchor mappings where available. Renamed headings, moved blocks
and section splits can make matching ambiguous: report those as unmatched,
not silently resolved or new. Record added, resolved, persisting, changed and
unmatched findings. Configuration changes make score deltas non-comparable
unless both revisions are rerun under the same configuration.

Keep dimensions separate in the scorecard rather than inventing a weighted
“readability score.” Without the optional LLM pass, difficulty ratings are
unassessed, not synthesized from mechanical metrics.

### 5.4 CI policy

Initially gate only an explicit allowlist of reproducible structural/rendering
failures, such as broken internal targets or MathJax errors, against a reviewed
baseline. Candidate symbol collisions, term density and LLM severity changes
remain advisory. Report incomplete runs distinctly; CI must not claim success
when a required check failed to execute.

## 6. Roadmap and acceptance criteria

- **Phase 0 — inventory and frozen fixtures.** Locate and name reusable checks
  with paths and runnable commands. Standalone pseudo-table, ASCII-diagram and
  Delta-collision detectors were not located during review; recover them or
  implement them as new work, not assumed existing assets. Identify the exact
  historical manuscript behind the manual audit and freeze its revision/hash,
  section mapping and reviewed labels. If it cannot be recovered, freshly
  annotate a frozen corpus rather than applying historical labels to current
  text. Verify literature and licensing before adopting external indices.
  Acceptance: reproducible fixture manifest and explicit asset inventory.
- **Phase 1 — source-backed mechanical core.** Implement HTML extraction,
  source mapping, run/finding schemas, structure, explicit references, scoped
  symbol/term observations and applicable formula flags. Add edition-specific
  checks using the existing exporter/renderer.
  Acceptance: every finding traces to evidence; supported defects are detected
  in frozen fixtures and legitimate controls do not trigger those rules.
- **Phase 2 — cohesion features.** Select documented lexical indices and
  optionally pinned embedding features.
  Acceptance: demonstrate added detection value on calibration data over the
  Phase 1 baseline; do not retain indices merely because they are available.
- **Phase 3 — contextual judgment.** Add route-aware evidence retrieval,
  ratings, abstention and targeted repair suggestions.
  Acceptance: complete the independent evaluation in §7, publish errors and
  repeatability results, and retain advisory status where evidence is weak.
- **Phase 4 — diff and CI.** Implement finding matching and allowlisted gates.
  Acceptance: unchanged input produces no mechanical regression; harmless
  insertions/moves retain matches; ambiguous splits are surfaced; seeded
  allowlisted failures fail CI; model-only severity changes do not.

## 7. Evaluation

### 7.1 Separate three uses of examples

1. **Calibration:** the manual audit and other reviewed examples inform rules,
   prompts and thresholds. Agreement here measures fit, not independent validity.
2. **Regression:** frozen before/after pairs defend known repairs. Verify labels
   individually; an edited passage is not automatically an improved passage.
3. **Held-out evaluation:** separate documents or chapters and defect examples
   unseen in prompts, rubric examples and threshold selection. Freeze the split
   before tuning; disclose any shared-document dependence. Prompt-contaminated
   examples must be reclassified as regression evidence.

Use independently annotated examples with adjudicated disagreements and report
human agreement. Include difficult-but-clear material, legitimate forward
references, intentional notation reuse, nearby definitions, optional reading
paths, valid tables and scrollable layouts as negative controls.

### 7.2 Measure detection and rating separately

- Finding-level precision and recall by defect type, with explicit denominators
  and uncertainty; include false positives, missed defects and abstentions.
- Ordinal rating agreement, such as weighted kappa, plus rank correlation;
  correlation alone does not establish correct severity or defect detection.
- Repeated-run finding/severity stability under identical model configuration.
- Extraction and evidence-mapping coverage, including unsupported material.
- Runtime and model usage per document; assess whole-book practicality.

Set rule-specific acceptance thresholds on calibration data before opening
held-out results. Require reviewed false-positive evidence before promoting a
rule into the CI allowlist; do not use a single aggregate accuracy threshold.
Compare mechanical-only and combined outputs to establish what the LLM adds.

Expert ratings support agreement with editorial judgment. Claims about improved
comprehension require a separate reader study with specified audience, tasks
and outcomes; they do not follow from those ratings or formula improvements.

## 8. Risks and limits

- **Metric optimization:** short sentences, repeated words and extra definition
  boxes can improve proxies while making explanations worse.
- **Context errors:** summaries can omit definitions; whole-book knowledge can
  falsely credit material skipped on the reader's route. Preserve evidence.
- **Model drift:** version recording and cached responses aid comparison but do
  not eliminate variability. Keep uncertain semantic results out of hard gates.
- **Extraction and rendering loss:** normalized structure does not preserve all
  layout evidence, and one passing viewport does not certify every edition.
- **Limited validation:** one physics manuscript is a case study, not evidence
  of generalization to other domains or audiences.
- **Literature uncertainty:** the author/year list above is a research starting
  point, not a verified bibliography or proof that the proposed features work.

## 9. Summary

Build an evidence-producing reviewer, not an automatic judge of comprehension.
Measure explicit structure mechanically, inspect each claimed rendering surface,
and use route-aware contextual analysis for semantic candidates. Freeze the
corpus, separate calibration from validation, and gate CI only on narrow,
reproducible failures.
