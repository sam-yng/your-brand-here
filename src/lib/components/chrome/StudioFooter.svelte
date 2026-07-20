<script lang="ts">
	import CtaLink from '$lib/components/primitives/CtaLink.svelte';
	import { footerGroups, primaryAction } from '$lib/content/navigation';
	import BrandLockup from './BrandLockup.svelte';
</script>

<footer class="studio-footer">
	<section class="footer-cta" aria-labelledby="footer-cta-title">
		<div class="footer-cta__inner">
			<h2 id="footer-cta-title">Put your brand here<span>.</span></h2>
			<CtaLink href={primaryAction.href} label={primaryAction.label} arrow />
		</div>
	</section>

	<div class="footer-main">
		<div class="footer-columns">
			<div class="footer-brand">
				<BrandLockup />
				<p>Independent web studio by Sam Young. Story, art direction, design system, build, and launch — one conversation.</p>
			</div>

			{#each footerGroups as group}
				<nav aria-label={group.label}>
					<h2>{group.label}</h2>
					{#each group.links as link}
						<a class="footer-link" href={link.href}>{link.label}</a>
					{/each}
				</nav>
			{/each}

			<div class="footer-contact">
				<h2>Contact</h2>
				<a class="footer-link" href={primaryAction.href}>{primaryAction.label}</a>
				<a class="footer-link" href="mailto:young142001@gmail.com">young142001@gmail.com</a>
				<span class="footer-detail">Sydney + remote</span>
			</div>
		</div>

		<div class="footer-meta">
			<span>© 2026 Your Brand Here · Designed and built by Sam Young</span>
			<span>Svelte 5 · SvelteKit 2 · Tailwind v4</span>
		</div>
	</div>
</footer>

<style>
	.studio-footer {
		position: relative;
		z-index: 0;
		overflow: hidden;
		background: var(--studio-void);
		color: var(--studio-canvas);
		view-transition-name: studio-footer;
	}

	.footer-cta {
		position: relative;
		border-bottom: 1px solid rgb(244 243 239 / 16%);
	}

	.footer-cta__inner {
		display: flex;
		width: min(100%, var(--studio-content-max));
		align-items: center;
		justify-content: space-between;
		gap: 3rem;
		margin-inline: auto;
		padding: 4.5rem var(--studio-gutter);
	}

	.footer-cta h2 {
		margin: 0;
		font-family: var(--studio-font-display);
		font-size: clamp(2.75rem, 4.6vw, 4.5rem);
		font-style: italic;
		font-weight: 300;
		letter-spacing: -0.02em;
		line-height: 1.02;
	}

	.footer-cta h2 span {
		color: var(--studio-violet);
		font-style: normal;
	}

	.footer-cta :global(.cta-link) {
		min-height: 3.75rem;
		padding-inline: 2.375rem;
		white-space: nowrap;
	}

	.footer-main {
		position: relative;
		width: min(100%, var(--studio-content-max));
		margin-inline: auto;
		padding: 4rem var(--studio-gutter) 2.5rem;
	}

	.footer-columns {
		display: grid;
		grid-template-columns: 1.4fr 1fr 1fr 1fr;
		gap: 3rem;
		padding-bottom: 3.5rem;
		border-bottom: 1px solid rgb(244 243 239 / 16%);
	}

	.footer-brand,
	.footer-columns nav,
	.footer-contact {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.75rem;
	}

	.footer-brand {
		gap: 1rem;
	}

	.footer-brand p {
		max-width: 34ch;
		margin: 0;
		color: rgb(244 243 239 / 62%);
		font-size: 0.875rem;
		font-weight: 300;
		line-height: 1.6;
	}

	.footer-columns h2 {
		margin: 0 0 0.375rem;
		color: rgb(244 243 239 / 45%);
		font-family: var(--studio-font-mono);
		font-size: 0.65625rem;
		font-weight: 700;
		letter-spacing: 0.18em;
		line-height: 1.5;
		text-transform: uppercase;
	}

	.footer-link,
	.footer-detail {
		color: var(--studio-canvas);
		font-size: 0.875rem;
		line-height: 1.5;
		text-decoration: none;
		transition: color var(--motion-local) var(--ease-standard);
	}

	.footer-detail {
		color: rgb(244 243 239 / 62%);
	}

	.footer-link:hover {
		color: var(--studio-terracotta);
	}

	.footer-meta {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
		padding-top: 1.75rem;
		color: rgb(244 243 239 / 45%);
		font-family: var(--studio-font-mono);
		font-size: 0.6875rem;
		letter-spacing: 0.1em;
		line-height: 1.6;
		text-transform: uppercase;
	}

	@media (max-width: 60rem) {
		.footer-columns {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (max-width: 40rem) {
		.footer-cta__inner,
		.footer-meta {
			align-items: flex-start;
			flex-direction: column;
		}

		.footer-columns {
			grid-template-columns: 1fr;
			gap: 2.5rem;
		}

		.footer-main {
			padding-top: 3rem;
		}
	}
</style>
