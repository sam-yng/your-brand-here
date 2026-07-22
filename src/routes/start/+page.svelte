<script lang="ts">
	import PageMeta from '$lib/components/seo/PageMeta.svelte';
	import { engagementOptions } from '$lib/content/commercial';
	import { routeMetadata } from '$lib/content/metadata';

	const nextSteps = [
		'I read your brief properly and reply with questions, not a quote.',
		'If it looks like a fit, we book a call to frame the goal and the shape of the engagement.',
		"If it doesn't, I say so honestly and point you somewhere better if I can."
	] as const;
</script>

<PageMeta metadata={routeMetadata.start} />

<main class="start-page commercial-main">
	<section class="commercial-hero start-hero">
		<div class="commercial-hero__inner">
			<div class="commercial-hero__copy">
				<p class="commercial-eyebrow">Start a project</p>
				<h1>Put <em>your brand</em> here.</h1>
				<p class="commercial-hero__intro">
					Tell me what you are building, what is not working now, and what a better website needs to
					change. The form below shows the questions I will ask; delivery is still being connected.
				</p>
			</div>
		</div>
	</section>

	<section class="commercial-section">
		<div class="commercial-section__inner start-layout">
			<form class="inquiry-form" aria-describedby="inquiry-status">
				<div class="field-grid field-grid--two">
					<label>
						<span>Name <b aria-hidden="true">*</b></span>
						<input name="name" type="text" autocomplete="name" minlength="2" required />
					</label>
					<label>
						<span>Email <b aria-hidden="true">*</b></span>
						<input name="email" type="email" autocomplete="email" required />
					</label>
				</div>

				<div class="field-grid field-grid--two">
					<label>
						<span>Company, collective, or project</span>
						<input name="organisation" type="text" autocomplete="organization" />
					</label>
					<label>
						<span>Current website <small>(optional)</small></span>
						<input name="website" type="url" autocomplete="url" placeholder="https://" />
					</label>
				</div>

				<label>
					<span>What are you making or changing? <b aria-hidden="true">*</b></span>
					<textarea name="brief" rows="4" minlength="8" required></textarea>
				</label>

				<label>
					<span>What does the new site need to achieve?</span>
					<textarea name="goal" rows="3"></textarea>
				</label>

				<div class="field-grid field-grid--three">
					<label>
						<span>Project type</span>
						<select name="projectType">
							{#each engagementOptions.projectTypes as option}<option>{option}</option>{/each}
						</select>
					</label>
					<label>
						<span>Indicative budget (AUD)</span>
						<select name="budget">
							{#each engagementOptions.budgets as option}<option>{option}</option>{/each}
						</select>
					</label>
					<label>
						<span>Desired timing</span>
						<select name="timing">
							{#each engagementOptions.timings as option}<option>{option}</option>{/each}
						</select>
					</label>
				</div>

				<label>
					<span>How did you find me? <small>(optional)</small></span>
					<input name="referral" type="text" />
				</label>

				<label class="consent-field">
					<input name="consent" type="checkbox" required />
					<span>
						When submission goes live, I agree that this inquiry may be stored and emailed to Sam so
						he can reply. Details in the <a href="/privacy/">privacy note</a>. <b aria-hidden="true">*</b>
					</span>
				</label>

				<div class="form-submit">
					<div class="challenge-preview">
						<i aria-hidden="true"></i>
						<span>Turnstile will be verified server-side before anything is sent</span>
					</div>
					<button type="submit" disabled aria-describedby="inquiry-status">Send project brief</button>
				</div>

				<p id="inquiry-status" class="inquiry-status" role="status">
					Form delivery is not live yet. Nothing entered here can be submitted or stored. Use direct
					email for a real inquiry.
				</p>
				<noscript>
					<p class="inquiry-status">JavaScript is off; form delivery remains unavailable. Direct email still works.</p>
				</noscript>
			</form>

			<aside class="start-aside">
				<section aria-labelledby="next-steps-title">
					<h2 id="next-steps-title">What happens next</h2>
					<ol>
						{#each nextSteps as step}<li>{step}</li>{/each}
					</ol>
				</section>

				<section class="email-panel" aria-labelledby="plain-email-title">
					<h2 id="plain-email-title">Prefer plain email?</h2>
					<p>
						<a href="mailto:young142001@gmail.com">young142001@gmail.com</a> works now. Include what
						you are changing, the outcome you need, timing, and an indicative AUD budget.
					</p>
				</section>

				<p class="truth-note">
					Plan 03B owns server validation, Turnstile, delivery, preserved errors, and the accepted
					success redirect. This preview cannot claim success.
				</p>
			</aside>
		</div>
	</section>
</main>

<style>
	.start-layout {
		display: grid;
		grid-template-columns: 7fr 4fr;
		gap: clamp(3rem, 6vw, 6.5rem);
		align-items: start;
	}

	.inquiry-form {
		display: flex;
		flex-direction: column;
		gap: 1.625rem;
		padding: clamp(2rem, 3.5vw, 3.5rem);
		border: 1px solid var(--studio-line);
		border-radius: var(--studio-radius-large);
		background: var(--studio-white);
	}

	.field-grid {
		display: grid;
		gap: 1.625rem;
	}

	.field-grid--two {
		grid-template-columns: 1fr 1fr;
	}

	.field-grid--three {
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}

	.inquiry-form label:not(.consent-field) {
		display: flex;
		min-width: 0;
		flex-direction: column;
		gap: 0.5rem;
	}

	.inquiry-form .consent-field span {
		font-size: 0.875rem;
		font-weight: 400;
		letter-spacing: 0;
		line-height: 1.55;
		text-transform: none;
	}

	.inquiry-form label:not(.consent-field) > span {
		color: var(--studio-ink);
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.1em;
		line-height: 1.5;
		text-transform: uppercase;
	}

	.inquiry-form label small {
		color: var(--studio-muted);
		font-size: inherit;
		font-weight: 400;
		letter-spacing: 0;
		text-transform: none;
	}

	.inquiry-form label b {
		color: var(--studio-terracotta);
	}

	.inquiry-form :is(input:not([type='checkbox']), select, textarea) {
		width: 100%;
		min-height: 3rem;
		padding: 0.8125rem 0.875rem;
		border: 1px solid var(--studio-line);
		border-radius: 0.125rem;
		background: var(--studio-white);
		color: var(--studio-ink);
		font-size: 0.96875rem;
	}

	.inquiry-form textarea {
		line-height: 1.6;
		resize: vertical;
	}

	.inquiry-form ::placeholder {
		color: var(--studio-field-placeholder);
	}

	.consent-field {
		align-items: baseline;
		flex-direction: row;
		gap: 0.75rem;
	}

	.consent-field input {
		width: 1.0625rem;
		height: 1.0625rem;
		flex: none;
		accent-color: var(--studio-violet);
		transform: translateY(0.125rem);
	}

	.consent-field a {
		color: var(--studio-violet);
	}

	.form-submit {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1.5rem;
		padding-top: 1.625rem;
		border-top: 1px solid var(--studio-line);
	}

	.challenge-preview {
		display: flex;
		align-items: center;
		gap: 0.625rem;
		padding: 0.75rem 1rem;
		border: 1px dashed var(--studio-field-placeholder);
		color: var(--studio-muted);
		font-size: 0.75rem;
		font-weight: 500;
		letter-spacing: 0.04em;
		line-height: 1.4;
	}

	.challenge-preview i {
		width: 1.375rem;
		height: 1.375rem;
		flex: none;
		border: 2px solid var(--studio-violet);
		border-radius: 0.1875rem;
	}

	.form-submit button {
		min-height: 3.25rem;
		padding: 0.9375rem 2rem;
		border: 0;
		border-radius: var(--studio-radius-pill);
		background: var(--studio-ink);
		color: var(--studio-white);
		font-size: 0.875rem;
		font-weight: 600;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		opacity: 0.58;
	}

	.inquiry-status,
	.truth-note {
		margin: 0;
		color: var(--studio-muted);
		font-size: 0.8125rem;
		line-height: 1.6;
	}

	.inquiry-status {
		padding: 0.875rem 1rem;
		border-left: 3px solid var(--studio-terracotta);
		background: color-mix(in srgb, var(--studio-terracotta) 9%, transparent);
		color: var(--studio-ink);
	}

	.start-aside {
		position: sticky;
		top: 6.25rem;
		display: flex;
		flex-direction: column;
		gap: 1.75rem;
	}

	.start-aside > section:first-child {
		padding-top: 1.25rem;
		border-top: 2px solid var(--studio-ink);
	}

	.start-aside h2 {
		margin: 0;
		font-family: var(--studio-font-mono);
		font-size: 0.6875rem;
		font-weight: 700;
		letter-spacing: 0.18em;
		text-transform: uppercase;
	}

	.start-aside ol {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin: 0.875rem 0 0;
		padding: 0;
		list-style: none;
		counter-reset: next-step;
	}

	.start-aside li {
		position: relative;
		padding-left: 2rem;
		font-size: 0.9375rem;
		font-weight: 300;
		line-height: 1.6;
		counter-increment: next-step;
	}

	.start-aside li::before {
		position: absolute;
		left: 0;
		color: var(--studio-violet);
		font-family: var(--studio-font-display);
		font-size: 1.125rem;
		font-style: italic;
		content: counter(next-step);
	}

	.email-panel {
		display: flex;
		flex-direction: column;
		gap: 0.625rem;
		padding: 1.625rem;
		border-radius: var(--studio-radius-small);
		background: var(--studio-mist);
	}

	.email-panel p {
		margin: 0;
		font-size: 0.9375rem;
		line-height: 1.6;
	}

	.email-panel a {
		color: var(--studio-ink);
		font-weight: 600;
		text-decoration-thickness: 0.125rem;
		text-decoration-color: var(--studio-violet);
		text-underline-offset: 0.1875rem;
	}

	@media (max-width: 65rem) {
		.start-layout {
			grid-template-columns: 1fr;
		}

		.start-aside {
			position: static;
		}
	}

	@media (max-width: 50rem) {
		.field-grid--two,
		.field-grid--three {
			grid-template-columns: 1fr;
		}

		.form-submit {
			align-items: stretch;
			flex-direction: column;
		}
	}
</style>
