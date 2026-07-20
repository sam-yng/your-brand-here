<script lang="ts">
	import PageMeta from '$lib/components/seo/PageMeta.svelte';
	import { routeMetadata } from '$lib/content/metadata';
</script>

<PageMeta metadata={routeMetadata.about} />

<main class="foundation-page">
	<h1>About</h1>
	<p>One person carrying the idea from language and art direction into reliable production code.</p>
</main>
