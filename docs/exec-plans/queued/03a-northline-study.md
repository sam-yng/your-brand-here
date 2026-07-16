# Northline Atelier architecture proof

Status: queued after commercial shell.

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
