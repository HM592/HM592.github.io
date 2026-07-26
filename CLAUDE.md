# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Vite dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the production build locally

No test runner or linter is configured in this repo.

## What this is

A personal CV/portfolio single-page site (plain JS React + Vite, no TypeScript), deployed to GitHub Pages at `hm592.github.io`. Because the repo is a **user page** (`HM592.github.io`), it deploys to the domain root, not a subpath — `vite.config.js` sets `base: '/'` and must stay that way. Deployment is automatic via `.github/workflows/deploy.yml` on push to `main`, using the "GitHub Actions" Pages source (not a `gh-pages` branch).

## Architecture

**Fake routing, always-mounted.** There's no router. `App.jsx` holds a `route` state (`'cv' | 'ai' | 'contact'`) and renders all three route components simultaneously inside one shared scroll container (`.app-routes`), toggling visibility with inline `display: block/none`. This is deliberate, not a shortcut — it's what lets state (chat history, form input, scroll position) survive navigating away and back. Don't refactor this into conditional rendering or a real router without accounting for that.

**Scroll-driven CV state lives in `App.jsx`, not the CV components.** The shared scroll container is ref'd in `App.jsx`, and `handleScroll` computes three things by querying `[data-sec]` section wrapper divs: `active` (nearest section at the 34%-viewport mark), `revealed` (sections that have crossed the 84%-viewport mark, used for fade-in-on-scroll — sticky once true, never un-reveals), and `progress` (0–1, drives the spine's fill height). This only runs when `route === 'cv'`. `goTo(i)` smooth-scrolls to a section by the same `[data-sec]` query.

**Design tokens are centralized in `src/styles/theme.css`.** Retheming starts there:
- `--theme-color` / `--accent-color` — the two raw tunable colors
- `--ac`, `--ac50`, `--ac28`, `--ac18`, `--ac12` — accent-derived alpha variants (borders, dots, glows)
- `--text`, `--text-muted`, `--accent-text` — dark text colors for the light background (see below)
- `--button-fill` — a separately toned-down deep teal used *only* for solid CTA/submit button fills, intentionally different from `--ac` (the brighter accent read as too "cyan" at button scale)
- `--font` — Poppins, used for the header/menu/CV/Contact UI only

**The background gradient's range is deliberately narrow.** `.app-shell`'s background (`App.css`) is `position: fixed`, so it doesn't scroll with the page — content passes through its *entire* color range while scrolling, not just wherever it starts. An early version used a wide light-to-dark gradient, which meant no single fixed text color could stay WCAG AA (4.5:1) at both the light and dark ends simultaneously. The fix was to keep all three gradient stops within a narrow, bright band rather than picking a "compromise" text color — read the comments in `App.css`/`theme.css` before changing the gradient's mix percentages.

**Personal CV content lives only in `src/data/cv.js`.** Name, role, profile copy, experience, education, skills, contact email, and logo image imports/background colors all live there — components read from it and must never hardcode personal text. Structural/UI copy (nav labels, section eyebrow numbers, button labels) can stay inline in components.

**The opening "clipboard" screen is an intentionally separate visual system.** Everything in `src/components/opening/` keeps its own fixed dark background gradient and its own fonts (Newsreader for the name, Manrope for the prompt text), regardless of the main site's theme — this has been confirmed multiple times across theme changes, not an oversight. Don't "fix" it to match the main site's palette.

**Revisit/reduced-motion logic (`App.jsx`).** `getInitialOpened()` runs synchronously as a `useState` lazy initializer (avoids a flash of the animation before it's skipped): `prefers-reduced-motion` is checked first and always wins; otherwise a `localStorage` timestamp (`cv-opened-at`) skips the animation if it was last opened within a 5-minute window.

**Accessibility conventions.** Every interactive element is a real `<button>`, never a `<div onClick>`. Elements that are mounted-but-invisible (the header while the opening animation plays, menu items while the drawer is closed) get `tabIndex={-1}` conditionally so keyboard Tab can't land on them while hidden. The global focus-visible ring is defined once in `src/index.css` and applies site-wide.

**Contact form** (`src/components/contact/ContactRoute.jsx`) posts directly from the client to the Web3Forms API using a public access key (this is Web3Forms' normal model, not a leaked secret) and includes a hidden honeypot field for spam rejection.

## Design reference

`design_handoff_cv_website/` contains the original design handoff (a README spec plus non-React reference HTML/CSS files and screenshots) — treat it as the *starting point* for layout, spacing, and motion, not literal code to copy, and not necessarily the current visual design. The live site has since diverged from it on explicit request in several ways: Poppins replaced Newsreader/Helvetica across the main UI (the opening screen kept its original fonts), and the color scheme moved from the handoff's dark-background/light-text design to a bright light-teal background with dark text plus a richer teal accent. `theme.css` and the current components are the source of truth for colors; the handoff doc is the source of truth for structure/copy/motion that hasn't been explicitly changed.
