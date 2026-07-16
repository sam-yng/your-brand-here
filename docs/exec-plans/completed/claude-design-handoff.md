# Claude Design handoff ingestion

Status: completed 16 July 2026.

## Objective

Preserve the supplied Claude Design archive and its extracted contents in the
repository, then convert them into durable design, route, and interaction contracts
that can guide implementation from any device.

## Inputs

- `Design Site Handoff.zip`, SHA-256
  `3C7F9AC275ADCE1B5C5993364621BFB6843DCB4F378C6BDBEF08EE43B560B30A`.
- Fourteen `.dc.html` page/component references, shared `support.js`, a v3 handoff
  README, and the original strategy handoff.
- Existing root `DESIGN.md`, repository architecture, and h-alter system-of-record
  rules.

## Decisions

- Preserve the original ZIP and extracted files under
  `docs/references/claude-design-handoff/`.
- Exclude that raw source directory from Biome so quality automation cannot rewrite
  the accepted third-party artifact.
- Treat v3 as the final high-fidelity visual direction at 1440px.
- Treat prototype HTML and `support.js` as reference machinery, not production code.
- Make v3 visual choices supersede provisional foundation colors, technical type,
  radii, and band treatment.
- Keep existing product honesty, accessibility, progressive enhancement, architecture,
  and performance constraints authoritative.
- Split durable guidance into design-system, route, and interaction contracts so
  future implementation can consume it without reverse-engineering every prototype.

## Deliverables

- Original ZIP, extracted raw source, and provenance/security README.
- Accepted design-system contract.
- Route-by-route acceptance criteria.
- Interaction, state, accessibility, and form-truth contracts.
- Updated root design and repository status pointers.

## Verification

- Archive entries checked for safe relative paths before extraction.
- Extracted file inventory matched the 16 archive entries.
- Archive SHA-256 recorded.
- Derived route map checked against all 11 routes and shared header/footer references.
- Repository docs links and quality gate run before publication.

## Deferred implementation

This ingestion changes documentation only. Production tokens, fonts, layouts,
components, route copy, interactions, form handling, and tests remain separate
implementation work.
