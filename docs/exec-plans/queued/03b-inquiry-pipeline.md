# Inquiry pipeline

Status: queued after commercial shell; may run beside Northline.

## Objective

Deliver a no-JavaScript-capable, server-authoritative inquiry path from `/start/` to
the chosen confirmation URL without false success or leaked personal data.

## Dependencies

- Foundation route decision and commercial Start presentation complete.
- Production credentials are not needed for adapters and tests; EXT-04–EXT-07 are
  required before live success verification.

## Scope and order

1. Define shared Zod inquiry schema, normalization, safe retained values, honeypot,
   and field-error mapping.
2. Implement Turnstile server adapter and deterministic success, invalid, expired,
   unavailable, and malformed-response tests.
3. Implement escaped plain-text/HTML email rendering, Resend adapter, idempotency key,
   metadata-only logging, and provider error mapping.
4. Implement SvelteKit default form action: validate, reject spam, verify challenge,
   send once, and redirect only after the defined acceptance boundary succeeds.
5. Bind persistent accessible errors, value retention, duplicate-intent protection,
   recovery, and direct-email alternative to the Start UI.
6. Add `use:enhance` pending behavior only after normal POST flow works. Enhanced and
   non-enhanced paths share the same server action and truth.
7. Protect confirmation route from implying acceptance on arbitrary navigation. Pick
   the lightest server-verifiable receipt/session contract compatible with privacy and
   prerender boundaries.
8. Add rate-limit integration seam and production configuration checks.

## External work

- EXT-04: mailbox and verified Resend domain.
- EXT-05: scoped Resend test/production keys in provider environment stores.
- EXT-06: Turnstile local/test and production widget configuration.
- EXT-07: managed rate-limit/firewall rule.
- EXT-13: live end-to-end receipt verification occurs during launch hardening.

## Verification

- Unit: schema, escaping, adapter parsing, idempotency, provider error mapping.
- E2E: validation failure, honeypot, invalid/expired Turnstile, provider failure,
  duplicate submit, success redirect, confirmation guard, no JavaScript.
- Errors are linked, announced, persistent, and retain non-sensitive values.
- No success green, receipt copy, or redirect occurs before server acceptance.
- Logs and test artifacts contain no full inquiry body, secrets, or challenge tokens.
- `bun run check` passes with network providers mocked at owned boundaries.

## Exit

Local/preview inquiry path is complete and deterministic. Production remains blocked
until EXT-04–EXT-07 and EXT-13 have evidence.
