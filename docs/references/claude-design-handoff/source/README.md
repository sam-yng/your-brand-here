# Handoff: Your Brand Here — studio site (v3, "futuristic" direction)

## Overview
A complete 11-route marketing site for **Your Brand Here**, the one-person web studio of Sam Young (Sydney + remote). The site sells a joined-up service (story → art direction → design system → build → launch) and proves it through three fully art-directed, self-directed **brand studies**: a furniture/art-decor store, a video game campaign page, and a clothing label. The original strategy/copy source is `uploads/your-brand-here-code-handoff.md` (kept in this bundle's parent project); this package documents the **visual design as built**.

Target production stack (per the original handoff): **Svelte 5 + SvelteKit 2 + Tailwind v4**, statically prerendered where possible.

## About the Design Files
The `.dc.html` files in this bundle are **design references created in HTML** — working prototypes showing the intended look, motion, and behavior. They are NOT production code to copy directly. The task is to **recreate these designs in the target codebase** (SvelteKit + Tailwind, per the plan above; if the repo doesn't exist yet, scaffold it with that stack) using its established patterns. Ignore the prototypes' internal templating (`{{ }}` holes, `<sc-for>`, `<dc-import>`, `support.js`) — treat rendered output as the spec.

## Fidelity
**High-fidelity.** Colors, type, spacing, radii, motion durations, and easing are final and should be recreated pixel-faithfully at the 1440px reference width. Copy is final unless marked as placeholder. All imagery is deliberately placeholder (CSS-drawn textures/shapes) — no photography ships in v1; see Assets.

## Site architecture

| Route | File | Job |
|---|---|---|
| `/` | `Home.dc.html` | Position the studio, cycle the BrandSlot, route to studies + start |
| `/services` | `Services.dc.html` | The joined-up offer, deliverables, engagement shapes, fit/not-fit |
| `/studies` | `Studies.dc.html` | Index of the three studies + "Signal/Noise Records" (in-progress teaser) |
| `/studies/northline-atelier` | `Northline Atelier.dc.html` | Study 01 — furniture & art decor store |
| `/studies/sunday-service` | `Sunday Service.dc.html` | Study 02 — video game campaign page |
| `/studies/common-thread` | `Common Thread.dc.html` | Study 03 — clothing label |
| `/process` | `Process.dc.html` | Five stages, each with What happens / You get / Your part |
| `/about` | `About.dc.html` | Sam, evidence projects, standards |
| `/start` | `Start.dc.html` | Inquiry form (the only conversion) |
| `/start/thanks` | `Thanks.dc.html` | Truthful post-submit confirmation |
| `/privacy` | `Privacy.dc.html` | Four short privacy cards |

Shared chrome: `StudioHeader.dc.html` (sticky, dark, blurred) and `StudioFooter.dc.html` (static CTA band + link columns) appear on every page.

## Design system — studio shell ("futuristic" direction)

### Colors
| Token | Value | Use |
|---|---|---|
| `ink-black` | `#0E0E0D` | Page/dark-band background |
| `panel-black` | `#171716` | Dark buttons, near-black text on light |
| `bone` | `#F4F3EF` | Light-band background; text on dark |
| `paper` | `#FFFEFA` | Cards on light bands |
| `line-light` | `#D7D4CC` | Hairlines/borders on light |
| `line-dark` | `rgba(244,243,239,0.12–0.2)` | Hairlines/borders on dark |
| `grey` | `#6B6964` | Secondary text on light |
| `violet` (primary) | `#5B4BF3` | Primary CTAs, accents, focus |
| `violet-light` | `#8F83FF` | Links/accents on dark |
| `terracotta` (warm accent) | `#D97757` | CTA hover, honesty dots, italic accent |
| `ochre` (muted yellow) | `#C7A15A` | Triad accent, service mark 02 |
| `slate` (muted blue) | `#56708F` | Triad accent |
| `clay` (muted red) | `#A8524A` | Triad accent |
| `sage` | `#DDE7E3` | Soft callout panels on light |
| `green` | `#3E8E6E` | Success/confirmation only |

The muted triad (slate / ochre / clay) replaced an earlier vibrant blue/yellow/red — do not reintroduce saturated primaries.

### Typography
- **Newsreader** (Google Fonts, variable, weight 300–500 + italic) — display serif. Hero H1s: `clamp(72px, 8.6vw, 132px)`, weight 300, `line-height 0.98`, `letter-spacing -0.03em`; the emotional line is italic (often with the hue-shift animation, below). Section H2s: `clamp(38px, 3.6vw, 52px)`, weight 350–400.
- **Onest** (300–800) — body sans. Body 15–19px, weight 300, line-height 1.6–1.7.
- **Space Mono** (400/700) — ALL micro-labels, eyebrows, buttons, nav, chips. Pattern: 10.5–13px, weight 700, `letter-spacing 0.1–0.2em`, uppercase. This mono-label voice is the "futuristic" signature — never use Onest for uppercase labels.

### Layout & shape
- Content max-width **1440px**, gutter `clamp(20px, 4vw, 64px)`.
- Page rhythm: alternating full-bleed dark (`#0E0E0D`) and light (`#F4F3EF`) bands separated by 1px hairlines.
- Radii: cards **16–24px** (20px default), buttons/chips **999px** (fully pill). Small media cards inside plates 6–10px.
- Section headers on bands: mono eyebrow (`01 — Services`) + 1px rule filling the row (flex, `gap 20px`).

### Signature dark-band treatment (every dark section)
1. **Aura blobs**: absolutely-positioned circles ~480–900px, `border-radius:50%`, `radial-gradient` of violet `rgba(91,75,243,0.32–0.5)` / terracotta `rgba(217,119,87,0.2–0.38)` / ochre `rgba(199,161,90,0.22–0.4)` fading to transparent at 65–72%, `filter: blur(90px)`, animated with slow drift keyframes (26–38s, ease-in-out, infinite; translate ±60–140px + scale 0.9–1.2).
2. **Grid overlay**: full-bleed `linear-gradient(rgba(244,243,239,0.04–0.05) 1px, transparent 1px)` both axes, `background-size: 56px 56px`, `pointer-events:none`, `aria-hidden`.
3. Content wrapper `position: relative` above both.

### Motion
- Easing everywhere: `cubic-bezier(0.19, 1, 0.22, 1)` ("expo-out"), 0.35–0.5s.
- Entrance: `ybhRise` — `opacity 0 → 1`, `translateY(28px) → 0`, 0.9–1.1s, staggered 0.08–0.18s.
- `ybhHueShift`: 12s color cycle `#8F83FF → #D97757 → #C7A15A` on hero italic spans.
- Hovers — cards: `translateY(-4 to -8px)`, sometimes `rotate(±0.4–0.6deg)`, shadow `0 24–32px 56–80px rgba(0,0,0,…)`, border-color → violet. Primary buttons: bg violet → terracotta, text → `#171716`, `translateY(-3px)`, glow `0 16px 40px rgba(217,119,87,0.35)`. Nav links: pill bg `rgba(244,243,239,0.09)` + border `rgba(244,243,239,0.22)`.
- **`prefers-reduced-motion: reduce`**: all animations collapse to instant/single-run (`animation-duration: 0.01ms; animation-iteration-count: 1`); BrandSlot JS also jumps straight to the final treatment. Preserve this.
- **No marquees anywhere.** They were explicitly removed; do not add scrolling ticker bands.

## Screens / Views

### Shared header (`StudioHeader.dc.html`)
Sticky, `z-index 60`, 72px tall, `rgba(14,14,13,0.84)` + `backdrop-filter: blur(14px)`, bottom hairline. Left: 9px violet square + "Your Brand Here" in Newsreader italic 22px. Right: nav links (Services / Studies / Process / About) in Space Mono 12px/700/0.14em uppercase, `rgba(244,243,239,0.75)`, padding 10px 16px, pill; hover = white text + faint pill bg + border. "Start a project" = violet pill (12px 24px), hover terracotta + lift + glow.

### Shared footer (`StudioFooter.dc.html`)
Dark, grid overlay. Top band: "Put your brand here." Newsreader italic `clamp(44px,4.6vw,72px)` with violet period + "Start a project →" violet pill (right-aligned). Below: 4 columns (brand blurb / Studio links / Brand studies links / Contact), mono column headers, Onest 14px links (hover terracotta). Bottom row: © line + stack line in Space Mono 11px.

### Home (`Home.dc.html`)
1. **Hero** (dark, 3 aura blobs + grid): mono eyebrow + optional availability pill (tweakable prop, default hidden); H1 "Your work has / a point of view. / *Your website / should too.*" (italic hue-shifts); left column intro paragraph + two pills ("Start a project" violet, "See the studies →" ghost) + violet-left-border microcopy; right column **BrandSlot** — glassy plate (330px, radius 20px, `rgba(244,243,239,0.05)` + blur, corner mono captions "Field 01 · Wordmark", "Treatment n / 3", "Reserved for the client", "1440 × grid 12") cycling 3 wordmark treatments (serif italic → heavy sans with violet line → serif with dotted terracotta underline) at 0 / 1.9s / 3.8s, 0.65s crossfade + 16px vertical travel, ending on treatment 3; hovering "See the studies" replays. A 104px rotating (18s) SVG circle-text badge "Reserved for the client · Reserved ·" with terracotta center dot sits on the plate's top-right corner.
2. **Capabilities strip**: static row (no animation), Space Mono 12px items `01 Story … 05 Launch` separated by 7px colored dots (violet/ochre/terracotta/slate), dark bg, hairline below.
3. **Services** (light): eyebrow rule; H2 "Not a template in *better clothes.*"; 3 white cards (radius 20px) each with a 64px rounded-square mark (violet target / ochre four-shapes / terracotta line-chart SVG), mono number, Newsreader 27px title, body, "More →" mono link; hover lift + violet border.
4. **Brand studies** (dark): H2 "New ideas, *made properly.*" (terracotta italic); 3 tall plates (min-height 560px, radius 20px, hover lift + slight rotate + deep shadow):
   - **Northline** — limestone `#D8D0BF`; media area (240px): slow-panning diagonal stripes (`ybhPanA`, 18s) with oxblood credenza silhouette + slate "drawing" card with white grid; slate eyebrow, Source Serif 4 title 36px, oxblood "Open study →".
   - **Sunday Service** — plum `#221A26`, cream text, ochre radial glow; rotating 8-ray sun SVG (ochre, 40s) + "COMING 2027" in Anton 38px; clay Anton title.
   - **Common Thread** — ecru `#EAE5DC`; media area: 4 vertical bars (clay/slate/ochre/ink, radius 6px) pulsing `scaleY 1→0.62` (3.6s, staggered 0.5s); Anybody wide/condensed title with clay "Thread".
5. **Process** (light): H2 + "Full process →" outline pill; 5 white cards (radius 16px, italic serif violet number 34px + Onest 600 title); below, sage `#DDE7E3` rounded panel — "Best with people who care about the details…" split with body text.
6. **Final CTA** (dark, center aura + grid): mono "04 — Start", H2 "Ready when the / *placeholder* is." (hue-shift italic), paragraph, violet pill "Put your brand here".

### Services (`Services.dc.html`)
Dark aura hero: "One joined-up service, *not five hand-offs.*" + right column 5-row chain list (mono terracotta numbers, Newsreader 21px, hairlines). Light band: 3 stage rows (grid 2fr/5fr/5fr, 44px padding, hairline-separated) — mark + Newsreader 27px title / body / "You get" bullet list (violet squares); then "Engagement shapes": 3 white cards (Launch / Reposition / Extend) with mono violet meta, hover lift; budget note; then side-by-side sage "A good fit" (violet ✓) vs white "Not the offer" (terracotta ✕) rounded panels. Dark CTA band: split headline + violet pill.

### Studies index (`Studies.dc.html`)
Dark aura+grid hero: "New ideas, *made properly.*" + honesty line (terracotta dot, mono). Three full-width alternating rows (min-height 340px, radius 24px, grid 7/5 or 5/7, hover lift+rotate) — same art direction as the Home plates, larger; each row: mono eyebrow, display title, description, mono "Proves: …" line, pill "Open study →" (slate bg / ochre bg / clay bg respectively). Fourth row: dashed-border "Signal/Noise Records" teaser with terracotta "In progress" outline chip (not a link). Dark CTA band.

### Study 01 — Northline Atelier (furniture & art decor store)
Palette: limestone `#D8D0BF` bg, ink `#231B19`, oxblood `#5A2A26`, slate-blue `#3A5A7C`, cream `#EDE7D8`, blush `#E8A598` (on oxblood only). Type: **Source Serif 4** display + **Archivo** text.
- **Studio strip** (all studies): dark bar under header — "← Studies · 01 Northline Atelier" (mono) + honesty note with terracotta dot ("Self-directed concept — not commissioned client work…").
- Hero: eyebrow "Furniture & art decor · Fictional store · Sydney"; Source Serif 480 `clamp(60px,6.5vw,96px)` "Northline Atelier" over 2px ink rule; right-aligned italic "Objects with a spine."; intro paragraph + 4 palette swatches (54px squares) with vertical "Palette" label.
- **Collection index** (signature): left = "Collection 03 — hover to preview" + 4 rows (Loma Chair $1,850 / Meridian Credenza $4,200 / Halo Floor Lamp $980 / Terra Mirror $1,340; mono slate number, serif 27px name, meta, mono oxblood price; hovered row bg cream); right = 480px preview panel crossfading 4 CSS-drawn scenes (0.24s), caption bar with dark gradient. No-JS note below list.
- **"In the room / The drawing"** toggle: pill-shaped 2-button switch (active = ink bg/limestone text); 420px panel crossfades styled-room scene (panning stripes + furniture silhouettes + ochre lamp glow) ↔ slate-blue blueprint (white 26px grid + outlined shapes), captions "Placeholder — …". Explainer paragraph.
- Build note band (oxblood bg, limestone text, blush accents): 3 columns — intro / "It demonstrates" bullets / "Under the hood" bullets (scoped tokens, prerendered, ≤90KB JS, WOFF2).
- CTA: serif question + slate pill "Discuss a similar challenge" (hover ink).

### Study 02 — Sunday Service (video game campaign)
Palette: plum `#221A26` bg, deep plum `#171018`, panel `#2C2230`, cream `#F1E9DC`, ochre `#C7A15A`, clay `#A8524A`, success `#3E8E6E`. Type: **Anton** display + **Karla** text.
- Studio strip: honesty = "a fictional game, not a real release".
- Hero (ochre radial glow, `ybhGlow` 7s opacity pulse): eyebrow "A cozy kitchen-management game · Fictional title"; Anton `clamp(80px,8.6vw,128px)` "SUNDAY / SERVICE" (Service in clay); tagline paragraph; **Wishlist button** (clay pill; on click toggles to green "✓ On your wishlist") + "Coming 2027" outline chip; platform chips PC / Switch / PS5 (mono, outline pills). Right: 460px **key-art placeholder** plate (plum→brown gradient, rotating ochre sun SVG 40s, counter/crockery silhouettes, mono corner captions "Key art placeholder" / "In-engine, not final").
- **"Choose your shift"**: pill 3-way switch (Breakfast / Lunch / Dinner; active = cream bg); 5/7 panel rethemes (0.45s) — Breakfast cream `#EFE3C8`, Lunch ochre, Dinner dark plum — each with Anton mode title ("The quiet open" / "The counter rush" / "The long table"), description, mono meta line, and gradient screenshot placeholder. No-JS note: all shifts server-rendered.
- Features: 3 panel cards (`#2C2230`, radius 20px, hover lift + ochre border) — Run the pass / Regulars with stories / Make the room yours; Anton ochre titles.
- Build note band (`#171018`, clay accents): "Hype without the dark patterns." + demonstrates/hood columns.
- CTA: Anton question + ochre pill (hover clay).

### Study 03 — Common Thread (clothing label)
Palette: ecru `#EAE5DC` bg, ink `#1E1D1B`, clay `#A8524A`, slate `#56708F`, ochre `#C7A15A`, paper `#FFFEFA`, cream `#F1E9DC`. Type: **Anybody** (variable width) display + **Public Sans** text.
- Studio strip: honesty = "not a real label".
- Hero (2.5px ink bottom rule): mono eyebrows "Independent clothing label · Fictional · Melbourne" / clay "Made slowly. Mended forever."; Anybody 850/140% `clamp(64px,8vw,118px)` "COMMON" over 450/58% clay "THREAD"; horizontal triad bars (14px; clay/slate/ochre) pulsing `scaleX 1→0.55` from left (3.6s staggered) + mono "Collection 04 — Mendings".
- **Lookbook**: "The pieces" + filter pills All / Knits / Outerwear / Accessories (mono, 2px ink border, active inverted; keyboard operable; no-JS = links with URL state). Grid 3-col of product cards (paper bg, radius 16px, hover lift+rotate+shadow): 220px solid-color garment-placeholder swatch with mono caption, then Anybody 20px name + mono clay price, Public Sans fabric line, outline chips (category + "XS–4XL"). Six items: Field Jacket $340 (clay) / Rib Crew $180 / Fisherman Cardigan $260 (slate) / Wool Overshirt $290 (ink) / Watch Cap $60 (ochre) / Canvas Tote $85.
- **Sizing & care drawer**: fixed slate pill button bottom-right ("Sizing & care", ochre dot; hover ink + lift); slides up a full-width ink panel (4px ochre top border, 0.28s) with Anybody ochre heading "Sizing & care, always" + 6 bullets (XS–4XL graded, model measurements, repairs for life, mill named, plain-language care, 60-day returns).
- Build note band (ink bg, ochre accents): "Sizing as a design input." + columns.
- CTA: Anybody question + clay pill (hover ink).

### Process (`Process.dc.html`)
Dark aura hero (ochre-tinted blob): "Clear from first note to *final handoff.*". Light band: 5 stage cards (white, radius 20px, grid 3/4/3/2: italic violet number + serif title / What happens / You get / Your part with mono column labels; hover lift + violet border); sage 3-column panel (One conversation / Decisions stay visible / Built to hand over). Dark CTA band.

### About (`About.dc.html`)
Dark aura hero: "I'm Sam Young, …" with hue-shift italic; right spec list (Base / Role / Stack / Floor rows, hairlines). Light band "Proof I build what I design": 4 white cards — Lumen (violet chip "Systems engineering") / Rankwire (terracotta "Product system") / h-alter (ink "Tooling") / This studio (green "Working proof") — each with body + violet-left-border "Hard call:" line; sage panel "What I hold every build to…" + 5 standards bullets. Dark CTA band.

### Start (`Start.dc.html`)
Dark aura hero: "Put *your brand* here." (hue-shift). Light band, 7/4 grid:
- **Form** (white card, radius 24px): Name* + Email* (2-col) → Company + Current website (optional) → "What are you making or changing?"* textarea → "What does the new site need to achieve?" textarea → Project type / Indicative budget AUD (Under $10k · 10–20k · 20–40k · 40k+ · Help me scope it) / Desired timing selects (3-col) → "How did you find me?" → consent checkbox linking to Privacy* → footer row: dashed Turnstile placeholder ("verified server-side before anything is sent") + violet pill submit "Send project brief".
- Validation: on submit, invalid fields get `#C2311C` border + 12.5px message (Name ≥2 chars; email regex; brief ≥8 chars; consent required). Sending state: button darkens, label "Sending…", then navigate to Thanks (~0.9s in prototype; in production only on server 200 — never claim success early). Inputs: 1px `#D7D4CC` border, radius 2px, violet focus outline; keep typed values on failure.
- **Aside** (sticky): "What happens next" 3 numbered items (italic violet serif numerals); sage "Prefer plain email?" panel; no-JS/truthfulness note.

### Thanks (`Thanks.dc.html`)
Full dark page, large violet→terracotta aura. Outline pill badge "Inquiry received" (terracotta dot); "Your brief is in. *Thank you.*" (hue-shift); paragraph noting confirmation is only shown after acceptance; violet pill "Return home" + ghost "Browse the studies →"; right glassy card (blur, radius 20px) "What happens next" with terracotta italic numerals.

### Privacy (`Privacy.dc.html`)
Dark aura hero "Short, because there isn't much to *disclose.*" (terracotta italic) + "Last updated July 2026". Light band: 2×2 rounded cards — Your inquiry / Analytics / Removal / The studies (last on sage).

## Interactions & Behavior (summary)
- BrandSlot cycle + replay-on-hover (Home); availability pill + motion kill-switch are component props/config.
- Northline: hover/focus collection rows swap preview (0.24s fade); photo/drawing toggle (0.3s fade, no layout shift, keyboard operable, both states in HTML).
- Sunday: wishlist toggle (clay→green, confirm-on-success semantics in production); shift switcher rethemes panel (0.45s bg/color transition).
- Common Thread: category filters recompose grid without layout shift (URL-state links without JS); sizing drawer `translateY(105%→0)` 0.28s, `aria-expanded` on the trigger.
- All interactive elements keyboard reachable; visible focus (violet outline on light, white/violet on dark).

## State Management
- Home: `treatment (0–2)` + timers; `availability` config.
- Northline: `activePiece (0–3)`, `view ('photo'|'plan')`.
- Sunday: `shift (0–2)`, `wished (bool)`.
- Common Thread: `filter ('all'|'knits'|'outerwear'|'accessories')` (URL-backed), `drawerOpen (bool)`.
- Start: field values, `tried`, `sending`; submit → server → redirect to Thanks only on success.

## Design Tokens (shell quick reference)
- Colors: see table above. Studies own scoped palettes (suggest `[data-study="…"]` token overrides, per the original plan).
- Spacing: gutter `clamp(20px,4vw,64px)`; section padding-y 88–128px; card padding 30–38px; grid gaps 16–24px (cards), `clamp(32px,4vw,72px)` (columns).
- Radii: 999px pills · 20px cards (16/24 variants) · 2px inputs.
- Shadows: cards `0 24px 56px rgba(23,23,22,0.12–0.14)` (light) / `0 32px 72–80px rgba(0,0,0,0.45–0.6)` (dark); CTA glow `0 16px 40px rgba(217,119,87,0.35)`; BrandSlot `0 28px 80px rgba(0,0,0,0.45)`.
- Motion: expo-out `cubic-bezier(0.19,1,0.22,1)`; drift 26–38s; rise 0.9–1.1s; hue-shift 12s; reduced-motion collapse.

## Assets
- **Fonts** (Google Fonts in prototypes; self-host WOFF2 in production): Newsreader, Onest, Space Mono (shell) · Source Serif 4, Archivo (Northline) · Anton, Karla (Sunday) · Anybody, Public Sans (Common Thread).
- **No raster images.** All media areas are CSS-drawn placeholders (stripes, grids, silhouettes, gradient "screenshots") intentionally awaiting real photography/key art/lookbook shots. Keep the mono "placeholder" captions until real assets land.
- Inline SVGs to recreate: circle-text badge (Home), 8-ray sun (Sunday ×2, Studies, Home plate), 3 service marks (Home/Services).

## Files
- `Home.dc.html`, `Services.dc.html`, `Studies.dc.html`, `Process.dc.html`, `About.dc.html`, `Start.dc.html`, `Thanks.dc.html`, `Privacy.dc.html`
- `Northline Atelier.dc.html`, `Sunday Service.dc.html`, `Common Thread.dc.html`
- `StudioHeader.dc.html`, `StudioFooter.dc.html` (shared chrome)
- `support.js` — prototype runtime only; do not port.

Open any `.dc.html` in a browser to see the rendered reference. An earlier, pre-"pop" iteration exists in the parent project's `v1/` folder for history; it is not part of this handoff.
