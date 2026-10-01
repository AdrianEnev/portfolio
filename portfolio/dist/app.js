const hero = document.querySelector(".hero");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const mobileNav = document.querySelector(".mobile-nav");
const palettes = [
  {
    ink: "#151c2b", paper: "#f2f4f8", accent: "#9cc1ff", "accent-strong": "#2d60ce",
    "work-bg": "#152036", "work-fg": "#f3f6fc", "work-muted": "#b8c2d4", "work-border": "#52617c",
    "lab-hover": "#2d60ce", "about-bg": "#dfe7f6", "about-copy": "#33425e", "about-rule": "#a4b3ce",
    "skills-bg": "#1b2d4c", "recognition-bg": "#203455", "recognition-fg": "#f3f6fc", "recognition-rule": "#7385a1",
    "project-one": "#c2d5fa", "project-one-ink": "#1d3355", "project-two": "#e7c1d6", "project-two-ink": "#3f2640",
    "project-three": "#d8b79d", "project-three-ink": "#402b23"
  },
  {
    ink: "#291d20", paper: "#f8f2ec", accent: "#f6ba9d", "accent-strong": "#ae4934",
    "work-bg": "#2d2226", "work-fg": "#fff5ef", "work-muted": "#d4bcb6", "work-border": "#70555c",
    "lab-hover": "#ae4934", "about-bg": "#ead7ce", "about-copy": "#4c3437", "about-rule": "#b79d9b",
    "skills-bg": "#3c2a30", "recognition-bg": "#4a3037", "recognition-fg": "#fff4ed", "recognition-rule": "#97767d",
    "project-one": "#efc79d", "project-one-ink": "#4b3025", "project-two": "#e7b8bd", "project-two-ink": "#48272e",
    "project-three": "#c9b6a9", "project-three-ink": "#3e302c"
  },
  {
    ink: "#231b37", paper: "#f4f1f9", accent: "#cebaff", "accent-strong": "#7045b9",
    "work-bg": "#241e35", "work-fg": "#f9f4ff", "work-muted": "#c5b9d6", "work-border": "#67577e",
    "lab-hover": "#7045b9", "about-bg": "#e5def2", "about-copy": "#433758", "about-rule": "#b5a9c8",
    "skills-bg": "#302644", "recognition-bg": "#392b50", "recognition-fg": "#faf5ff", "recognition-rule": "#8c7aa7",
    "project-one": "#d2c2ff", "project-one-ink": "#31204d", "project-two": "#ecc5df", "project-two-ink": "#4d2c45",
    "project-three": "#c3c9e5", "project-three-ink": "#2f3550"
  }
];
const toRgb = (hex) => [1, 3, 5].map((index) => parseInt(hex.slice(index, index + 2), 16));
const paletteRgb = palettes.map((palette) => Object.fromEntries(Object.entries(palette).map(([name, hex]) => [name, toRgb(hex)])));
const rootStyle = document.documentElement.style;
const themeMeta = document.querySelector('meta[name="theme-color"]');
let targetProgress = 0;
let displayedProgress = null;
let colorFrame = 0;

function smoothstep(value) {
  const t = Math.min(1, Math.max(0, value));
  return t * t * (3 - 2 * t);
}

function palettePosition(progress) {
  if (progress < .24) return [0, 0, 0];
  if (progress < .43) return [0, 1, smoothstep((progress - .24) / .19)];
  if (progress < .57) return [1, 1, 0];
  if (progress < .76) return [1, 2, smoothstep((progress - .57) / .19)];
  return [2, 2, 0];
}

function renderPalette(progress) {
  const [from, to, blend] = palettePosition(progress);
  const colors = {};
  for (const name of Object.keys(paletteRgb[0])) {
    const rgb = paletteRgb[from][name].map((channel, index) => Math.round(channel + (paletteRgb[to][name][index] - channel) * blend));
    colors[name] = rgb;
    rootStyle.setProperty(`--${name}`, `rgb(${rgb.join(", ")})`);
  }
  rootStyle.setProperty("--accent-glow", `rgba(${colors.accent.join(", ")}, .38)`);
  themeMeta?.setAttribute("content", `rgb(${colors.paper.join(", ")})`);
}

function animatePalette() {
  colorFrame = 0;
  displayedProgress += (targetProgress - displayedProgress) * .18;
  if (Math.abs(targetProgress - displayedProgress) < .001) displayedProgress = targetProgress;
  renderPalette(displayedProgress);
  if (displayedProgress !== targetProgress) colorFrame = requestAnimationFrame(animatePalette);
}

function updateScrollProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  targetProgress = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
  rootStyle.setProperty("--scroll-width", `${targetProgress * 100}%`);
  if (displayedProgress === null || reduceMotion.matches) {
    displayedProgress = targetProgress;
    renderPalette(reduceMotion.matches ? (targetProgress < 1 / 3 ? 0 : targetProgress < 2 / 3 ? .5 : 1) : displayedProgress);
  } else if (!colorFrame) {
    colorFrame = requestAnimationFrame(animatePalette);
  }
}

window.addEventListener("scroll", updateScrollProgress, { passive: true });
window.addEventListener("resize", updateScrollProgress);
window.addEventListener("pageshow", updateScrollProgress);
updateScrollProgress();

const heroSystem = hero?.querySelector(".hero-system");
if (hero && window.matchMedia("(pointer: fine)").matches) {
  let pointerFrame = 0;
  let pointerX = .5;
  let pointerY = .5;
  let heroWidth = 0;
  let heroHeight = 0;
  const renderHeroPointer = () => {
    pointerFrame = 0;
    hero.style.setProperty("--hero-glow-x", `${((pointerX - .5) * heroWidth).toFixed(2)}px`);
    hero.style.setProperty("--hero-glow-y", `${((pointerY - .5) * heroHeight).toFixed(2)}px`);
    if (!heroSystem) return;
    const dx = pointerX - .5;
    const dy = pointerY - .5;
    heroSystem.style.setProperty("--system-pointer-x", `${(dx * 12).toFixed(2)}px`);
    heroSystem.style.setProperty("--system-pointer-y", `${(dy * 10).toFixed(2)}px`);
  };
  const scheduleHeroPointer = () => {
    if (!pointerFrame) pointerFrame = requestAnimationFrame(renderHeroPointer);
  };
  hero.addEventListener("pointermove", (event) => {
    if (window.innerWidth <= 800 || reduceMotion.matches) return;
    const bounds = hero.getBoundingClientRect();
    heroWidth = bounds.width;
    heroHeight = bounds.height;
    pointerX = Math.min(1, Math.max(0, (event.clientX - bounds.left) / bounds.width));
    pointerY = Math.min(1, Math.max(0, (event.clientY - bounds.top) / bounds.height));
    scheduleHeroPointer();
  }, { passive: true });
  hero.addEventListener("pointerleave", () => {
    pointerX = .5;
    pointerY = .5;
    scheduleHeroPointer();
  });
  reduceMotion.addEventListener("change", () => {
    if (!reduceMotion.matches) return;
    pointerX = .5;
    pointerY = .5;
    scheduleHeroPointer();
  });
}

mobileNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => { mobileNav.open = false; });
});

const uiStudy = document.querySelector(".ui-study");
const uiStudyDescription = document.querySelector("#ui-study-description");
const uiDescriptions = {
  type: "A large heading establishes hierarchy; supporting details stay secondary.",
  rhythm: "Offset cards and a shifted background change the balance of the composition.",
  motion: "The cards, shape and arrow respond when the selected state changes."
};
uiStudy?.querySelectorAll("[data-ui-mode-choice]").forEach((button) => {
  button.addEventListener("click", () => {
    const mode = button.dataset.uiModeChoice;
    uiStudy.dataset.uiMode = mode;
    uiStudyDescription.textContent = uiDescriptions[mode];
    uiStudy.querySelectorAll("[data-ui-mode-choice]").forEach((choice) => {
      choice.setAttribute("aria-pressed", String(choice === button));
    });
  });
});

const sectionIds = ["work", "ui", "lab", "about", "recognition", "contact"];
const sectionObserver = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (!entry.isIntersecting) continue;
    document.querySelectorAll(".main-nav a").forEach((link) => {
      if (link.getAttribute("href") === `#${entry.target.id}`) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }
}, { rootMargin: "-25% 0px -60% 0px" });
sectionIds.forEach((id) => {
  const section = document.getElementById(id);
  if (section) sectionObserver.observe(section);
});

if (!reduceMotion.matches && "IntersectionObserver" in window) {
  const revealTargets = document.querySelectorAll(
    ".section-heading, .project-card, .work-view-all, .concept-card, .ui-heading, .ui-study, .lab-heading, .lab-item, .about-intro, .journey-block, .skills-block, .recognition-heading, .recognition-highlight, .year-item"
  );
  revealTargets.forEach((item) => item.classList.add("reveal-target"));
  document.documentElement.classList.add("motion-ready");
  const revealObserver = new IntersectionObserver((entries, observer) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
  revealTargets.forEach((item) => revealObserver.observe(item));
}
