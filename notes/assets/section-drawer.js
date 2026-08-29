(() => {
  const createLink = (heading, className) => {
    const link = document.createElement("a");
    link.href = `#${heading.id}`;
    link.textContent = heading.textContent.trim();
    if (className) link.className = className;
    return link;
  };

  const appendSimpleSections = (drawer) => {
    const headings = [...document.querySelectorAll("body > h2[id]")];
    const list = document.createElement("ul");
    list.className = "section-drawer-list";

    for (const heading of headings) {
      const item = document.createElement("li");
      item.appendChild(createLink(heading));
      list.appendChild(item);
    }

    drawer.appendChild(list);
  };

  const appendBookSections = (drawer) => {
    const title = document.querySelector("body > h1:first-of-type");
    const headings = [...document.querySelectorAll("body > h1[id]")].filter(
      (heading) => heading !== title,
    );
    const list = document.createElement("ul");
    list.className = "section-drawer-list section-drawer-book";
    let chapterList = null;

    for (const heading of headings) {
      const text = heading.textContent.trim();
      const isPart = /^Part\s+[IVXLCDM]+\b/i.test(text);
      const isChapter = /^Chapter\s+\d+\b/i.test(text);

      if (isPart) {
        const item = document.createElement("li");
        const group = document.createElement("details");
        group.className = "section-group";

        const summary = document.createElement("summary");
        summary.textContent = text;
        group.appendChild(summary);

        chapterList = document.createElement("ul");
        const overview = document.createElement("li");
        overview.appendChild(createLink(heading, "section-part-link"));
        chapterList.appendChild(overview);
        group.appendChild(chapterList);
        item.appendChild(group);
        list.appendChild(item);
        continue;
      }

      const item = document.createElement("li");
      item.appendChild(createLink(heading));

      if (isChapter && chapterList) {
        chapterList.appendChild(item);
      } else {
        chapterList = null;
        list.appendChild(item);
      }
    }

    drawer.appendChild(list);
  };

  const mountProgress = () => {
    const progress = document.createElement("div");
    progress.className = "reading-progress";
    progress.setAttribute("aria-hidden", "true");
    document.body.appendChild(progress);

    let scheduled = false;
    const update = () => {
      const root = document.documentElement;
      const available = root.scrollHeight - root.clientHeight;
      const ratio = available > 0 ? root.scrollTop / available : 0;
      progress.style.transform = `scaleX(${Math.min(1, Math.max(0, ratio))})`;
      scheduled = false;
    };

    window.addEventListener(
      "scroll",
      () => {
        if (scheduled) return;
        scheduled = true;
        requestAnimationFrame(update);
      },
      { passive: true },
    );

    update();
  };

  const mount = () => {
    const drawer = document.querySelector(".section-drawer");
    if (!drawer) return;

    const isBook = drawer.dataset.mode === "book";
    if (isBook) appendBookSections(drawer);
    else appendSimpleSections(drawer);

    drawer.addEventListener("click", (event) => {
      if (event.target.closest("a")) drawer.open = false;
    });

    mountProgress();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount, { once: true });
  } else {
    mount();
  }
})();
