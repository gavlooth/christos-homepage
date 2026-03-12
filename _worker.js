export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    // Never expose repository internals or worker/config files.
    if (
      path.startsWith("/.git") ||
      path.startsWith("/_worker") ||
      path.startsWith("/wrangler") ||
      path.endsWith(".toml") ||
      path.endsWith(".md")
    ) {
      return new Response("Not found", {
        status: 404,
        headers: { "cache-control": "no-store" },
      });
    }

    return env.ASSETS.fetch(request);
  },
};
