<script lang="ts">
	import { onMount } from 'svelte';

	let { motionEnabled = true }: { motionEnabled?: boolean } = $props();

	let treatment = $state(2);
	let firstTimer: ReturnType<typeof setTimeout> | undefined;
	let secondTimer: ReturnType<typeof setTimeout> | undefined;
	let reduceMotion = false;

	function clearCycle() {
		if (firstTimer) clearTimeout(firstTimer);
		if (secondTimer) clearTimeout(secondTimer);
	}

	export function replay() {
		if (!motionEnabled || reduceMotion || treatment !== 2) return;
		clearCycle();
		treatment = 0;
		firstTimer = setTimeout(() => (treatment = 1), 1900);
		secondTimer = setTimeout(() => (treatment = 2), 3800);
	}

	onMount(() => {
		reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (motionEnabled && !reduceMotion) replay();
		return clearCycle;
	});
</script>

<div
	class="brand-slot"
	class:brand-slot--static={!motionEnabled}
	data-motion={motionEnabled ? 'enabled' : 'disabled'}
	role="img"
	aria-label="Your Brand Here wordmark treatments"
>
	<div class="brand-slot__badge" aria-hidden="true">
		<svg viewBox="0 0 104 104" width="104" height="104">
			<title>Decorative reserved-for-client badge</title>
			<defs>
				<path id="brand-slot-circle" d="M52 52m-40 0a40 40 0 1 1 80 0 40 40 0 1 1-80 0"></path>
			</defs>
			<text><textPath href="#brand-slot-circle">Reserved for the client · Reserved ·</textPath></text>
			<circle cx="52" cy="52" r="5"></circle>
		</svg>
	</div>

	<div class="brand-slot__plate">
		<div class="brand-slot__meta brand-slot__meta--top" aria-hidden="true">
			<span>Field 01 · Wordmark</span>
			<span data-treatment-count>Treatment {treatment + 1} / 3</span>
		</div>

		<div class="treatment treatment--serif" class:is-active={treatment === 0} aria-hidden="true">
			Your Brand<br />Here
		</div>
		<div class="treatment treatment--heavy" class:is-active={treatment === 1} aria-hidden="true">
			Your<br /><strong>Brand</strong><br />Here
		</div>
		<div class="treatment treatment--final" class:is-active={treatment === 2} aria-hidden="true">
			Your <strong>Brand</strong> Here
		</div>

		<div class="brand-slot__meta brand-slot__meta--bottom" aria-hidden="true">
			<span>Reserved for the client</span>
			<span>1440 × grid 12</span>
		</div>
	</div>
</div>

<style>
	.brand-slot {
		position: relative;
		width: 100%;
		min-width: 0;
	}

	.brand-slot__badge {
		position: absolute;
		z-index: 5;
		top: -2.875rem;
		right: 0.5rem;
		width: 6.5rem;
		height: 6.5rem;
		animation: badge-spin 18s linear infinite;
	}

	.brand-slot--static .brand-slot__badge {
		animation: none;
	}

	.brand-slot__badge text {
		fill: rgb(244 243 239 / 75%);
		font-family: var(--studio-font-mono);
		font-size: 0.625rem;
		font-weight: 700;
		letter-spacing: 0.22em;
		text-transform: uppercase;
	}

	.brand-slot__badge circle {
		fill: var(--studio-terracotta);
	}

	.brand-slot__plate {
		position: relative;
		height: 20.625rem;
		overflow: hidden;
		border: 1px solid rgb(244 243 239 / 20%);
		border-radius: var(--studio-radius-card);
		background: rgb(244 243 239 / 5%);
		box-shadow: 0 1.75rem 5rem rgb(0 0 0 / 45%);
		backdrop-filter: blur(0.625rem);
	}

	.brand-slot__meta {
		position: absolute;
		z-index: 4;
		left: 1.125rem;
		right: 1.125rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 0.25rem 1rem;
		color: rgb(244 243 239 / 55%);
		font-family: var(--studio-font-mono);
		font-size: 0.625rem;
		font-weight: 700;
		letter-spacing: 0.18em;
		text-transform: uppercase;
	}

	.brand-slot__meta--top {
		top: 1rem;
	}

	.brand-slot__meta--bottom {
		bottom: 1rem;
	}

	.brand-slot__meta--bottom span:last-child {
		color: rgb(244 243 239 / 35%);
	}

	.treatment {
		position: absolute;
		inset: 2.75rem 1.125rem;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--studio-white);
		line-height: 1.1;
		text-align: center;
		opacity: 0;
		transform: translateY(1rem);
		transition:
			opacity 650ms cubic-bezier(0.4, 0, 0.2, 1),
			transform 650ms cubic-bezier(0.4, 0, 0.2, 1);
	}

	.treatment.is-active {
		opacity: 1;
		transform: translateY(0);
	}

	.treatment--serif {
		font-family: var(--studio-font-display);
		font-size: clamp(3rem, 5vw, 3.5rem);
		font-style: italic;
		font-weight: 300;
	}

	.treatment--heavy {
		font-size: clamp(2.25rem, 4vw, 2.625rem);
		font-weight: 800;
		letter-spacing: 0.02em;
		line-height: 1.12;
		text-transform: uppercase;
	}

	.treatment--heavy strong {
		color: var(--studio-violet-light);
	}

	.treatment--final {
		font-family: var(--studio-font-display);
		font-size: clamp(2.5rem, 4.4vw, 3.125rem);
		font-weight: 400;
	}

	.treatment--final strong {
		border-bottom: 3px dotted var(--studio-terracotta);
		font-weight: inherit;
	}

	@keyframes badge-spin {
		to {
			transform: rotate(360deg);
		}
	}

	@media (max-width: 40rem) {
		.brand-slot__plate {
			height: 18rem;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.treatment:not(.treatment--final) {
			display: none;
		}

		.treatment--final {
			opacity: 1;
			transform: none;
		}
	}
</style>
