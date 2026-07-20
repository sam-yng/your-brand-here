# Foundation convergence

Status: completed 17 July 2026.

## Objective

Replace provisional foundation pieces with accepted v3 primitives so later route and
study work builds on stable tokens, typography, content, navigation, SEO, and test
contracts.

## Dependencies

- Accepted `DESIGN.md`, three design contracts, matching page handoffs, and shared
  `StudioHeader.dc.html`/`StudioFooter.dc.html`. Handoff sources are canonical for
  visual representation; contracts remain canonical for implementation safeguards.
- Confirmation URL decision before final route/canonical changes.
- EXT-09 font sourcing may proceed in parallel; fallback typography must work while
  files are unavailable.

## Decisions

- Canonical confirmation URL is `/start/thanks/`, matching accepted route and
  interaction contracts. Legacy `/thanks/` redirects permanently.
- Node 24 is the supported local, CI, and Vercel build runtime. Unsupported newer
  runtimes fail before `adapter-vercel` initializes.

## Scope and order

1. Audit every placeholder route and reconcile `/thanks/` versus
   `/start/thanks/` in source, tests, references, redirects, and link contracts.
2. Pin and document supported Node 24 behavior for local, CI, and Vercel builds so
   `adapter-vercel` never receives the unsupported current Node 26 default.
3. Replace provisional CSS with the complete semantic palette, accepted easing,
   spacing, 12/6/4-column grid, radii, dark-band grid/aura layers, focus treatments,
   view-transition behavior, motion fallbacks, and Tailwind mappings.
4. Add licensed self-hosted font faces with preload/fallback behavior and provenance;
   keep missing study fonts from leaking into shell work.
5. Add typed content modules for navigation, services, process stages, studies, and
   route metadata. Validate external-shaped content at boundaries; keep static copy
   simple.
6. Build accessible shared chrome to the exact shared handoff: skip link; 72px sticky
   blurred header; violet-square/Newsreader brand; Space Mono pill navigation; primary
   CTA; semantic desktop/mobile navigation; main landmark ownership; dark grid footer;
   top CTA; four link columns; bottom metadata row; logical mobile collapse.
7. Expand `PageMeta` into a canonical metadata primitive that can later accept social
   images and JSON-LD without duplicate tags.
8. Create reusable band, eyebrow/rule, CTA, honesty-strip, and study-boundary
   primitives only where repetition is already proven.
9. Establish test helpers for no-JS/direct-load HTML, keyboard navigation,
   reduced-motion, route axe scans, and unique metadata.

## External work

- EXT-02: owner deferred Vercel project creation until every queued plan completes.
- EXT-00: repository, local, and CI runtimes are pinned now; owner deferred hosted
  Vercel runtime evidence until every queued plan completes.
- EXT-09: source and license WOFF2 files; record provenance without copying provider
  download URLs containing tokens.
- EXT-10: foundation email/location claims confirmed; broader commercial claims stay
  owned by later plans.

## Verification

- Header/footer work at 320px, desktop, keyboard only, no JavaScript, and reduced
  motion.
- Header/footer visual comparisons against both shared `.dc.html` references have no
  unexplained material mismatch.
- No horizontal overflow or content-hidden-before-hydration behavior.
- One H1 and one main landmark per route; useful 404 recovery remains.
- Accepted color pairs pass WCAG 2.2 AA in their intended roles.
- Shell font loading does not cause destructive layout shift.
- `bun run check` passes.

## Exit

Shared primitives match accepted contracts; route/confirmation URL is frozen; route
teams can build without adding global raw colors, duplicate chrome, or new metadata
machinery. Shared handoff appearance is reproduced, not replaced by a generic shell.

## Progress log

- 2026-07-16: activated plan; audited all 11 public routes and froze confirmation URL
  as `/start/thanks/` with a permanent legacy redirect.
- 2026-07-16: pinned Node 24 across local version files, package engines, CI, and the
  pre-adapter build guard.
- 2026-07-16: replaced provisional tokens; added all nine licensed WOFF2 families,
  provenance, shell preloads, fallback behavior, and study-font isolation.
- 2026-07-16: added typed navigation, services, process, studies, and route metadata;
  implemented shared header/footer, skip target, mobile disclosure, shared primitives,
  and expanded metadata ownership.
- 2026-07-16: desktop and 320px visual comparison matches shared header reference and
  footer structure.
- 2026-07-16: added route-wide axe/landmark/metadata coverage plus no-JS, keyboard,
  reduced-motion, redirect, contrast, and overflow helpers.
- 2026-07-17: full `bun run check` passed under Node 24: formatting, lint,
  typecheck, eleven unit tests, Vercel build, 34 desktop/mobile browser tests,
  test-integrity guard, and plan-lifecycle guard.
- 2026-07-17: owner confirmed temporary public email as `young142001@gmail.com` and
  accepted “Sydney + remote”; this approved copy supersedes handoff contact text.
- 2026-07-17: owner deferred Vercel linking, hosting, preview deployment, and hosted
  Node 24 evidence until every queued plan completes. Repository and CI pins satisfy
  this milestone; hosted evidence remains a launch-hardening obligation.

## Completion

All scoped foundation work and checks are complete. Vercel project creation and hosted
runtime evidence remain intentionally deferred external work, not unfinished
foundation implementation.
