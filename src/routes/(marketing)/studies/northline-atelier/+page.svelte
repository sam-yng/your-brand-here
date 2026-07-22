<script lang="ts">
	import archivo from '$lib/assets/fonts/archivo-latin-variable.woff2?url';
	import sourceSerif from '$lib/assets/fonts/source-serif-4-latin-variable.woff2?url';
	import HonestyStrip from '$lib/components/primitives/HonestyStrip.svelte';
	import StudyBoundary from '$lib/components/primitives/StudyBoundary.svelte';
	import PageMeta from '$lib/components/seo/PageMeta.svelte';
	import { routeMetadata } from '$lib/content/metadata';
	import { northlineContent } from '$lib/content/northline';
	import { getStudy } from '$lib/content/studies';
	import '$lib/styles/studies/northline.css';

	const study = getStudy('northline-atelier');
	let activePiece = $state(0);
	let comparisonView = $state<'photo' | 'plan'>('photo');

	function selectPiece(index: number) {
		activePiece = index;
	}
</script>

<PageMeta metadata={routeMetadata.northline} jsonLd={northlineContent.creativeWork} />

<svelte:head>
	<link rel="preload" href={sourceSerif} as="font" type="font/woff2" crossorigin="anonymous" />
	<link rel="preload" href={archivo} as="font" type="font/woff2" crossorigin="anonymous" />
</svelte:head>

<main class="northline-main">
	<StudyBoundary study="northline">
		<HonestyStrip
			label="Self-directed concept — not commissioned client work. Built to explore editorial commerce."
			backHref="/studies/"
			backLabel="Studies · 01 Northline Atelier"
		/>

		<section class="northline-hero northline-container">
			<div class="northline-hero__title">
				<div>
					<p class="northline-eyebrow">{northlineContent.eyebrow}</p>
					<h1>{study.title}</h1>
				</div>
				<p class="northline-strapline">{northlineContent.strapline}</p>
			</div>
			<div class="northline-hero__intro">
				<p>{northlineContent.introduction}</p>
				<div class="northline-palette" role="img" aria-label="Northline colour palette">
					{#each northlineContent.palette as swatch}
						<span
							class="northline-palette__swatch"
							style:--swatch={swatch.value}
							title={`${swatch.label} ${swatch.value}`}
						>
							<span class="visually-hidden">{swatch.label}: {swatch.value}</span>
						</span>
					{/each}
					<span class="northline-palette__label" aria-hidden="true">Palette</span>
				</div>
			</div>
		</section>

		<section class="northline-collection northline-container" aria-labelledby="collection-heading">
			<div class="collection-index">
				<h2 id="collection-heading">Collection 03 — hover or focus to preview</h2>
				<ol>
					{#each northlineContent.pieces as piece, index}
						<li>
							<a
								href={`#northline-${piece.slug}`}
								class:is-active={activePiece === index}
								onmouseenter={() => selectPiece(index)}
								onfocus={() => selectPiece(index)}
							>
								<span class="collection-index__number">{piece.number}</span>
								<span class="collection-index__name">{piece.name}</span>
								<span class="collection-index__materials">{piece.materials}</span>
								<span class="collection-index__price">{piece.price}</span>
							</a>
						</li>
					{/each}
				</ol>
				<p class="collection-index__note">
					Without JavaScript, the collection remains a complete linked list. The preview is an
					enhancement, not the store.
				</p>
			</div>

			<section class="collection-preview" aria-label="Collection preview">
				{#each northlineContent.pieces as piece, index}
					<figure
						id={`northline-${piece.slug}`}
						class={`collection-scene collection-scene--${index + 1}`}
						class:is-active={activePiece === index}
					>
						<div class="collection-scene__art" aria-hidden="true">
							<span class="scene-shape--primary"></span>
							<span class="scene-shape--secondary"></span>
							<span class="scene-shape--tertiary"></span>
						</div>
						<figcaption>
							<strong>{piece.caption}</strong>
							<span>{piece.detail}</span>
						</figcaption>
					</figure>
				{/each}
			</section>
		</section>

		<section
			id="northline-comparison"
			class="northline-comparison northline-container"
			aria-labelledby="comparison-heading"
		>
			<div class="northline-comparison__heading">
				<div>
					<p class="northline-eyebrow">{northlineContent.comparison.eyebrow}</p>
					<h2 id="comparison-heading">{northlineContent.comparison.heading}</h2>
				</div>
				<fieldset class="comparison-controls">
					<legend class="visually-hidden">Object view</legend>
					<button
						type="button"
						class:is-active={comparisonView === 'photo'}
						aria-pressed={comparisonView === 'photo'}
						onclick={() => (comparisonView = 'photo')}
					>
						{northlineContent.comparison.photoLabel}
					</button>
					<button
						type="button"
						class:is-active={comparisonView === 'plan'}
						aria-pressed={comparisonView === 'plan'}
						onclick={() => (comparisonView = 'plan')}
					>
						{northlineContent.comparison.planLabel}
					</button>
				</fieldset>
			</div>

			<div class="comparison-stage">
				<figure class="comparison-view comparison-view--photo" class:is-active={comparisonView === 'photo'}>
					<div class="room-scene" aria-hidden="true">
						<span class="room-chair"></span><span class="room-base"></span>
						<span class="room-post"></span><span class="room-glow"></span>
					</div>
					<figcaption>{northlineContent.comparison.photoCaption}</figcaption>
				</figure>
				<figure class="comparison-view comparison-view--plan" class:is-active={comparisonView === 'plan'}>
					<div class="plan-scene" aria-hidden="true">
						<span class="plan-chair"></span><span class="plan-base"></span>
						<span class="plan-post"></span>
					</div>
					<figcaption>{northlineContent.comparison.planCaption}</figcaption>
				</figure>
			</div>
			<noscript>
				<div class="comparison-nojs">
					<p><strong>{northlineContent.comparison.photoLabel}:</strong> {northlineContent.comparison.photoCaption}</p>
					<p><strong>{northlineContent.comparison.planLabel}:</strong> {northlineContent.comparison.planCaption}</p>
				</div>
			</noscript>
			<p class="northline-comparison__note">{northlineContent.comparison.explanation}</p>
		</section>

		<section class="northline-build-note" aria-labelledby="build-note-heading">
			<div class="northline-container northline-build-note__grid">
				<div>
					<p class="northline-eyebrow">Build note</p>
					<h2 id="build-note-heading">{northlineContent.buildNote.heading}</h2>
					<p>{northlineContent.buildNote.introduction}</p>
				</div>
				<div>
					<h3>It demonstrates</h3>
					<ul class="build-list build-list--solid">
						{#each northlineContent.buildNote.proves as proof}<li>{proof}</li>{/each}
					</ul>
				</div>
				<div>
					<h3>Under the hood</h3>
					<ul class="build-list build-list--outline">
						{#each northlineContent.buildNote.underTheHood as detail}<li>{detail}</li>{/each}
					</ul>
				</div>
			</div>
		</section>

		<section class="northline-cta northline-container">
			<h2>{northlineContent.cta.heading}</h2>
			<a href={northlineContent.cta.href}>{northlineContent.cta.label}</a>
		</section>
	</StudyBoundary>
</main>
