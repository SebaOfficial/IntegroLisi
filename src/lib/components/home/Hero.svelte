<script lang="ts">
	import { resolve } from '$app/paths';
	import Hero from '$lib/assets/home/hero.jpg?enhanced';
	import { t } from '$lib/i18n';
</script>

<section class="relative overflow-hidden px-6 pt-16 pb-24 md:px-8 md:pt-24 md:pb-32">
	<div class="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
		<div class="relative z-10">
			<span class="mb-6 inline-block text-xs font-medium tracking-[0.25em] text-gold uppercase">
				{$t('home.hero.tagline')}
			</span>
			<h1
				class="mb-8 font-serif text-5xl leading-[1.05] text-balance text-charcoal md:text-6xl lg:text-7xl"
			>
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html $t('home.hero.title')}
			</h1>
			<p class="mb-10 max-w-xl text-lg leading-relaxed text-charcoal/70 md:text-xl">
				{$t('home.hero.description')}
			</p>
			<div class="flex flex-wrap gap-4">
				<a
					href={resolve('/contatti')}
					class="rounded-full bg-charcoal px-8 py-4 text-sm font-medium tracking-wide text-ivory shadow-lg shadow-charcoal/10 transition-colors hover:bg-gold"
				>
					{$t('home.hero.buttons.book')}
				</a>
				<a
					href={resolve('/ambiti-intervento/')}
					class="rounded-full border border-charcoal/20 px-8 py-4 text-sm font-medium tracking-wide text-charcoal transition-colors hover:border-gold"
				>
					{$t('home.hero.buttons.more')}
				</a>
			</div>
		</div>
		<div class="relative">
			<enhanced:img
				alt={$t('home.hero.image.alt')}
				width="1200"
				height="1408"
				class="aspect-4/5 w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5"
				src={Hero}
			/>
			<div
				class="bg-terracotta/10 absolute -bottom-6 -left-6 -z-10 h-48 w-48 rounded-full blur-3xl"
			></div>
		</div>
	</div>
</section>
