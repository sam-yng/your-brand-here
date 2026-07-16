<script lang="ts">
	let { href = '/' }: { href?: string } = $props();
</script>

<a class="brand-lockup" {href}>
	<span class="brand-lockup__mark" aria-hidden="true"></span>
	<span class="brand-lockup__name">Your Brand Here</span>
</a>

<style>
	.brand-lockup {
		display: inline-flex;
		align-items: baseline;
		gap: 0.625rem;
		color: var(--studio-white);
		text-decoration: none;
	}

	.brand-lockup__mark {
		width: 0.5625rem;
		height: 0.5625rem;
		background: var(--studio-violet);
		transform: translateY(-0.0625rem);
	}

	.brand-lockup__name {
		font-family: var(--studio-font-display);
		font-size: 1.375rem;
		font-style: italic;
		font-weight: 500;
		letter-spacing: -0.01em;
		white-space: nowrap;
	}

	@media (max-width: 24rem) {
		.brand-lockup__name {
			font-size: 1.125rem;
		}
	}
</style>
