<script lang="ts">
	import BrandSlot from '$lib/components/commercial/BrandSlot.svelte';
	import ServiceMark from '$lib/components/commercial/ServiceMark.svelte';
	import StudyPlate from '$lib/components/commercial/StudyPlate.svelte';
	import CtaLink from '$lib/components/primitives/CtaLink.svelte';
	import EyebrowRule from '$lib/components/primitives/EyebrowRule.svelte';
	import PageMeta from '$lib/components/seo/PageMeta.svelte';
	import { capabilities, homeConfiguration } from '$lib/content/commercial';
	import { routeMetadata } from '$lib/content/metadata';
	import { processStages } from '$lib/content/process';
	import { services } from '$lib/content/services';
	import { studies } from '$lib/content/studies';

	let brandSlot: { replay: () => void } | undefined;
</script>

<PageMeta metadata={routeMetadata.home} />

<main class="home-page commercial-main">
	<section class="home-hero dark-band">
		<div class="home-hero__aura home-hero__aura--violet" aria-hidden="true"></div>
		<div class="home-hero__aura home-hero__aura--warm" aria-hidden="true"></div>
		<div class="studio-container home-hero__inner">
			<div class="home-hero__eyebrow">
				<p class="commercial-eyebrow">Independent web studio · Sydney + remote</p>
				{#if homeConfiguration.availability}
					<p class="availability-pill"><i aria-hidden="true"></i>{homeConfiguration.availability}</p>
				{/if}
			</div>
			<h1>Your work has <br />a point of view. <br /><em>Your website <br />should too.</em></h1>

			<div class="home-hero__lower">
				<div class="home-hero__copy">
					<p>
						Your Brand Here is my one-person studio for small teams, collectives, and independent people
						who have outgrown the generic. Together, we shape the story, design the system, and build a
						fast, distinctive website that is easy to live with.
					</p>
					<div class="home-hero__actions">
						<CtaLink href="/start/" label="Start a project" />
						<a
							class="home-hero__studies"
							href="/studies/"
							onmouseenter={() => brandSlot?.replay()}
							onfocus={() => brandSlot?.replay()}>See the studies →</a
						>
					</div>
					<p class="home-hero__microcopy">Strategy, design, and build — one conversation, no hand-offs.</p>
				</div>
				<BrandSlot bind:this={brandSlot} motionEnabled={homeConfiguration.brandSlotMotion} />
			</div>
		</div>
	</section>

	<section class="capability-strip" aria-label="Studio capabilities">
		<div class="studio-container capability-strip__inner">
			{#each capabilities as capability, index}
				<span>{String(index + 1).padStart(2, '0')} {capability}</span>
				{#if index < capabilities.length - 1}<i aria-hidden="true"></i>{/if}
			{/each}
		</div>
	</section>

	<section class="commercial-section">
		<div class="commercial-section__inner">
			<EyebrowRule label="01 — Services" />
			<div class="section-lead">
				<h2>Not a template in <em>better clothes.</em></h2>
				<p>
					A good website does more than look finished. It makes the right things obvious, gives the
					brand a recognisable rhythm, and keeps working after launch. I handle the connected
					decisions so none of those jobs gets lost between disciplines.
				</p>
			</div>
			<div class="service-preview-grid">
				{#each services as service}
					<a class="service-preview surface-card" href="/services/">
						<ServiceMark mark={service.mark} />
						<span class="service-preview__number">{service.number}</span>
						<h3>{service.title}</h3>
						<p>{service.summary}</p>
						<span class="service-preview__action">More →</span>
					</a>
				{/each}
			</div>
		</div>
	</section>

	<section class="commercial-section commercial-section--dark dark-band">
		<div class="dark-band__aura studies-aura" aria-hidden="true"></div>
		<div class="commercial-section__inner">
			<EyebrowRule label="02 — Brand studies" />
			<div class="section-lead">
				<h2>New ideas, <em>made properly.</em></h2>
				<p>
					These are self-directed brand studies, not borrowed client logos or dressed-up templates.
					Each starts with a different fictional brief — a furniture atelier, a video game launch, a
					clothing label — and follows it through art direction, interaction, and production code.
				</p>
			</div>
			<div class="study-preview-grid">
				{#each studies as study}<StudyPlate {study} />{/each}
			</div>
		</div>
	</section>

	<section class="commercial-section">
		<div class="commercial-section__inner">
			<EyebrowRule label="03 — Process" />
			<div class="process-heading">
				<h2 class="commercial-heading">Clear from first note<br />to <em>final handoff.</em></h2>
				<a class="ghost-link" href="/process/">Full process →</a>
			</div>
			<ol class="process-preview">
				{#each processStages as stage}
					<li class="surface-card"><span>{stage.number}</span><strong>{stage.title}</strong></li>
				{/each}
			</ol>
			<div class="fit-panel">
				<h2>Best with people who care about the details, but need someone to connect them.</h2>
				<p>
					You know your work. You do not need a perfect brief, a finished sitemap, or a folder of
					polished copy. You do need a real goal, useful source material, and the time to make
					decisions together.
				</p>
			</div>
		</div>
	</section>

	<section class="home-final dark-band">
		<div class="dark-band__aura" aria-hidden="true"></div>
		<div class="studio-container home-final__inner">
			<span class="commercial-eyebrow">04 — Start</span>
			<h2>Ready when the<br /><em class="hue-shift">placeholder</em> is.</h2>
			<p>Tell me what you are building, what is not working now, and what a better website needs to change.</p>
			<CtaLink href="/start/" label="Put your brand here" />
		</div>
	</section>
</main>

<style>
	.home-hero {
		border-bottom: 1px solid rgb(244 243 239 / 12%);
	}

	.home-hero__aura {
		position: absolute;
		z-index: -1;
		border-radius: 50%;
		filter: blur(5.625rem);
		pointer-events: none;
		animation: aura-drift 32s var(--ease-standard) infinite alternate;
	}

	.home-hero__aura--violet {
		top: -10rem;
		left: -7.5rem;
		width: 40rem;
		height: 40rem;
		background: radial-gradient(circle, rgb(91 75 243 / 50%), transparent 65%);
	}

	.home-hero__aura--warm {
		top: 2.5rem;
		right: -11.25rem;
		width: 35rem;
		height: 35rem;
		background: radial-gradient(circle, rgb(217 119 87 / 32%), transparent 65%);
		animation-direction: alternate-reverse;
	}

	.home-hero__inner {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
		padding-block: clamp(5.75rem, 8vw, 6.875rem) 6rem;
	}

	.home-hero__eyebrow {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 1rem;
	}

	.home-hero__eyebrow p {
		margin: 0;
	}

	.availability-pill {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.4375rem 0.875rem;
		border: 1px solid rgb(244 243 239 / 28%);
		border-radius: var(--studio-radius-pill);
		font-family: var(--studio-font-mono);
		font-size: 0.6875rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	.availability-pill i {
		width: 0.4375rem;
		height: 0.4375rem;
		border-radius: 50%;
		background: var(--studio-terracotta);
	}

	h1 {
		margin: 0;
		font-family: var(--studio-font-display);
		font-size: clamp(4.5rem, 8.6vw, 8.25rem);
		font-weight: 300;
		letter-spacing: -0.03em;
		line-height: 0.98;
	}

	h1 em {
		font-style: italic;
		animation: hue-shift 12s ease-in-out infinite;
	}

	.home-hero__lower {
		display: grid;
		grid-template-columns: 7fr 5fr;
		gap: clamp(2.5rem, 5vw, 5.5rem);
		align-items: end;
	}

	.home-hero__copy {
		display: flex;
		flex-direction: column;
		gap: 1.75rem;
	}

	.home-hero__copy > p:first-child {
		max-width: 54ch;
		margin: 0;
		color: rgb(244 243 239 / 82%);
		font-size: 1.1875rem;
		font-weight: 300;
		line-height: 1.65;
	}

	.home-hero__actions {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem 1.5rem;
		align-items: center;
	}

	.home-hero__studies {
		display: inline-flex;
		min-height: 2.75rem;
		align-items: center;
		padding: 0.75rem 1.5rem;
		border: 1px solid rgb(244 243 239 / 32%);
		border-radius: var(--studio-radius-pill);
		font-family: var(--studio-font-mono);
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.1em;
		text-decoration: none;
		text-transform: uppercase;
		transition: background var(--motion-local) var(--ease-standard);
	}

	.home-hero__studies:hover {
		background: rgb(244 243 239 / 8%);
	}

	.home-hero__microcopy {
		margin: 0;
		padding-left: 0.875rem;
		border-left: 2px solid var(--studio-violet);
		color: rgb(244 243 239 / 60%);
		font-size: 0.84375rem;
		font-weight: 500;
		letter-spacing: 0.04em;
	}

	.capability-strip {
		border-bottom: 1px solid rgb(244 243 239 / 12%);
		background: var(--studio-void);
		color: rgb(244 243 239 / 70%);
	}

	.capability-strip__inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding-block: 1.375rem;
	}

	.capability-strip span {
		font-family: var(--studio-font-mono);
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.16em;
		text-transform: uppercase;
	}

	.capability-strip i {
		width: 0.4375rem;
		height: 0.4375rem;
		flex: none;
		border-radius: 50%;
		background: var(--studio-violet);
	}

	.capability-strip i:nth-of-type(2) {
		background: var(--studio-ochre);
	}

	.capability-strip i:nth-of-type(3) {
		background: var(--studio-terracotta);
	}

	.capability-strip i:nth-of-type(4) {
		background: var(--studio-slate);
	}

	:global(.home-page .eyebrow-rule) {
		margin-bottom: 2.75rem;
	}

	.service-preview-grid,
	.study-preview-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: var(--studio-card-gap);
	}

	.service-preview {
		display: flex;
		min-height: 23rem;
		flex-direction: column;
		gap: 1.125rem;
		padding: 2.25rem 2rem;
		color: var(--studio-ink);
		text-decoration: none;
	}

	.service-preview__number,
	.service-preview__action {
		color: var(--studio-violet);
		font-family: var(--studio-font-mono);
		font-size: 0.71875rem;
		font-weight: 700;
		letter-spacing: 0.16em;
		text-transform: uppercase;
	}

	.service-preview h3 {
		margin: 0;
		font-family: var(--studio-font-display);
		font-size: 1.6875rem;
		font-weight: 500;
	}

	.service-preview p {
		margin: 0;
		color: var(--studio-muted);
		font-size: 0.9375rem;
		font-weight: 300;
		line-height: 1.65;
	}

	.service-preview__action {
		margin-top: auto;
		letter-spacing: 0.12em;
	}

	.studies-aura {
		top: 20%;
		right: -18rem;
	}

	.process-heading {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		gap: 3rem;
		margin-bottom: 3.25rem;
	}

	.process-preview {
		display: grid;
		grid-template-columns: repeat(5, minmax(0, 1fr));
		gap: 1rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.process-preview li {
		display: flex;
		min-height: 9.5rem;
		flex-direction: column;
		gap: 0.75rem;
		padding: 1.625rem 1.375rem;
	}

	.process-preview span {
		color: var(--studio-violet);
		font-family: var(--studio-font-display);
		font-size: 2.125rem;
		font-style: italic;
	}

	.process-preview strong {
		font-size: 0.90625rem;
		font-weight: 600;
	}

	.fit-panel {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--studio-column-gap);
		margin-top: 4rem;
		padding: clamp(2rem, 4vw, 4.5rem);
		border-radius: var(--studio-radius-card);
		background: var(--studio-mist);
	}

	.fit-panel h2 {
		margin: 0;
		font-family: var(--studio-font-display);
		font-size: 2.125rem;
		font-weight: 400;
		line-height: 1.18;
	}

	.fit-panel p {
		margin: 0;
		font-size: 1.0625rem;
		font-weight: 300;
		line-height: 1.7;
	}

	.home-final__inner {
		position: relative;
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 1.75rem;
		padding-block: 8rem 7.5rem;
		text-align: center;
	}

	.home-final h2 {
		margin: 0;
		font-family: var(--studio-font-display);
		font-size: clamp(3.25rem, 5.5vw, 5.25rem);
		font-weight: 300;
		letter-spacing: -0.025em;
		line-height: 1.02;
	}

	.home-final p {
		max-width: 52ch;
		margin: 0;
		color: rgb(244 243 239 / 72%);
		font-size: 1.09375rem;
		font-weight: 300;
		line-height: 1.65;
	}

	.home-final .dark-band__aura {
		bottom: -20rem;
		left: 25%;
	}

	@media (max-width: 60rem) {
		.home-hero__lower {
			grid-template-columns: 1fr;
			gap: 5rem;
		}

		.service-preview-grid,
		.study-preview-grid {
			grid-template-columns: 1fr;
		}

		.process-preview {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (max-width: 40rem) {
		h1 {
			font-size: clamp(3.75rem, 20vw, 5.25rem);
		}

		.capability-strip__inner {
			align-items: flex-start;
			flex-direction: column;
		}

		.capability-strip i {
			display: none;
		}

		.process-heading {
			align-items: flex-start;
			flex-direction: column;
		}

		.process-preview,
		.fit-panel {
			grid-template-columns: 1fr;
		}
	}
</style>
