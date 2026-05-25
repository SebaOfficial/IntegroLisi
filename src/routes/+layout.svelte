<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.png';
	import Header from '$lib/components/common/Header.svelte';
	import Footer from '$lib/components/common/Footer.svelte';
	import { dev } from '$app/environment';
	import SvelteSeo from 'svelte-seo';
	import { t, pathnameToKey } from '$lib/i18n';
	import { page } from '$app/state';
	import config from '$lib/config';

	const { children } = $props();

	let key = $derived(pathnameToKey(page.url.pathname));

	const siteName = $derived($t('app.name').join(''));
	const seo = $derived({
		title: `${$t(`${key}.seo.title`)} | ${siteName}`,
		description: $t(`${key}.seo.description`),
		canonical: `${config.baseUrl}${page.url.pathname}`,
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<SvelteSeo
	title={seo.title}
	description={seo.description}
	canonical={seo.canonical}
	openGraph={{
		title: seo.title,
		description: seo.description,
		url: seo.canonical,
		type: 'website',
		// TODO: add page-specific images
		site_name: siteName,
	}}
	twitter={{
		card: 'summary_large_image',
		title: seo.title,
		description: seo.description,
		// TODO: add page-specific images
	}}
	jsonLd={{
		'@context': 'https://schema.org',
		'@type': 'MedicalBusiness',
		name: siteName,
		description: $t('footer.description'),
		url: config.baseUrl,
		telephone: config.phone,
		email: config.email,
		address: {
			'@type': 'PostalAddress',
			streetAddress: config.addressInfo.street,
			postalCode: config.addressInfo.postalCode,
			addressLocality: config.addressInfo.city,
			addressRegion: config.addressInfo.province,
			addressCountry: config.addressInfo.country,
		},
		contactPoint: [
			{
				'@type': 'ContactPoint',
				telephone: config.phone,
				email: config.email,
				contactType: 'appointments',
				availableLanguage: ['it'],
			},
		],
		priceRange: '€€',
		founder: {
			'@type': 'Person',
			name: config.founder,
		},
	}}
/>

<div class="flex min-h-screen w-full flex-col text-charcoal selection:bg-gold/20">
	<Header />

	<main class="flex-1">
		{@render children()}
	</main>

	<Footer />
</div>

{#if !dev}
	<script async src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
	<script async src="https://scripts.simpleanalyticscdn.com/auto-events.js"></script>
{/if}

<style>
	:global(body) {
		background-color: var(--ivory);
	}
</style>
