<script lang="ts">
	import CtaLink from '$lib/components/primitives/CtaLink.svelte';

	let {
		lead,
		emphasis,
		tail = '',
		label,
		href = '/start/'
	}: { lead: string; emphasis: string; tail?: string; label: string; href?: string } = $props();
</script>

<section class="final-cta dark-band">
	<div class="dark-band__aura" aria-hidden="true"></div>
	<div class="studio-container final-cta__inner">
		<h2>{lead} <em>{emphasis}</em>{tail}</h2>
		<CtaLink {href} {label} />
	</div>
</section>

<style>
	.final-cta {
		border-top: 1px solid rgb(244 243 239 / 12%);
	}

	.final-cta__inner {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 3rem;
		padding-block: 6.5rem;
	}

	h2 {
		max-width: 22ch;
		margin: 0;
		font-family: var(--studio-font-display);
		font-size: clamp(2.375rem, 3.8vw, 3.5rem);
		font-weight: 300;
		letter-spacing: -0.02em;
		line-height: 1.06;
	}

	em {
		color: var(--studio-terracotta);
	}

	.final-cta__inner :global(.cta-link) {
		min-height: 3.75rem;
		padding-inline: 2.375rem;
		white-space: nowrap;
	}

	.dark-band__aura {
		bottom: -20rem;
		left: 30%;
	}

	@media (max-width: 40rem) {
		.final-cta__inner {
			align-items: flex-start;
			flex-direction: column;
			padding-block: 5rem;
		}
	}
</style>
