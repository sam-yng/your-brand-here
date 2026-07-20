<script lang="ts">
	import HonestyStrip from '$lib/components/primitives/HonestyStrip.svelte';
	import StudyBoundary from '$lib/components/primitives/StudyBoundary.svelte';
	import PageMeta from '$lib/components/seo/PageMeta.svelte';
	import { routeMetadata } from '$lib/content/metadata';
	import { getStudy } from '$lib/content/studies';

	const study = getStudy('common-thread');
</script>

<PageMeta metadata={routeMetadata.commonThread} />

<main>
	<StudyBoundary study="common-thread">
		<HonestyStrip label={study.honestyLabel} />
		<section class="foundation-page">
			<h1>{study.title}</h1>
			<p>Built to explore inclusive design, dense information, filtering, and print styles.</p>
		</section>
	</StudyBoundary>
</main>
