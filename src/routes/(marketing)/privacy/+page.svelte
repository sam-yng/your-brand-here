<script lang="ts">
	import PageMeta from '$lib/components/seo/PageMeta.svelte';
	import { routeMetadata } from '$lib/content/metadata';

	const disclosures = [
		{
			title: 'Your inquiry',
			body: 'The project form is currently a non-submitting preview, so it does not store or send anything you type. If you email Sam directly, your message is used only to consider and reply to your inquiry. Delivery details remain with the email provider.'
		},
		{
			title: 'Analytics',
			body: 'No analytics are currently installed. There are no analytics cookies, cross-site trackers, advertising identifiers, or data sales. If collection is added later, this page will describe it before the change goes live.'
		},
		{
			title: 'Removal',
			body: 'Want a direct-email inquiry deleted? Email young142001@gmail.com from the same address and ask for removal. Sam will remove the message and related working notes as soon as practical.'
		},
		{
			title: 'The studies',
			body: 'The brand studies are self-directed fiction. Northline Atelier, Sunday Service, and Common Thread are not real businesses, and no real customer data exists behind them.',
			tone: 'sage'
		}
	] as const;
</script>

<PageMeta metadata={routeMetadata.privacy} />

<main class="privacy-page commercial-main">
	<section class="commercial-hero privacy-hero">
		<div class="commercial-hero__inner">
			<div class="commercial-hero__copy">
				<p class="commercial-eyebrow">Privacy</p>
				<h1>Short, because there isn't much to <em>disclose.</em></h1>
				<p class="privacy-updated">Last updated July 2026</p>
			</div>
		</div>
	</section>

	<section class="commercial-section">
		<div class="commercial-section__inner privacy-grid">
			{#each disclosures as disclosure}
				<article class="privacy-card" class:privacy-card--sage={'tone' in disclosure}>
					<h2>{disclosure.title}</h2>
					<p>{disclosure.body}</p>
				</article>
			{/each}
		</div>
	</section>
</main>

<style>
	.privacy-hero .commercial-hero__inner {
		padding-bottom: 4.5rem;
	}

	.privacy-hero h1 {
		max-width: 22ch;
		font-size: clamp(2.75rem, 4.4vw, 4rem);
		line-height: 1.06;
	}

	.privacy-updated {
		margin: 0;
		color: rgb(244 243 239 / 54%);
		font-size: 0.8125rem;
	}

	.privacy-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--studio-card-gap);
	}

	.privacy-card {
		display: flex;
		min-height: 14rem;
		flex-direction: column;
		gap: 0.75rem;
		padding: 2.375rem 2.25rem;
		border: 1px solid var(--studio-line);
		border-radius: var(--studio-radius-card);
		background: var(--studio-white);
	}

	.privacy-card--sage {
		border-color: transparent;
		background: var(--studio-mist);
	}

	.privacy-card h2 {
		margin: 0;
		font-family: var(--studio-font-display);
		font-size: 1.5625rem;
		font-weight: 500;
	}

	.privacy-card p {
		margin: 0;
		font-size: 1rem;
		font-weight: 300;
		line-height: 1.7;
	}

	@media (max-width: 45rem) {
		.privacy-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
