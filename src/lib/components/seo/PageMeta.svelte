<script lang="ts">
	let {
		title,
		description,
		noindex = false
	}: { title: string; description: string; noindex?: boolean } = $props();
</script>

<svelte:head>
	<title>{title === 'Home' ? 'Your Brand Here — Independent web studio' : `${title} — Your Brand Here`}</title>
	<meta name="description" content={description} />
	{#if noindex}
		<meta name="robots" content="noindex, nofollow" />
	{/if}
</svelte:head>
