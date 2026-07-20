<script lang="ts">
	import type { RouteMetadata } from '$lib/content/metadata';

	type JsonLd = Record<string, unknown> | readonly Record<string, unknown>[];

	let {
		metadata,
		title,
		description,
		noindex = false,
		canonicalUrl,
		socialImageUrl,
		jsonLd
	}: {
		metadata?: RouteMetadata;
		title?: string;
		description?: string;
		noindex?: boolean;
		canonicalUrl?: string;
		socialImageUrl?: string;
		jsonLd?: JsonLd;
	} = $props();

	let resolvedTitle = $derived(metadata?.title ?? title ?? 'Your Brand Here');
	let resolvedDescription = $derived(metadata?.description ?? description ?? 'Independent web studio.');
	let shouldNoindex = $derived(metadata?.noindex ?? noindex);
	let documentTitle = $derived(
		resolvedTitle === 'Home' ? 'Your Brand Here — Independent web studio' : `${resolvedTitle} — Your Brand Here`
	);
</script>

<svelte:head>
	<title>{documentTitle}</title>
	<meta name="description" content={resolvedDescription} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Your Brand Here" />
	<meta property="og:title" content={documentTitle} />
	<meta property="og:description" content={resolvedDescription} />
	<meta name="twitter:card" content={socialImageUrl ? 'summary_large_image' : 'summary'} />
	<meta name="twitter:title" content={documentTitle} />
	<meta name="twitter:description" content={resolvedDescription} />
	{#if shouldNoindex}
		<meta name="robots" content="noindex, nofollow" />
	{/if}
	{#if canonicalUrl}
		<link rel="canonical" href={canonicalUrl} />
		<meta property="og:url" content={canonicalUrl} />
	{/if}
	{#if socialImageUrl}
		<meta property="og:image" content={socialImageUrl} />
		<meta name="twitter:image" content={socialImageUrl} />
	{/if}
	{#if jsonLd}
		<script type="application/ld+json">{JSON.stringify(jsonLd).replaceAll('<', '\\u003c')}</script>
	{/if}
</svelte:head>
