# Handoff: CV Website (Interactive Portfolio)

## Overview
An interactive, single-page CV/portfolio site for "Jordan Avery" (placeholder identity — real content is not yet swapped in). Opens with an animated clipboard reveal, then transitions into a scrollable CV document with a sticky header, a section progress spine (desktop) / progress bar (mobile), an AI section (chat demo + a feature-prioritisation game demo), and a working contact form UI.

## About the Design Files
The files in this bundle are **design references built in HTML/CSS/JS** (a custom lightweight component runtime — not React/Vue source you can copy verbatim). They demonstrate exact look, motion, and interaction intent. The task is to **recreate this design in the target codebase's existing environment** (React, Vue, Swift, etc.) using its established patterns/libraries — or choose an appropriate framework if none exists yet. Do not attempt to run `support.js` or the `.dc.html` runtime in production; treat the markup/styles/logic as a spec.

## Fidelity
**High-fidelity.** Colors, typography, spacing, motion timings and interaction logic below are final/intentional and should be recreated precisely, aside from the placeholder CV content (name, jobs, education) which the user will replace with real data.

## Screens / Views
Single continuous experience with 4 logical views, switched by client-side state (no real routing):

### 1. Opening / Clipboard screen
- Full-bleed dark teal radial-gradient background with an animated marquee of blurred/translucent "rival application" card rows scrolling horizontally behind the clipboard (`marquee` keyframe, 40s linear infinite, two duplicated card sets per row for a seamless loop).
- Centered wooden clipboard (realistic wood-grain via layered `repeating-linear-gradient` + `linear-gradient`, brushed-metal clip at top, steel/black pen resting diagonally on the right edge, built from stacked absolutely-positioned divs — not an image).
- Clipboard holds a blurred "paper" preview of the CV (blur removes on open). Idle state has a slow float animation (`floatnudge`, 5s ease-in-out infinite) and a soft pulsing glow.
- Copy: italic serif prompt "Click the clipboard to open my CV" below it.
- Click → `opened: true`. Clipboard scales up (1.12x) and lifts (-8px), paper blur removes, opening layer fades out over 1s, revealing the header + CV underneath. A caption "Opening full CV…" fades in during the transition.

### 2. Header (persistent, all routes)
- Fixed top bar, 66px tall, dark translucent teal background with backdrop blur, bottom border, drop shadow. Fades/slides in 0.3s after opening.
- Left: name in serif ("Jordan Avery") + small-caps accent-colored role label ("SENIOR BUSINESS ANALYST"), click → go home.
- Right: 3-line hamburger icon (accent color bars, middle bar shorter) → opens right-side menu drawer.

### 3. CV route (default view)
Two-column layout (max-width 1020px, centered): a sticky left "timeline spine" nav (desktop only, 236px) and content column.
- **Spine (desktop, ≥820px)**: sticky at `top:120px`, vertical line with a filled progress indicator that grows with scroll (`spineFillStyle`, height = scroll progress %, glow shadow). One dot + label per section; active dot is larger, filled, with a soft outer ring; completed dots filled solid; upcoming dots hollow with translucent accent border. Active section also shows a small "Now reading" caption. Clicking a dot smooth-scrolls to that section.
- **Mobile top bar (<820px)**: replaces the spine — sticky thin bar under the header with a row of small dots + connecting bars (filled = complete/current, translucent = upcoming) and the current section name in small caps below.
- **Sections** (each fades in + slides up 28px→0 over 0.7s when ~84% scrolled into view; a top border separates sections after the first):
  1. **01 — Profile**: portrait placeholder box (108×108, diagonal-stripe placeholder) + serif headline ("I turn ambiguous problems into shipped decisions.") + supporting paragraph.
  2. **02 — Experience**: repeating row pattern — monospace date range (left, fixed 104px column) + role title (17px bold) + company (13px, dimmed) + description paragraph. Two entries in the placeholder.
  3. **03 — Education**: same date/role row pattern, one entry.
  4. **04 — Skills**: wrapped pill/chip list (8 skills, 1px accent border, rounded 22px). Below, two CTA pills: solid accent "Ask my AI about me →" (→ AI route) and outlined "Get in touch" (→ Contact route).

