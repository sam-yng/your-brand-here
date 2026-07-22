<script lang="ts">
	import type { StudioStudy } from '$lib/content/studies';

	let { study, layout = 'card' }: { study: StudioStudy; layout?: 'card' | 'row' } = $props();
</script>

<a class="study-plate {layout} {study.slug}" href={study.path}>
	{#if layout === 'card'}
		<div class="study-art" aria-hidden="true">
			{#if study.slug === 'northline-atelier'}
				<span class="northline-seat"></span><span class="northline-base"></span><span class="northline-print"></span>
			{:else if study.slug === 'sunday-service'}
				<svg class="sun" viewBox="0 0 100 100">
					<title>Decorative eight-ray sun</title>
					<circle cx="50" cy="50" r="20"></circle>
					<g><path d="M50 6v13M50 81v13M6 50h13M81 50h13M19 19l10 10M71 71l10 10M19 81l10-10M71 29l10-10"></path></g>
				</svg>
				<span class="coming">Coming 2027</span>
			{:else}
				<div class="thread-bars"><i></i><i></i><i></i><i></i></div>
			{/if}
		</div>
	{/if}

	{#if layout === 'row' && study.slug === 'sunday-service'}
		<div class="study-art" aria-hidden="true">
			<svg class="sun" viewBox="0 0 100 100">
				<title>Decorative eight-ray sun</title>
				<circle cx="50" cy="50" r="20"></circle>
				<g><path d="M50 6v13M50 81v13M6 50h13M81 50h13M19 19l10 10M71 71l10 10M19 81l10-10M71 29l10-10"></path></g>
			</svg>
		</div>
	{/if}

	<div class="study-copy">
		<span class="study-kicker">Study {study.number} · {study.kind}</span>
		<span class="study-status">{study.status}</span>
		<span class="study-title">{study.title}</span>
		<span class="study-summary">{layout === 'row' ? study.indexSummary : study.homeSummary}</span>
		{#if layout === 'row'}<span class="study-proves">Explores: {study.explores}</span>{/if}
		<span class="study-action"
			>{study.status === 'Study available' ? 'Open study →' : 'View work in progress →'}</span
		>
	</div>

	{#if layout === 'row' && study.slug !== 'sunday-service'}
		<div class="study-art" aria-hidden="true">
			{#if study.slug === 'northline-atelier'}
				<span class="northline-seat"></span><span class="northline-base"></span><span class="northline-print"></span>
			{:else}
				<div class="thread-bars"><i></i><i></i><i></i><i></i></div>
			{/if}
		</div>
	{/if}
</a>

<style>
	.study-plate {
		display: grid;
		overflow: hidden;
		border-radius: var(--studio-radius-card);
		color: var(--preview-ink);
		text-decoration: none;
		transition:
			box-shadow 500ms var(--ease-standard),
			transform 500ms var(--ease-standard);
	}

	.study-plate:hover {
		box-shadow: 0 2rem 4.5rem rgb(0 0 0 / 50%);
		transform: translateY(-0.5rem) rotate(var(--preview-tilt));
	}

	.card {
		min-height: 35rem;
		grid-template-rows: 15rem 1fr;
	}

	.row {
		min-height: 21.25rem;
		grid-template-columns: 7fr 5fr;
		border-radius: var(--studio-radius-large);
	}

	.row.sunday-service {
		grid-template-columns: 5fr 7fr;
	}

	.northline-atelier {
		--preview-ink: var(--northline-ink);
		--preview-muted: var(--northline-muted);
		--preview-accent: var(--northline-slate);
		--preview-action: var(--northline-oxblood);
		--preview-action-ink: var(--studio-white);
		--preview-tilt: -0.5deg;
		background: var(--northline-limestone);
	}

	.sunday-service {
		--preview-ink: var(--sunday-cream);
		--preview-muted: var(--sunday-muted);
		--preview-accent: var(--sunday-ochre);
		--preview-action: var(--sunday-ochre);
		--preview-action-ink: var(--sunday-plum);
		--preview-tilt: 0.5deg;
		border: 1px solid rgb(241 233 220 / 14%);
		background: var(--sunday-plum);
	}

	.common-thread {
		--preview-ink: var(--thread-ink);
		--preview-muted: var(--thread-muted);
		--preview-accent: var(--thread-ink);
		--preview-action: var(--thread-ink);
		--preview-action-ink: var(--studio-white);
		--preview-tilt: -0.5deg;
		background: var(--thread-ecru);
	}

	.study-art {
		position: relative;
		min-height: 15rem;
		overflow: hidden;
	}

	.northline-atelier .study-art {
		background: repeating-linear-gradient(
			-45deg,
			var(--northline-stripe-a) 0 0.75rem,
			var(--northline-stripe-b) 0.75rem 1.5rem
		);
		background-size: 220% 220%;
		animation: preview-pan 20s ease-in-out infinite;
	}

	.northline-seat,
	.northline-base,
	.northline-print {
		position: absolute;
		display: block;
	}

	.northline-seat {
		bottom: 3.75rem;
		left: 50%;
		width: min(48%, 11.875rem);
		height: 7.5rem;
		border-radius: 0.75rem 0.75rem 0.1875rem 0.1875rem;
		background: var(--northline-oxblood);
		transform: translateX(-50%);
	}

	.northline-base {
		bottom: 2.625rem;
		left: 50%;
		width: min(56%, 13.75rem);
		height: 1rem;
		border-radius: 0.1875rem;
		background: var(--northline-ink);
		transform: translateX(-50%);
	}

	.northline-print {
		top: 2.25rem;
		right: 2.25rem;
		width: 6.25rem;
		height: 8rem;
		border-radius: 0.625rem;
		background-color: var(--northline-slate);
		background-image:
			linear-gradient(rgb(255 255 255 / 25%) 1px, transparent 1px),
			linear-gradient(90deg, rgb(255 255 255 / 25%) 1px, transparent 1px);
		background-size: 1.25rem 1.25rem;
		box-shadow: 0 1rem 2.5rem rgb(0 0 0 / 30%);
	}

	.sunday-service .study-art {
		display: grid;
		place-items: center;
		background: radial-gradient(circle at 50% 120%, rgb(199 161 90 / 40%), transparent 70%);
	}

	.sun {
		width: min(46%, 10.625rem);
		color: var(--sunday-ochre);
		animation: badge-spin 44s linear infinite;
	}

	.sun circle {
		fill: currentcolor;
	}

	.sun path {
		fill: none;
		stroke: currentcolor;
		stroke-linecap: round;
		stroke-width: 4;
	}

	.coming {
		position: absolute;
		inset-inline: 0;
		bottom: 1.25rem;
		font-family: var(--study-font-sunday);
		font-size: 2.375rem;
		line-height: 1;
		text-align: center;
		text-transform: uppercase;
	}

	.common-thread .study-art {
		padding: 2rem;
	}

	.thread-bars {
		display: flex;
		height: 100%;
		align-items: stretch;
		gap: 0.75rem;
	}

	.thread-bars i {
		border-radius: 0.5rem;
		transform-origin: bottom;
		animation: preview-bar 3.6s ease-in-out infinite;
	}

	.thread-bars i:nth-child(1) {
		flex: 2;
		background: var(--thread-clay);
	}

	.thread-bars i:nth-child(2) {
		flex: 1;
		background: var(--thread-slate);
		animation-delay: 500ms;
	}

	.thread-bars i:nth-child(3) {
		flex: 1.5;
		background: var(--thread-ochre);
		animation-delay: 1s;
	}

	.thread-bars i:nth-child(4) {
		flex: 0.8;
		background: var(--thread-ink);
		animation-delay: 1.5s;
	}

	.study-copy {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 0.875rem;
		padding: clamp(2rem, 4vw, 3.5rem);
	}

	.study-status {
		width: fit-content;
		padding: 0.375rem 0.625rem;
		border: 1px solid currentcolor;
		border-radius: var(--studio-radius-pill);
		font-family: var(--studio-font-mono);
		font-size: 0.625rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	.card .study-copy {
		justify-content: flex-start;
		padding: 1.875rem;
	}

	.study-kicker,
	.study-proves,
	.study-action {
		font-family: var(--studio-font-mono);
		font-weight: 700;
		text-transform: uppercase;
	}

	.study-kicker {
		color: var(--preview-accent);
		font-size: 0.65625rem;
		letter-spacing: 0.16em;
	}

	.study-title {
		font-family: var(--study-font, var(--studio-font-display));
		font-size: clamp(2.25rem, 4vw, 3.625rem);
		font-weight: 500;
		letter-spacing: -0.015em;
		line-height: 1;
	}

	.card .study-title {
		font-size: 2.25rem;
	}

	.sunday-service .study-title {
		--study-font: var(--study-font-sunday);
		color: var(--sunday-clay);
		text-transform: uppercase;
	}

	.common-thread .study-title {
		--study-font: var(--study-font-thread);
		font-weight: 800;
		text-transform: uppercase;
	}

	.study-summary {
		max-width: 46ch;
		color: var(--preview-muted);
		font-size: 0.96875rem;
		font-weight: 300;
		line-height: 1.6;
	}

	.study-proves {
		color: var(--preview-accent);
		font-size: 0.6875rem;
		letter-spacing: 0.12em;
		line-height: 1.6;
	}

	.study-action {
		align-self: flex-start;
		margin-top: auto;
		color: var(--preview-action);
		font-size: 0.75rem;
		letter-spacing: 0.12em;
	}

	.row .study-action {
		margin-top: 0.5rem;
		padding: 0.75rem 1.5rem;
		border-radius: var(--studio-radius-pill);
		background: var(--preview-action);
		color: var(--preview-action-ink);
	}

	@keyframes badge-spin {
		to {
			transform: rotate(360deg);
		}
	}

	@keyframes preview-bar {
		50% {
			transform: scaleY(0.62);
		}
	}

	@keyframes preview-pan {
		50% {
			background-position: 100% 100%;
		}
	}

	@media (max-width: 50rem) {
		.row,
		.row.sunday-service {
			grid-template-columns: 1fr;
		}

		.row .study-art {
			min-height: 17rem;
		}

		.row.sunday-service .study-art {
			order: 2;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.study-plate:hover {
			transform: none;
		}
	}
</style>
