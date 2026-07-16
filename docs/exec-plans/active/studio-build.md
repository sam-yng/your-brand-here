# End-to-end studio build

Status: active from 16 July 2026.

## Objective

Turn the accepted Claude Design handoff and current non-launchable SvelteKit
foundation into a truthful, accessible production site. This plan is the control
plane for the detailed queued plans. It owns ordering, cross-plan decisions,
external work, integration gates, and launch evidence; implementation detail stays
in the queued plans.

## Baseline

- Product, visual, route, and interaction contracts are accepted and preserved.
- All public route placeholders exist and current smoke tests cover them at desktop
  and mobile sizes.
- Bun, SvelteKit, Tailwind, Biome, Playwright, axe, Vercel adapter, h-alter, and the
  local/CI quality gate are installed.
- Production shell, self-hosted fonts, final route copy, study systems, inquiry
  action, sitemap, structured data, social assets, and launch evidence are absent.
- Accepted route docs and current source/tests use `/start/thanks/`; legacy
  `/thanks/` redirects permanently.
- Current global CSS still contains provisional coral, easing, and incomplete token
  mappings. Accepted v3 tokens must replace them before route styling spreads.

## Design authority and change control

- Matching handoff `.dc.html` plus `StudioHeader.dc.html` and `StudioFooter.dc.html`
  are the latest visual iteration and canonical visual target. Plan summaries never
  reduce their required detail.
- `DESIGN.md` and derived design docs remain hard boundaries for product truth,
  content honesty, WCAG 2.2 AA, progressive enhancement, architecture, performance,
  and non-goals. Prototype behavior cannot override these safeguards.
- Implement responsive behavior by preserving handoff hierarchy and character across
  12-, 6-, and 4-column layouts; 1440px is the fidelity reference, not a fixed canvas.
- Before a route exits, compare it against its complete `.dc.html` and route contract.
  Resolve every material mismatch. Any intentional deviation needs a recorded reason,
  owner approval, and evidence link in the affected plan; an unreviewed comparison is
  not acceptance.
- New visual interpretation starts only when the user supersedes the accepted handoff.
  Until then, do not substitute generic components, remove supplied motifs, or change
  copy/art direction for convenience.

## Execution map

```text
Wave 0: decisions + content truth
  -> Wave 1: foundation convergence
     -> Wave 2: commercial shell
        -> Wave 3A: Northline architecture proof
        -> Wave 3B: inquiry pipeline
           Wave 3A -> Wave 4: Sunday Service + Common Thread
           Wave 3B -------------------------------\
           Wave 4 ---------------------------------> Wave 5: launch hardening
```

Wave 0 external decisions may progress while Wave 1 starts. Missing production
credentials must not block local adapters, fixtures, validation, or UI work. Wave 3A
and Wave 3B can overlap after shared shell contracts stabilize. One implementation
owner should still merge small vertical slices through the complete gate rather than
holding a long-lived integration branch.

## Ordered plans

1. [`01-foundation-convergence`](../completed/01-foundation-convergence.md)
   corrects shared primitives and freezes route/content contracts.
2. [`02-commercial-shell`](../queued/02-commercial-shell.md) completes
   Home, Studies index, Services, Process, About, Privacy, and shared conversion
   paths.
3. [`03a-northline-study`](../queued/03a-northline-study.md) proves one
   study can own type, palette, and interactions without leakage.
4. [`03b-inquiry-pipeline`](../queued/03b-inquiry-pipeline.md) builds the
   server-authoritative inquiry path. It can run beside plan 3A.
5. [`04-remaining-studies`](../queued/04-remaining-studies.md) adds Sunday
   Service and Common Thread after Northline validates study boundaries.
6. [`05-launch-hardening`](../queued/05-launch-hardening.md) integrates,
   measures, deploys, and verifies production.

## Design-spec ownership

