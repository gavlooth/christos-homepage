# Topological-qubit reading edition

There is one editable manuscript: [pages/defects-to-topological-qubits.html](pages/defects-to-topological-qubits.html).

The book contains 36 chapters, three assessments, and Appendices A–H, followed by the evidence table, glossary, and annotated bibliography. Assessment I combines the former Chapters 37–38; Assessment II combines 39–40; Assessment III retains the four-cluster study. Detailed arguments, equations, and all ten figures are included in every export. HTML keeps optional details collapsible; Markdown and PDF expand them for linear reading.

## Published formats

- [HTML source](pages/defects-to-topological-qubits.html), copied to `public/notes/defects-to-topological-qubits.html` by the site build.
- [Markdown export](assets/defects-to-topological-qubits.md), with relative links to the SVG illustrations in the adjacent `defects-to-topological-qubits/` directory. Keep that directory alongside the Markdown when moving it.
- [PDF export](assets/defects-to-topological-qubits.pdf), containing the complete current edition with rendered mathematics and embedded figures.
- [Direct Markdown URL](../public/notes/defects-to-topological-qubits.md), refreshed from the same generated export by the site build with illustration links rebased for its location.

Do not edit the exports or keep independent `source.md`, `document.md`, chapter-split, or earlier-edition copies. Superseded tracked versions are available through Git history. The cleanup also saved uncommitted intermediates outside this repository before removing them.

## Updating the book

Edit the HTML source, then run:

```sh
npm run notes:export:qubits
npm run build
```

Export requirements: Python 3 with `beautifulsoup4`, Pandoc, Node.js 22 or newer, Chromium, and Poppler's `pdfinfo` and `pdftotext`. Set `CHROMIUM_BIN` if Chromium has a different executable name. An internet connection is required to load the web edition's MathJax distribution for PDF typesetting. Full-book rendering takes several minutes and reports progress.

`export-qubits.py` extracts the manuscript, converts the math to native Markdown math nodes, exports the inline SVG illustrations, and calls `print-qubits.mjs` to typeset every equation before printing. The print renderer temporarily detaches math-bearing chapters, restores one at a time at its original position, and processes at most 750 expressions per batch. Finished chapters stay out of page layout until every chapter is restored for printing. Equation widths are measured before any zoom changes, avoiding alternating layout reads and writes across the full book.

After each batch, `MathJax.typesetClear()` forgets finished MathItems while retaining their rendered DOM. This is appropriate for static printing, not an interactive page that may later change rendering or accessibility settings. Error checks occur before forgetting a batch; final checks still cover the complete restored math and figures. The exporter checks the PDF's main assessment headings and bibliography before installing the generated files. Temporary print files and the temporary Chromium profile are removed automatically on normal exit.

`qubits-exports.json` records source and output hashes. The normal site build checks these hashes before copying anything, so an edited manuscript cannot accidentally ship with an outdated PDF or Markdown download. Ordinary site builds do not require the export tools or a network connection.

The `public/` copies are deployment outputs, not extra editions. Keep them synchronized with `npm run build`.

## Chapter-by-chapter editorial review

The October 2026 pass reviewed the complete book, not only its opening chapters. Haiku 5.5 marked missing definitions, unexplained mechanisms, overloaded sentences, and equation gaps before Opus 5.5 rewrote each unit. Sol at extra-high reasoning reviewed the mathematics and checked the finished text against the original material. The three assessments were split into four review units each; front matter, appendices, glossary, evidence table, and bibliography received their own passes.

The expanded edition introduces the physical action before its terminology, defines symbols beside their equations, and separates derivations, assumed numerical examples, reported experiments, and unestablished hardware requirements. The introductory Superposition, Entanglement, and Measurement sections remain formula-free.

Review evidence is retained in [the chapter audit](../.agents/notes-rewrite-audit.md). Its initial findings describe the pre-rewrite text; the final checks record dispositions and rejected suggestions. [The readability report](topological-qubits-readability-report.md) distinguishes the historical audit from this later pass. Increased length and a successful math render do not, by themselves, prove reader comprehension.


## Local working-folder cleanup

The sibling `fib` and `tex` folders are not Git repositories. Their obsolete qubit manuscripts, split sources, and build artifacts were moved to a verified recovery folder outside the code tree during the 2026-09-05 cleanup. Their mHC, Δ-Nets, and normalized-rank-four operator work was retained.

Local entry points now link to these maintained exports: `fib/BOOK.md`, `fib/BOOK.pdf`, `tex/notes.md`, and `tex/notes.pdf`, with adjacent illustration-directory links. The old qubit assembly path in `fib/assemble_books.py` was removed; its mHC assembly remains. These local links are conveniences, not additional manuscript sources, and are not part of this Git repository.
