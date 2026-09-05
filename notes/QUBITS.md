# Topological-qubit reading edition

There is one editable manuscript: [pages/defects-to-topological-qubits.html](pages/defects-to-topological-qubits.html).

The assessment combines the former Chapters 37–40 into two question-led units and retains the four-cluster study as a third unit. The foundations, appendices, detailed arguments, equations, bibliography, and ten figures are included in every export. HTML keeps optional details collapsible; Markdown and PDF expand them for linear reading.

## Published formats

- [HTML source](pages/defects-to-topological-qubits.html), copied to `public/notes/defects-to-topological-qubits.html` by the site build.
- [Markdown export](assets/defects-to-topological-qubits.md), with relative links to the SVG illustrations in the adjacent `defects-to-topological-qubits/` directory. Keep that directory alongside the Markdown when moving it.
- [PDF export](assets/defects-to-topological-qubits.pdf), containing the complete current edition with rendered mathematics and embedded figures.

Do not edit the exports or keep independent `source.md`, `document.md`, chapter-split, or earlier-edition copies. Superseded tracked versions are available through Git history. The cleanup also saved uncommitted intermediates outside this repository before removing them.

## Updating the book

Edit the HTML source, then run:

```sh
npm run notes:export:qubits
npm run build
```

Export requirements: Python 3 with `beautifulsoup4`, Pandoc, Node.js 22 or newer, Chromium, and Poppler's `pdfinfo` and `pdftotext`. Set `CHROMIUM_BIN` if Chromium has a different executable name. An internet connection is required to load the web edition's MathJax distribution for PDF typesetting. Full-book rendering takes several minutes and reports progress.

`export-qubits.py` extracts the manuscript, converts the math to native Markdown math nodes, exports the inline SVG illustrations, and calls `print-qubits.mjs` to typeset every equation before printing. It checks the PDF's main assessment headings and bibliography before installing the generated files. Temporary print files and the temporary Chromium profile are removed automatically.

`qubits-exports.json` records source and output hashes. The normal site build checks these hashes before copying anything, so an edited manuscript cannot accidentally ship with an outdated PDF or Markdown download. Ordinary site builds do not require the export tools or a network connection.

The `public/` copies are deployment outputs, not extra editions. Keep them synchronized with `npm run build`.

## Local working-folder cleanup

The sibling `fib` and `tex` folders are not Git repositories. Their obsolete qubit manuscripts, split sources, and build artifacts were moved to a verified recovery folder outside the code tree during the 2026-09-05 cleanup. Their mHC, Δ-Nets, and normalized-rank-four operator work was retained.

Local entry points now link to these maintained exports: `fib/BOOK.md`, `fib/BOOK.pdf`, `tex/notes.md`, and `tex/notes.pdf`, with adjacent illustration-directory links. The old qubit assembly path in `fib/assemble_books.py` was removed; its mHC assembly remains. These local links are conveniences, not additional manuscript sources, and are not part of this Git repository.
