<script lang="ts">
	import { t } from '$lib/i18n';
</script>

<div class="mb-16 max-w-3xl">
	<p class="mb-6 text-[11px] tracking-[0.3em] text-gold uppercase">{$t('contacts.hero.tagline')}</p>
	<h1 class="font-serif text-5xl leading-[1.05] text-charcoal md:text-6xl">
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html $t('contacts.hero.title')}
	</h1>
	<p class="mt-6 text-lg leading-relaxed text-charcoal/70">
		{$t('contacts.hero.description')}
	</p>
</div>
