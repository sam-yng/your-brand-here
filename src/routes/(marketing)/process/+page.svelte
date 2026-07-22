<script lang="ts">
	import FinalCta from '$lib/components/commercial/FinalCta.svelte';
	import PageMeta from '$lib/components/seo/PageMeta.svelte';
	import { routeMetadata } from '$lib/content/metadata';
	import { processStages } from '$lib/content/process';

	const handoffPoints = [
		{
			title: 'One conversation',
			body: 'You talk to the person doing the work at every stage. Nothing gets lost between a strategist, a designer, and a developer — there is only one of me.'
		},
		{
			title: 'Decisions stay visible',
			body: 'Every stage ends with something you can read, click, or test — not a status update. If a decision changes, the record changes with it.'
		},
		{
			title: 'Built to hand over',
			body: 'The site ships with documentation, tests, and a design record precise enough that a future developer — or you — can extend it without me.'
		}
	] as const;
</script>

<PageMeta metadata={routeMetadata.process} />

<main class="process-page commercial-main">
	<section class="commercial-hero process-hero">
		<div class="commercial-hero__inner">
			<div class="commercial-hero__copy">
				<p class="commercial-eyebrow">Process</p>
				<h1>Clear from first note to <em>final handoff.</em></h1>
				<p class="commercial-hero__intro">
					Five stages, each with a clear exit. You always know what we are deciding, what you will
					receive, and what I need from you to keep moving.
				</p>
			</div>
		</div>
	</section>

	<section class="commercial-section">
		<div class="commercial-section__inner process-stages">
			<ol>
				{#each processStages as stage}
					<li class="surface-card process-card">
						<header><span>{stage.number}</span><h2>{stage.title}</h2></header>
						<div><h3>What happens</h3><p>{stage.what}</p></div>
						<div><h3>You get</h3><p>{stage.deliverable}</p></div>
						<div><h3>Your part</h3><p>{stage.clientPart}</p></div>
					</li>
				{/each}
			</ol>

			<div class="handoff-panel">
				{#each handoffPoints as point}
					<section>
						<h2>{point.title}</h2>
						<p>{point.body}</p>
					</section>
				{/each}
			</div>
		</div>
	</section>

	<FinalCta
		lead="Stage 01 starts with one"
		emphasis="honest conversation."
		label="Start a project"
	/>
</main>

<style>
	.process-hero::after {
		left: -6rem;
		right: auto;
		background: radial-gradient(circle, rgb(199 161 90 / 34%), transparent 66%);
	}

	.process-hero h1 {
		max-width: 16ch;
	}

	.process-stages > ol {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.process-card {
		display: grid;
		grid-template-columns: 3fr 4fr 3fr 2fr;
		gap: clamp(1.5rem, 3vw, 3.5rem);
		padding: 2.5rem clamp(1.5rem, 3vw, 2.75rem);
	}

	.process-card header,
	.process-card > div {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.process-card header span {
		color: var(--studio-violet);
		font-family: var(--studio-font-display);
		font-size: 2.5rem;
		font-style: italic;
	}

	.process-card h2 {
		margin: 0;
		font-family: var(--studio-font-display);
		font-size: 1.625rem;
		font-weight: 500;
	}

	.process-card h3,
	.handoff-panel h2 {
		margin: 0;
		color: var(--studio-muted);
		font-family: var(--studio-font-mono);
		font-size: 0.65625rem;
		font-weight: 700;
		letter-spacing: 0.18em;
		text-transform: uppercase;
	}

	.process-card p,
	.handoff-panel p {
		margin: 0;
		font-size: 0.96875rem;
		font-weight: 300;
		line-height: 1.68;
	}

	.process-card > div:nth-of-type(2) p {
		font-weight: 400;
	}

	.process-card > div:last-child p {
		color: var(--studio-muted);
	}

	.handoff-panel {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: var(--studio-column-gap);
		margin-top: 4.5rem;
		padding: clamp(2.5rem, 4vw, 4rem);
		border-radius: var(--studio-radius-card);
		background: var(--studio-mist);
	}

	.handoff-panel section {
		display: flex;
		flex-direction: column;
		gap: 0.625rem;
	}

	.handoff-panel h2 {
		color: var(--studio-ink);
	}

	@media (max-width: 70rem) {
		.process-card {
			grid-template-columns: 1fr 2fr;
		}
	}

	@media (max-width: 50rem) {
		.process-card,
		.handoff-panel {
			grid-template-columns: 1fr;
		}
	}
</style>
