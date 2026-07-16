# Launch hardening and production verification

Status: queued after commercial routes, inquiry pipeline, and all studies.

## Objective

Integrate full journeys, finish discoverability and production configuration, measure
accepted budgets, deploy, and collect enough evidence to call the site launchable.

## Dependencies

- Plans 01–04 complete.
- All Wave 0 content decisions closed.
- EXT-01–EXT-10 ready for production configuration.

## Scope and order

1. Run content and link QA across every route; verify fictional labels, service claims,
   contact details, privacy disclosure, and confirmation URL.
2. Finalize canonical URLs, per-route Open Graph/Twitter assets, ProfessionalService,
   Person, and CreativeWork JSON-LD, sitemap, robots, favicon, and error metadata.
   Social assets inherit the matching handoff's shell or study art direction.
3. Add production security headers/CSP compatible with fonts, Turnstile, analytics,
   and Resend server calls. Verify no client secrets or unnecessary origins ship.
4. Integrate final rate limiting, analytics choice, form monitoring, and operational
   failure behavior.
5. Expand automated journeys: navigation, no-JS, reduced motion, keyboard, 320px,
   200% zoom, print, form failure/success, and visual baselines for Home plus studies.
6. Measure compressed JavaScript and performance; remove avoidable hydration and
   resolve regressions without weakening tests or hiding measurement.
7. Run full local/CI gate, deploy preview, complete content-reader and real-device
   checks, then fix/retest findings. Re-audit every route against the complete handoff
   and derived contract; resolve or explicitly approve every material difference.
8. Configure production domain/secrets, deploy, perform production smoke/form tests,
   and record operational ownership.

## External work

- EXT-03 DNS cutover.
- EXT-11 reader comprehension check.
- EXT-12 real-device matrix.
- EXT-13 live form delivery and receipt check.
- EXT-14 production performance/accessibility/SEO/header evidence.
- EXT-15 maintenance and incident ownership.

## Verification

- `bun run check` passes from clean install with frozen lockfile in CI.
- Every route direct-loads, has unique metadata, appears correctly in sitemap, and has
  intended indexing behavior.
- Shell compressed JavaScript is at most 75KB; each study is at most 90KB.
- Target evidence: LCP at most 2.5s, CLS at most 0.05, INP at most 200ms; Lighthouse
  representative routes reach 95+ performance and 100 accessibility, SEO, and best
  practices unless a dated, root-caused exception is explicitly approved.
- Production form covers successful delivery plus recoverable challenge, rate-limit,
  and provider failures without false confirmation.
- WCAG 2.2 AA automated and manual journeys pass at desktop/mobile, reduced motion,
  no JavaScript, keyboard only, and 200% zoom.

## Rollback and operations

- Keep last known-good Vercel deployment address and rollback owner recorded.
- DNS changes use reversible TTL/cutover steps decided with provider owner.
- Disable form entry or route to direct email if challenge/delivery systems fail; do
  not display confirmation for an unaccepted inquiry.
- Record monitoring destinations and response owners, not personal inquiry data.

## Exit

Production domain serves the verified build, all blocking external ledger entries have
evidence, ownership exists for ongoing operations, and the master plan can move to
`completed/` with this plan.
