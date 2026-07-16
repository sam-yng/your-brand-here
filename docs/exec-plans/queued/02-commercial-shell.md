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
   differentiated service/study previews, process preview, and CTA.
2. Implement Studies index honesty hero, three alternating owned-system rows,
   non-link Signal/Noise teaser, route metadata, responsive/no-JavaScript content,
   and CTA. Detail links may target works in progress but must remain truthful.
3. Implement Services from joined-up offer through engagement shapes, fit/non-offer,
   budget language, and final CTA.
4. Implement Process with five sequential stages and useful collapsed reading order.
5. Implement About evidence cards and standards without inflating project claims.
6. Implement Privacy from actual collection plans; mark analytics copy conditional
   until EXT-08 closes.
7. Implement Start form fields and accessible presentation against the shared inquiry
   schema contract, but keep submission truth owned by plan 03B.
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
  reduced-motion result.
- All links, mobile navigation, and form controls pass keyboard/focus review.
- Desktop/mobile visual comparisons recorded against matching prototypes.
- `bun run check` passes.

## Exit

Service site and Studies index are content-complete and credible, with study detail
work represented honestly and inquiry submission still explicitly non-false.
Northline and server inquiry plans can proceed independently.
