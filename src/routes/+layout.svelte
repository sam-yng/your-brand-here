<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import newsreader from '$lib/assets/fonts/newsreader-latin-variable.woff2?url';
	import onest from '$lib/assets/fonts/onest-latin-variable.woff2?url';
	import StudioFooter from '$lib/components/chrome/StudioFooter.svelte';
	import StudioHeader from '$lib/components/chrome/StudioHeader.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preload" href={newsreader} as="font" type="font/woff2" crossorigin="anonymous" />
	<link rel="preload" href={onest} as="font" type="font/woff2" crossorigin="anonymous" />
</svelte:head>

<div data-sveltekit-reload>
	<a class="skip-link" href="#main-content">Skip to content</a>
	<StudioHeader />
	<div id="main-content" tabindex="-1">
		{@render children()}
	</div>
	<StudioFooter />
</div>

<style>
	.skip-link {
		position: fixed;
		z-index: 100;
		top: 0.75rem;
		left: var(--studio-gutter);
		padding: 0.75rem 1rem;
		border-radius: 0.25rem;
		background: var(--studio-white);
		color: var(--studio-ink);
		font-family: var(--studio-font-mono);
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-decoration: none;
		text-transform: uppercase;
		transform: translateY(calc(-100% - 1rem));
		transition: transform 180ms var(--ease-standard);
	}

	.skip-link:focus {
		transform: translateY(0);
	}

	#main-content {
		scroll-margin-top: 5rem;
	}
</style>
