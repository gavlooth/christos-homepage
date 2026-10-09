# Maintaining the mHC and Δ-Nets readers

Edit the hand-authored HTML pages:

- [Residual streams, exact mixing, and go-mHC](pages/exact-residual-stream-mixing.html)
- [Δ-Nets: from substitution to shared computation](pages/delta-nets.html)

Both are question-led, six-unit reading editions. The mHC revision moves concrete routing before the abstract construction, adds a complete Cayley example and numerical audit, and distinguishes non-amplification from preservation of every mode. The Δ-Nets revision connects the prose, puts compilation before the interaction-rule catalogue, and separates core rewriting from scheduling, cleanup, and read-back. Original section anchors and technical material are retained; the added reference disclosures do not remove their contents.

The October 2026 pass applied a separate Haiku 5.5 clarity scan, Sol extra-high mathematical review, Opus 5.5 rewrite, and Sol extra-high final check to every unit and each reader's front matter. The [retained review evidence](../.agents/notes-rewrite-audit.md) includes the initial missing-information/clumped-sentence findings and their final dispositions.

The mixer now works through orthogonal block energies, both stochastic budgets, the Cayley solve, and a runnable numerical audit. It separates an individual mixer's norm from the Jacobian of an activation-dependent network, fixed-size expressivity from asymptotic density, and optimization iterations from wall-clock performance. Experimental details follow the explicitly cited go-mHC v1 source. That source's conflicting effective-batch values remain identified rather than silently reconciled.

The Δ-Nets reader explains binder ownership, ports, levels, deltas, subsystem restrictions, local interactions, directed erasure, scheduling, and read-back in sequence. It retains the paper's diagrams and makes source-level specification gaps explicit: the general merge-coordinate rule, effective parallel scheduling certificate, zero-port decay convention, and complete inverse implementation are not supplied by this explanatory reader. Do not substitute an inferred delta formula for an established evaluator rule.


## Regenerate the downloads

```sh
npm run notes:export:readers
npm run build
```

The shared export engine is `export-qubits.py`; it accepts either reader's slug as an optional argument, while its no-argument invocation still exports the qubit book. To regenerate just one reader:

```sh
python3 notes/export-qubits.py exact-residual-stream-mixing
python3 notes/export-qubits.py delta-nets
```

The exporter needs Python 3 with Beautiful Soup, Pandoc, Node.js 22+, Chromium, and Poppler (`pdfinfo`/`pdftotext`). It fetches MathJax for PDF typesetting. The regular site build needs none of those export tools and does not access the network.

The Markdown and PDFs are generated in `notes/assets/` under the same slug as their HTML page. The build copies them into `public/notes/assets/`. Markdown uses relative SVG paths, including the existing `delta-nets/diagrams/` subdirectory; keep those illustration folders beside the Markdown when moving a document.

Each reader's `*-exports.json` manifest records the source, input-illustration, and output hashes. The build refuses stale or missing exports. Do not edit the generated Markdown or PDFs independently.

## What is and is not replaced

These editions expand the two published web articles. They do not replace the separate, much longer mHC manuscript in the sibling `fib/mhc` folder or its historical `hyper-connections-to-go-mhc.pdf` export. That manuscript is a different document, not a synchronized download of the short go-mHC reader. The updated web reader links to `exact-residual-stream-mixing.pdf`, which matches its own content.

Pre-existing research, decomposition, and generation work in `articles/delta-nets/` and `articles/go-mhc-2604.02309v1/` is untouched. It is not an input to the reader export command. Do not overwrite these working files when rebuilding the publication.
