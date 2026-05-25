<script>
	import { t } from '$lib/i18n';
	import { resolve } from '$app/paths';
</script>

<section class="px-6 py-16 md:px-8 md:py-24">
	<div
		class="relative mx-auto max-w-7xl overflow-hidden rounded-4xl bg-charcoal p-12 text-center md:rounded-[3rem] md:p-24"
	>
		<div class="pointer-events-none absolute inset-0 opacity-10">
			<div
				class="absolute top-0 left-0 h-full w-full -translate-x-1/2 rotate-12 border-r border-gold"
			></div>
			<div
				class="absolute right-0 bottom-0 h-full w-full translate-x-1/2 -rotate-12 border-l border-gold"
			></div>
		</div>
		<div class="relative z-10">
			<h2 class="mb-6 font-serif text-3xl text-balance text-ivory md:text-5xl">
				{$t('home.cta.title')}
			</h2>
			<p class="mx-auto mb-10 max-w-xl text-base text-ivory/65 md:text-lg">
				{$t('home.cta.description')}
			</p>
			<div class="flex flex-col justify-center gap-4 sm:flex-row">
				<a
					href={resolve('/contatti?reason=appointment')}
					class="rounded-full bg-gold px-10 py-4 text-sm font-semibold tracking-wide text-charcoal transition-colors hover:bg-ivory"
				>
					{$t('home.cta.buttons.book')}
				</a>
				<a
					href={resolve('/ambiti-intervento/')}
					class="rounded-full border border-white/20 bg-white/5 px-10 py-4 text-sm font-semibold tracking-wide text-ivory transition-colors hover:bg-white/10"
				>
					{$t('home.cta.buttons.services')}
				</a>
			</div>
		</div>
	</div>
</section>
