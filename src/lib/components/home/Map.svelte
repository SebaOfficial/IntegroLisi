<script lang="ts">
	import { t } from '$lib/i18n';
	import config from '$lib/config';
</script>

<section class="bg-sand py-24 md:py-28">
	<div class="mx-auto max-w-7xl px-6 md:px-8">
		<div class="mb-12 text-center">
			<span class="text-[11px] font-medium tracking-[0.25em] text-gold uppercase">
				{$t('home.map.tagline')}
			</span>
			<h2 class="mt-4 font-serif text-4xl text-charcoal md:text-5xl">
				{$t('home.map.title')}
			</h2>
			<p class="mx-auto mt-6 max-w-2xl text-charcoal/70">
				{$t('home.map.description')}
			</p>
		</div>

		<div class="overflow-hidden rounded-3xl border border-charcoal/10 shadow-lg">
			<div class="relative aspect-video w-full">
				<iframe
					src={config.googleMapsEmbedUrl}
					width="600"
					height="450"
					class="absolute inset-0 h-full w-full"
					allowfullscreen
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
					title={$t('home.map.iframe.title')}
				></iframe>
			</div>
		</div>
	</div>
</section>
