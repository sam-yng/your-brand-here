# Your Brand Here — code handoff

**Status:** implementation-ready direction, with launch decisions listed at the end  
**Prepared:** 15 July 2026  
**Owner:** Sam Young  
**Product type:** multi-page service website and self-directed design portfolio  
**Locked stack:** Svelte 5 · SvelteKit 2 · strict TypeScript · Tailwind CSS v4 · Bun · Biome · h-alter

## 1. Executive decision

Build **Your Brand Here** as an opinionated, one-person web studio rather than a larger version of Sam's personal portfolio.

The commercial promise is:

> **Your work has a point of view. Your website should too.**

The site should sell one joined-up service: clarifying a client's story, establishing an art direction, creating a reusable design system, building the website, and launching it. It should not imply a full-service branding agency or claim commissioned work that does not exist.

The portfolio proof will be a set of **self-directed brand studies**: complete fictional briefs, each with its own page, visual language, interaction model, and implementation notes. Call them “brand studies” in client-facing copy. “Website snippets” makes the work sound smaller and less intentional than it is.

This is a genuine multi-page application built with SvelteKit. Every route must return useful server-rendered or prerendered HTML. Internal document links use `data-sveltekit-reload` at the shared layout boundary so the browser performs full-page navigation instead of SvelteKit's client router. Native cross-document View Transitions enhance supported browsers; they are not required for navigation.

## 2. Why this project is worth building

### What the existing work already proves

