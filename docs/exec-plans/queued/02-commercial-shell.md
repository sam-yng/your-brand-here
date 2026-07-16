# Commercial shell routes

Status: queued after foundation convergence.

## Objective

Build a credible static service site before relying on completed study detail pages or
live form delivery: Home, Studies index, Services, Process, About, Privacy, shared
conversion bands, and the non-submitting Start form presentation.

## Dependencies

- Foundation convergence complete.
- Relevant EXT-10 content decisions complete. Availability and portrait may remain
  omitted by their documented defaults.

## Scope and order

1. Implement Home hierarchy, BrandSlot progressive enhancement, capability strip,
   differentiated service/study previews, process preview, and CTA. Preserve the
   aura/grid hero, two CTAs, microcopy, configurable availability pill, treatment
   counter, Studies CTA hover/focus replay trigger, reserved dimensions, rotating
   circle-text SVG badge, three service-mark SVGs, three distinct study plates, sage
   fit panel, and final dark band.
2. Implement Studies index honesty hero, three alternating owned-system rows,
   owned palettes/type/media motifs/proof statements/direct links, dashed non-link
   Signal/Noise teaser, route metadata, responsive/no-JavaScript content, and CTA.
   Detail links may target works in progress but must remain truthful.
3. Implement Services from joined-up offer through engagement shapes, fit/non-offer,
   five-stage chain, three deliverable rows, Launch/Reposition/Extend cards, indicative
   AUD budget language, and final CTA.
4. Implement Process with dark promise hero, five sequential cards containing What
   happens/You get/Your part, sage three-point handoff panel, final CTA, and useful
   collapsed reading order.
5. Implement About with Sam/one-person hero, Base/Role/Stack/WCAG spec rows, Lumen,
   Rankwire, h-alter, and This studio evidence cards plus every “Hard call” note, sage
   standards panel, and final CTA without inflating project claims.
6. Implement Privacy with last-updated disclosure hero and four cards for inquiry
   data, analytics, removal, and fictional studies. Derive claims from actual
   collection plans; keep analytics conditional until EXT-08 closes.
7. Implement Start form fields and accessible presentation against the shared inquiry
   schema contract: dark hero; 7/4 light layout; white form card; required, optional,
   AUD budget, timing, referral, consent, challenge, and submit fields from the
   handoff; sticky next-steps aside; direct-email panel; no-JavaScript truth note.
   Submission truth stays owned by plan 03B.
8. Add final copy, metadata, route links, and responsive states. Preserve ordinary
   browser document navigation.

## External work

- EXT-08: analytics decision determines final Privacy copy and later CSP.
- EXT-10: human approval for service, evidence, budget, location, availability, and
  contact claims.

## Verification

- Each route independently explains its job on direct load and contains unique title,
  description, and one H1.
- Home communicates audience, offer, proof, and next action in a short scan.
- Studies index visibly labels every study as self-directed, preserves three distinct
  art directions, and keeps Signal/Noise an unlinked in-progress teaser.
- BrandSlot has reserved dimensions, readable server HTML, one cycle, and a static
  reduced-motion result; treatment count, replay trigger, and circle badge remain.
- Circle badge and all three service marks match supplied SVG motifs; decorative
  assets are hidden correctly and never replace text meaning.
- All links, mobile navigation, and form controls pass keyboard/focus review.
- Every route's desktop/mobile visual comparison is resolved against its matching
  `.dc.html`; no unexplained material mismatch remains.
- `bun run check` passes.

## Exit

Service site and Studies index are content-complete and credible, with study detail
work represented honestly and inquiry submission still explicitly non-false.
Northline and server inquiry plans can proceed independently.
