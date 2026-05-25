<script lang="ts">
	import { t } from '$lib/i18n';
	import { resolve } from '$app/paths';
	import FounderImage from '$lib/assets/home/founder.jpg?enhanced';
	import config from '$lib/config';
</script>

<section class="border-t border-charcoal/5 bg-ivory py-24 md:py-32">
	<div class="mx-auto grid max-w-7xl items-center gap-12 px-6 md:px-8 lg:grid-cols-5 lg:gap-20">
		<div class="lg:col-span-2">
			<enhanced:img
				alt={$t('home.founder.img.alt')}
				loading="lazy"
				width="1088"
				height="1344"
				class="aspect-4/5 w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5"
				src={FounderImage}
			/>
		</div>
		<div class="lg:col-span-3">
			<span class="text-[11px] font-medium tracking-[0.25em] text-gold uppercase">
				{$t('home.founder.tagline')}
			</span>
			<h2 class="mt-4 mb-8 font-serif text-4xl text-charcoal md:text-5xl">
				{$t('home.founder.title')}
			</h2>
			<p class="mb-6 font-serif text-lg text-charcoal/80 italic">
				{$t('home.founder.quote')}
			</p>
			<p class="mb-8 leading-relaxed text-charcoal/70">
				{$t('home.founder.description')}
			</p>
			<div class="grid gap-6 border-y border-charcoal/10 py-8 sm:grid-cols-3">
				<div>
					<span class="mb-1 block text-[10px] tracking-widest text-gold uppercase">
						{$t('home.founder.order_number.title')}
					</span>
					<span class="text-sm font-medium">
						{$t('home.founder.order_number.description', {
							ORDER_NUMBER: config.orderNumber
							// eslint-disable-next-line @typescript-eslint/no-explicit-any
						} as any)}
					</span>
				</div>
				<div>
					<span class="mb-1 block text-[10px] tracking-widest text-gold uppercase">
						{$t('home.founder.specialization.title')}
					</span>
					<span class="text-sm font-medium">
						{$t('home.founder.specialization.description')}
					</span>
				</div>
				<div>
					<span class="mb-1 block text-[10px] tracking-widest text-gold uppercase">
						{$t('home.founder.areas.title')}
					</span>
					<span class="text-sm font-medium">
						{$t('home.founder.areas.description')}
					</span>
				</div>
			</div>
			<a
				href={resolve('/about')}
				class="mt-8 inline-flex items-center gap-2 text-xs font-medium tracking-widest text-charcoal uppercase transition-colors hover:text-gold"
			>
				{$t('home.founder.more')} →
			</a>
		</div>
	</div>
</section>