- [Sam Young](https://github.com/sam-yng/sam-young) proves a compact Astro build, disciplined content verification, accessible fallbacks, and a coherent “monospace editorial” system. Its dominant signatures are warm paper, near-black ink, Volt lime, hard shadows, compact first-person copy, and a single-page structure.
- [Rankwire](https://github.com/sam-yng/rankwire) develops that editorial language into a product system and adds Auth.js, Prisma, Postgres, feed ingestion, per-user ranking, tests, and repository guardrails.
- [Lumen](https://github.com/sam-yng/lumen) is the strongest proof of systems engineering: a TypeScript monorepo, Next.js, Supabase RLS, local transcription, hybrid retrieval, background work, MCP, CI, and end-to-end testing.
- The wider [GitHub profile](https://github.com/sam-yng?tab=repositories) shows numerous TypeScript application exercises, Vue work, forms, API-driven products, games, and utility projects.

### The opportunity

Your Brand Here should prove capabilities that are not yet obvious from that body of work:

1. **Commercial thinking:** turn a vague service into a clear offer and a qualified lead journey.
2. **Art-direction range:** create several credible visual systems without repeating the personal site's lime/paper/sticker vocabulary.
3. **Multi-page information architecture:** make services, process, proof, about, and inquiry pages work together.
4. **Content design:** write for prospective clients, not recruiters or other engineers.
5. **Expressive, typed interaction:** use Svelte 5, CSS, native cross-document transitions, and selective canvas work with restraint while keeping content server-rendered.
6. **Production craft for marketing sites:** responsive media, accessibility, SEO, metadata, performance budgets, analytics, spam-resistant lead capture, and truthful form feedback.

The result should communicate: **Sam can understand a business, find a visual idea that belongs to it, and carry that idea all the way into reliable production code.**

## 3. Audience and positioning

### Primary clients

- Small companies and product studios that have outgrown a starter site.
- Creative collectives, hospitality businesses, independent professionals, artists, educators, and community organisations with a real story but no strong web expression.
- Founders who value direct access to the person designing and building the work.

### Good-fit project

- A marketing or editorial website with roughly 3–12 core pages.
- A launch, repositioning, new offer, or replacement for a generic/dated site.
- A client who can provide domain expertise, timely feedback, and source material.
- A project where clarity, character, accessibility, and speed matter more than a long list of app features.

### Not the offer

- Logo-only or full corporate identity work.
- High-volume ecommerce in v1.
- A complex authenticated SaaS product disguised as a “website.”
- Unlimited revisions, speculative pitches, or a promise to make something “go viral.”

### Positioning statement

> Your Brand Here is an independent web studio by Sam Young. I help small teams, collectives, and independent people turn what makes their work distinct into a clear, memorable website — from the first page outline to the production build.

### Voice

- Direct, calm, perceptive, and lightly playful.
- Commercial without agency theatre.
- First person singular when Sam is speaking; “we” only when it clearly means Sam and the client working together.
- Use concrete verbs: shape, write, design, build, test, launch.
- Avoid: bespoke solutions, digital experiences, cutting-edge, elevate, passionate, pixel-perfect, full-service, disruptive.

## 4. Creative direction for the studio shell

### Concept: the working proof

“Your Brand Here” is not a placeholder waiting to be replaced. It is the promise: the client's identity gets the leading role. The studio shell should borrow from the visual language of a working layout — crop marks, alignment points, movable fields, layered paper, and editorial annotations — without looking like a developer tool or an unfinished wireframe.

The site begins controlled and neutral, then the studies introduce sharply different worlds. This makes range legible.

### Explicit departure from the personal brand

Do not reuse the personal site's Volt lime, thought cloud, sticker shadows, warm-paper/black dominance, JetBrains Mono labels, or monospace-editorial page grammar. A visitor should recognise the same standards, not the same skin.

### Studio palette

| Token | Value | Use |
|---|---:|---|
| `--studio-canvas` | `#F4F3EF` | quiet neutral page |
| `--studio-ink` | `#171716` | primary copy |
| `--studio-muted` | `#6B6964` | secondary copy |
| `--studio-line` | `#D7D4CC` | dividers and registration lines |
| `--studio-violet` | `#5B4BF3` | primary action and focus identity |
| `--studio-coral` | `#FF654F` | sparing signal accent |
| `--studio-mist` | `#DDE7E3` | quiet panels |
| `--studio-white` | `#FFFEFA` | raised surfaces |

Check all final text/background pairs for WCAG 2.2 AA. Accents are not automatically safe for small text.

### Type

- Display: **Newsreader Variable** — expressive enough for an art-directed studio, but not another heavy grotesque.
- Body/UI: **Onest Variable** — clear, contemporary, and warmer than the existing Geist-led systems.
- Technical/meta: use Onest in uppercase with tracking. Do not introduce another mono family merely to signal “developer.”
- Self-host WOFF2 files in `src/assets/fonts/`; do not make Google Fonts a runtime dependency.

### Layout grammar

- 12-column desktop grid, 6-column tablet grid, 4-column mobile grid.
- Content maximum `1440px`; reading measure `68ch`; fluid gutter `clamp(20px, 4vw, 64px)`.
- Generous negative space, fine rules, occasional overlapping planes, minimal radii.
- Images should feel placed, not dropped into identical cards.
- The header is stable and quiet. The studies provide the spectacle.

### Signature element

Create a reusable `<BrandSlot>` component: a typographic field that cycles through three treatments of the words “Your Brand Here” on deliberate triggers (hero introduction, hover/focus on the studies link, and final CTA). It must reserve its final dimensions, be readable without JavaScript, stop after one cycle, and become static under reduced motion.

## 5. Information architecture

| Route | Purpose | Primary action |
|---|---|---|
| `/` | State the offer, show range, establish trust, route visitors | Start a project |
| `/services/` | Explain scope, deliverables, fit, and engagement shapes | Tell me what you need |
| `/studies/` | Index the self-directed brand studies | Open a study |
| `/studies/[slug]/` | Full art-directed specimen and an honest build note | Discuss a similar challenge |
| `/process/` | Reduce uncertainty from discovery through launch | Start a project |
| `/about/` | Explain Sam's point of view and production credibility | Work with Sam |
| `/start/` | Qualify and submit an inquiry | Send project brief |
| `/thanks/` | Confirm a genuinely accepted submission | Return home |
| `/privacy/` | Explain inquiry and analytics data handling | — |
| `/404` | Helpful recovery with study links | Explore the studies |

Global navigation: **Services · Studies · Process · About · Start a project**.

The homepage may preview every section, but it must not duplicate the complete content of the child pages. Each route needs its own search intent and useful reason to exist.

## 6. First-pass copy

This copy is a strong starting point, not a promise that iteration is finished.

### Homepage

**Eyebrow**  
Independent web studio · Sydney + remote

**Hero**  
Your work has a point of view.  
Your website should too.

**Introduction**  
Your Brand Here is my one-person studio for small teams, collectives, and independent people who have outgrown the generic. Together, we shape the story, design the system, and build a fast, distinctive website that is easy to live with.

**Actions**  
Start a project · See the brand studies

**Proof line**  
Strategy, design, and build — one conversation, no hand-offs.

**Services heading**  
Not a template in better clothes.

**Services introduction**  
A good website does more than look finished. It makes the right things obvious, gives the brand a recognisable rhythm, and keeps working after launch. I handle the connected decisions so none of those jobs gets lost between disciplines.

**Service 01 — Find the signal**  
We turn scattered notes, old pages, and half-formed ideas into a clear message and a page plan with a job to do.

**Service 02 — Build the system**  
I establish the type, colour, layout, components, imagery, and motion rules that make the site feel like one specific brand.

**Service 03 — Make it real**  
I build, test, and launch the production site — responsive, accessible, fast, and documented for whatever comes next.

**Studies heading**  
New ideas, made properly.

**Studies introduction**  
These are self-directed brand studies, not borrowed client logos or dressed-up templates. Each starts with a different fictional brief and follows it through art direction, interaction, and production code.

**Process heading**  
Clear from first note to final handoff.

**Process summary**  
01 Listen and frame · 02 Write and direct · 03 Design and prototype · 04 Build and test · 05 Launch and hand over

**Fit heading**  
Best with people who care about the details, but need someone to connect them.

**Fit copy**  
You know your work. You do not need to arrive with a perfect brief, a finished sitemap, or a folder of polished copy. You do need a real goal, useful source material, and the time to make decisions together.

**Final CTA**  
Ready when the placeholder is.

**Final CTA body**  
Tell me what you are building, what is not working now, and what a better website needs to change.

**Button**  
Put your brand here

### About page opening

> I'm Sam Young, a software engineer who cares how things read, move, and feel — not only whether they run. I work where design decisions become production code, which means the idea survives the handoff because there is no handoff.

Follow this with specific evidence from Lumen, Rankwire, h-alter, and shipped studio work. Lead with outcomes and difficult decisions rather than a long technology list.

### Required honesty label for every study

> Self-directed concept. This is not commissioned client work. Built to explore [art direction / content model / interaction capability].

This label must appear near the study title, not hidden in a footer.

## 7. Brand studies

Build three complete studies for v1. A fourth is a post-launch extension. Each study has a card on `/studies/`, a dedicated route, structured case-note content, and its own scoped token file. Do not build three differently coloured versions of the same card grid.

### Study 01 — Northline Atelier

**Fictional brief:** a small architecture and interiors practice needs its work to feel rigorous and human, without the usual monochrome minimalism.  
**Visual system:** limestone, oxblood, blueprint blue, restrained serif/sans pairing, large project folios, asymmetric captions.  
**Interaction:** image-to-plan comparison; project index that changes the hero media on focus/hover; cross-page project-title continuity.  
**What it proves:** editorial art direction, responsive image work, complex galleries, semantic project content, subtle transitions.  
**Constraint:** the study remains excellent with JavaScript disabled.

### Study 02 — Sunday Service

**Fictional brief:** an all-day neighbourhood kitchen wants a site that changes character from coffee to dinner without becoming a novelty restaurant page.  
**Visual system:** butter, tomato, aubergine, condensed display type, hand-drawn ingredient marks, bold menu typography.  
**Interaction:** time-aware but manually selectable breakfast/lunch/dinner states; menu rows that reveal details with origin-aware motion; location and accessibility information treated as first-class content.  
**What it proves:** playful UI, state transitions, practical hospitality information, local business conversion, motion with restraint.  
**Constraint:** time-based content never hides information or makes the page misleading.

### Study 03 — Common Thread

**Fictional brief:** a community arts collective needs events, access information, calls for contributors, and a clear sense of shared ownership.  
**Visual system:** high-contrast civic palette, modular posters, variable-width type, accessible pattern language, no “worthy nonprofit beige.”  
**Interaction:** keyboard-friendly event filters; poster tiles that recompose without layout shift; persistent access-information drawer; print stylesheet for event listings.  
**What it proves:** inclusive design, dense content architecture, filtering, print CSS, accessibility beyond a checklist.  
**Constraint:** WCAG 2.2 AA is a design input, not a cleanup task.

### Post-launch study — Signal/Noise Records

An independent electronic label with a dark, typographic catalogue and an audio-reactive canvas. Use a dynamically imported `ogl` experiment only on this route. Audio is opt-in, animation has a static fallback, and the route owns its extra bundle. This exists to show experimental graphics without making the sales site pay for them.

## 8. Motion and transition direction

Use [Transitions.dev](https://transitions.dev/) as a reference library for interaction principles, not a checklist to copy wholesale. Recreate chosen patterns within this design system.

| Moment | Treatment | Budget |
|---|---|---:|
| Document navigation | Native cross-document View Transition; page field fades/rises while stable chrome remains visually continuous | 220–360ms |
| Mobile navigation | Origin-aware reveal from the menu button; opacity + clip/scale, never an off-screen 100vw panel by default | 180–240ms |
| Hero BrandSlot | Per-word dissolve and baseline swap; one automatic cycle only | 500–700ms |
| Study index | Media crossfade with a small blur on entry; no blur left at rest | 180–260ms |
| Accordion/menu detail | CSS grid-row expansion with chevron morph | 180–220ms |
| Form error | Short two-step horizontal correction, paired with persistent text | 220ms |
| Form success | Button-to-status text swap plus drawn check; only after the server accepts the inquiry | 300–450ms |
| Study canvas | Pointer-responsive motion isolated to the experimental route | frame-budgeted |

Rules:

- Put `data-sveltekit-reload` on the shared layout wrapper so internal document links receive full-page browser navigation. SvelteKit documents this attribute specifically for handing a route back to the browser: [SvelteKit link options](https://svelte.dev/docs/kit/link-options).
- Use `@view-transition { navigation: auto; }` as progressive enhancement for those document navigations. Do not call SvelteKit's `goto()` for ordinary links.
- Use Svelte transitions for local UI state only: menus, accordions, form feedback, and study interactions. They must not turn page routing into SPA navigation.
- No global smooth-scroll library.
- Every animation must have a reason: orientation, causality, state change, or character.
- Animate `transform`, `opacity`, `clip-path`, and carefully bounded filters. Avoid layout animation on large regions.
- Hover effects must also work on focus where relevant. Critical information cannot require hover.
- `prefers-reduced-motion: reduce` removes travel, blur, automatic cycling, parallax, and canvas motion. State changes remain immediate and understandable.
- Page content is visible before hydration. Do not ship “opacity: 0 until observed” as the default state.

## 9. Technical architecture

### Core stack

- **Svelte 5 + SvelteKit 2**, strict TypeScript, file-based multi-page routes.
- **Bun** for installs, scripts, tests, and lockfile.
- **Tailwind CSS v4** through `@tailwindcss/vite`, backed by canonical CSS custom properties and `@theme inline` mappings. The official Tailwind guide supports this SvelteKit integration: [Tailwind CSS with SvelteKit](https://tailwindcss.com/docs/installation/framework-guides/sveltekit).
- **Svelte components** for layouts, content, local state, and interactions. Use Svelte 5 runes where state is genuinely reactive; do not add stores or client state for static presentation.
- **Typed content modules** for study metadata, services, navigation, and SEO. Validate content with Zod at the boundary. Each study gets an explicit route and Svelte page rather than being forced through one generic visual template.
- **SvelteKit form actions** for the inquiry journey. They accept normal HTML `POST` submissions without JavaScript and support optional progressive enhancement: [SvelteKit form actions](https://svelte.dev/docs/kit/form-actions).
- **`@sveltejs/adapter-vercel`** for mixed prerendered pages and the server-rendered `/start` action: [SvelteKit Vercel adapter](https://svelte.dev/docs/kit/adapter-vercel).

### Framework and build packages

- `@sveltejs/kit`
- `svelte`
- `tailwindcss`
- `@tailwindcss/vite`

### Service/runtime packages

- `resend`
- `zod`
- `ogl` only when the post-launch Signal/Noise study begins

### Development packages

- `@sveltejs/adapter-vercel`
- `@sveltejs/vite-plugin-svelte`
- `@biomejs/biome` pinned exactly; Biome remains the sole linter and formatter
- `svelte-check`
- `typescript`
- `vite`
- `@playwright/test`
- `@axe-core/playwright`
- `@samyng/h-alter`

Do not add a general animation package in v1. Svelte's built-in transition/animation primitives, CSS, and the Web Animations API cover the proposed motion. Add a package only if an implemented study produces a concrete need.

### Tailwind authoring rules

- Tailwind is the primary styling framework, but `src/app.css` is the canonical source for global tokens, resets, `@font-face`, view-transition rules, and base accessibility behaviour.
- Map semantic tokens into Tailwind with `@theme inline`; components consume names such as `bg-canvas`, `text-ink`, and `font-display` instead of raw colour values.
- A study overrides semantic CSS variables inside a route namespace such as `[data-study="northline"]`. It must not create a second unscoped Tailwind theme or leak styles into the studio shell.
- Use utilities directly in Svelte markup. Extract a Svelte component when a meaningful UI pattern repeats; do not extract components merely to shorten class strings.
- Use a scoped `<style>` block for complex pseudo-elements, keyframes, experimental selectors, and canvas-specific presentation that becomes less understandable as utilities.
- Avoid `@apply` for ordinary component styling. It is permitted only for a small, documented base primitive when markup cannot own the styles.
- Do not enable Biome's nursery Tailwind class-sorting rule in the initial quality gate; its support remains incomplete. Consistent grouping is a review convention, not a formatter responsibility.

Token bridge pattern:

```css
@import "tailwindcss";

:root {
  --studio-canvas: #f4f3ef;
  --studio-ink: #171716;
  --studio-accent: #5b4bf3;
}

@theme inline {
  --color-canvas: var(--studio-canvas);
  --color-ink: var(--studio-ink);
  --color-accent: var(--studio-accent);
  --font-display: var(--studio-font-display);
  --font-body: var(--studio-font-body);
}

[data-study="northline"] {
  --studio-canvas: #d8d0bf;
  --studio-ink: #231b19;
  --studio-accent: #1f4f91;
}
```

### Biome and Svelte

Biome 2.5.3 can parse, format, and lint Svelte files when `html.experimentalFullSupportEnabled` is enabled, but that support is still marked experimental. Pin Biome exactly, keep upgrades intentional, and use `svelte-check` as the required Svelte/TypeScript semantic gate. Do not install ESLint or Prettier as parallel authorities.

Minimum `biome.json` additions:

```json
{
  "html": {
    "experimentalFullSupportEnabled": true
  },
  "css": {
    "parser": {
      "tailwindDirectives": true
    },
    "formatter": {
      "enabled": true
    }
  }
}
```

Biome documents both Svelte's experimental HTML-super-language support and Tailwind v4 directive parsing: [Biome language support](https://biomejs.dev/internals/language-support/) and [Biome configuration](https://biomejs.dev/reference/configuration/).

### Build shape

Use SvelteKit's normal SSR mode and set `prerender = true` on the `(marketing)` route group. The `/start` route exports `prerender = false` because its `+page.server.ts` owns the inquiry action. Set `trailingSlash = "always"` in the root `+layout.ts` so generated URLs match this handoff. This keeps the studio and study pages as generated HTML while the form receives server-side validation and delivery. SvelteKit supports mixing prerendered, server-rendered, and hydrated routes: [SvelteKit page options](https://svelte.dev/docs/kit/page-options).

### Suggested repository layout

```text
/
├─ AGENTS.md
├─ DESIGN.md
├─ README.md
├─ biome.json
├─ package.json
├─ playwright.config.ts
├─ svelte.config.js
├─ tsconfig.json
├─ vite.config.ts
├─ public/
│  ├─ favicon.svg
│  ├─ robots.txt
│  └─ social/
├─ src/
│  ├─ app.css
│  ├─ app.d.ts
│  ├─ lib/
│  │  ├─ assets/
│  │  │  ├─ fonts/
│  │  │  └─ studies/
│  │  ├─ components/
│  │  │  ├─ chrome/
│  │  │  ├─ forms/
│  │  │  ├─ motion/
│  │  │  ├─ seo/
│  │  │  └─ studies/
│  │  ├─ content/
│  │  │  ├─ navigation.ts
│  │  │  ├─ services.ts
│  │  │  └─ studies.ts
│  │  ├─ schemas/
│  │  │  ├─ inquiry.ts
│  │  │  └─ study.ts
│  │  ├─ server/
│  │  │  ├─ inquiry.ts
│  │  │  ├─ resend.ts
│  │  │  └─ turnstile.ts
│  │  └─ styles/studies/
│  │     ├─ common-thread.css
│  │     ├─ northline.css
│  │     └─ sunday-service.css
│  └─ routes/
│     ├─ +layout.svelte
│     ├─ +layout.ts
│     ├─ +error.svelte
│     ├─ (marketing)/
│     │  ├─ +layout.ts
│     │  ├─ +page.svelte
│     │  ├─ about/+page.svelte
│     │  ├─ privacy/+page.svelte
│     │  ├─ process/+page.svelte
│     │  ├─ services/+page.svelte
│     │  ├─ sitemap.xml/+server.ts
│     │  ├─ studies/+page.svelte
│     │  ├─ studies/northline-atelier/+page.svelte
│     │  ├─ studies/sunday-service/+page.svelte
│     │  ├─ studies/common-thread/+page.svelte
│     │  └─ thanks/+page.svelte
│     └─ start/
│        ├─ +page.svelte
│        ├─ +page.server.ts
│        └─ +page.ts
└─ tests/
   ├─ e2e/
   ├─ unit/
   └─ visual/
```

### `DESIGN.md` contract

Use the [Refero Styles](https://styles.refero.design/) approach as inspiration: make the repository's root `DESIGN.md` readable by a person and precise enough for a coding agent. It must contain:

1. Product and audience.
2. Brand thesis and anti-goals.
3. Canonical tokens with values and semantic roles.
4. Typography roles and responsive rules.
5. Page and component grammar.
6. Tailwind token mappings, utility conventions, and scoped-style exceptions.
7. Motion table, duration/easing tokens, and reduced-motion equivalents.
8. Image, illustration, and icon policy.
9. Accessibility invariants.
10. Per-study exception boundaries and a “do not drift” list.

Every study stylesheet may override only documented semantic variables inside a route-level namespace such as `[data-study="northline"]`. Tailwind utilities then resolve through those variables. A study may not leak selectors into the studio shell.

## 10. Inquiry pipeline

The form is part of the product, not a footer afterthought.

### Fields

- Name
- Email
- Company, collective, or project name
- Current website (optional)
- What are you making or changing?
- What does the new site need to achieve?
- Project type
- Indicative budget band in AUD
- Desired timing
- How did you find me? (optional)
- Privacy agreement
- Honeypot and Turnstile token

### Behaviour

1. Render a normal `<form method="POST">` on `/start` that works without JavaScript and submits to the default action in `+page.server.ts`.
2. Validate with the shared Zod schema inside the server action. Client validation improves feedback but is never authoritative.
3. Return field errors with SvelteKit's `fail()` so submitted non-sensitive values remain available and errors are associated with their controls.
4. Verify Cloudflare Turnstile through Siteverify before sending. Cloudflare requires server-side validation; client-only widgets are not protection: [Turnstile validation](https://developers.cloudflare.com/turnstile/get-started/server-side-validation/).
5. Send the qualified inquiry through Resend from a verified domain. Use both plain-text and HTML bodies, escape all submitted values, and set an idempotency key: [Resend send-email API](https://resend.com/docs/api-reference/emails/send-email).
6. Redirect to `/thanks` only after Resend accepts the request. On failure, preserve the person's entered data and provide a direct email alternative.
7. Add SvelteKit's `use:enhance` only after the no-JavaScript path works. Enhancement may provide pending and inline-success states, but it must preserve the same server action and truthful result.
8. Rate-limit the action using a simple managed store or Vercel firewall rule before launch; never rely on the honeypot alone.
9. Log delivery metadata, not the full inquiry body.

Do not publish fixed package prices in v1. Use budget bands to qualify leads and choose the minimum viable engagement before launch.

## 11. SEO, accessibility, and performance

### SEO

- Unique title, description, canonical URL, and social image for every route.
- `ProfessionalService`/`Person` JSON-LD on the studio pages; `CreativeWork` for each study. Do not use review or rating schema without real reviews.
- Generate `sitemap.xml`; disallow only non-public preview routes.
- Open Graph images should use the main shell for studio pages and the study's own art direction for study pages.
- Clear Sydney/Australia context without pretending service is geographically limited.

### Accessibility acceptance

- WCAG 2.2 AA target.
- Semantic landmarks and one clear page heading.
- Skip link, visible focus, logical tab order, 44px touch targets where practical.
- Menus, filters, drawers, comparisons, and accordions fully keyboard operable.
- Motion and canvas alternatives.
- Useful alt text; decorative marks ignored by assistive technology.
- Form errors announced, attached to fields, and retained until fixed.
- Study art direction cannot lower the accessibility floor.

### Budgets

- Studio routes: **≤ 75KB compressed JavaScript** total, including the Svelte runtime used by interactive shell components and excluding Turnstile on `/start/`.
- Content-only routes should avoid unnecessary hydration. A Svelte component does not need reactive state merely because it can have it.
- Each v1 study: **≤ 90KB compressed JavaScript**; the future canvas study owns a separately documented exception.
- LCP ≤ 2.5s at the 75th percentile, CLS ≤ 0.05, INP ≤ 200ms.
- Lighthouse CI targets: 95+ performance and 100 accessibility/SEO/best-practices on representative routes, with field data treated as the final authority.
- No autoplay video with sound; no hero video in v1.

## 12. Harness, scripts, and quality gate

Bootstrap with Bun, then install the harness with the Bun equivalent of `npx`:

```sh
bunx sv create your-brand-here
cd your-brand-here
bunx sv add tailwindcss playwright --install bun
bun add resend zod
bun add -D -E @biomejs/biome@2.5.3
bun add -D @sveltejs/adapter-vercel @axe-core/playwright @samyng/h-alter
bunx @samyng/h-alter
```

Choose the SvelteKit minimal template, TypeScript, and Bun when `sv create` prompts. After adding `@sveltejs/adapter-vercel`, replace the generated adapter-auto import in `svelte.config.js` with the Vercel adapter. The official Svelte CLI supports multiple add-ons and Bun installs: [Svelte CLI `sv add`](https://svelte.dev/docs/cli/sv-add). `bunx` is Bun's supported npm-package runner: [Bun bunx documentation](https://bun.sh/docs/pm/bunx).

Required scripts:

```json
{
  "scripts": {
    "dev": "vite dev",
    "build": "vite build",
    "preview": "vite preview",
    "format": "biome format --write .",
    "format:check": "biome ci --linter-enabled=false --assist-enabled=false .",
    "lint": "biome ci --formatter-enabled=false --assist-enabled=false .",
    "typecheck": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json",
    "test": "bun test",
    "test:e2e": "playwright test",
    "check": "bun run format:check && bun run lint && bun run typecheck && bun test && vite build && playwright test"
  }
}
```

After h-alter runs, reconcile its generated commands with these scripts rather than maintaining two quality gates. CI must use `bun install --frozen-lockfile` and run `bun run check`.

### Minimum automated coverage

- Unit tests for content schemas, inquiry validation, escaping, Turnstile response handling, and Resend error mapping.
- E2E smoke test for every route at desktop and mobile sizes.
- Keyboard test for navigation, inquiry form, event filters, accordions, and comparisons.
- Automated axe scan for every shell route and one page per study.
- Form success, validation failure, spam failure, expired Turnstile, delivery failure, and no-JavaScript flows.
- Visual baselines for the homepage plus each study at one mobile and one desktop width.
- Reduced-motion test that confirms automatic motion and canvas work are disabled.

## 13. Delivery plan

### Milestone 0 — Position and source material

- Confirm service boundaries, minimum engagement, domain, email, availability, and whether “Sydney + remote” is accurate.
- Run one copy review focused only on clarity and truth.
- Write the three fictional briefs before designing their pages.

**Exit:** approved message hierarchy, route map, and study briefs.

### Milestone 1 — Foundation

- Scaffold SvelteKit/TypeScript/Tailwind/Bun/Biome/h-alter.
- Write `DESIGN.md`, tokens, fonts, layout, header, footer, SEO component, error pages, content schemas, and CI.
- Establish `data-sveltekit-reload`, cross-document transition, hydration boundaries, and reduced-motion behaviour.

**Exit:** every route exists, passes the quality gate, and has real structural content.

### Milestone 2 — Commercial shell

- Complete Home, Services, Process, About, Start, Thanks, and Privacy.
- Build the `/start` server action with local/test Turnstile keys, Zod validation, and a Resend test path.
- Test the full lead journey before adding spectacle.

**Exit:** a credible service site could launch even if studies were temporarily simple.

### Milestone 3 — Northline Atelier

- Build the editorial system, responsive folio, project interaction, and study note.

**Exit:** the first study proves the study architecture can depart from the shell without leaking styles or runtime.

### Milestone 4 — Sunday Service and Common Thread

- Add the second and third systems, their distinct interactions, print treatment, and accessibility coverage.

**Exit:** no repeated page template is perceptible beyond shared semantic infrastructure.

### Milestone 5 — Launch hardening

- Content QA, real-device review, performance traces, analytics, security headers, rate limiting, domain/email setup, social images, and production form verification.
- Ask two non-developer readers to explain the offer after a 20-second homepage scan.

**Exit:** all definition-of-done checks pass on production.

## 14. Definition of done

- A prospective client can state who the service is for, what Sam does, and what to do next without visiting the About page.
- Every primary route is independently useful, indexable, and functional on direct load.
- The site remains an MPA; no client-side router intercepts links.
- The three studies feel authored for different fictional clients and are labelled honestly.
- The studio shell does not visually reuse the Sam Young or Rankwire systems.
- Forms never claim success before server acceptance.
- JavaScript-disabled and reduced-motion journeys remain complete.
- Mobile, keyboard, screen-reader landmarks, form errors, and focus states are verified.
- Performance and accessibility budgets pass in CI and are checked once more against production.
- `DESIGN.md`, architecture notes, tests, and implementation agree.

## 15. Decisions Sam must make before launch

These do not block scaffolding or initial design:

1. **Domain:** keep “Your Brand Here” as both project and public studio name, and choose the final domain.
2. **Minimum engagement:** define the lowest sensible budget band in AUD.
3. **Availability:** decide whether to publish an active availability signal, a typical lead time, or neither.
4. **Contact identity:** choose the public email address and verified sending subdomain.
5. **Service boundary:** confirm whether copywriting is included as collaborative shaping, offered as a separate deliverable, or limited to editing client-provided copy.
6. **Photography:** decide whether the studio shell uses an environmental portrait of Sam; the studies can proceed without it.
7. **Analytics:** choose privacy-light analytics (recommended) and state it accurately in `/privacy/`.

## 16. Guardrail for future iterations

When evaluating a new visual or interaction idea, ask:

> Does this help a visitor understand the offer, trust the work, or experience the range?

If the answer is no, it belongs in a study, not in the studio shell. If it does not help the study's fictional client either, it does not belong in the project.
