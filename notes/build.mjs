// Static site builder.
// Reads Markdown notes from notes/posts/*.md (with `---` frontmatter) and
// assembles the deployed web root in public/: one HTML page per note plus
// public/notes/index.html, and copies the hand-authored index.html + styles.css
// into public/. The Worker (wrangler.worker.toml) serves public/. Run with
// `npm run build`.

import {
  readFileSync,
  writeFileSync,
  readdirSync,
  mkdirSync,
  copyFileSync,
} from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { marked } from "marked";

const here = dirname(fileURLToPath(import.meta.url));
const postsDir = join(here, "posts");
const repoRoot = join(here, "..");
const webDir = join(repoRoot, "public");
const notesOutDir = join(webDir, "notes");
mkdirSync(notesOutDir, { recursive: true });

function parsePost(raw) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw);
  if (!match) return { meta: {}, body: raw };
  const meta = {};
  for (const line of match[1].split(/\r?\n/)) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    meta[line.slice(0, idx).trim()] = line.slice(idx + 1).trim();
  }
  return { meta, body: match[2] };
}

function formatDate(iso) {
  if (!iso) return "";
  const d = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const NAV = `
      <nav aria-label="Primary">
        <a href="/#about">About</a>
        <a href="/#work">Work</a>
        <a href="/notes/">Notebook</a>
        <a href="/#contact">Contact</a>
      </nav>`;

function page({ title, description, body }) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <meta name="theme-color" content="#f7f4ee" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Literata:opsz,wght@7..72,400;7..72,500;7..72,600&family=Manrope:wght@400;500;600&display=swap"
      rel="stylesheet"
    />

    <link rel="stylesheet" href="/styles.css" />
  </head>
  <body>
    <header class="site-header">
      <p class="site-name"><a href="/">Christos Chatzifountas</a></p>${NAV}
    </header>

    <main>
${body}
    </main>

    <footer class="site-footer">
      <p>Christos Chatzifountas</p>
    </footer>
  </body>
</html>
`;
}

const files = readdirSync(postsDir).filter((f) => f.endsWith(".md"));

const posts = files.map((file) => {
  const { meta, body } = parsePost(readFileSync(join(postsDir, file), "utf8"));
  const slug = file.replace(/\.md$/, "").replace(/^\d{4}-\d{2}-\d{2}-/, "");
  return {
    slug,
    title: meta.title || slug,
    date: meta.date || "",
    summary: meta.summary || "",
    html: marked.parse(body),
  };
});

// Newest first.
posts.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

for (const post of posts) {
  const article = `      <article class="post">
        <p class="post-back"><a href="/notes/">← The notebook</a></p>
        <h1>${escapeHtml(post.title)}</h1>
        <p class="post-meta">${formatDate(post.date)}</p>
        <div class="post-body">
${post.html}
        </div>
      </article>`;
  writeFileSync(
    join(notesOutDir, `${post.slug}.html`),
    page({
      title: `${post.title} — Christos Chatzifountas`,
      description: post.summary || post.title,
      body: article,
    }),
  );
}

const items = posts
  .map(
    (p) => `          <li>
            <a class="post-title" href="/notes/${p.slug}.html">${escapeHtml(p.title)}</a>
            <span class="post-date">${formatDate(p.date)}</span>${
              p.summary
                ? `\n            <p class="post-summary">${escapeHtml(p.summary)}</p>`
                : ""
            }
          </li>`,
  )
  .join("\n");

const indexBody = `      <section class="notes-index">
        <p class="notes-back"><a href="/">← Home</a></p>
        <h1>Notebook</h1>
        <p class="notes-intro">Short, often unfinished notes on software, mathematics, and things I keep thinking about.</p>
        <ul class="post-list">
${items || "          <li>Nothing here yet.</li>"}
        </ul>
      </section>`;

writeFileSync(
  join(notesOutDir, "index.html"),
  page({
    title: "Notebook — Christos Chatzifountas",
    description: "Short notes on software, mathematics, and things I keep thinking about.",
    body: indexBody,
  }),
);

// Copy the hand-authored top-level pages into the served web root.
copyFileSync(join(repoRoot, "index.html"), join(webDir, "index.html"));
copyFileSync(join(repoRoot, "styles.css"), join(webDir, "styles.css"));

console.log(`Built ${posts.length} note(s) + index into public/.`);
