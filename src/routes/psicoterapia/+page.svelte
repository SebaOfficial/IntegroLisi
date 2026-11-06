<script lang="ts">
	import emdr from '#lib/assets/psicoterapia/emdr.png?enhanced';
	import flash from '#lib/assets/psicoterapia/flash.png?enhanced';
	import mindfulness from '#lib/assets/psicoterapia/mindfulness.png?enhanced';
	import nf from '#lib/assets/psicoterapia/nf.png?enhanced';

	const approaches = [
		{
			title: 'EMDR',
			label: 'Elaborare le esperienze che continuano a farci soffrire',
			intro:
				'Un approccio psicoterapeutico specifico per integrare ricordi traumatici ed esperienze emotivamente disturbanti.',
			description: [
				'Alcune esperienze dolorose non rimangono semplicemente nel passato. Possono continuare a influenzare il nostro modo di sentire, reagire e relazionarci, anche quando razionalmente sappiamo che il pericolo è finito.',
				"L'EMDR è un approccio psicoterapeutico specifico per l'elaborazione dei ricordi traumatici e delle esperienze emotivamente disturbanti.",
				'Attraverso un protocollo strutturato e la stimolazione bilaterale, aiuta a rielaborare i ricordi che mantengono una carica emotiva negativa, favorendo una loro integrazione nella storia personale.',
				"L'obiettivo non è dimenticare ciò che è accaduto, ma fare in modo che il ricordo possa perdere parte della sua intensità disturbante e non continui a condizionare il presente.",
			],
			image: emdr,
			alt: "Dettaglio di una ceramica riparata con l'oro",
		},
		{
			title: 'Mindfulness',
			label: 'Imparare ad abitare il presente',
			intro:
				'Una pratica di consapevolezza per sviluppare una relazione più presente e non giudicante con la propria esperienza.',
			description: [
				"La mindfulness è una pratica di consapevolezza che aiuta a sviluppare un'attenzione più presente e non giudicante verso ciò che accade dentro e fuori di noi.",
				'Imparare a riconoscere pensieri, emozioni e sensazioni corporee senza esserne immediatamente travolti permette di creare uno spazio tra ciò che sentiamo e il modo in cui reagiamo.',
				'Nel lavoro psicoterapeutico, la mindfulness può diventare uno strumento prezioso per sviluppare autoregolazione emotiva, maggiore presenza e una relazione più accogliente con sé stessi.',
				'Non significa eliminare i pensieri o controllare le emozioni, ma imparare ad ascoltarli senza esserne necessariamente dominati.',
			],
			image: mindfulness,
			alt: 'Ritratto della Dr.ssa Aurora Lisi',
		},
		{
			title: 'Flash Technique',
			label: 'Avvicinarsi ai ricordi dolorosi con delicatezza',
			intro:
				"Un protocollo pensato per ridurre il disagio associato a un ricordo senza richiedere un'immersione prolungata nella sua componente dolorosa.",
			description: [
				"La Flash Technique è un approccio utilizzato nel lavoro con i ricordi traumatici, particolarmente interessante per la possibilità di ridurre il disagio associato al ricordo senza richiedere un'immersione prolungata nella sua componente dolorosa.",
				"Attraverso un protocollo specifico, che utilizza brevi momenti di attenzione al ricordo alternati a un'attività mentale positiva e coinvolgente, si lavora per attenuare la sua carica disturbante.",
				'È uno strumento che considero particolarmente interessante per la delicatezza con cui permette di avvicinarsi a esperienze difficili, rispettando le risorse e la finestra di tolleranza della persona.',
			],
			image: flash,
			alt: 'Particolare della superficie dorata di una ceramica',
		},
		{
			title: 'Neurofeedback NeurOptimal®',
			label: 'Le possibilità di autoregolazione del cervello',
			intro:
				'Una tecnologia complementare che restituisce al sistema nervoso informazioni in tempo reale sulla propria attività attraverso un feedback sonoro.',
			description: [
				'Il neurofeedback NeurOptimal® è una tecnologia di neurofeedback dinamico non lineare che fornisce al sistema nervoso informazioni in tempo reale sulla propria attività, attraverso un feedback sonoro.',
				"Durante la sessione, la persona ascolta musica mentre il sistema rileva le variazioni dell'attività elettrica cerebrale e restituisce brevi interruzioni sonore. Questo feedback offre al cervello informazioni sui propri cambiamenti e sulle proprie dinamiche di funzionamento.",
				'NeurOptimal® non impone al cervello un modello prestabilito di funzionamento, ma si basa sulle sue capacità di autoregolazione.',
				'Nella mia pratica professionale rappresenta una possibilità complementare alla psicoterapia, che può essere utilizzata anche indipendentemente da un percorso psicoterapeutico, in funzione delle esigenze della persona.',
			],
			image: nf,
			alt: 'La Dr.ssa Aurora Lisi nel suo studio',
		},
	];
</script>

