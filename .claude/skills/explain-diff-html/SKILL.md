---
name: explain-diff-html
description: Explain a code change, diff, branch, or PR directly to the user in a compact caveman summary. Use after PR creation or whenever the user asks what changed. Despite the legacy name, do not create HTML or any file.
---

# Explain Diff

Inspect target diff and relevant surrounding code. Explain change directly in
response using `/caveman`.

Cover only:

- Outcome and user-visible behavior.
- Key code changes, grouped by purpose and causal flow.
- Verification evidence.
- Remaining risk, uncertainty, or reviewer attention.

Default under 250 words. Prefer behavior over file-by-file narration. Expand only
when user asks or compression would hide material risk.

Never create HTML, JavaScript, quiz, table of contents, diagram, or output file
unless user explicitly requests one.
