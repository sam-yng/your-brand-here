<script lang="ts">
	import HonestyStrip from '$lib/components/primitives/HonestyStrip.svelte';
	import StudyBoundary from '$lib/components/primitives/StudyBoundary.svelte';
	import PageMeta from '$lib/components/seo/PageMeta.svelte';
	import { routeMetadata } from '$lib/content/metadata';
	import { getStudy } from '$lib/content/studies';

	const study = getStudy('northline-atelier');
</script>

<PageMeta metadata={routeMetadata.northline} />

<main>
	<StudyBoundary study="northline">
		<HonestyStrip label={study.honestyLabel} />
		<section class="foundation-page">
			<h1>{study.title}</h1>
			<p>Built to explore editorial art direction, responsive folios, and subtle transitions.</p>
		</section>
	</StudyBoundary>
</main>
