import { PROJECTS } from "./data/projects.js";
import { SITE } from "./data/site.js";

const state = {
  activeSlug: null
};

const elements = {
  brand: document.querySelector("#site-brand"),
  navigationList: document.querySelector("#navigation-list"),
  project: document.querySelector("#project"),
  projectContent: document.querySelector("#project-content"),
  projectFooter: document.querySelector("#project-footer"),
  thumbnails: document.querySelector("#thumbnails"),
  previousProject: document.querySelector("#previous-project"),
  nextProject: document.querySelector("#next-project"),
  showIndex: document.querySelector("#show-index"),
  mainContent: document.querySelector("#main-content")
};

const publishedProjects = PROJECTS.filter((project) => project.draft !== true);

const isExternalUrl = (value) => /^https?:\/\//i.test(value);

const absoluteUrl = (value) => {
  if (!value) {
    return "";
  }

  return isExternalUrl(value) ? value : new URL(value, SITE.canonicalUrl).href;
};

const setMetaContent = (selector, value) => {
  const element = document.querySelector(selector);
  if (element && value) {
    element.setAttribute("content", value);
  }
};

const projectBySlug = (slug) => publishedProjects.find((project) => project.slug === slug) || null;

const projectUrl = (project) => {
  const url = new URL(window.location.href);
  url.searchParams.set("project", project.slug);
  return `${url.pathname}?${url.searchParams.toString()}`;
};

const indexUrl = () => {
  const url = new URL(window.location.href);
  url.searchParams.delete("project");
  const query = url.searchParams.toString();
  return `${url.pathname}${query ? `?${query}` : ""}`;
};

const updateDocumentMeta = (project = null) => {
  const title = project ? `${project.title} - ${SITE.title}` : SITE.title;
  const description = project?.shortDescription || SITE.description;
  const image = project?.thumbnail || SITE.socialImage;
  const imageAlt = project ? `${project.title} project image` : SITE.socialImageAlt;
  const url = project ? new URL(`?project=${encodeURIComponent(project.slug)}`, SITE.canonicalUrl).href : SITE.canonicalUrl;

  document.title = title;
  setMetaContent("meta[name='description']", description);
  setMetaContent("meta[property='og:title']", title);
  setMetaContent("meta[property='og:description']", description);
  setMetaContent("meta[property='og:url']", url);
  setMetaContent("meta[property='og:image']", absoluteUrl(image));
  setMetaContent("meta[property='og:image:alt']", imageAlt);
  setMetaContent("meta[name='twitter:title']", title);
  setMetaContent("meta[name='twitter:description']", description);
  setMetaContent("meta[name='twitter:image']", absoluteUrl(image));
  setMetaContent("meta[name='twitter:image:alt']", imageAlt);
  document.querySelector("link[rel='canonical']")?.setAttribute("href", url);
};

const decorateProjectContent = () => {
  elements.projectContent.querySelectorAll("a[href]").forEach((anchor) => {
    const href = anchor.getAttribute("href") || "";
    if (!href.startsWith("mailto:") && !href.startsWith("#")) {
      anchor.target = "_blank";
      anchor.rel = "noreferrer";
    }
  });

  elements.projectContent.querySelectorAll("img").forEach((image, index) => {
    image.loading = index === 0 ? "eager" : "lazy";
    image.decoding = "async";
    if (!image.alt) {
      image.alt = `${state.activeSlug || "Project"} image ${index + 1}`;
    }
  });
};

const renderNavigation = () => {
  const fragment = document.createDocumentFragment();

  publishedProjects.forEach((project) => {
    const item = document.createElement("li");
    item.className = project.slug === state.activeSlug ? "is-active" : "";
    const link = document.createElement("a");
    link.href = projectUrl(project);
    link.textContent = project.title;
    link.addEventListener("click", (event) => {
      event.preventDefault();
      navigateToProject(project.slug);
    });
    item.append(link);
    fragment.append(item);
  });

  elements.navigationList.replaceChildren(fragment);
};

const renderThumbnails = () => {
  const fragment = document.createDocumentFragment();

  publishedProjects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-thumb";
    card.classList.toggle("is-active", project.slug === state.activeSlug);
    const link = document.createElement("a");
    link.href = projectUrl(project);
    link.addEventListener("click", (event) => {
      event.preventDefault();
      navigateToProject(project.slug);
    });

    const imageWrap = document.createElement("div");
    imageWrap.className = "thumb-image";
    imageWrap.style.setProperty("--thumb-position", project.thumbnailPosition || "50% 50%");
    if (project.thumbnail) {
      const image = document.createElement("img");
      image.src = project.thumbnail;
      image.alt = project.media?.[0]?.alt || `${project.title} thumbnail`;
      image.loading = "lazy";
      image.decoding = "async";
      imageWrap.append(image);
    }

    const title = document.createElement("div");
    title.className = "thumb-title";
    const span = document.createElement("span");
    span.textContent = project.title;
    title.append(span);
    link.append(imageWrap, title);
    card.append(link);
    fragment.append(card);
  });

  elements.thumbnails.replaceChildren(fragment);
};

const renderProject = (project) => {
  state.activeSlug = project.slug;
  elements.project.hidden = false;
  elements.projectContent.innerHTML = project.contentHtml || "";
  decorateProjectContent();
  elements.projectFooter.replaceChildren();
  updateDocumentMeta(project);
};

const renderIndex = () => {
  state.activeSlug = null;
  elements.project.hidden = true;
  elements.projectContent.replaceChildren();
  elements.projectFooter.replaceChildren();
  updateDocumentMeta();
};

const render = ({ focus = false } = {}) => {
  const params = new URLSearchParams(window.location.search);
  const requestedSlug = params.get("project");
  const activeProject = requestedSlug ? projectBySlug(requestedSlug) : null;

  if (activeProject) {
    renderProject(activeProject);
  } else {
    renderIndex();
  }

  renderNavigation();
  renderThumbnails();

  if (focus) {
    elements.mainContent.focus({ preventScroll: true });
  }
};

const navigateToProject = (slug) => {
  const project = projectBySlug(slug);
  if (!project) {
    return;
  }
  window.history.pushState({ project: slug }, "", projectUrl(project));
  window.scrollTo(0, 0);
  render({ focus: true });
};

const navigateToIndex = () => {
  window.history.pushState({ project: null }, "", indexUrl());
  window.scrollTo(0, 0);
  render({ focus: true });
};

const moveProject = (direction) => {
  const currentIndex = publishedProjects.findIndex((project) => project.slug === state.activeSlug);
  if (currentIndex < 0) {
    return;
  }
  const nextIndex = (currentIndex + direction + publishedProjects.length) % publishedProjects.length;
  navigateToProject(publishedProjects[nextIndex].slug);
};

const setupSiteShell = () => {
  elements.brand.textContent = SITE.header.name;
  elements.brand.href = indexUrl();
  elements.brand.addEventListener("click", (event) => {
    event.preventDefault();
    navigateToIndex();
  });
  elements.showIndex.href = indexUrl();
  elements.showIndex.addEventListener("click", (event) => {
    event.preventDefault();
    navigateToIndex();
  });
};

elements.previousProject.addEventListener("click", () => moveProject(-1));
elements.nextProject.addEventListener("click", () => moveProject(1));

window.addEventListener("popstate", () => render());

setupSiteShell();
render();
