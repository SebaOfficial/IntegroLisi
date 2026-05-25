<script lang="ts">
	import { t } from '$lib/i18n';
</script>

<section class="bg-sand py-24 md:py-28">
	<div class="mx-auto max-w-4xl px-6 text-center md:px-8">
		<div class="kintsugi-line mb-14"></div>
		<span class="text-[11px] font-medium tracking-[0.25em] text-gold uppercase">
			{$t('home.philosophy.tagline')}
		</span>
		<h2 class="mt-4 mb-8 font-serif text-4xl text-balance text-charcoal md:text-5xl">
			{$t('home.philosophy.title')}
		</h2>
		<p class="mb-6 font-serif text-lg leading-relaxed text-charcoal/80 italic">
			{$t('home.philosophy.quote')}
		</p>
		<p class="mx-auto max-w-2xl text-base leading-relaxed text-charcoal/70">
			{$t('home.philosophy.description')}
		</p>
		<div class="kintsugi-line mt-14"></div>
	</div>
</section>

<style>
	.kintsugi-line {
		background: linear-gradient(90deg, transparent 0%, var(--gold) 50%, transparent 100%);
		opacity: 0.45;
		width: 100%;
		height: 1px;
	}
</style>