| Contract surface | Implementation owner | Required source |
| --- | --- | --- |
| Canonical tokens, shell typography, grid, band grammar, motion primitives | 01 | `DESIGN.md`, `claude-design-system.md`, shared handoff components |
| Shared header, mobile navigation, footer, landmarks, document navigation | 01 | `StudioHeader.dc.html`, `StudioFooter.dc.html`, interaction contract |
| Home and BrandSlot | 02 | `Home.dc.html`, Home route specification |
| Services | 02 | `Services.dc.html`, Services route specification |
| Studies index | 02 | `Studies.dc.html`, Studies route specification |
| Process | 02 | `Process.dc.html`, Process route specification |
| About | 02 | `About.dc.html`, About route specification |
| Start composition and field content | 02 | `Start.dc.html`, Start route specification |
| Start behavior, server acceptance, and Thanks | 03B | `Start.dc.html`, `Thanks.dc.html`, form interaction contract |
| Northline Atelier | 03A | `Northline Atelier.dc.html`, Northline route specification |
| Sunday Service | 04 | `Sunday Service.dc.html`, Sunday route specification |
| Common Thread | 04 | `Common Thread.dc.html`, Common Thread route specification |
| Privacy | 02, finalized by 05 | `Privacy.dc.html`, actual production data flow |
| Metadata, social assets, structured data, sitemap, production evidence | 05 | route contract, implementation evidence contract |

Plan owners must account for every element and state in their required sources, even
when this table or a plan summary does not repeat it verbatim.

## Naming convention

- Use lowercase kebab-case filenames describing plan purpose.
- Use a numeric prefix only when execution order matters; parallel plans share the
  same number and add a letter, such as `03a` and `03b`.
- Use lifecycle directories (`queued`, `active`, `completed`, `archive`) for status;
  do not encode status in filenames.
- Keep dates in plan status and progress history only; never prefix filenames with a
  date.

Only move a plan from `queued/` to `active/` when its dependencies are met and work
begins. Keep this master active until production verification and evidence are
complete. Move superseded plans to `archive/`, not `completed/`.

## Wave 0 decisions

| Decision | Needed by | Recommendation | Status |
| --- | --- | --- | --- |
| Confirmation URL | foundation | Canonical `/start/thanks/`; permanent legacy `/thanks/` redirect | decided 2026-07-16 |
| Public name and domain | launch metadata | Keep “Your Brand Here”; choose primary domain before canonical work is finalized | open |
| Location claim | commercial copy | Use “Sydney + remote” | decided 2026-07-17 |
| Minimum engagement | Services and form | Select truthful lowest AUD band; avoid fixed package pricing | open |
| Copy service boundary | Services | Describe as collaborative shaping unless separate copywriting is genuinely sold | open |
| Availability signal | Home | Default hidden until an honest update owner exists | open |
| Public contact identity | footer/form | Use `young142001@gmail.com` publicly for now; transactional From address and sending subdomain remain open | partial 2026-07-17 |
| Analytics | Privacy and CSP | Prefer privacy-light analytics or explicitly choose none | open |
| Portrait | About | Keep optional; do not block v1 | open |

Record each decision in this table and the affected plan before implementation.
Copy marked final in accepted references remains source material, but every real-world
claim still needs owner confirmation.

## Out-of-codebase development ledger

These steps change external systems or require human evidence. Log completion date,
owner, target environment, and an evidence pointer without committing secrets.

