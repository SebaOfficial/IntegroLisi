<script lang="ts">
	import Founder from '#lib/assets/founder.jpg?enhanced';

	const sections = [
		{
			title: 'Il mio percorso: comprendere, integrare, accompagnare',
			paragraphs: [
				'La mia storia con la psicologia è cominciata molto presto. Già durante gli anni delle scuole superiori sapevo che cosa avrei voluto fare da grande. Mi interessava profondamente capire come funzionasse il cervello, come nascessero le emozioni, come le esperienze potessero influenzare il nostro modo di pensare, sentire e vivere.',
				'Ero anche una studentessa che conosceva la sofferenza. Forse, già allora, nella scelta di questa strada convivevano due desideri: comprendere meglio me stessa e trovare un modo per prendermi cura degli altri.',
				"Il 29 novembre 2026 saranno esattamente trent'anni dalla mia laurea. Una scelta che ha dato alla mia vita una ricchezza che non avrei potuto immaginare e che rifarei senza esitazione.",
				'Mi sono specializzata in psicoterapia adleriana, che da venticinque anni rappresenta una delle fondamenta del mio lavoro clinico. Ma ho sempre sentito che comprendere la persona richiedesse uno sguardo ampio, capace di non fermarsi a un solo modello interpretativo.',
				"Ho quindi continuato ad approfondire prospettive differenti, nella convinzione che ogni nuovo strumento potesse arricchire la mia capacità di ascoltare e accompagnare. Lo studio della terapia familiare è stato una tappa particolarmente significativa: mi ha insegnato a considerare la persona anche all'interno delle sue relazioni e dei sistemi di appartenenza, offrendo strumenti preziosi tanto nel lavoro con le coppie quanto nella terapia individuale.",
				"L'incontro con l'EMDR, fino al conseguimento della qualifica di Practitioner EMDR Europe, ha ampliato profondamente le mie possibilità di lavorare con le esperienze traumatiche. Ho poi integrato la mindfulness, riconoscendone il valore nell'aiutare le persone ad avvicinarsi alle proprie esperienze interiori con maggiore presenza e consapevolezza.",
				"Negli ultimi anni il mio interesse originario per il funzionamento cerebrale è tornato al centro della mia ricerca. Quando frequentavo l'università, trent'anni fa, le neuroscienze non avevano ancora lo spazio che hanno oggi nella formazione psicologica. Le nuove scoperte scientifiche mi hanno spinta ad approfondire nuovamente il rapporto tra cervello, emozioni, esperienze e possibilità di cambiamento.",
				"In questo percorso si inserisce l'incontro con NeurOptimal®, il neurofeedback che ho conosciuto inizialmente attraverso un'esperienza personale e che successivamente ho scelto di integrare nella mia professione. È stato un incontro sorprendente, che ha arricchito il mio modo di accompagnare le persone e ha aperto nuove prospettive nel lavoro terapeutico e nella crescita personale."
			]
		},
		{
			title: 'Integrare per prendersi cura della persona nella sua interezza',
			paragraphs: [
				"Nel mio lavoro non credo nell'applicazione rigida di un unico metodo. Credo piuttosto nella possibilità di integrare approcci differenti, perché la sofferenza umana è complessa e può coinvolgere dimensioni emotive, cognitive, relazionali e neurofisiologiche.",
				"La psicoterapia, l'EMDR e il neurofeedback hanno caratteristiche e modalità d'azione differenti, ma possono essere profondamente complementari. La psicoterapia permette di dare significato alla propria storia e comprendere i propri vissuti; l'EMDR offre strumenti specifici per l'elaborazione delle esperienze traumatiche; il neurofeedback introduce una possibilità di lavoro sui processi di autoregolazione cerebrale.",
				'Non si tratta di sommare tecniche, ma di farle dialogare, scegliendo di volta in volta ciò che può essere più utile per quella persona e in quel particolare momento del suo percorso.',
				'È proprio qui che riconosco il significato più profondo di Integro: accompagnare la persona a ritrovare connessioni tra le proprie esperienze, le emozioni, il corpo e le diverse parti di sé. Perché sentirsi più integri significa anche recuperare una percezione di completezza, riconoscersi nella propria storia senza esserne prigionieri e ritrovare una maggiore coerenza interiore.'
			]
		},
		{
			title: 'La mia ricerca continua',
			paragraphs: [
				'Oggi si sta orientando anche verso la Flash Technique, un approccio che offre nuove possibilità di lavorare con le esperienze traumatiche in modo particolarmente delicato, rispettando le risorse e i tempi della persona.',
				"C'è una ragione per cui continuo a studiare, sperimentare e mettermi in discussione: non chiedo alle persone che incontro qualcosa che non sia parte anche del mio percorso. La crescita e la ricerca di nuove possibilità riguardano anche me."
			]
		},
		{
			title: 'Delicatezza e determinazione',
			paragraphs: [
				"Credo che conoscere la sofferenza, anche attraverso il proprio percorso personale, insegni a non sottovalutare mai ciò che una persona porta con sé. Per questo il mio approccio è delicato: so quanto l'essere umano possa soffrire e quanto sia importante sentirsi accolti, compresi e mai forzati.",
				'Ma la delicatezza non significa passività. Sono anche una terapeuta determinata, perché credo profondamente nella possibilità di guarire, di elaborare ciò che ci ha feriti e di non lasciare che il passato continui a definire il nostro futuro.',
				'Non mi interessa soltanto che una persona impari a convivere con le proprie difficoltà. Mi interessa che possa stare meglio, ritrovare le proprie risorse, riconoscere possibilità che prima non riusciva a vedere. Perché prendersi cura non significa soltanto alleviare la sofferenza, ma anche scoprire nuove parti di sé e creare nuove possibilità di vita.'
			]
		}
	];
