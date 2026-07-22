<script lang="ts">
	let {
		label,
		backHref,
		backLabel,
	}: { label: string; backHref?: string; backLabel?: string } = $props();
</script>

<aside class="honesty-strip" aria-label="Study status">
	{#if backHref && backLabel}
		<a href={backHref}>← {backLabel}</a>
	{/if}
	<p><span class="honesty-strip__dot" aria-hidden="true"></span>{label}</p>
</aside>

<style>
	.honesty-strip {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1.5rem;
		padding: 0.875rem var(--studio-gutter);
		border-block: 1px solid rgb(244 243 239 / 14%);
		background: var(--studio-void);
		color: rgb(244 243 239 / 75%);
	}

	a,
	p {
		font-family: var(--studio-font-mono);
		font-size: 0.6875rem;
		letter-spacing: 0.08em;
		line-height: 1.5;
	}

	a {
		flex: none;
		color: var(--studio-canvas);
		font-weight: 700;
		text-decoration: none;
		text-transform: uppercase;
	}

	a:hover {
		color: var(--studio-terracotta);
	}

	.honesty-strip__dot {
		display: inline-block;
		width: 0.4375rem;
		height: 0.4375rem;
		margin-right: 0.5rem;
		border-radius: 50%;
		background: var(--studio-terracotta);
	}

	p {
		margin: 0;
		font-weight: 400;
	}

	@media (max-width: 48rem) {
		.honesty-strip {
			align-items: flex-start;
			flex-direction: column;
			gap: 0.5rem;
		}
	}
</style>