| ID | Step | Earliest point | Blocks | Evidence | Status |
| --- | --- | --- | --- | --- | --- |
| EXT-00 | Standardize local, CI, and Vercel build runtime on supported Node 24; current machine default Node 26 is rejected by adapter-vercel | After all queued plans | production reproducibility | repository/CI pins now; hosted build log after project creation | repository complete; hosted evidence deferred by owner 2026-07-17 |
| EXT-01 | Choose public domain and confirm registrant ownership | Wave 0 | canonical production verification | registrar record/reference | pending |
| EXT-02 | Create Vercel project; connect repo; record preview and production environments | After all queued plans | production deployment | project URL and environment names | deferred by owner 2026-07-17 |
| EXT-03 | Configure DNS for production and `www` policy | Wave 5 | production launch | DNS check and resolved URLs | pending |
| EXT-04 | Choose public mailbox and verified Resend sending subdomain | Wave 0 | production inquiry success | verified domain status, no API keys | pending |
| EXT-05 | Create Resend API key separately for preview/test and production; set Vercel secrets | Wave 3B | live delivery tests | secret names and deployment IDs | pending |
| EXT-06 | Create Cloudflare Turnstile widgets for local/test and production hostnames; set secrets | Wave 3B | anti-spam production gate | widget names/site-key labels, no secrets | pending |
| EXT-07 | Choose and configure rate-limit boundary (managed store or Vercel firewall) | Wave 3B | public form launch | rule/store name and test evidence | pending |
| EXT-08 | Choose analytics or none; configure property and update privacy truth | Wave 2 | final privacy/CSP | property label or recorded “none” decision | pending |
| EXT-09 | Obtain production-usable WOFF2 font files and verify license/provenance for all nine families | Wave 1 | typography fidelity | `src/lib/assets/fonts/README.md`, family licenses, SHA-256 hashes | complete 2026-07-16 |
| EXT-10 | Confirm final service, budget, availability, contact, location, and fictional-study copy | Wave 0 | content freeze | dated owner approval note | pending |
| EXT-11 | Ask two non-developers to explain offer and CTA after a 20-second Home scan | Wave 5 | launch content sign-off | anonymized findings and resulting changes | pending |
| EXT-12 | Run real-device checks on current iOS Safari and Android Chrome | Wave 5 | launch QA | device/OS/browser matrix and findings | pending |
| EXT-13 | Test production inquiry end to end, including received email and delivery metadata | Wave 5 | form launch | timestamp, deployment, provider request ID | pending |
| EXT-14 | Verify production performance, accessibility, headers, canonical URLs, sitemap, and robots behavior | Wave 5 | launch | report URLs or checked-in summaries | pending |
| EXT-15 | Define ownership for availability, privacy, dependency updates, form monitoring, and incident response | Wave 5 | operational handoff | named cadence and runbook pointer | pending |

External secrets belong in provider/Vercel secret stores and local ignored `.env`,
never in plans, screenshots, test fixtures, or logs. Delivery logs contain metadata,
not inquiry bodies.

## Integration gates

Every plan exit requires its scoped tests plus `bun run check`. Route completion also
requires a complete acceptance checklist from its `.dc.html` and route specification,
resolved desktop/mobile comparisons, keyboard traversal, reduced-motion behavior,
direct-load HTML, JavaScript-disabled usefulness, an axe scan, and manual semantics
review. Comparisons must have no unexplained material mismatch. Final integration
adds:

- truthful success/failure form journeys, including duplicate and expired challenge;
- 320px and 200% zoom review;
- print review for Common Thread;
- canonical, social, JSON-LD, sitemap, and robots verification;
- compressed JavaScript measurement against 75KB shell and 90KB/study budgets;
- LCP, CLS, and INP evidence against the accepted targets;
- production smoke tests after DNS and secrets are live.

Cross-cutting visual acceptance also verifies exact shell/study typography, supplied
SVG motifs, placeholder captions, dark-band decoration, focus states, stable boxes,
responsive hierarchy, and absence of shell/study style leakage.

## Progress log

- 2026-07-16: mapped accepted contracts against repository baseline.
- 2026-07-16: split build into six dependency-bounded execution plans.
- 2026-07-16: logged external systems and human validation work as EXT-00–EXT-15.
- 2026-07-16: full gate passed with installed Node 24; Node 26 incompatibility logged
  as EXT-00.
- 2026-07-16: froze `/start/thanks/` as canonical confirmation URL and activated plan
  01.
- 2026-07-17: completed plan 01; owner deferred Vercel project creation and hosted
  Node 24 evidence until every queued plan completes.
- Next: activate plan 02 while remaining Wave 0 content decisions progress.

## Completion

Complete only when all child plans are completed, all blocking external ledger items
have evidence, the production journey passes, and docs/tests/implementation agree.
