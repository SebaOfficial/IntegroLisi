<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/favicon.png';
	import heroImage from '#lib/assets/hero.jpg?enhanced';
	import type { LayoutProps } from './$types';
	import Header from '#lib/components/Header.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import config from '#lib/config.ts';
	import SvelteSeo from 'svelte-seo';
	import { page } from '$app/state';
	import { dev } from '$app/env';

	let { children }: LayoutProps = $props();

	const pathname = $derived(page.url.pathname.replace(/\/$/, '') || '/');
	const metadata = $derived(config.seo[pathname as '/'] ?? config.seo['/']);
	const canonical = $derived(`${config.site.url}${pathname === '/' ? '/' : pathname}`);
	const socialImage = `${config.site.url}${heroImage.img.src}`;
	const organizationSchema = {
		'@context': 'https://schema.org',
		'@type': 'ProfessionalService',
		'@id': `${config.site.url}/#business`,
		name: 'Studio di Psicoterapia IntegroLisi',
		url: config.site.url,
		description: config.seo['/'].description,
		telephone: config.contacts.phone,
		email: config.contacts.email[0],
		priceRange: '$$',
		address: {
			'@type': 'PostalAddress',
			streetAddress: 'Via Musinè, 14',
			postalCode: '10045',
			addressLocality: 'Piossasco',
			addressRegion: 'TO',
			addressCountry: 'IT',
		},
		geo: {
			'@type': 'GeoCoordinates',
			latitude: 44.983284965396784,
			longitude: 7.437931776852903,
		},
		areaServed: ['Piossasco', 'Torino'],
		serviceType: ['Psicoterapia', 'EMDR', 'Neurofeedback'],
	} as const;
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="geo.region" content="IT-TO" />
	<meta name="geo.placename" content="Piossasco" />
	<meta name="geo.position" content="44.983284965396784;7.437931776852903" />
	<meta name="ICBM" content="44.983284965396784, 7.437931776852903" />
	<meta name="format-detection" content="telephone=yes" />
	<meta name="author" content="Dr.ssa Aurora Lisi" />

	<SvelteSeo
		title={metadata.title}
		description={metadata.description}
		keywords={metadata.keywords}
		{canonical}
		languageAlternates={[{ hreflang: 'it-IT', href: canonical }]}
		applicationName={config.site.name}
		themeColor="#fbfaf7"
		openGraph={{
			title: metadata.title,
			description: metadata.description,
			url: canonical,
			type: 'website',
			locale: config.site.locale,
			site_name: config.site.name,
			images: [
				{
					url: socialImage,
					width: 1200,
					height: 1408,
					alt: 'IntegroLisi: psicoterapia e neurofeedback',
				},
			],
		}}
		twitter={{
			card: 'summary_large_image',
			title: metadata.title,
			description: metadata.description,
			image: socialImage,
			imageAlt: 'IntegroLisi: psicoterapia e neurofeedback',
		}}
		jsonLd={organizationSchema}
	/>

	{#if !dev}
		<script
			defer
			async
			src="https://analytics.racca.me/script.js"
			data-website-id="d638aabd-2399-4fb5-aa84-84b9baebe419"
			data-performance="true"
		></script>
	{/if}
</svelte:head>

<Header />

<main class="flex-1" itemscope itemtype="https://schema.org/ProfessionalService">
	<meta itemprop="name" content="Studio di Psicoterapia IntegroLisi" />
	<meta itemprop="telephone" content={config.contacts.phone} />
	<meta itemprop="address" content={config.contacts.address} />
	{@render children()}
</main>

<Footer />
