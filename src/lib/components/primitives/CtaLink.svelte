<script lang="ts">
	let { href, label, arrow = false }: { href: string; label: string; arrow?: boolean } = $props();
</script>

<a class="cta-link" {href}>{label}{#if arrow}<span aria-hidden="true"> →</span>{/if}</a>