</script>

<section class="px-6 pt-16 pb-24 md:px-8 md:pt-24 md:pb-32">
	<div class="mx-auto max-w-7xl">
		<div class="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
			<div class="lg:sticky lg:top-32">
				<enhanced:img
					alt="Ritratto della Dr.ssa Aurora Lisi, psicoterapeuta e fondatrice di IntegroLisi"
					loading="eager"
					width="1088"
					height="1344"
					class="aspect-4/5 w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5"
					src={Founder}
				/>
			</div>

			<div class="max-w-3xl">
				<div class="line mb-8"></div>
				<b class="text-[11px] font-medium tracking-[0.25em] uppercase">Chi sono</b>
				<h1 class="mt-5 mb-8 font-serif text-5xl leading-[1.05] text-balance md:text-7xl">
					Dr.ssa Aurora Lisi
				</h1>
				<div class="space-y-5 text-lg leading-relaxed text-on-background/80 md:text-xl">
					<p>
						Psicoterapeuta, da sempre interessata al funzionamento della mente umana e alle
						possibilità di trasformazione della persona. Da trent\'anni la psicologia è la mia
						professione, ma soprattutto una scelta di vita che rifarei ancora.
					</p>
					<p>
						Nel mio lavoro unisco una formazione clinica articolata, la ricerca continua e una
						profonda attenzione alla sensibilità e alla complessità dell\'essere umano. Credo in una
						cura gentile ma determinata, che sappia integrare prospettive e strumenti diversi per
						incontrare la persona nella sua interezza e accompagnarla verso una maggiore
						consapevolezza, equilibrio e completezza di sé.
					</p>
				</div>

				<div class="mt-16 space-y-16 md:mt-24 md:space-y-20">
					{#each sections as section (section.title)}
						<section class="border-t border-on-background/15 pt-8">
							<h2 class="mb-7 font-serif text-3xl leading-tight md:text-4xl">{section.title}</h2>
							<div class="space-y-5 leading-relaxed text-on-background/75">
								{#each section.paragraphs as paragraph (paragraph)}
									<p>{paragraph}</p>
								{/each}
							</div>
						</section>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
