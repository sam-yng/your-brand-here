# Accepted route specifications

Status: implementation acceptance criteria derived from Claude Design v3.

Exact copy and visual values live in the matching
[`.dc.html` source](../references/claude-design-handoff/source/). These criteria define
the required page shape without treating prototype code as production code.

## Route map

| Route | Reference | Primary job |
| --- | --- | --- |
| `/` | `Home.dc.html` | position studio, prove range, route to inquiry |
| `/services` | `Services.dc.html` | explain joined-up offer, deliverables, fit |
| `/studies` | `Studies.dc.html` | index three honest self-directed studies |
| `/studies/northline-atelier` | `Northline Atelier.dc.html` | editorial commerce proof |
| `/studies/sunday-service` | `Sunday Service.dc.html` | campaign and state-theming proof |
| `/studies/common-thread` | `Common Thread.dc.html` | inclusive lookbook commerce proof |
| `/process` | `Process.dc.html` | make five-stage engagement legible |
| `/about` | `About.dc.html` | introduce Sam and evidence standards |
| `/start` | `Start.dc.html` | collect one truthful project inquiry |
| `/start/thanks` | `Thanks.dc.html` | confirm accepted inquiry only |
| `/privacy` | `Privacy.dc.html` | explain minimal data handling |

All pages use shared header/footer, unique metadata, one clear H1, useful direct-load
HTML, visible focus, and logical responsive reading order.

## Home

Reference: [`Home.dc.html`](../references/claude-design-handoff/source/Home.dc.html).

1. Dark aura/grid hero with positioning copy, two CTAs, microcopy, and optional
   availability pill.
2. Right-side BrandSlot glass plate cycles three reserved wordmark treatments once,
   reports treatment count, and includes rotating circle badge.
3. Static capability strip: Story, Art direction, Design system, Build, Launch.
4. Light services band with three differentiated cards and service marks.
5. Dark studies band with three tall, art-directed plates; each study looks like a
   separate world rather than a recolored card.
6. Light process preview with five stages and a sage fit panel.
7. Dark final CTA band.

BrandSlot reserves final dimensions, renders readable server HTML, ends on treatment
three, may replay from the studies CTA hover/focus, and is static under reduced motion.

## Services

Reference: [`Services.dc.html`](../references/claude-design-handoff/source/Services.dc.html).

- Dark hero explains one joined-up service and displays the five linked stages.
- Light band includes three detailed stage rows with deliverables.
- Three engagement cards cover Launch, Reposition, and Extend.
- Budget copy remains indicative and in AUD; no invented fixed package prices.
- “A good fit” and “Not the offer” panels remain visibly distinct.
- Dark final CTA asks for the brief and promises an honest fit response.

## Studies index

Reference: [`Studies.dc.html`](../references/claude-design-handoff/source/Studies.dc.html).

- Hero states all studies are self-directed concepts, not commissioned work.
- Three large alternating study rows preserve their owned palettes, type, media motifs,
  proof statements, and direct links.
- Signal/Noise Records appears only as a dashed, non-link “In progress” teaser.
- Final CTA connects the same standard to real client briefs.

## Northline Atelier

Reference:
[`Northline Atelier.dc.html`](../references/claude-design-handoff/source/Northline%20Atelier.dc.html).

- Scope: furniture and art-decor store; fictional, clearly labelled.
- Palette: limestone, ink, oxblood, slate-blue, cream, blush.
- Type: Source Serif 4 plus Archivo.
- Hero includes “Objects with a spine,” intro copy, and four palette swatches.
- Collection index lists four named pieces and prices. Hover or focus changes a stable
  480px preview; the base list remains useful without JavaScript.
- Photo/drawing toggle crossfades in a stable 420px panel. Both states exist in HTML
  and controls are keyboard operable.
- Build-note band explains honest proof, scoped tokens, prerendering, WOFF2, and budget.
- Route-owned CTA uses the slate/ink study language.

## Sunday Service

Reference:
[`Sunday Service.dc.html`](../references/claude-design-handoff/source/Sunday%20Service.dc.html).

- Scope: fictional cozy kitchen-management game campaign; never presented as a real
  release.
- Palette: plum, deep plum, cream, ochre, clay, success green.
- Type: Anton plus Karla.
- Hero contains platform chips, coming-2027 language, key-art placeholder, and wishlist
  control.
- Wishlist only reaches confirmed green state after the applicable production success
  boundary; prototype optimism is not an implementation contract.
- Breakfast, Lunch, and Dinner controls retheme one stable panel. All shift content is
  present without JavaScript.
- Three feature cards and dark build-note band retain the anti-dark-pattern message.

## Common Thread

Reference:
[`Common Thread.dc.html`](../references/claude-design-handoff/source/Common%20Thread.dc.html).

- Scope: fictional Melbourne clothing label; never presented as real commerce.
- Palette: ecru, ink, clay, slate, ochre, paper, cream.
- Type: Anybody Variable plus Public Sans.
- Hero uses wide/condensed word forms and three pulsing collection bars.
- Lookbook contains six named products, prices, fabric notes, categories, and XS–4XL
  chips.
- Filters are keyboard operable and URL-backed; no-JS links preserve filter state.
- Sizing-and-care trigger controls a drawer with explicit expanded state, repairs,
  measurements, mill, care, and returns information.
- Print CSS keeps essential product, sizing, and care content useful.

## Process

Reference: [`Process.dc.html`](../references/claude-design-handoff/source/Process.dc.html).

- Dark hero sets the “clear from first note to final handoff” promise.
- Five light cards explain What happens, You get, and Your part for every stage.
- Sage panel reinforces one conversation, visible decisions, and usable handoff.
- Content remains sequential and understandable when multi-column layouts collapse.

## About

Reference: [`About.dc.html`](../references/claude-design-handoff/source/About.dc.html).

- Hero identifies Sam as one person joining design and engineering.
- Spec rows cover base, role, stack, and WCAG floor.
- Evidence cards: Lumen, Rankwire, h-alter, and this studio. Preserve honest project
  types and each “Hard call” note.
- Sage standards panel lists the non-negotiable build standards.

## Start

Reference: [`Start.dc.html`](../references/claude-design-handoff/source/Start.dc.html).

- Dark hero leads into a 7/4 light-band form and sticky “What happens next” aside.
- Required fields: name, email, project/change brief, and consent.
- Optional and select fields follow the accepted handoff copy, including AUD budget
  bands and desired timing.
- Turnstile is verified server-side before sending anything.
- Errors remain attached to controls, persistent, announced, and values survive failure.
- Submit enters a sending state, but redirects to Thanks only after server acceptance.
- Plain email path and no-JS truthfulness note remain visible.

## Thanks

Reference: [`Thanks.dc.html`](../references/claude-design-handoff/source/Thanks.dc.html).

- Full dark accepted-state page with aura, receipt badge, next-step card, and home/study
  links.
- It is reachable as confirmation only after accepted submission; copy must not imply
  delivery when downstream handling failed.

## Privacy

Reference: [`Privacy.dc.html`](../references/claude-design-handoff/source/Privacy.dc.html).

- Dark hero includes last-updated month and concise disclosure position.
- Four light cards cover inquiry data, analytics, removal, and fictional studies.
- Copy stays short and must be revised if real collection or processing expands.
