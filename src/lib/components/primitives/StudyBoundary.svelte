<script lang="ts">
	import type { Snippet } from 'svelte';

	type StudyBoundary = 'northline' | 'sunday-service' | 'common-thread';

	let { study, children }: { study: StudyBoundary; children: Snippet } = $props();
</script>

<div class="study-boundary" data-study={study}>
	{@render children()}
</div>

<style>
	.study-boundary {
		min-width: 0;
		isolation: isolate;
	}
</style>
