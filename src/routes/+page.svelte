<script lang="ts">
	import CTA from '$lib/components/home/CTA.svelte';
	import Founder from '$lib/components/home/Founder.svelte';
	import Hero from '$lib/components/home/Hero.svelte';
	import Philosophy from '$lib/components/home/Philosophy.svelte';
</script>

<Hero />

<Philosophy />

<Founder />

<section class="bg-sand py-24 md:py-28">
	<div class="mx-auto max-w-7xl px-6 md:px-8">
		<div class="mb-12 text-center">
			<span class="text-[11px] font-medium tracking-[0.25em] text-gold uppercase">
				Dove siamo
			</span>
			<h2 class="mt-4 font-serif text-4xl text-charcoal md:text-5xl">Trova lo studio</h2>
			<p class="mx-auto mt-6 max-w-2xl text-charcoal/70">
				Lo studio IntegroLisi si trova a Piossasco (TO), in un ambiente riservato e accogliente,
				facilmente raggiungibile.
			</p>
		</div>

		<div class="overflow-hidden rounded-3xl border border-charcoal/10 shadow-lg">
			<div class="relative aspect-video w-full">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2822.050698767101!2d7.4379318!3d44.9832812!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47883f0062457ee3%3A0x6c9fae5509c6e032!2sStudio%20di%20Psicoterapia%20Integro!5e0!3m2!1sen!2sit!4v1779701784577!5m2!1sen!2sit"
					width="600"
					height="450"
					class="absolute inset-0 h-full w-full"
					allowfullscreen
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
					title="Mappa dello studio IntegroLisi - Via Musinè 14, Piossasco"
				></iframe>
			</div>
		</div>
	</div>
</section>

<CTA />
