<script lang="ts">
	let { mark }: { mark: 'signal' | 'system' | 'real' } = $props();
</script>

<span class:signal={mark === 'signal'} class:system={mark === 'system'} class:real={mark === 'real'}>
	<svg viewBox="0 0 32 32" width="30" height="30" aria-hidden="true">
		{#if mark === 'signal'}
			<circle cx="16" cy="16" r="11"></circle>
			<circle class="fill" cx="16" cy="16" r="4.5"></circle>
		{:else if mark === 'system'}
			<rect x="5" y="5" width="10" height="10" rx="2"></rect>
			<rect x="17" y="5" width="10" height="10" rx="5"></rect>
			<rect x="5" y="17" width="10" height="10" rx="5"></rect>
			<rect x="17" y="17" width="10" height="10" rx="2"></rect>
		{:else}
			<path d="M6 22 14 10l6 7 6-9"></path>
			<path d="M6 26h20"></path>
		{/if}
	</svg>
</span>

<style>
	span {
		display: grid;
		width: 4rem;
		height: 4rem;
		place-items: center;
		border-radius: var(--studio-radius-small);
	}

	.signal {
		background: var(--studio-violet);
		color: var(--studio-white);
	}

	.system {
		background: var(--studio-ochre);
		color: var(--studio-ink);
	}

	.real {
		background: var(--studio-terracotta);
		color: var(--studio-white);
	}

	circle,
	path {
		fill: none;
		stroke: currentcolor;
		stroke-linecap: round;
		stroke-width: 2.4;
	}

	.fill,
	rect {
		fill: currentcolor;
		stroke: none;
	}
</style>