<section class="px-6 pt-16 pb-24 md:px-8 md:pt-24 md:pb-32">
	<div class="mx-auto max-w-4xl">
		<div>
			<div class="line mb-8"></div>
			<b class="text-[11px] font-medium tracking-[0.25em] uppercase">Psicoterapia</b>
			<h1 class="mt-5 mb-8 font-serif text-5xl leading-[1.05] text-balance md:text-6xl">
				La psicoterapia non ti cambia in qualcun altro.
				<b>Ti aiuta a tornare più libero, più lucido, più stabile.</b>
			</h1>
			<p class="max-w-xl text-lg leading-relaxed md:text-xl">
				La psicoterapia è uno spazio protetto in cui capire cosa ti sta facendo soffrire,
				riconoscere i meccanismi che mantengono il disagio e ritrovare nuove possibilità di vivere.
			</p>
		</div>

		<div class="mt-16">
			<div class="space-y-6 text-base leading-relaxed text-on-background/80 md:text-lg">
				<p>
					È un lavoro che aiuta a recuperare parti di sé, integrare esperienze che hanno lasciato
					ferite, riconoscere le proprie risorse e ritrovare una maggiore stabilità interiore.
				</p>
				<p>
					È un percorso che si costruisce insieme, attraverso la relazione terapeutica, l'ascolto e
					il dialogo. Non esiste una strada uguale per tutti: ogni persona porta con sé una storia,
					un modo di sentire e bisogni differenti.
				</p>
				<p>
					Il lavoro psicoterapeutico si muove su due direzioni che si intrecciano continuamente: da
					una parte il sollievo dalla sofferenza, dall'altra una maggiore consapevolezza di sé.
					Stare meglio è importante, ma comprendere ciò che ci accade permette di dare un
					significato nuovo alle esperienze e di sviluppare modalità più libere e flessibili di
					affrontare la vita.
				</p>
			</div>

			<div class="my-14 py-8">
				<h2 class="mb-6 font-serif text-3xl md:text-4xl">
					Nel tempo, questo percorso può aiutarti a ritrovare:
				</h2>
				<ul class="grid gap-4 sm:grid-cols-2">
					<li>
						<b>Stabilità</b><br />una maggiore capacità di attraversare le difficoltà senza esserne
						sopraffatto.
					</li>
					<li>
						<b>Libertà</b><br />la possibilità di riconoscere e modificare schemi emotivi e
						comportamentali che si ripetono e ti limitano.
					</li>
					<li>
						<b>Lucidità</b><br />una comprensione più chiara di te stesso, delle tue emozioni e
						delle tue relazioni.
					</li>
					<li>
						<b>Consapevolezza</b><br />una conoscenza più profonda della tua storia, dei tuoi
						bisogni e delle tue risorse.
					</li>
					<li>
						<b>Completezza</b><br />una maggiore integrazione delle diverse parti di te, anche di
						quelle che nel tempo hai imparato a nascondere o a mettere da parte.
					</li>
				</ul>
			</div>

			<p class="mb-16 font-serif text-2xl leading-relaxed md:text-3xl">
				La psicoterapia non cancella ciò che hai vissuto, ma può aiutarti a trasformare il rapporto
				con la tua storia, affinché il passato non continui a determinare il tuo presente e il tuo
				futuro.
			</p>

			<div class="mb-10">
				<b class="text-[11px] font-medium tracking-[0.25em] uppercase">Un approccio integrato</b>
				<h2 class="mt-4 mb-5 font-serif text-4xl md:text-5xl">
					Strumenti diversi, un'unica direzione.
				</h2>
				<p class="leading-relaxed text-on-background/75">
					Ogni persona è un sistema complesso, nel quale pensieri, emozioni, esperienze, corpo e
					funzionamento cerebrale sono profondamente interconnessi. Per questo integro alla
					psicoterapia strumenti e approcci differenti, che permettono di intervenire su dimensioni
					diverse della sofferenza e del cambiamento.
				</p>
				<p class="mt-6 leading-relaxed text-on-background/75">
					Non si tratta di applicare tutte le tecniche indistintamente, ma di individuare, insieme
					alla persona, quelle più adatte alla sua storia e al momento che sta attraversando.
				</p>
				<p class="mt-6 leading-relaxed text-on-background/75">
					La psicoterapia rimane il filo conduttore del percorso; gli altri strumenti possono
					affiancarla e arricchirla, ciascuno con le proprie specificità.
				</p>
			</div>

			<div class="space-y-6">
				{#each approaches as approach, index (approach.title)}
					<article
						class="overflow-hidden rounded-2xl bg-background-secondary outline-1 -outline-offset-1 outline-black/5"
					>
						<div class="h-56 md:h-64">
							<enhanced:img
								width="520"
								height="640"
								loading={index < 2 ? 'eager' : 'lazy'}
								class="h-full w-full object-cover"
								src={approach.image}
								alt={approach.alt}
							/>
						</div>
						<div class="p-7 md:p-8">
							<p class="mb-3 text-[11px] font-medium tracking-[0.2em] text-gold uppercase">
								{approach.title}
							</p>
							<h3 class="mb-4 font-serif text-3xl leading-tight">{approach.label}</h3>
							<p class="mb-6 leading-relaxed text-on-background/75">{approach.intro}</p>
							<details class="group pt-4">
								<summary
									class="flex cursor-pointer list-none items-center justify-between text-xs font-medium tracking-widest uppercase transition-colors hover:text-gold [&::-webkit-details-marker]:hidden"
								>
									<span>Approfondisci</span>
									<span class="font-serif text-xl transition-transform group-open:rotate-45">+</span
									>
								</summary>
								<div class="mt-5 space-y-5 leading-relaxed text-on-background/75">
									{#each approach.description as paragraph (paragraph)}
										<p>{paragraph}</p>
									{/each}
								</div>
							</details>
						</div>
					</article>
				{/each}
			</div>
		</div>
	</div>
</section>
