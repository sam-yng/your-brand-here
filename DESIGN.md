# Your Brand Here design contract

Status: foundation contract. Refine visual details against the forthcoming Claude design handoff without weakening these product, accessibility, or architecture boundaries.

## 1. Product and audience

Your Brand Here is the independent web studio of Sam Young. It helps small teams, collectives, hospitality businesses, independent professionals, artists, educators, and community organisations turn a distinct point of view into a clear, memorable production website.

The core offer joins message shaping, art direction, design systems, implementation, testing, launch, and handoff. The primary action is “Start a project”. Brand studies are explicitly self-directed concepts and demonstrate range without implying commissioned work.

## 2. Brand thesis and anti-goals

Thesis: “Your work has a point of view. Your website should too.” The shell resembles a controlled working layout: alignment points, fine rules, placed planes, editorial annotation, and deliberate open space. It begins quiet so each study can introduce a different world.

Voice: direct, calm, perceptive, lightly playful, and first-person singular. Prefer concrete verbs such as shape, write, design, build, test, and launch.

Do not:

- reuse the Sam Young or Rankwire lime, sticker-shadow, warm-paper/black, thought-cloud, or monospace-editorial systems;
- imitate agency scale or claim branding services beyond the real offer;
- describe fictional studies as client work;
- use generic identical cards as the dominant layout grammar;
- add animation, canvas, or client state without a concrete communication job.

## 3. Canonical tokens

`src/app.css` is the source of truth. Components consume semantic names, never copied hex values.

| Token | Value | Role |
| --- | --- | --- |
| `--studio-canvas` | `#F4F3EF` | primary page field |
| `--studio-ink` | `#171716` | primary copy |
| `--studio-muted` | `#6B6964` | secondary copy |
| `--studio-line` | `#D7D4CC` | rules and registration lines |
| `--studio-violet` | `#5B4BF3` | primary action and focus identity |
| `--studio-coral` | `#FF654F` | sparing signal accent |
| `--studio-mist` | `#DDE7E3` | quiet panels |
| `--studio-white` | `#FFFEFA` | raised surfaces |

All text/background pairs must pass WCAG 2.2 AA. Accent tokens are not presumed safe for small text.

## 4. Typography and responsive rules

- Display: Newsreader Variable, self-hosted WOFF2.
- Body and UI: Onest Variable, self-hosted WOFF2.
- Technical labels: Onest uppercase with measured tracking. No decorative mono family.
- Font files belong in `src/lib/assets/fonts/`; system fallbacks remain functional before or without font download.
- Reading measure: `68ch` maximum.
- Content maximum: `1440px`.
- Fluid gutter: `clamp(20px, 4vw, 64px)`.
- Grid: 12 columns desktop, 6 tablet, 4 mobile.
- Type may scale fluidly but must not force horizontal scrolling at 320px.

## 5. Page and component grammar

The stable shell contains a quiet header, footer, skip link, and main landmark. Pages use generous negative space, fine rules, occasional overlapping planes, and minimal radii. Images look deliberately placed rather than dropped into a uniform card library.

`BrandSlot` is the signature shell component. It cycles through three treatments of “Your Brand Here” on limited triggers, reserves its final dimensions, stops after one cycle, renders readable server HTML, and is static under reduced motion.

Every route has one clear heading, unique metadata, and a useful direct-load HTML response. Homepage previews must not replace the reason for child pages to exist. Study honesty labels appear beside the title.

## 6. Tailwind and scoped CSS

- Tailwind utilities are the primary component authoring tool.
- `@theme inline` maps utilities such as `bg-canvas`, `text-ink`, and `font-display` to canonical semantic variables.
- Extract components for meaningful repeated UI, not merely to hide utility strings.
- Use scoped styles for complex pseudo-elements, keyframes, experimental selectors, print behavior, and canvas presentation.
- Avoid `@apply` except for a small documented base primitive whose markup cannot own the styles.
- Biome does not sort Tailwind classes; consistent grouping is a review convention.

Study exceptions live in `src/lib/styles/studies/` and must be scoped under `[data-study="northline"]`, `[data-study="sunday-service"]`, or `[data-study="common-thread"]`. They may override documented semantic variables and route-owned selectors only.

## 7. Motion

| Moment | Treatment | Budget | Reduced motion |
| --- | --- | ---: | --- |
| document navigation | field fade/rise; stable chrome continuity | 220–360ms | immediate replacement |
| mobile navigation | origin-aware opacity and clip/scale | 180–240ms | immediate state |
| BrandSlot | word dissolve and baseline swap; one cycle | 500–700ms | static treatment |
| study index | media crossfade with entry blur only | 180–260ms | direct swap |
| disclosure detail | grid-row expansion and chevron morph | 180–220ms | immediate state |
| form correction | brief horizontal correction plus persistent text | 220ms | text only |
| accepted form | status swap and drawn check | 300–450ms | immediate status |

Use motion for orientation, causality, state, or character. Prefer transform, opacity, clip-path, and bounded filters. No global smooth scrolling, page opacity gates, or critical hover-only information.

## 8. Image, illustration, and icon policy

- Store owned source media by study under `src/lib/assets/studies/`.
- Provide intrinsic dimensions and responsive sources to prevent layout shift.
- Write useful alt text for informative media and empty alt text for decoration.
- Use illustrations and ingredient/poster marks as part of a study-specific system, not shell decoration.
- Prefer a small consistent SVG icon set. Icons never replace text where meaning could be ambiguous.
- No autoplay video with sound and no shell hero video in v1.

## 9. Accessibility invariants

- WCAG 2.2 AA is the minimum across shell and studies.
- Semantic landmarks, skip link, visible focus, logical tab order, and practical 44px touch targets.
- Menus, filters, drawers, comparisons, and disclosures work by keyboard.
- Form errors are persistent, announced, linked to controls, and preserved until fixed.
- JavaScript-disabled and reduced-motion journeys remain complete.
- Content is visible before hydration.
- Canvas or time-aware experiences have complete static/manual alternatives.
- Study art direction cannot lower the shell’s accessibility floor.

## 10. Study boundaries and do-not-drift list

Northline Atelier proves editorial folios and restrained image interaction. Sunday Service proves playful but truthful state. Common Thread proves inclusive dense content, filters, access information, and print CSS. They may share semantic infrastructure, but must not look like recoloured instances of one page template.

Do not drift into:

- unscoped study variables or selectors;
- raw palette values scattered through components;
- SPA routing for ordinary links;
- hidden content based on time, pointer availability, JavaScript, or animation support;
- a general animation dependency without an implemented need;
- a future experimental study’s bundle leaking into the studio shell;
- false success states before server acceptance;
- design polish that obscures the offer, trust, or range.

## Implementation boundary

The marketing route group is prerendered. `/start/` remains server-rendered for a SvelteKit form action. Normal internal links are browser document navigations through `data-sveltekit-reload`; cross-document View Transitions are progressive enhancement. The shell target is at most 75KB compressed JavaScript, and each v1 study target is at most 90KB.
