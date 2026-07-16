# Foundation convergence

Status: queued after end-to-end mapping; first implementation plan.

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

- EXT-02: Vercel project can be created now; no production launch yet.
- EXT-00: align local, CI, and Vercel runtime versions before treating gate output as
  reproducible.
- EXT-09: source and license WOFF2 files; record provenance without copying provider
  download URLs containing tokens.
- EXT-10: confirm claims needed by shared nav/footer and metadata.

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
