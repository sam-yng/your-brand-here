# Your Brand Here

Independent web studio and self-directed design portfolio by Sam Young. Built as a content-first SvelteKit application with prerendered marketing routes and a server-rendered inquiry route.

> **Status:** non-launchable development foundation. Claude Design v3 is accepted and
> preserved under `docs`; production shell implementation, complete content, inquiry
> pipeline, sitemap/social metadata, and launch hardening remain pending.

## Stack

- Svelte 5 and SvelteKit 2
- strict TypeScript
- Tailwind CSS v4 with canonical CSS custom properties
- Bun
- Biome 2.5.3
- Playwright and axe-core
- h-alter Standard harness
- Vercel adapter

## Setup

```sh
bun install
bunx playwright install chromium
cp .env.example .env
bun run dev
```

On PowerShell, use `Copy-Item .env.example .env` instead of `cp` if needed.

## Commands

```sh
bun run dev              # local development
bun run format           # write Biome formatting
bun run lint             # Biome lint gate
bun run typecheck        # Svelte and TypeScript semantics
bun run test             # Bun unit tests
bun run test:e2e         # Playwright desktop/mobile and axe smoke tests
bun run build            # production build
bun run check            # complete local/CI quality gate
```

## Architecture

- `src/routes/(marketing)/` is prerendered.
- `src/routes/start/` remains server-rendered for the future inquiry action.
- Root navigation uses browser document loads through `data-sveltekit-reload`.
- Cross-document View Transitions are progressive enhancement only.
- `src/app.css` owns global tokens, Tailwind mappings, accessibility defaults, and motion fallbacks.
- Each study will override documented semantic variables inside its own route namespace.
- Windows local builds skip the Vercel adaptation step because its route symlinks require Developer Mode. CI and Vercel still execute `adapter-vercel`; compilation, prerendering, preview, and tests remain active locally.

Read [DESIGN.md](./DESIGN.md) and the accepted
[Claude Design system](./docs/design-docs/claude-design-system.md) before visual work;
read [AGENTS.md](./AGENTS.md) before agent-assisted changes.

## Harness

h-alter owns the agent map, hooks, CI workflow, docs lifecycle, portable skills, and test-integrity guardrails. Preview updates before applying them:

```sh
bunx @samyng/h-alter install .
bunx @samyng/h-alter install . --yes
```

The installer preserves human-authored files and stops on conflicts. Reconcile proposed gate changes with `bun run check`; do not create a second quality gate.
