# Claude Design handoff archive

Status: accepted visual design source, imported 16 July 2026.

## Provenance

- Received as [`Design Site Handoff.zip`](./Design%20Site%20Handoff.zip) from Claude
  Design and preserved unchanged beside this README.
- Archive SHA-256: `3C7F9AC275ADCE1B5C5993364621BFB6843DCB4F378C6BDBEF08EE43B560B30A`.
- Archive contents are preserved under [`source/`](./source/) with filenames and relative links unchanged.
- Import only changed the archive's outer directory name to `source`; file contents were not rewritten.
- Raw source is excluded from Biome formatting and linting so repository automation
  cannot silently rewrite the accepted artifact.

## What each source means

| Source | Role |
| --- | --- |
| [`source/README.md`](./source/README.md) | Claude Design's complete v3 handoff summary and final visual direction |
| [`source/*.dc.html`](./source/Home.dc.html) | High-fidelity page and component references at a 1440px reference width |
| [`source/original-strategy-handoff.md`](./source/original-strategy-handoff.md) | Earlier product, content, architecture, and delivery strategy |
| [`source/support.js`](./source/support.js) | Prototype renderer required by the `.dc.html` files; never production code |

The `.dc.html` files contain prototype-only templating such as `{{ }}`, `<sc-for>`,
and `<dc-import>`. Inspect rendered output and source values, but recreate the design
with the repository's SvelteKit and Tailwind patterns.

## Active-content warning

Treat every prototype file as untrusted active content. Opening a `.dc.html` file runs
the vendored `support.js`, which uses dynamic code evaluation and loads SRI-pinned
React/Babel packages from unpkg. Prototype font declarations also contact Google Fonts.
Do not open these files in a trusted or authenticated browser profile. Prefer source
inspection; if a rendered preview is necessary, use an isolated browser context with no
sensitive session or local data. Never deploy `support.js` or the prototype HTML.

Copy is final unless explicitly marked as placeholder. CSS-drawn media and their
captions are intentional v1 placeholders; no raster imagery was supplied.

## Derived repository contracts

- [`../../design-docs/claude-design-system.md`](../../design-docs/claude-design-system.md)
  defines authority, shell tokens, typography, layout, and motion.
- [`../../design-docs/route-specifications.md`](../../design-docs/route-specifications.md)
  turns the page prototypes into route acceptance criteria.
- [`../../design-docs/interaction-contracts.md`](../../design-docs/interaction-contracts.md)
  records state, progressive enhancement, accessibility, and truthful form behavior.
- [`../../../DESIGN.md`](../../../DESIGN.md) remains the top-level product,
  accessibility, and architecture contract and now points to this accepted handoff.

When a derived document omits a visual value, use the matching `.dc.html` reference.
When the v3 handoff conflicts with `original-strategy-handoff.md` on visual treatment,
v3 wins. Product honesty, accessibility, performance, and architecture boundaries do
not weaken.
