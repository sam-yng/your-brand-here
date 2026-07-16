# Interaction and accessibility contracts

Status: canonical behavioral constraints derived from Claude Design v3 and the root
design contract.

## State ownership

| Surface | State | Required contract |
| --- | --- | --- |
| BrandSlot | treatment `0–2`, timers, availability config | server-readable, one cycle, fixed dimensions, final treatment under reduced motion |
| Northline collection | active piece `0–3` | hover and focus parity; linked list remains complete without JS |
| Northline comparison | `photo` or `plan` | both states in HTML; stable box; labelled keyboard controls |
| Sunday shifts | breakfast, lunch, dinner | all content server-rendered; control changes theme and selected state |
| Sunday wishlist | wished/unwished | no false success; state reflects production result |
| Common Thread filters | all, knits, outerwear, accessories | URL-backed links, keyboard operable, no-JS journey |
| Common Thread drawer | open/closed | `aria-expanded`, labelled region, predictable close and focus behavior |
| Inquiry form | values, tried, sending, errors | server is authority; preserve input and announce linked errors |

Prefer local component state for presentational enhancement. URL state owns shareable
filters. Server state owns submission truth.

## Progressive enhancement

- Marketing route content is complete in direct-load HTML.
- Ordinary navigation remains ordinary links and browser document loads.
- Hover previews always have focus parity and never hide the underlying link/content.
- Northline ships the collection list plus both comparison states.
- Sunday ships all three shift descriptions.
- Common Thread filters remain usable as URL links.
- Inquiry form submits through a SvelteKit form action without requiring hydration.
- Canvas, timing, pointer capability, or animation support cannot gate critical content.

## Motion and reduced motion

Motion may communicate orientation, causality, state, or character. It may not delay
content, obscure a result, or become the sole state signal.

Use the accepted expo-out easing and design-system durations. Under
`prefers-reduced-motion: reduce`:

- collapse animation and transition duration to effectively instant;
- run decorative animations once at most;
- end BrandSlot on its final readable treatment;
- swap drawers, filters, toggles, and route content immediately;
- preserve all text feedback and selected-state indicators.

No marquees, autoplay sound, global smooth scrolling, or critical hover-only detail.

## Keyboard and focus

- Every link, button, field, filter, toggle, drawer, disclosure, and menu is reachable
  in logical order.
- Focus is visibly distinct: violet on light, a tested light/violet treatment on dark.
- Practical pointer targets are at least 44px where layout permits.
- Selected controls expose programmatic state, not color alone.
- Opening an overlay or drawer gives it a clear relationship to its trigger; closing it
  restores a predictable focus position.
- Escape behavior is required for modal-like overlays, but not for ordinary in-flow
  disclosure content.

## Forms and truthful acceptance

Client checks improve immediacy; the server repeats every validation and remains
authoritative.

| Field | Accepted minimum |
| --- | --- |
| Name | at least 2 characters |
| Email | valid practical email shape |
| Project/change brief | at least 8 characters |
| Consent | explicitly checked |

On failure:

- retain all user values except sensitive challenge tokens that must be regenerated;
- attach persistent text to the invalid control;
- mark the control invalid programmatically;
- announce a useful summary and move focus only when that helps recovery;
- never navigate to Thanks.

On submit, disable duplicate intent without trapping recovery. Verify Turnstile
server-side before sending. Redirect to `/start/thanks` only after the application has
accepted the inquiry. If email or another downstream service is part of acceptance,
define and test that boundary explicitly before launch.

## Content honesty

- Every study carries a visible self-directed/fictional label near its title.
- Platform, release, wishlist, product, price, location, and availability claims remain
  clearly fictional where applicable.
- CSS media captions remain labelled as placeholders until replaced.
- Signal/Noise Records remains an unlinked in-progress teaser.
- Success green is reserved for confirmed success.

## Accessibility and semantic acceptance

- WCAG 2.2 AA minimum across shell and study-owned art direction.
- One H1 per route; logical heading order below it.
- Header, nav, main, and footer landmarks; skip link before repeated navigation.
- Useful unique page title and description for every route.
- Informative media gets concise alt text; decorative texture and auras are hidden.
- Text/background combinations are tested, including accent text and all study themes.
- Content works at 320px, 200% zoom, reduced motion, keyboard only, and JavaScript off.
- No layout shift from toggles, filters, BrandSlot, font loading, or placeholder media.

## Implementation evidence

Before calling a route complete, collect evidence appropriate to its risk:

- desktop and mobile visual comparison against matching `.dc.html` reference;
- keyboard journey through all route-owned controls;
- reduced-motion verification;
- direct-load and JavaScript-disabled content check;
- automated axe smoke coverage plus manual semantics review;
- form failure, challenge failure, server failure, duplicate submit, and success paths;
- bundle measurement against 75KB shell and 90KB per v1 study compressed-JS targets.
