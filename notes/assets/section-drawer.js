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

  const mountActiveSection = (drawer) => {
    const links = [...drawer.querySelectorAll('a[href^="#"]')];
    const targets = new Map(
      links
        .map((link) => {
          const id = decodeURIComponent(link.hash.slice(1));
          return [document.getElementById(id), link];
        })
        .filter(([heading]) => heading),
    );
    let activeLink = null;
    let activeGroup = null;

    const setActive = (heading) => {
      const link = targets.get(heading);
      if (!link || link === activeLink) return;

      activeLink?.classList.remove('is-active');
      activeLink?.removeAttribute('aria-current');
      activeGroup?.classList.remove('is-active-group');

      link.classList.add('is-active');
      link.setAttribute('aria-current', 'location');
      activeLink = link;
      activeGroup = link.closest('.section-group');

      if (activeGroup) {
        activeGroup.classList.add('is-active-group');
        if (drawer.open) activeGroup.open = true;
      }
    };

    const headings = [...targets.keys()];
    let scheduled = false;
    const updateActiveSection = () => {
      const threshold = window.innerHeight * 0.22;
      let current = headings[0];

      for (const heading of headings) {
        if (heading.getBoundingClientRect().top > threshold) break;
        current = heading;
      }

      setActive(current);
      scheduled = false;
    };

    window.addEventListener(
      'scroll',
      () => {
        if (scheduled) return;
        scheduled = true;
        requestAnimationFrame(updateActiveSection);
      },
      { passive: true },
    );

    const requested = document.getElementById(
      decodeURIComponent(location.hash.slice(1)),
    );
    setActive(requested || headings[0]);
    updateActiveSection();
  };

  const mount = () => {
    const drawer = document.querySelector(".section-drawer");
    if (!drawer) return;

    const isBook = drawer.dataset.mode === "book";
    if (isBook) appendBookSections(drawer);
    else appendSimpleSections(drawer);

    mountActiveSection(drawer);

    const sidebarQuery = window.matchMedia("(min-width: 84rem)");
    const syncNavigationLayout = () => {
      drawer.classList.toggle("section-drawer--sidebar", sidebarQuery.matches);
      if (sidebarQuery.matches) drawer.open = true;
    };

    sidebarQuery.addEventListener("change", syncNavigationLayout);
    syncNavigationLayout();

    mountProgress();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount, { once: true });
  } else {
    mount();
  }
})();
