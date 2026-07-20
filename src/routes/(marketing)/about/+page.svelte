<script lang="ts">
	import FinalCta from '$lib/components/commercial/FinalCta.svelte';
	import EyebrowRule from '$lib/components/primitives/EyebrowRule.svelte';
	import PageMeta from '$lib/components/seo/PageMeta.svelte';
	import { buildStandards, evidence } from '$lib/content/commercial';
	import { routeMetadata } from '$lib/content/metadata';

	const specs = [
		['Base', 'Sydney + remote'],
		['Role', 'Design + engineering, one person'],
		['Stack', 'Svelte · TypeScript · Tailwind'],
		['Floor', 'WCAG 2.2 AA, tested in CI']
	] as const;
</script>

<PageMeta metadata={routeMetadata.about} />

<main class="about-page commercial-main">
	<section class="commercial-hero about-hero">
		<div class="commercial-hero__inner about-hero__inner">
			<div class="commercial-hero__copy">
				<p class="commercial-eyebrow">About</p>
				<h1>
					I'm Sam Young, a software engineer who cares how things read, move, and feel —
					<em>not only whether they run.</em>
				</h1>
				<p class="commercial-hero__intro">
					I work where design decisions become production code, which means the idea survives the
					handoff — because there is no handoff. One person shapes the story, sets the direction,
					and ships the build.
				</p>
			</div>
			<dl class="about-specs">
				{#each specs as spec}<div><dt>{spec[0]}</dt><dd>{spec[1]}</dd></div>{/each}
			</dl>
		</div>
	</section>

	<section class="commercial-section">
		<div class="commercial-section__inner">
			<EyebrowRule label="Proof I build what I design" />
			<div class="evidence-grid">
				{#each evidence as item}
					<article class="surface-card evidence-card">
						<header>
							<h2>{item.name}</h2>
							<span class="tone-{item.tone}">{item.kind}</span>
						</header>
						<p>{item.body}</p>
						<p class="hard-call">{item.decision}</p>
					</article>
				{/each}
			</div>

			<section class="standards-panel" aria-labelledby="standards-title">
				<h2 id="standards-title">What I hold every build to, <em>including this one.</em></h2>
				<ul>{#each buildStandards as standard}<li>{standard}</li>{/each}</ul>
			</section>
		</div>
	</section>

	<FinalCta
		lead="The best brief starts as a"
		emphasis="conversation,"
		tail=" not a document."
		label="Work with Sam"
	/>
</main>

<style>
	.about-hero::after {
		background: radial-gradient(circle, rgb(217 119 87 / 38%), transparent 66%);
	}

	.about-hero__inner {
		display: grid;
		grid-template-columns: 8fr 4fr;
		gap: var(--studio-column-gap);
	}

	.about-hero h1 {
		font-size: clamp(2.75rem, 4.4vw, 4.125rem);
		line-height: 1.08;
	}

	.about-specs {
		align-self: start;
		margin: 0;
		border-top: 1px solid rgb(244 243 239 / 25%);
	}

	.about-specs div {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		padding: 0.875rem 0;
		border-bottom: 1px solid rgb(244 243 239 / 14%);
	}

	.about-specs dt {
		color: rgb(244 243 239 / 62%);
		font-size: 0.78125rem;
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.about-specs dd {
		margin: 0;
		font-size: 0.90625rem;
		font-weight: 300;
		text-align: right;
	}

	:global(.about-page .eyebrow-rule) {
		margin-bottom: 2.75rem;
	}

	.evidence-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--studio-card-gap);
	}

	.evidence-card {
		display: flex;
		flex-direction: column;
		gap: 0.875rem;
		padding: 2.375rem 2.25rem;
	}

	.evidence-card header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}

	.evidence-card h2 {
		margin: 0;
		font-family: var(--studio-font-display);
		font-size: 1.625rem;
		font-weight: 500;
	}

	.evidence-card header span {
		padding: 0.4375rem 0.875rem;
		border-radius: var(--studio-radius-pill);
		color: var(--studio-white);
		font-family: var(--studio-font-mono);
		font-size: 0.65625rem;
		font-weight: 700;
		letter-spacing: 0.14em;
		text-transform: uppercase;
	}

	.tone-violet {
		background: var(--studio-violet);
	}

	.evidence-card header .tone-terracotta {
		background: var(--studio-terracotta);
		color: var(--studio-ink);
	}

	.tone-ink {
		background: var(--studio-ink);
	}

	.tone-slate {
		background: var(--studio-slate);
	}

	.evidence-card p {
		margin: 0;
		font-size: 0.96875rem;
		font-weight: 300;
		line-height: 1.68;
	}

	.evidence-card .hard-call {
		margin-top: 0.25rem;
		padding-left: 0.75rem;
		border-left: 2px solid var(--studio-violet);
		color: var(--studio-muted);
		font-size: 0.8125rem;
		font-weight: 400;
	}

	.standards-panel {
		display: grid;
		grid-template-columns: 5fr 7fr;
		gap: var(--studio-column-gap);
		margin-top: 4.5rem;
		padding: clamp(2.5rem, 4vw, 4.5rem);
		border-radius: var(--studio-radius-card);
		background: var(--studio-mist);
	}

	.standards-panel h2 {
		margin: 0;
		font-family: var(--studio-font-display);
		font-size: 2.25rem;
		font-weight: 400;
		line-height: 1.16;
	}

	.standards-panel h2 em {
		color: var(--studio-violet);
	}

	.standards-panel ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.standards-panel li {
		position: relative;
		padding: 0.8125rem 0 0.8125rem 1.3125rem;
		border-bottom: 1px solid rgb(23 23 22 / 16%);
		font-size: 1rem;
		line-height: 1.55;
	}

	.standards-panel li::before {
		position: absolute;
		top: 1.25rem;
		left: 0;
		width: 0.4375rem;
		height: 0.4375rem;
		background: var(--studio-violet);
		content: '';
	}

	@media (max-width: 60rem) {
		.about-hero__inner,
		.standards-panel {
			grid-template-columns: 1fr;
		}

		.evidence-grid {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 40rem) {
		.evidence-card header {
			align-items: flex-start;
			flex-direction: column;
		}
	}
</style>
