<script lang="ts">
	import HonestyStrip from '$lib/components/primitives/HonestyStrip.svelte';
	import StudyBoundary from '$lib/components/primitives/StudyBoundary.svelte';
	import PageMeta from '$lib/components/seo/PageMeta.svelte';
	import { routeMetadata } from '$lib/content/metadata';
	import { getStudy } from '$lib/content/studies';

	const study = getStudy('sunday-service');
</script>

<PageMeta metadata={routeMetadata.sundayService} />

<main>
	<StudyBoundary study="sunday-service">
		<HonestyStrip label={study.honestyLabel} />
		<section class="foundation-page">
			<h1>{study.title}</h1>
			<p>Built to explore playful state changes and practical hospitality information.</p>
		</section>
	</StudyBoundary>
</main>
