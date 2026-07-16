<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
		tone = 'light',
		class: className = ''
	}: { children: Snippet; tone?: 'light' | 'dark'; class?: string } = $props();
</script>

<section class:dark-band={tone === 'dark'} class:band--light={tone === 'light'} class={`band ${className}`}>
	{@render children()}
</section>