### 4. AI route
- Header: "Interactive" eyebrow, serif H1 "Talk to my work", supporting paragraph.
- Two-tab switcher (pill buttons): "Ask about me" / "Prioritisation game". Active tab: solid accent fill, dark text; inactive: translucent white bg, subtle border.
- **Chat tab**: bordered rounded panel, scrollable 320px message list (bot bubble left-aligned translucent-accent tinted, rounded 4/14/14/14; user bubble right-aligned solid-accent fill, rounded 14/4/14/14), text input + solid "Send" button below. Seeded with one bot greeting. Sending appends a canned demo reply (placeholder — "next build phase" note underneath).
- **Game tab**: scenario briefing text (SaaS onboarding-drop-off scenario), two inputs ("Feature name" / "Why it matters") + "Add" button. Added features render as ranked cards below: rank badge (P1, P2… — first rank badge is solid accent, rest are translucent), title, detail, a canned rationale string, and a monospace score ("pts"). Empty state: dashed-border placeholder "Your ranked backlog will appear here." Footnote clarifies this is heuristic/demo ranking.

### 5. Contact route
- Eyebrow "Contact", serif H1 "Let's talk", supporting paragraph.
- Two-column layout: form (name / email / message textarea / solid "Send message" pill button) on the left; contact details (Email / Phone / Based in, each as an accent-colored label + value) fixed-width column on the right.
- On submit (requires name or email) → swaps form for a confirmation card ("Thanks, {name}.") with a "Send another" link that resets the form.

### Menu drawer (all routes)
- Right-side sliding panel (320px, slides in via `translateX`), dark teal gradient background, close "×" top-right.
- "Menu" eyebrow label, then 3 large serif nav items (Home / AI / Contact, 30px) — active item is accent-colored with a left accent border-bar. Footer text: name + location.
- Semi-transparent overlay behind it closes the menu on click.

## Interactions & Behavior
- **Opening**: click clipboard → `opened=true`; triggers the cross-fade/scale/blur-removal described above; scroll position reset to top after a 60ms delay.
- **Scroll tracking** (CV route only): on every scroll event, computes which section is nearest the vertical 34%-viewport mark (`active`), which sections have crossed the 84% mark (`revealed`, used for the fade/slide-in — sections stay revealed once triggered, no re-hide), and overall scroll progress (0–1, drives the spine fill height and is NOT reset when switching away from the CV route).
- **Section nav**: clicking a spine dot or mobile dot smooth-scrolls the CV scroll container so the section sits ~24px below the header.
- **Routing**: client-side only, 3 routes (`cv` / `ai` / `contact`) toggled by `display:block/none` on 3 always-mounted wrapper divs (keeps chat/game/contact state alive across navigation). Navigating always resets the scroll container to top and closes the menu.
- **Menu**: hamburger toggles `menuOpen`; overlay click or the × closes it; any nav item closes it and navigates.
- **AI tabs**: local `aiTab` state toggles which panel is visible (both panels stay mounted).
- **Chat**: Enter key or Send button submits; both user and canned bot messages append to a list; chat scroll container auto-scrolls to bottom after each send.
- **Prioritisation game**: "Add" appends a feature (title required, detail defaults to "No detail given" if blank) to a list; the list is re-ranked/displayed in insertion order with a canned score formula: `score = max(20, 96 - index*15)` and one of 5 canned rationale strings per rank position (only the first 5 ranks get a unique rationale, rest reuse the 5th). First-ranked card's badge is solid accent; rest are translucent.
- **Contact form**: local-state controlled inputs; submit requires name or email non-empty; shows a thank-you card with the entered name (falls back to "there"); "Send another" clears the form back to editable state.
- **Responsive breakpoint**: 820px — below it the desktop spine hides and the mobile top progress bar shows instead; content padding and max-width tighten.
- All color/opacity/transform transitions use a shared custom ease: `cubic-bezier(.22,1,.36,1)`.

## State Management
Single top-level component state (no external store):
- `opened` (bool) — has the clipboard been clicked
- `route` — `'cv' | 'ai' | 'contact'`
- `menuOpen` (bool)
- `active` (int) — index of current CV section (0–3)
- `progress` (float 0–1) — CV scroll progress
- `revealed` (object, index→bool) — which sections have animated in; section 0 starts `true`
- `aiTab` — `'chat' | 'game'`
- `chat` (array of `{role:'user'|'bot', text}`), `chatInput` (string)
- `feats` (array of `{title, detail}`), `featTitle`, `featDetail` (strings) — ranking is derived, not stored
- `cName`, `cEmail`, `cMsg` (strings), `sent` (bool), `sentName` (string)

No data fetching — all content is hardcoded placeholder copy; AI chat and feature-ranking are canned/heuristic responses (explicitly labeled in-UI as demo behavior pending real AI integration).

## Design Tokens

