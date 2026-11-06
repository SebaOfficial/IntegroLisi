<script lang="ts">
	import Founder from '#lib/assets/founder.jpg?enhanced';
	import { resolve } from '$app/paths';
</script>

<section class="py-24 md:py-32">
	<div class="mx-auto grid max-w-7xl items-center gap-12 px-6 md:px-8 lg:grid-cols-5 lg:gap-20">
		<div class="lg:col-span-2">
			<enhanced:img
				alt="Ritratto della Dr.ssa Aurora Lisi, psicoterapeuta e fondatrice di IntegroLisi"
				loading="lazy"
				width="1088"
				height="1344"
				class="aspect-4/5 w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5"
				src={Founder}
			/>
		</div>
		<div class="lg:col-span-3">
			<h2 class="mt-4 mb-8 font-serif text-4xl md:text-5xl">Dr.ssa Aurora Lisi</h2>
			<p class="leading-relaxed">
				Psicoterapeuta, da sempre interessata al funzionamento della mente umana e alle possibilità
				di trasformazione della persona. Da trent'anni la psicologia è la mia professione, ma
				soprattutto una scelta di vita che rifarei ancora. Nel mio lavoro unisco una formazione
				clinica articolata, la ricerca continua e una profonda attenzione alla sensibilità e alla
				complessità dell'essere umano. Credo in una cura gentile ma determinata, che sappia
				integrare prospettive e strumenti diversi per incontrare la persona nella sua interezza e
				accompagnarla verso una maggiore consapevolezza, equilibrio e completezza di sé.
			</p>

			<a
				href={resolve('/chi-sono')}
				class="mt-8 inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase"
			>
				Scopri il mio percorso →
			</a>
		</div>
	</div>
</section>
