<script lang="ts">
	import FinalCta from '$lib/components/commercial/FinalCta.svelte';
	import StudyPlate from '$lib/components/commercial/StudyPlate.svelte';
	import PageMeta from '$lib/components/seo/PageMeta.svelte';
	import { routeMetadata } from '$lib/content/metadata';
	import { studies } from '$lib/content/studies';
</script>

<PageMeta metadata={routeMetadata.studies} />

<main class="studies-page commercial-main">
	<section class="commercial-hero studies-hero">
		<div class="commercial-hero__inner">
			<div class="commercial-hero__copy">
				<p class="commercial-eyebrow">Brand studies</p>
				<h1>New ideas, <em>made properly.</em></h1>
				<p class="commercial-hero__intro">
					Each study starts with a different fictional brief — a furniture atelier, a video game
					launch, a clothing label — and follows it through art direction, interaction, and production
					code. Three worlds, one standard.
				</p>
				<p class="studies-honesty">
					<span aria-hidden="true"></span>Self-directed concepts — not commissioned client work, and
					labelled that way on every page.
				</p>
			</div>
		</div>
	</section>

	<section class="studies-index" aria-label="Self-directed brand studies">
		<div class="studio-container studies-index__inner">
			{#each studies as study}<StudyPlate {study} layout="row" />{/each}

			<article class="signal-teaser">
				<div>
					<p class="mono-label">Post-launch · Independent record label</p>
					<h2>Signal/Noise Records</h2>
					<p>
						A dark typographic catalogue with an opt-in, audio-reactive canvas. The route owns its
						own bundle — the sales site never pays for it.
					</p>
				</div>
				<span>In progress</span>
			</article>
		</div>
	</section>

	<FinalCta
		lead="Your brief will be real."
		emphasis="The standard is the same."
		label="Start a project"
	/>
</main>

<style>
	.studies-hero::after {
		left: 30%;
		right: auto;
	}

	.studies-hero .commercial-hero__copy {
		max-width: 62rem;
	}

	.studies-hero h1 {
		max-width: 14ch;
		font-size: clamp(3.75rem, 7vw, 6.5rem);
		line-height: 0.98;
	}

	.studies-honesty {
		display: flex;
		align-items: center;
		gap: 0.625rem;
		margin: 0;
		color: rgb(244 243 239 / 64%);
		font-family: var(--studio-font-mono);
		font-size: 0.71875rem;
		line-height: 1.6;
	}

	.studies-honesty span {
		width: 0.5rem;
		height: 0.5rem;
		flex: none;
		border-radius: 50%;
		background: var(--studio-terracotta);
	}

	.studies-index {
		background: var(--studio-void);
		color: var(--studio-canvas);
	}

	.studies-index__inner {
		display: flex;
		flex-direction: column;
		gap: 1.75rem;
		padding-block: 4.5rem 7rem;
	}

	.signal-teaser {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
		padding: 2.25rem clamp(2rem, 4vw, 3.5rem);
		border: 1px dashed rgb(244 243 239 / 30%);
		border-radius: var(--studio-radius-large);
	}

	.signal-teaser > div {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.signal-teaser p {
		max-width: 60ch;
		margin: 0;
		color: rgb(244 243 239 / 58%);
		font-size: 0.90625rem;
		font-weight: 300;
		line-height: 1.6;
	}

	.signal-teaser .mono-label {
		color: rgb(244 243 239 / 52%);
		font-size: 0.65625rem;
		font-weight: 700;
	}

	.signal-teaser h2 {
		margin: 0;
		font-size: 1.875rem;
		font-weight: 700;
	}

	.signal-teaser > span {
		flex: none;
		padding: 0.625rem 1.25rem;
		border: 1px solid rgb(217 119 87 / 50%);
		border-radius: var(--studio-radius-pill);
		color: var(--studio-terracotta);
		font-family: var(--studio-font-mono);
		font-size: 0.71875rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	@media (max-width: 40rem) {
		.signal-teaser {
			align-items: flex-start;
			flex-direction: column;
		}
	}
</style>