### Colors
- Background: radial gradient, teal/sage family — base "theme" color is tweakable (`themeColor`), default `#c9d6d1`; gradient built as `color-mix(in srgb, {themeColor} 62%, #24413a)` (center) → `40%` mix (mid) → `20%` mix (edge), all mixed toward dark teal `#24413a`/`#16302b`.
- Accent color (interactive elements, labels, borders, progress): tweakable (`accentColor`), default `#e4e6e2` (soft greyish-white). Alternate curated options: `#dcdfda`, `#eaeadf`, `#c9d6d1`, `#b9d6c9`, `#d9b877` (warm sand).
- Header background: `rgba(11,24,22,.9)` with 9px backdrop blur, border `rgba(255,255,255,.14)`.
- Menu drawer background: same gradient formula as page background but mixed 48%/22% toward `#24413a`/`#16302b`.
- Opening-screen-only background (before open): fixed dark teal radial gradient `#33544e → #274842 → #1b352f` (intentionally NOT tied to the theme tweak).
- Text: primary `#f4f9f8`; secondary body copy at 55–82% opacity of `rgba(244,249,248,…)`; headings often full-opacity `#f4f9f8` or serif in `#12302f`/`#f4f9f8` depending on surface.
- Accent-derived transparent variants used throughout via CSS custom properties: `--ac` (solid), `--acB` (alpha 1 rgba), `--ac50` (.5), `--ac28` (.28), `--ac18` (.18), `--ac12` (.12) — computed from the accent hex.
- Dark accent-on-accent text (buttons/badges filled with accent): `#04211e`.
- Clipboard wood tones: browns `#7c5230, #6b4526, #5a3a1f, #6f492a, #4e3117` layered with diagonal grain stripes; metal clip greys `#f2f3f5 → #6a6b6f`; pen: near-black/steel gradients (`#000, #2a2a2c, #535355, #7c7c7e, #e6e8ea` etc.), no accent color on the pen.

### Typography
- Display/serif: **Newsreader** (Google Font, weights 400/500/600, italic 400) — used for name, section headlines, big statement copy, thank-you heading.
- Body/UI: system sans stack `Helvetica, "Helvetica Neue", Arial, sans-serif`.
- Monospace accents (dates, scores): `ui-monospace, monospace`.
- Scale: hero statement 36px/1.14, AI/contact H1 38px/1.1, clipboard name 26px, menu items 30px serif, section eyebrows 12px/700 with `.28em` letter-spacing uppercase, body copy 14–15px/1.65–1.78, small labels 10–13px.

### Spacing / Layout
- Content max-width 1020px (CV), 820px (AI), 760px (contact), centered.
- Section padding: first section `4px 0 46px`, others `46px 0` (last `46px 0 0`), 1px top border (`rgba(255,255,255,.07)`) between sections.
- Header height 66px; spine sticky offset `top:120px`; content body padding `52px 48px 150px` (desktop), `22px 20px 120px` (mobile, <820px).
- Border radius: pills/buttons 22–24px; panels 12–14px; inputs 10px; portrait/skill-chip boxes 4–8px.

### Motion
- Shared ease: `cubic-bezier(.22,1,.36,1)`.
- Marquee card scroll: 40s linear infinite loop.
- Clipboard idle float: `floatnudge` 5s ease-in-out infinite (translateY ±9px).
- Clipboard glow pulse: `tealpulse` keyframe (uses `--acB`/`--ac50`).
- Open transition: clipboard transform 1.1s; paper blur 1s; opening-layer fade 1s; header fade/slide 0.7s (0.3s delay); reveal caption fade 0.8s (0.4s delay).
- Section reveal: opacity + translateY(28px→0), 0.7s.
- Menu drawer: transform slide 0.4s; overlay fade 0.35s.
- Scroll progress spine fill: height transition 0.2s linear (tracks scroll directly).

## Assets
No external images — everything is drawn with CSS gradients/shadows (clipboard wood grain, metal clip, pen, portrait/skill placeholders are all styled `<div>`s, not image files). Only external asset is the Newsreader Google Font (loaded via `<link>` to fonts.googleapis.com).

## Screenshots
See `screenshots/`: `01-opening-clipboard.png`, `02-cv-profile.png`, `03-ai-chat.png`, `03-ai-game.png`, `04-contact.png`.

## Files
- `CV Website.dc.html` — the full design (template + component logic) described above. This is the primary reference.
- `Opening Screen.dc.html` — an earlier/standalone version of the clipboard opening animation, useful as an isolated reference for that specific interaction.
- `CV Directions.dc.html` — earlier layout-direction explorations (kept for context on why the current spine/timeline layout was chosen; not final).

Two developer-facing "tweaks" are exposed as props in the current build and should be treated as intentional configuration points if you build a settings/theming layer: `accentColor`, `themeColor`, `blurAmount` (opening-screen paper blur, default 5px), `pileDensity` (marquee row count, default 3).
