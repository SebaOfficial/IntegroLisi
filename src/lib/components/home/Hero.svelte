<script lang="ts">
	import Hero from '#lib/assets/hero.jpg?enhanced';
</script>

<section class="px-6 pt-16 pb-24 md:px-8 md:pt-24 md:pb-32">
	<div class="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
		<div class="relative z-10">
			<h1 class=" mb-8 font-serif text-5xl leading-[1.05] text-balance md:text-6xl lg:text-7xl">
				Ogni <i>frattura</i> può diventare parte di un
				<b>tutto</b>
				più forte.
			</h1>
			<p class="mb-10 max-w-xl text-lg leading-relaxed md:text-xl">
				IntegroLisi è lo studio della Dr.ssa Aurora Lisi: psicoterapia clinica e neurofeedback si
				integrano per accompagnarti verso una nuova integrità emotiva, con rigore scientifico e
				calore umano.
			</p>
		</div>
		<div class="relative">
			<enhanced:img
				width="1200"
				height="1408"
				class="aspect-4/5 w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5"
				src={Hero}
				alt="arte del kintsugi"
			/>
		</div>
	</div>
</section>
