<script lang="ts">
	import FinalCta from '$lib/components/commercial/FinalCta.svelte';
	import ServiceMark from '$lib/components/commercial/ServiceMark.svelte';
	import EyebrowRule from '$lib/components/primitives/EyebrowRule.svelte';
	import PageMeta from '$lib/components/seo/PageMeta.svelte';
	import { routeMetadata } from '$lib/content/metadata';
	import {
		engagementShapes,
		goodFit,
		notOffer,
		serviceChain,
		services
	} from '$lib/content/services';
</script>

<PageMeta metadata={routeMetadata.services} />

<main class="services-page commercial-main">
	<section class="commercial-hero">
		<div class="commercial-hero__inner services-hero__inner">
			<div class="commercial-hero__copy">
				<p class="commercial-eyebrow">Services</p>
				<h1>One joined-up service, <em>not five hand-offs.</em></h1>
				<p class="commercial-hero__intro">
					I clarify your story, establish an art direction, create a reusable design system, build
					the website, and launch it. The same person makes every connected decision — so the idea
					survives all the way into production.
				</p>
			</div>
			<ol class="service-chain">
				{#each serviceChain as item, index}
					<li><span>{String(index + 1).padStart(2, '0')}</span>{item}</li>
				{/each}
			</ol>
		</div>
	</section>

	<section class="commercial-section">
		<div class="commercial-section__inner">
			<EyebrowRule label="What each stage delivers" />
			<div class="service-details">
				{#each services as service}
					<article class="service-detail">
						<header>
							<ServiceMark mark={service.mark} />
							<h2>{service.title}</h2>
						</header>
						<p>{service.detail}</p>
						<div>
							<h3>You get</h3>
							<ul>
								{#each service.deliverables as deliverable}<li>{deliverable}</li>{/each}
							</ul>
						</div>
					</article>
				{/each}
			</div>

			<div class="engagement-heading"><EyebrowRule label="Engagement shapes" /></div>
			<div class="engagement-grid">
				{#each engagementShapes as shape}
					<article class="surface-card engagement-card">
						<h2>{shape.title}</h2>
						<p>{shape.body}</p>
						<span>{shape.meta}</span>
					</article>
				{/each}
			</div>
			<p class="budget-note">
				No fixed package prices. The inquiry form asks for an indicative budget band in AUD so we
				can choose the right shape before either of us commits time.
			</p>

			<div class="fit-grid">
				<section class="fit-list fit-list--yes" aria-labelledby="good-fit-title">
					<h2 id="good-fit-title">A good fit</h2>
					<ul>{#each goodFit as item}<li><span aria-hidden="true">✓</span>{item}</li>{/each}</ul>
				</section>
				<section class="fit-list fit-list--no" aria-labelledby="not-offer-title">
					<h2 id="not-offer-title">Not the offer</h2>
					<ul>{#each notOffer as item}<li><span aria-hidden="true">×</span>{item}</li>{/each}</ul>
				</section>
			</div>
		</div>
	</section>

	<FinalCta
		lead="Tell me what you need. I'll tell you honestly if I'm the"
		emphasis="right fit."
		label="Tell me what you need"
	/>
</main>

<style>
	.services-hero__inner {
		display: grid;
		grid-template-columns: 7fr 5fr;
		gap: var(--studio-column-gap);
		align-items: end;
	}

	.service-chain {
		margin: 0;
		padding: 0;
		border-top: 1px solid rgb(244 243 239 / 20%);
		list-style: none;
	}

	.service-chain li {
		display: flex;
		align-items: baseline;
		gap: 1rem;
		padding: 0.875rem 0;
		border-bottom: 1px solid rgb(244 243 239 / 14%);
		font-family: var(--studio-font-display);
		font-size: 1.3125rem;
	}

	.service-chain span {
		width: 1.625rem;
		color: var(--studio-terracotta);
		font-family: var(--studio-font-mono);
		font-size: 0.6875rem;
		font-weight: 700;
		letter-spacing: 0.12em;
	}

	:global(.services-page .eyebrow-rule) {
		margin-bottom: 0.5rem;
	}

	.service-detail {
		display: grid;
		grid-template-columns: 2fr 5fr 5fr;
		gap: var(--studio-column-gap);
		padding: 2.75rem 0;
		border-bottom: 1px solid var(--studio-line);
	}

	.service-detail header {
		display: flex;
		flex-direction: column;
		gap: 0.875rem;
	}

	.service-detail h2,
	.engagement-card h2 {
		margin: 0;
		font-family: var(--studio-font-display);
		font-size: 1.6875rem;
		font-weight: 500;
	}

	.service-detail > p {
		margin: 0;
		font-size: 1.03125rem;
		font-weight: 300;
		line-height: 1.7;
	}

	.service-detail h3,
	.fit-list h2 {
		margin: 0;
		color: var(--studio-muted);
		font-family: var(--studio-font-mono);
		font-size: 0.65625rem;
		font-weight: 700;
		letter-spacing: 0.18em;
		text-transform: uppercase;
	}

	.service-detail ul,
	.fit-list ul {
		display: flex;
		flex-direction: column;
		gap: 0.625rem;
		margin: 0.625rem 0 0;
		padding: 0;
		list-style: none;
	}

	.service-detail li {
		position: relative;
		padding-left: 1rem;
		font-size: 0.9375rem;
		line-height: 1.5;
	}

	.service-detail li::before {
		position: absolute;
		top: 0.55em;
		left: 0;
		width: 0.375rem;
		height: 0.375rem;
		background: var(--studio-violet);
		content: '';
	}

	.engagement-heading {
		margin-top: 4.5rem;
	}

	.engagement-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: var(--studio-card-gap);
		margin-top: 2.25rem;
	}

	.engagement-card {
		display: flex;
		min-height: 15rem;
		flex-direction: column;
		gap: 0.75rem;
		padding: 2.25rem 2rem;
	}

	.engagement-card p {
		margin: 0;
		color: var(--studio-muted);
		font-size: 0.9375rem;
		font-weight: 300;
		line-height: 1.65;
	}

	.engagement-card span {
		margin-top: auto;
		color: var(--studio-violet);
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}

	.budget-note {
		max-width: 68ch;
		margin: 1.75rem 0 0;
		color: var(--studio-muted);
		font-size: 0.875rem;
		line-height: 1.6;
	}

	.fit-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--studio-card-gap);
		margin-top: 4.5rem;
	}

	.fit-list {
		padding: 2.75rem 2.625rem;
		border-radius: var(--studio-radius-card);
	}

	.fit-list--yes {
		background: var(--studio-mist);
	}

	.fit-list--yes h2 {
		color: var(--studio-ink);
	}

	.fit-list--no {
		border: 1px solid var(--studio-line);
		background: var(--studio-white);
	}

	.fit-list li {
		display: flex;
		gap: 0.75rem;
		font-size: 1rem;
		line-height: 1.55;
	}

	.fit-list li span {
		color: var(--studio-violet);
		font-weight: 700;
	}

	.fit-list--no li,
	.fit-list--no h2 {
		color: var(--studio-muted);
	}

	.fit-list--no li span {
		color: var(--studio-terracotta);
	}

	@media (max-width: 60rem) {
		.services-hero__inner,
		.service-detail {
			grid-template-columns: 1fr;
		}

		.engagement-grid {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 40rem) {
		.fit-grid {
			grid-template-columns: 1fr;
		}

		.fit-list {
			padding: 2rem 1.5rem;
		}
	}
</style>
