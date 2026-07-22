# Northline Atelier architecture proof

Status: completed 22 July 2026.

## Objective

Build Northline Atelier first to prove study-owned palette, typography, composition,
and interaction can depart from the shell without selector, token, or runtime leakage.

## Dependencies

- Foundation convergence and shared study honesty strip complete.
- Commercial shell study link and metadata contracts stable.
- Northline font subset of EXT-09 available, or an explicit temporary fallback noted.

## Scope and order

1. Add typed Northline content and route-owned `data-study="northline"` namespace.
2. Implement hero, honesty label, palette, collection index, comparison panel, build
   note, and slate/ink CTA from the accepted reference. Preserve “Objects with a
   spine,” four palette swatches, named products/prices, Source Serif 4/Archivo type,
   CSS-drawn placeholder captions, and the oxblood build-note content.
3. Build collection hover/focus preview with stable dimensions and a complete base
   list when JavaScript is disabled.
4. Build photo/drawing controls with both states in HTML, labelled selected state,
   keyboard operation, and no layout shift.
5. Add scoped study CSS and local state only; prove shell and other routes are
   unaffected.
6. Add route metadata/CreativeWork data inputs and focused unit/E2E coverage.

## External work

- No production account required.
- Confirm fictional scope, product names, prices, Sydney wording, and placeholder
  captions under EXT-10.

## Verification

- Desktop/mobile visual comparison to `Northline Atelier.dc.html` is resolved with no
  unexplained material mismatch.
- Hover and focus parity for every collection item.
- Both comparison states accessible without JavaScript and immediate under reduced
  motion.
- Direct-load HTML contains honesty label and all essential copy.
- No Northline variables, fonts, or selectors affect shell routes.
- Compressed route JavaScript stays at or below 90KB.
- `bun run check` passes.

## Exit

Northline is complete, honest, accessible, and isolated. Reuse only validated semantic
infrastructure in later studies; do not turn its layout into a universal template.

## Progress log

- 2026-07-22: activated on `m3a-northline-study`. Commercial-shell implementation,
  study-index contracts, EXT-09 fonts, and EXT-10 fictional-study copy are complete.
  Plan 02 remains active only for its independent EXT-08 analytics decision, which
  does not block Northline work.
- 2026-07-22: implemented typed Northline content, route-owned palette and type,
  hero, four-piece collection preview, photo/drawing comparison, build note, CTA,
  metadata, and CreativeWork JSON-LD. Both interactions retain complete server HTML,
  keyboard state, focus parity, stable dimensions, and reduced-motion behaviour.
- 2026-07-22: compared the route with the accepted handoff at 1440px and 320px,
  corrected honesty-strip casing and control semantics, and found no horizontal
  overflow or material unexplained mismatch. Northline's client route node is 2.06
  KiB gzip, below the 90KB limit.
- 2026-07-22: resolved browser-runner contention without reducing coverage: limited
  Playwright to one worker, kept every Axe assertion, and split the eight-route
  overflow loop into independently reported tests. Removed Playwright's timed
  duplicate web-server build while preserving both required build gates.
- 2026-07-22: removed hero opacity compositing after Axe exposed a transient 4.17:1
  contrast state during entry motion. Kept transform-only rise motion and proved the
  Northline desktop accessibility scan across five fresh-browser repetitions.
- 2026-07-22: owner delegated final publication-status decision. Marked Northline
  “Study available” with an “Open study” action; Sunday Service and Common Thread
  remain honestly labelled work in progress.
- 2026-07-22: completed with format, lint, typecheck, 13 unit tests, production
  build, 76 desktop/mobile browser tests, test-integrity guard, and lifecycle guard
  passing. Plan 04's study-scoping dependency is fulfilled.
