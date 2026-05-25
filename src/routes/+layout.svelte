<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.png';
	import Header from '$lib/components/common/Header.svelte';
	import Footer from '$lib/components/common/Footer.svelte';

	const { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex min-h-screen w-full flex-col text-charcoal selection:bg-gold/20">
	<Header />

	<main class="flex-1">
		{@render children()}
	</main>

	<Footer />
</div>

<style>
	:global(body) {
		background-color: var(--ivory);
	}
</style>
