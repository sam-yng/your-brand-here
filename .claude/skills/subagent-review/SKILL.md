---
name: subagent-review
description: Review changed code with a fresh independent agent before any commit, push, PR creation/update, or other publication request. Triage findings, bound fix/re-review loops, auto-proceed only for clear low/medium-risk changes, and escalate ambiguous or high-risk work.
---

# Review Before Publish

Run immediately before each commit, push, PR create/update, or other publication
action. Review complete delta destined for that action: target/upstream merge-base
through `HEAD`, plus staged, unstaged, and relevant untracked work. For a request
that starts with uncommitted work, review before first commit. Material change or
different publication delta invalidates result and requires another review.

## Evidence

Run full repo gate. Exercise changed behavior directly when practical. Give fresh
reviewer raw diff, relevant plan/spec, repo rules, and verification evidence. Do
not give implementer's conclusions. Reviewer must use separate agent/context; if
host cannot provide one, stop publication and tell user.

Reviewer checks correctness, regressions, security, data loss, performance,
tests, docs, and safety-floor compliance. Each finding needs severity, path/line
when available, reason, and proposed check or fix.

## Triage Loop

Classify every finding:

- `actionable`: real defect or missing evidence; fix before publication.
- `nit`: optional polish; record, fix only when cheap.
- `ambiguous`: needs owner judgment; escalate.

Fix actionable findings, rerun affected checks, then re-review material changes.
Maximum three review rounds. Never loop indefinitely.

## Risk Gate

Treat change as high risk when over 500 changed lines, over 20 files, or touching
auth, secrets, permissions, billing/payments, migrations/schema, public APIs,
infrastructure, deployment, or agent safety controls. Reviewer may raise risk,
never lower deterministic high risk.

Auto-proceed only when full gate passes, no actionable or ambiguous findings
remain, and risk is low or medium. High risk, unresolved ambiguity, failed gate,
or exhausted rounds: stop and give user concise findings plus next decision.

High risk may proceed only after user explicitly authorizes exact, otherwise-clean
publication delta. Keep classification high; never describe it as auto-approved.
Material change invalidates authorization and requires review plus authorization
again.

Reviewer never commits, pushes, posts GitHub reviews, approves, or merges.
Implementer resumes authorized publish actions only after clean decision.
