<script lang="ts">
	import PageMeta from '$lib/components/seo/PageMeta.svelte';
	import { routeMetadata } from '$lib/content/metadata';
</script>

<PageMeta metadata={routeMetadata.thanks} />

<main class="foundation-page">
	<h1>Thanks</h1>
	<p>This route will confirm an inquiry only after the server accepts it.</p>
</main>
