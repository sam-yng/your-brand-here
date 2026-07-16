<script lang="ts">
	import { page } from '$app/state';
	import CtaLink from '$lib/components/primitives/CtaLink.svelte';
	import { primaryAction, primaryNavigation } from '$lib/content/navigation';
	import BrandLockup from './BrandLockup.svelte';

	function isCurrent(href: string) {
		return href === '/' ? page.url.pathname === '/' : page.url.pathname.startsWith(href);
	}
</script>

<header class="studio-header">
	<div class="studio-header__inner">
		<BrandLockup />

		<nav class="desktop-navigation" aria-label="Primary navigation">
			{#each primaryNavigation as item}
				<a class="navigation-link" href={item.href} aria-current={isCurrent(item.href) ? 'page' : undefined}>
					{item.label}
				</a>
			{/each}
			<CtaLink href={primaryAction.href} label={primaryAction.label} />
		</nav>

		<details class="mobile-navigation">
			<summary>
				<span>Menu</span>
				<span class="menu-mark" aria-hidden="true"><i></i><i></i></span>
			</summary>
			<nav aria-label="Mobile navigation">
				{#each primaryNavigation as item}
					<a href={item.href} aria-current={isCurrent(item.href) ? 'page' : undefined}>{item.label}</a>
				{/each}
				<a class="mobile-navigation__action" href={primaryAction.href}>{primaryAction.label}</a>
			</nav>
		</details>
	</div>
</header>

<style>
	.studio-header {
		position: sticky;
		z-index: 60;
		top: 0;
		border-bottom: 1px solid rgb(244 243 239 / 14%);
		background: rgb(14 14 13 / 84%);
		backdrop-filter: blur(0.875rem);
		color: var(--studio-canvas);
		view-transition-name: studio-header;
	}

	.studio-header__inner {
		display: flex;
		width: min(100%, var(--studio-content-max));
		height: 4.5rem;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
		margin-inline: auto;
		padding-inline: var(--studio-gutter);
	}

	.desktop-navigation {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.navigation-link {
		padding: 0.625rem 1rem;
		border: 1px solid transparent;
		border-radius: var(--studio-radius-pill);
		color: rgb(244 243 239 / 75%);
		font-family: var(--studio-font-mono);
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.14em;
		text-decoration: none;
		text-transform: uppercase;
		transition:
			color var(--motion-local) var(--ease-standard),
			background var(--motion-local) var(--ease-standard),
			border-color var(--motion-local) var(--ease-standard);
	}

	.navigation-link:hover,
	.navigation-link[aria-current='page'] {
		border-color: rgb(244 243 239 / 22%);
		background: rgb(244 243 239 / 9%);
		color: var(--studio-white);
	}

	.mobile-navigation {
		display: none;
		position: relative;
	}

	.mobile-navigation summary {
		display: flex;
		min-width: 4.75rem;
		min-height: 2.75rem;
		cursor: pointer;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem;
		padding: 0.5rem 0.75rem;
		border: 1px solid rgb(244 243 239 / 22%);
		border-radius: var(--studio-radius-pill);
		font-family: var(--studio-font-mono);
		font-size: 0.6875rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		list-style: none;
		text-transform: uppercase;
	}

	.mobile-navigation summary::-webkit-details-marker {
		display: none;
	}

	.menu-mark {
		display: grid;
		width: 0.875rem;
		gap: 0.25rem;
	}

	.menu-mark i {
		display: block;
		height: 1px;
		background: currentcolor;
		transition: transform 220ms var(--ease-standard);
	}

	.mobile-navigation[open] .menu-mark i:first-child {
		transform: translateY(0.15625rem) rotate(45deg);
	}

	.mobile-navigation[open] .menu-mark i:last-child {
		transform: translateY(-0.15625rem) rotate(-45deg);
	}

	.mobile-navigation nav {
		position: absolute;
		top: calc(100% + 0.75rem);
		right: 0;
		display: grid;
		width: min(20rem, calc(100vw - 2.5rem));
		padding: 0.75rem;
		border: 1px solid rgb(244 243 239 / 18%);
		border-radius: var(--studio-radius-card);
		background: rgb(14 14 13 / 97%);
		box-shadow: 0 1.5rem 4rem rgb(0 0 0 / 45%);
		transform-origin: top right;
		animation: menu-enter 220ms var(--ease-standard) both;
	}

	.mobile-navigation nav a {
		display: flex;
		min-height: 2.75rem;
		align-items: center;
		padding: 0.75rem 1rem;
		border-radius: 0.75rem;
		font-family: var(--studio-font-mono);
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-decoration: none;
		text-transform: uppercase;
	}

	.mobile-navigation nav a:hover,
	.mobile-navigation nav a[aria-current='page'] {
		background: rgb(244 243 239 / 9%);
	}

	.mobile-navigation nav .mobile-navigation__action {
		margin-top: 0.5rem;
		background: var(--studio-violet);
		color: var(--studio-white);
	}

	@keyframes menu-enter {
		from {
			opacity: 0;
			transform: scale(0.96);
		}
	}

	@media (max-width: 60rem) {
		.desktop-navigation {
			display: none;
		}

		.mobile-navigation {
			display: block;
		}
	}
</style>
