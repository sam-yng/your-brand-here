# Accepted Claude Design system

Status: canonical visual direction, accepted 16 July 2026.

## Authority and use

This document distils the accepted Claude Design v3 handoff into an implementation
contract. Use sources in this order:

1. Root [`DESIGN.md`](../../DESIGN.md) for product truth, accessibility, architecture,
   performance, and non-goals.
2. This document and the sibling route and interaction contracts for accepted visual
   and behavioral decisions.
3. The matching high-fidelity
   [`.dc.html` source](../references/claude-design-handoff/source/) for exact values or
   composition omitted by derived docs.
4. The handoff [`README.md`](../references/claude-design-handoff/source/README.md) for
   Claude Design's complete summary.
5. The original strategy handoff for background only.

The v3 references are final at 1440px. Recreate them responsively; do not copy their
prototype runtime or templating. Copy is final unless marked as placeholder.

## Accepted change from foundation direction

The handoff intentionally replaces several provisional choices:

- dark `#0E0E0D` and light `#F4F3EF` bands replace a mostly quiet light field;
- terracotta `#D97757` replaces provisional coral `#FF654F`;
- muted slate, ochre, and clay replace saturated primary accents;
- Space Mono becomes the shell's technical label, nav, chip, and button voice;
- 16–24px cards and pill controls replace minimal radii;
- aura blobs and a fine grid become the recurring dark-band signature.

These changes do not override content honesty, WCAG 2.2 AA, progressive enhancement,
route architecture, form truthfulness, or bundle budgets.

## Shell palette

| Name | Value | Role |
| --- | --- | --- |
| void | `#0E0E0D` | page and dark-band background |
| ink | `#171716` | near-black text and dark controls on light |
| bone | `#F4F3EF` | light bands and text on dark |
| paper | `#FFFEFA` | raised light surfaces |
| line | `#D7D4CC` | light-band hairlines |
| muted | `#6B6964` | secondary light-band copy |
| violet | `#5B4BF3` | primary actions, accents, and focus identity |
| violet light | `#8F83FF` | accessible dark-band accents |
| terracotta | `#D97757` | warm signal, honesty dots, and CTA hover |
| ochre | `#C7A15A` | muted triad accent |
| slate | `#56708F` | muted triad accent |
| clay | `#A8524A` | muted triad accent |
| sage | `#DDE7E3` | quiet callout panels |
| success | `#3E8E6E` | confirmed success only |

Dark hairlines use bone at 12–20% opacity. Accent colors are not automatically valid
for small text; verify every foreground/background pair.

## Typography

### Shell

- Newsreader Variable, weights 300–500 plus italic: display headings and emotional
  phrases.
- Onest, weights 300–800: body copy and ordinary interface text.
- Space Mono, weights 400 and 700: nav, eyebrows, micro-labels, chips, and buttons.
- Hero headings: `clamp(72px, 8.6vw, 132px)`, weight 300, line-height `0.98`,
  letter-spacing `-0.03em`.
- Section headings: `clamp(38px, 3.6vw, 52px)`, weight 350–400.
- Body copy: 15–19px, weight 300, line-height 1.6–1.7.
- Technical labels: 10.5–13px, usually weight 700, uppercase, letter-spacing
  0.1–0.2em.

Self-host production WOFF2 files. System fallbacks must keep content usable before
font load.

### Study-owned type

| Study | Display | Text |
| --- | --- | --- |
| Northline Atelier | Source Serif 4 | Archivo |
| Sunday Service | Anton | Karla |
| Common Thread | Anybody Variable | Public Sans |

Study families and palettes remain scoped to their route namespace. They must not
leak into the studio shell or one another.

## Layout and shape

- Content maximum: 1440px.
- Gutter: `clamp(20px, 4vw, 64px)`.
- Grid: 12 columns desktop, 6 tablet, 4 mobile.
- Reading measure: 68ch maximum.
- Section vertical padding: 88–128px.
- Card gaps: 16–24px; large column gaps: `clamp(32px, 4vw, 72px)`.
- Cards: 20px default radius, with 16px and 24px variants.
- Buttons and chips: fully pill-shaped, `999px` radius.
- Inputs: 2px radius.
- Section headings pair a Space Mono eyebrow with a filling 1px rule.
- Ordinary routes alternate full-bleed dark and light bands separated by hairlines.

Responsive layouts must preserve hierarchy, readable order, tap targets, and no
horizontal scroll at 320px. The 1440px references establish fidelity, not a fixed
canvas.

## Dark-band signature

Every major dark band uses three layers:

1. Content in a positioned wrapper above decoration.
2. A non-interactive 56px square grid using bone at roughly 4–5% opacity.
3. One or more large blurred radial auras in violet, terracotta, or ochre.

Auras are roughly 480–900px, blurred around 90px, and may drift 60–140px with small
scale changes over 26–38 seconds. Decoration is `aria-hidden`, ignores pointer events,
never blocks copy, and becomes static under reduced motion.

## Shared chrome

### Header

- Sticky, 72px high, z-index 60.
- Background `rgba(14,14,13,0.84)` with 14px backdrop blur and bottom hairline.
- Brand: 9px violet square plus Newsreader italic wordmark.
- Desktop nav: Space Mono uppercase pill links.
- Primary action: violet pill; terracotta hover with small lift and glow.
- Mobile navigation must preserve semantic links, focus handling, and immediate
  reduced-motion state changes.

### Footer

- Dark static band with grid overlay.
- Top CTA: “Put your brand here.” and primary start link.
- Four-column desktop layout: brand, studio, studies, contact.
- Bottom metadata row uses Space Mono.
- Columns collapse in a logical reading order on narrow screens.

## Motion

- Standard easing: `cubic-bezier(0.19, 1, 0.22, 1)`.
- Normal interactive transitions: 0.35–0.5 seconds.
- Rise entrance: opacity plus 28px translate over 0.9–1.1 seconds, lightly staggered.
- Hue shift: 12-second violet-light → terracotta → ochre cycle on selected italic
  display phrases.
- Aura drift: 26–38 seconds.
- Card hover: 4–8px lift, optional rotation no more than about 0.6 degrees, stronger
  shadow, and relevant accent border.
- Primary CTA hover: violet → terracotta, 3px lift, warm glow.
- No marquees, global smooth scrolling, page opacity gates, or critical hover-only
  information.

Under `prefers-reduced-motion: reduce`, collapse animations and transitions to
0.01ms/single-run behavior. BrandSlot jumps to its final treatment. Content and state
remain understandable without animation.

## Media and assets

- No raster images were supplied or expected for v1.
- Retain CSS-drawn media placeholders and their honest mono captions until real owned
  assets exist.
- Recreate the supplied inline SVG motifs: BrandSlot circle badge, Sunday Service
  eight-ray sun, and three service marks.
- Real media later requires intrinsic dimensions, responsive sources, and purposeful
  alt text.
- Decorative grids, auras, texture, and placeholder geometry use empty alt text or
  `aria-hidden` as appropriate.

## Production boundary

- Implement with Svelte 5, SvelteKit 2, Tailwind v4, and scoped CSS where needed.
- Keep shell semantic tokens in `src/app.css`; components consume semantic names.
- Keep study token overrides under route-owned `data-study` namespaces.
- Treat prototype `support.js`, custom tags, inline event strings, and template holes as
  reference machinery only.
- Preserve prerendered marketing routes, server-rendered `/start`, normal document
  links, truthful server acceptance, and existing JavaScript budgets.
