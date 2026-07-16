<script lang="ts">
	let { label }: { label: string } = $props();
</script>

<aside class="honesty-strip" aria-label="Study status">
	<span class="honesty-strip__dot" aria-hidden="true"></span>
	<p>{label}</p>
</aside>

<style>
	.honesty-strip {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.875rem var(--studio-gutter);
		border-block: 1px solid rgb(244 243 239 / 14%);
		background: var(--studio-void);
		color: rgb(244 243 239 / 75%);
	}

	.honesty-strip__dot {
		width: 0.4375rem;
		height: 0.4375rem;
		border-radius: 50%;
		background: var(--studio-terracotta);
	}

	p {
		margin: 0;
		font-family: var(--studio-font-mono);
		font-size: 0.6875rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		line-height: 1.5;
		text-transform: uppercase;
	}
</style>
