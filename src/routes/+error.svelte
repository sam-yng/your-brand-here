<script lang="ts">
	import { page } from '$app/state';
	import PageMeta from '$lib/components/seo/PageMeta.svelte';
</script>

<PageMeta
	title={page.status === 404 ? 'Page not found' : 'Something went wrong'}
	description="This page could not be loaded."
	noindex
/>

<main class="foundation-page">
	<p>{page.status}</p>
	<h1>{page.status === 404 ? 'Page not found' : 'Something went wrong'}</h1>
	<p>{page.error?.message ?? 'The requested page could not be loaded.'}</p>
	<a href="/">Return home</a>
</main>
