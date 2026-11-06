<script lang="ts">
	import TableOfContents from '#lib/components/TableOfContents.svelte';

	type ContentBlock = {
		title: string;
		paragraphs: string[];
		bullets?: string[];
	};

	type Section = ContentBlock & {
		intro?: string;
		subsections?: ContentBlock[];
	};

	const slug = (value: string) =>
		value
			.toLowerCase()
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '')
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/^-|-$/g, '');

	const sections: Section[] = [
		{
			title: 'La neuroplasticità: il cervello è in continua evoluzione',
			paragraphs: [
				'Il cervello non ha come obiettivo principale quello di farci stare bene, ma quello di proteggerci e garantirci la sopravvivenza.',
				'È continuamente impegnato a raccogliere informazioni, interpretare ciò che accade e formulare previsioni su quello che potrebbe accadere. Sulla base delle esperienze precedenti, cerca di anticipare gli eventi e predisporre le risposte più adatte.',
				"È un sistema straordinariamente adattabile: ogni esperienza, ogni apprendimento e ogni interazione con l'ambiente possono modificare il modo in cui le sue reti neuronali funzionano e comunicano.",
				'Questa capacità prende il nome di neuroplasticità.',
				'La neuroplasticità si manifesta attraverso tre processi fondamentali:',
				'Il nostro cervello possiede quindi una straordinaria capacità di apprendere, modificarsi e adattarsi. Ma proprio perché impara dalle esperienze, può anche conservare modalità di risposta che, pur essendo state utili in passato, non sono più necessarie o adeguate alla realtà presente.',
			],
			bullets: [
				"Il cervello impara per tutta la vita. La capacità di apprendere e modificare le proprie risposte non si esaurisce con l'infanzia o l'adolescenza, ma accompagna l'individuo in tutte le fasi della vita.",
				'Le connessioni neuronali sono modificabili. Le esperienze possono rafforzare, indebolire o riorganizzare le connessioni tra neuroni, modificando il funzionamento delle reti cerebrali.',
				'La neuroplasticità è alla base dell’adattamento. Grazie a questa capacità possiamo acquisire nuove competenze, modificare abitudini, sviluppare nuove strategie e adattarci a condizioni di vita differenti.',
			],
		},
		{
			title: 'I traumi: quando il passato continua a condizionare il presente',
			paragraphs: [],
			subsections: [
				{
					title: 'A. Il cervello impara anche dal pericolo',
					paragraphs: [
						'Il cervello registra le esperienze significative, soprattutto quelle associate a pericolo, paura, impotenza o sofferenza. Lo fa per riconoscere eventuali situazioni analoghe e prepararsi a reagire.',
						"Questa capacità è fondamentale per la sopravvivenza. Se abbiamo vissuto un'esperienza dolorosa, il nostro cervello può diventare particolarmente sensibile a stimoli che ricordano, anche indirettamente, quella situazione. Ma può accadere anche che stimoli apparentemente innocui, non realmente pericolosi o del tutto estranei alla situazione originaria vengano interpretati come segnali di minaccia e attivino risposte di allarme.",
						'Il cervello, nel tentativo di proteggerci, può quindi reagire non soltanto a pericoli reali, ma anche a situazioni che assomigliano a esperienze passate o che vengono erroneamente percepite come minacciose.',
					],
				},
				{
					title: "B. Quando un'esperienza non viene elaborata",
					paragraphs: [
						'Non tutte le esperienze vengono integrate ed elaborate nello stesso modo.',
						"Secondo il modello teorico dell'AIP (Adaptive Information Processing), alla base dell'approccio EMDR, il cervello possiede un sistema innato di elaborazione delle informazioni che permette di integrare le esperienze e collocarle nella memoria in una forma adattiva.",
						"Quando un'esperienza è particolarmente disturbante e supera la nostra finestra di tolleranza emotiva, le risorse disponibili possono non essere sufficienti per elaborarla. In queste condizioni, l'esperienza può rimanere immagazzinata in una forma disfunzionale, insieme alle emozioni, alle percezioni, alle convinzioni e alle sensazioni corporee che l'hanno accompagnata.",
						'Il ricordo non viene quindi integrato come una normale esperienza del passato, ma può continuare a esercitare un’influenza sul nostro modo di percepire e affrontare il presente.',
					],
				},
				{
					title: 'C. Il passato influenza le risposte del presente',
					paragraphs: [
						"Quando un'esperienza traumatica non viene adeguatamente elaborata, stimoli che ricordano l'esperienza originaria possono riattivare risposte emotive e fisiologiche anche quando il pericolo non è più presente.",
						'Il nostro organismo può così reagire a una situazione presente come se stesse ancora affrontando un pericolo appartenente al passato, modificando anche i propri parametri fisiologici e mantenendo uno stato di allerta non più necessario.',
					],
					bullets: [
						'Ansia e paura apparentemente immotivate.',
						'Ipervigilanza e difficoltà a rilassarsi.',
						'Reazioni emotive sproporzionate rispetto alla situazione.',
						'Evitamento di persone, luoghi o circostanze.',
						'Difficoltà nella concentrazione e nella gestione dello stress.',
						'Risposte automatiche che sembrano difficili da controllare.',
					],
				},
				{
					title: 'D. Gli schemi di risposta diventano automatici',
					paragraphs: [
						'Il cervello può continuare a utilizzare strategie di protezione anche quando non sono più necessarie.',
						'È come se una parte delle nostre risorse rimanesse costantemente impegnata a monitorare il pericolo, anticipare possibili minacce e prevenire il ripetersi di esperienze dolorose.',
						'Si possono così consolidare schemi di risposta che condizionano pensieri, emozioni, comportamenti e reazioni fisiologiche.',
						'Questi schemi possono diventare automatici e limitare progressivamente la nostra libertà di scelta. Per evitare situazioni che il cervello percepisce come potenzialmente pericolose, possiamo rinunciare a esperienze, opportunità e obiettivi, oppure affrontarli con un dispendio di energie molto superiore a quello necessario.',
						'A volte finiamo per sentirci molto più fragili e vulnerabili di quanto siamo realmente, sottovalutando le nostre risorse e le nostre capacità. Limitiamo così i nostri obiettivi, riduciamo le nostre possibilità e adottiamo strategie di evitamento che, pur facendoci sentire momentaneamente più sicuri, possono ostacolare la nostra crescita e il nostro benessere.',
						'È come se il cervello ci facesse percorrere la strada più difficile e dispendiosa per raggiungere obiettivi che potrebbero essere molto più semplici.',
					],
				},
				{
					title: 'E. La neuroplasticità può essere condizionata dalle esperienze traumatiche',
					paragraphs: [
						'Il cervello conserva la capacità di modificarsi e adattarsi, ma le esperienze traumatiche possono influenzare profondamente il modo in cui questa capacità si esprime.',
						'Le risposte apprese possono diventare automatiche, rigide e difficili da modificare. Il sistema continua a reagire sulla base di previsioni costruite nel passato, anche quando la realtà attuale è cambiata.',
						'La capacità di neuroplasticità, tuttavia, non viene perduta. Il cervello mantiene la possibilità di apprendere nuove modalità di risposta, riorganizzare le proprie connessioni e sviluppare strategie più funzionali.',
						'È proprio questa possibilità di cambiamento che rende significativo un intervento volto a favorire nuovi processi di autoregolazione.',
						'Il passato può aver condizionato il nostro modo di reagire al presente, ma non deve necessariamente continuare a determinarne il futuro.',
					],
				},
			],
		},
		{
			title: 'Quali benefici si possono riscontrare dal Neurofeedback NeurOptimal®?',
			paragraphs: [
				'Esistono differenti sistemi di neurofeedback, accomunati dall’utilizzo dell’attività elettrica cerebrale per favorire processi di apprendimento e autoregolazione, ma caratterizzati da modalità di intervento differenti.',
				"Molti sistemi di neurofeedback si basano sull'elettroencefalogramma quantificato (QEEG), che permette di analizzare l'attività elettrica cerebrale e confrontarla con parametri di riferimento ricavati da campioni di persone considerate sane. Sulla base di questo confronto vengono individuati specifici obiettivi di allenamento, attraverso i quali si cerca di favorire l'apprendimento di determinati pattern di attività cerebrale.",
				'Neurofeedback NeurOptimal® si distingue per il suo approccio dinamico e non lineare, sviluppato attraverso decenni di ricerca e studio del funzionamento cerebrale.',
				'Il sistema non utilizza un cervello modello al quale conformare l’attività cerebrale della persona, ma prende come riferimento il funzionamento del cervello dello stesso soggetto, nel suo continuo adattamento e nella sua complessità.',
				"Durante la seduta, NeurOptimal® rileva l'attività elettrica cerebrale e fornisce un feedback in tempo reale attraverso brevi interruzioni della musica ascoltata in cuffia. Queste variazioni costituiscono un'informazione che il sistema nervoso può utilizzare nel proprio processo di autoregolazione.",
				"L'obiettivo non è insegnare al cervello a produrre determinate onde o a raggiungere uno stato prestabilito, ma favorire un funzionamento più flessibile, capace di adattarsi alle richieste della realtà presente.",
				'Un cervello meno vincolato da modalità di risposta automatiche e consolidate può avere maggiori possibilità di utilizzare le proprie risorse, elaborare le informazioni e affrontare le situazioni con risposte più adeguate.',
				'Neurofeedback NeurOptimal® interviene attraverso un processo di autoregolazione del sistema nervoso centrale.',
				'Le persone che intraprendono un percorso possono sperimentare cambiamenti che riguardano diversi aspetti del proprio funzionamento, non soltanto sul piano emotivo, ma anche cognitivo, relazionale e personale.',
				'I benefici osservati',
				'I cambiamenti osservati possono riguardare:',
			],
			intro: 'Un approccio diverso al funzionamento del cervello',
			subsections: [
				{
					title: 'Una maggiore stabilità emotiva',
					paragraphs: [
						'Il sistema nervoso può diventare più flessibile nella gestione delle proprie attivazioni, favorendo una maggiore stabilità emotiva.',
						'Le reazioni possono diventare meno impulsive e meno condizionate dagli stimoli esterni. La persona può sperimentare una maggiore capacità di affrontare le situazioni senza sentirsi sopraffatta dalle emozioni, sviluppando una risposta più equilibrata e adeguata al contesto.',
					],
				},
				{
					title: 'Una migliore gestione dello stress',
					paragraphs: [
						'La capacità di autoregolazione può favorire una maggiore resilienza allo stress, permettendo di affrontare le difficoltà con minore tensione e un maggiore senso di fiducia nelle proprie risorse.',
						'Le preoccupazioni e le paure possono perdere parte della loro intensità, lasciando spazio a un pensiero più calmo e a una maggiore capacità di guardare al futuro.',
					],
				},
				{
					title: 'Maggiore lucidità e flessibilità mentale',
					paragraphs: [
						'Un funzionamento cerebrale più flessibile può favorire una migliore capacità di utilizzare le proprie risorse cognitive.',
						'La persona può sperimentare una maggiore lucidità mentale, una migliore capacità di adattamento e una maggiore apertura a nuove possibilità.',
						'Anche la creatività può trovare maggiore spazio, quando il pensiero è meno condizionato da risposte automatiche e modalità rigide di interpretazione della realtà.',
					],
				},
				{
					title: 'Una maggiore fiducia in sé stessi',
					paragraphs: [
						'Quando le reazioni diventano meno impulsive e la gestione delle emozioni più equilibrata, può aumentare il senso di controllo e di fiducia nelle proprie capacità.',
						'La persona può sentirsi maggiormente in grado di affrontare le situazioni, prendere decisioni e perseguire obiettivi che in precedenza apparivano difficili o troppo impegnativi.',
						'Questo può contribuire a modificare anche il modo in cui si guarda al proprio futuro, ampliando le possibilità percepite e favorendo una maggiore autonomia.',
					],
				},
				{
					title: 'Una maggiore attenzione a sé e alle proprie relazioni',
					paragraphs: [
						'I cambiamenti nel proprio funzionamento emotivo possono riflettersi anche nella relazione con gli altri e con sé stessi.',
						"Una maggiore stabilità può favorire l'ascolto, l'empatia e la capacità di comprendere i bisogni propri e altrui.",
						'Anche il rapporto con il proprio corpo e con le proprie abitudini può diventare più consapevole. La persona può sentirsi maggiormente motivata a prendersi cura di sé, riconoscendo i propri bisogni e sviluppando un atteggiamento più gentile e rispettoso nei propri confronti.',
					],
				},
				{
					title: 'Una maggiore possibilità di riconoscere ed esprimere le emozioni',
					paragraphs: [
						'Talvolta, durante un percorso di neurofeedback, possono emergere emozioni che la persona tende a trattenere o a evitare.',
						'La paura di perdere il controllo, di essere giudicati o di compromettere le relazioni può rendere difficile riconoscere ed esprimere alcuni vissuti emotivi.',
						'Quando queste emozioni diventano più accessibili, può aprirsi la possibilità di riconoscerle, comprenderle e trovare modalità più funzionali per esprimerle.',
						'Non si tratta di eliminare le emozioni considerate negative, ma di poterle accogliere e integrare nella propria esperienza, trasformandole in occasioni di maggiore consapevolezza e crescita personale.',
						'Neurofeedback NeurOptimal® può così diventare un’esperienza che favorisce non soltanto una maggiore autoregolazione, ma anche una più ampia possibilità di utilizzare le proprie risorse e vivere con maggiore libertà e pienezza.',
					],
				},
			],
		},
		{
			title: 'Gli ambiti di utilizzo del Neurofeedback NeurOptimal®',
			paragraphs: [
				'Neurofeedback NeurOptimal® è uno strumento che può essere utilizzato in diversi ambiti della vita, favorendo i processi di autoregolazione del sistema nervoso e la possibilità di accedere alle proprie risorse.',
				'Pur non essendo uno strumento medico e non avendo la funzione di diagnosticare o curare patologie, può rappresentare un supporto per il benessere psicofisico e per la gestione di difficoltà che coinvolgono il funzionamento emotivo, cognitivo e fisiologico.',
				'Il suo utilizzo non è necessariamente legato alla presenza di un disturbo. Può essere scelto anche da chi desidera migliorare il proprio equilibrio, sviluppare una maggiore flessibilità e affrontare con più serenità e creatività le richieste della vita quotidiana.',
			],
			subsections: [
				{
					title: 'Neurofeedback e psicoterapia: due percorsi che possono integrarsi',
					paragraphs: [
						'Neurofeedback NeurOptimal® può essere utilizzato sia in associazione a un percorso di psicoterapia sia indipendentemente da esso.',
						"Non tutte le persone desiderano intraprendere un percorso psicoterapeutico. Alcune possono attraversare momenti di particolare difficoltà emotiva, nei quali l'intensità dei sintomi rende inizialmente complesso affrontare un lavoro di analisi e comprensione dei propri vissuti.",
						'In queste situazioni, il neurofeedback può offrire un’esperienza di autoregolazione che non richiede uno sforzo volontario, un’analisi dei propri problemi o la necessità di parlare di sé.',
						'La seduta diventa un momento da dedicare a sé stessi, nel quale lasciarsi accompagnare dall’ascolto della musica e favorire uno stato di rilassamento e di minore attivazione.',
						'Quando inserito in un percorso psicoterapeutico, NeurOptimal® può affiancare il lavoro clinico in diversi momenti:',
						'Neurofeedback e psicoterapia agiscono su piani differenti e possono arricchirsi reciprocamente. La psicoterapia permette di comprendere e integrare i propri vissuti, mentre il neurofeedback offre un’esperienza orientata all’autoregolazione del sistema nervoso.',
						'La scelta di utilizzare uno dei due strumenti o di integrarli dipende dalle esigenze e dalle caratteristiche della persona.',
					],
					bullets: [
						'Per favorire una maggiore regolazione emotiva e rendere più gestibili stati di intensa attivazione.',
						'Sostenere la persona nei momenti di difficoltà o di stallo del percorso.',
						'Per accompagnare il lavoro su schemi di risposta automatici e meccanismi di difesa che possono rendere difficile affrontare alcuni vissuti.',
						'Per favorire il mantenimento dei cambiamenti raggiunti attraverso la psicoterapia.',
					],
				},
				{
					title: 'Disturbi del sonno',
					paragraphs: [
						'Il sonno è un processo complesso, strettamente legato al nostro equilibrio emotivo e al funzionamento del sistema nervoso.',
						'Preoccupazioni, stress e stati di iperattivazione possono rendere difficile interrompere l’attività mentale e lasciarsi andare al riposo. Il cervello può continuare a mantenersi vigile, orientato ai problemi della giornata e alle possibili difficoltà del futuro.',
						'La notte, quando vengono meno le distrazioni e gli impegni quotidiani, i problemi possono assumere connotazioni più intense e trasformarsi in pensieri ansiosi, rimuginio e difficoltà a rilassarsi.',
						'Questo può interferire sia con l’addormentamento sia con la capacità di mantenere il sonno durante la notte.',
						'Favorire una maggiore autoregolazione e una riduzione degli stati di iperattivazione può contribuire a creare condizioni più favorevoli al riposo.',
						'Un maggiore senso di calma e sicurezza può accompagnarsi a una migliore qualità del sonno, a una maggiore continuità del riposo e, in alcuni casi, a un aumento delle ore dormite.',
					],
				},
				{
					title: 'Acufeni e dolore cronico',
					paragraphs: [
						"L'acufene è la percezione di un suono in assenza di uno stimolo acustico esterno. Può essere associato a differenti condizioni del sistema uditivo e a modificazioni dell'attività delle reti cerebrali coinvolte nella percezione del suono.",
						"Lo stress e gli stati di iperattivazione possono contribuire ad aumentare la percezione e la sofferenza associata all'acufene. L'attenzione può concentrarsi sempre più sul suono, rendendolo difficile da ignorare e alimentando un circolo vizioso nel quale la preoccupazione e l'attivazione emotiva ne amplificano ulteriormente la percezione.",
						'Anche nel dolore cronico possono intervenire processi di sensibilizzazione del sistema nervoso, attraverso i quali il dolore può diventare persistente e assumere un ruolo sempre più centrale nell’esperienza della persona.',
						'In entrambe le situazioni, il modo in cui il sistema nervoso elabora le informazioni e regola la propria attivazione può influenzare significativamente l’esperienza soggettiva del sintomo.',
						'Neurofeedback NeurOptimal®, attraverso il feedback dinamico e il sostegno ai processi di autoregolazione, può essere preso in considerazione come supporto per favorire una maggiore flessibilità del sistema nervoso e una diversa gestione dell’attivazione associata al sintomo.',
						"Non si tratta di eliminare necessariamente la percezione dell'acufene o del dolore, ma di favorire condizioni nelle quali questi possano essere vissuti con minore intensità emotiva e minore interferenza nella vita quotidiana.",
						'Anche altri sintomi fisici, come cefalea tensiva, emicrania, tensione muscolare e disturbi gastrointestinali, possono essere influenzati dallo stress e dall’attivazione del sistema nervoso. In questi casi, il neurofeedback può rappresentare un possibile supporto al benessere, all’interno di un approccio integrato e nel rispetto delle necessarie valutazioni mediche.',
					],
				},
				{
					title: 'Bambini',
					paragraphs: [
						"L'infanzia è una fase di straordinaria plasticità e sviluppo. Il sistema nervoso è impegnato a costruire nuove connessioni, acquisire competenze e imparare a regolare le proprie emozioni.",
						"Neurofeedback NeurOptimal® può offrire ai bambini un'esperienza non verbale, nella quale non viene richiesto di eseguire esercizi o di controllare volontariamente il proprio comportamento.",
						'Può essere preso in considerazione per favorire una maggiore capacità di autoregolazione, sostenere il rilassamento e accompagnare il bambino nei momenti in cui fatica a gestire le proprie attivazioni emotive.',
						'Può inoltre rappresentare un supporto per il benessere del bambino e della famiglia, favorendo una maggiore disponibilità a utilizzare le risorse relazionali e ambientali.',
						'In alcune situazioni, può essere utile anche per avvicinare gradualmente il bambino a un percorso psicoterapeutico, quando le difficoltà iniziali rendono complesso un lavoro diretto sui propri vissuti.',
					],
				},
				{
					title: 'Genitori',
					paragraphs: [
						"La genitorialità è un'esperienza intensa, ricca di significati e responsabilità, che può mettere a dura prova le risorse emotive e personali.",
						'Stress, stanchezza e preoccupazioni possono interferire con la capacità di ascoltare i bisogni dei figli, mantenere una comunicazione equilibrata e affrontare le difficoltà quotidiane.',
						'Prendersi cura del proprio equilibrio emotivo significa anche creare condizioni più favorevoli per la relazione con i propri figli.',
						'Neurofeedback NeurOptimal® può offrire ai genitori un momento di pausa e autoregolazione, favorendo una maggiore disponibilità all’ascolto, una migliore gestione dello stress e una maggiore flessibilità nelle risposte.',
						'Può inoltre sostenere la capacità di riconoscere i propri bisogni, valorizzare le risorse del partner e ricercare il supporto di figure esterne alla famiglia quando necessario.',
						'Il benessere del genitore è una risorsa importante anche per il benessere del bambino.',
					],
				},
				{
					title: 'Studenti',
					paragraphs: [
						"L'ansia da prestazione scolastica e universitaria è una difficoltà che mi sta particolarmente a cuore.",
						'Molti studenti si impegnano, si preparano con costanza e possiedono le capacità necessarie per affrontare il proprio percorso. Eppure, non sempre riescono a esprimere pienamente le proprie risorse.',
						'Le sollecitazioni interne ed esterne possono interferire con la concentrazione, la memoria e la capacità di organizzare lo studio. La paura di sbagliare, il timore del giudizio e la pressione legata ai risultati possono generare stati di iperattivazione che rendono più difficile affrontare verifiche, esami e interrogazioni.',
						'Neurofeedback NeurOptimal® può rappresentare un supporto per favorire una maggiore autoregolazione e creare condizioni più favorevoli all’espressione delle proprie capacità.',
						'Può accompagnare lo studente nel percorso verso:',
						"L'obiettivo non è soltanto migliorare la prestazione, ma permettere allo studente di vivere il proprio percorso formativo con maggiore serenità, consapevolezza e fiducia.",
					],
					bullets: [
						"Una migliore gestione dell'ansia da prestazione.",
						'Una maggiore capacità di affrontare la pressione e il timore del giudizio.',
						'Una migliore attenzione e concentrazione.',
						'Una maggiore lucidità mentale.',
						'Una migliore organizzazione e gestione delle proprie risorse cognitive.',
						'Una maggiore fiducia nelle proprie capacità.',
					],
				},
				{
					title: 'Atleti',
					paragraphs: [
						'Anche gli atleti possono sperimentare difficoltà di autoregolazione che interferiscono con la prestazione, soprattutto nei momenti decisivi della competizione.',
						'La preparazione fisica e tecnica non sempre è sufficiente a garantire che le proprie capacità possano esprimersi pienamente. Ansia, tensione, paura dell’errore e difficoltà a mantenere il focus possono condizionare il rendimento.',
						'Neurofeedback NeurOptimal® può essere utilizzato come supporto per favorire una maggiore flessibilità nella gestione delle attivazioni e delle risposte emotive.',
						"Può accompagnare l'atleta nel percorso verso:",
						'La capacità di attivarsi quando necessario e di rallentare quando è il momento di recuperare rappresenta una componente importante dell’equilibrio psicofisico dell’atleta.',
						'Neurofeedback NeurOptimal® può contribuire a sostenere questo processo, accompagnando la persona non soltanto nella ricerca della prestazione, ma anche nella gestione del proprio benessere.',
					],
					bullets: [
						'Una maggiore continuità della prestazione.',
						'Una migliore gestione della pressione competitiva.',
						'Una maggiore lucidità mentale.',
						'Una migliore capacità di mantenere il focus.',
						'Una maggiore flessibilità nella gestione degli imprevisti.',
						'Una migliore capacità di recuperare dopo l’allenamento o la gara.',
						'Una maggiore consapevolezza delle proprie risorse.',
					],
				},
			],
		},
		{
			title: 'Vivere una seduta: come si svolge concretamente Neurofeedback NeurOptimal®',
			paragraphs: [
				"Una seduta di Neurofeedback NeurOptimal® è un'esperienza semplice e non invasiva, durante la quale la persona viene accompagnata in un momento dedicato a sé stessa.",
				"Il sistema utilizza l'ascolto della musica e le sue brevi interruzioni per fornire un feedback in tempo reale sull'attività cerebrale. Non richiede esercizi da eseguire, concentrazione volontaria o particolari abilità: il cervello può semplicemente continuare a funzionare, mentre il sistema rileva e restituisce informazioni sulla sua attività.",
			],
			subsections: [
				{
					title: 'Come funziona il sistema',
					paragraphs: [
						"NeurOptimal® utilizza alcuni sensori, posizionati sul cuoio capelluto e sulle orecchie, per rilevare l'attività elettrica cerebrale.",
						'I sensori non inviano impulsi elettrici al cervello: rilevano esclusivamente il segnale prodotto dalla sua attività. Per favorire la conduzione del segnale vengono utilizzati piccoli quantitativi di pasta conduttiva, che permettono ai sensori di rilevare correttamente l’attività elettrica.',
						"Il sistema analizza l'attività cerebrale attraverso un'ampia gamma di frequenze, da 0 a 64 Hz, suddividendola in differenti pacchetti di frequenza per ciascun emisfero.",
						"L'analisi avviene in tempo reale, con una frequenza di campionamento di 256 volte al secondo.",
						'Durante la seduta, il sistema restituisce al cervello un feedback attraverso brevi e delicate interruzioni della musica ascoltata in cuffia.',
						'Queste interruzioni sono sufficientemente lievi da non risultare particolarmente disturbanti per la persona, ma rappresentano un’informazione significativa per il sistema nervoso.',
						'Il cervello è infatti un organo continuamente impegnato a formulare previsioni su ciò che accade. Quando si verifica qualcosa di inatteso, è chiamato a confrontarsi con una discrepanza tra ciò che aveva previsto e ciò che si è effettivamente verificato.',
						'NeurOptimal® utilizza proprio questo principio: le interruzioni della musica vengono generate in relazione alle variazioni rilevate nell’attività cerebrale, offrendo al sistema nervoso un feedback dinamico sul proprio funzionamento.',
						'Il cervello può così ricevere informazioni sulla propria attività e utilizzare queste informazioni nei suoi processi di autoregolazione.',
					],
				},
				{
					title: 'Cosa accade durante una seduta',
					paragraphs: [
						'Una volta sistemati i sensori e le cuffie, la persona inizia ad ascoltare la musica per 33 minuti, durata della seduta.',
						'Non è necessario concentrarsi, cercare di rilassarsi o controllare i propri pensieri. Non esiste un risultato da raggiungere e non viene richiesto di fare qualcosa di particolare.',
						'La seduta è un momento nel quale stare con sé stessi, lasciando che il sistema svolga il proprio lavoro.',
						'Alcune persone preferiscono rimanere semplicemente in ascolto, altre chiudono gli occhi e si rilassano profondamente. Può capitare anche di addormentarsi: il sistema continua a rilevare l’attività cerebrale e a fornire il feedback anche durante il sonno.',
						'La persona può inoltre scegliere di leggere o dedicarsi a un’attività tranquilla, se lo desidera.',
						'Il neurofeedback non richiede uno sforzo volontario. È proprio questa una delle sue peculiarità: il processo di autoregolazione viene favorito senza che la persona debba imparare a controllare consapevolmente la propria attività cerebrale.',
					],
				},
				{
					title: 'Un’esperienza di rilassamento e autoregolazione',
					paragraphs: [
						'Durante la seduta, il sistema continua a rilevare le variazioni dell’attività cerebrale e a restituire il feedback attraverso la musica.',
						'Le interruzioni possono favorire un processo nel quale il cervello si confronta con ciò che sta facendo, con le proprie variazioni e con le proprie modalità di funzionamento.',
						'Non viene imposto un modello esterno da raggiungere, ma viene offerta un’informazione che il sistema nervoso può utilizzare nel proprio processo di autoregolazione.',
						'La seduta può essere accompagnata da una sensazione di profondo rilassamento, di maggiore calma e di minore tensione. Alcune persone riferiscono una sensazione di leggerezza o di maggiore lucidità al termine dell’esperienza.',
						'Le sensazioni possono essere differenti da persona a persona e non è necessario avvertire qualcosa di particolare.',
						'La seduta rappresenta un momento nel quale il sistema nervoso può ricevere informazioni sul proprio funzionamento, favorendo i processi di autoregolazione e la possibilità di sviluppare modalità di risposta più flessibili e adattive.',
					],
				},
			],
		},
	];

	const tocItems = sections.map((section) => ({
		id: slug(section.title),
		title: section.title,
		children: section.subsections?.map((subsection) => ({
			id: slug(subsection.title),
			title: subsection.title,
		})),
	}));
</script>

<section class="px-6 pt-16 pb-24 md:px-8 md:pt-24 md:pb-32">
	<div class="mx-auto max-w-4xl">
		<div>
			<div class="line mb-8"></div>
			<b class="text-[11px] font-medium tracking-[0.25em] uppercase">Neurofeedback NeurOptimal®</b>
			<h1 class="mt-5 mb-8 font-serif text-5xl leading-[1.05] text-balance md:text-6xl">
				Un training semplice, non invasivo, che aiuta il cervello a
				<b>ritrovare più equilibrio, focus e flessibilità.</b>
			</h1>
			<p class="max-w-3xl text-lg leading-relaxed md:text-xl">
				Il neurofeedback è un percorso di brain training che restituisce al sistema nervoso
				informazioni in tempo reale sulla propria attività. Non richiede sforzo cosciente, non è
				invasivo e non impone protocolli rigidi: crea le condizioni perché il cervello possa
				autoregolarsi in modo più naturale.
			</p>
			<p class="mt-5 text-sm leading-relaxed text-on-background/65">
				NeurOptimal® è un marchio registrato.
			</p>
		</div>

		<div class="mt-12">
			<TableOfContents items={tocItems} />
		</div>

		<div class="mt-16">
			{#each sections as section (section.title)}
				<section
					id={slug(section.title)}
					class="scroll-mt-28 border-t border-on-background/10 py-14 first:border-t-0 first:pt-0"
				>
					<p class="mb-3 text-[11px] font-medium tracking-[0.2em] text-gold uppercase">
						Neurofeedback NeurOptimal®
					</p>
					<h2 class="font-serif text-3xl leading-tight md:text-4xl">{section.title}</h2>
					{#if section.intro}
						<p class="mt-5 font-serif text-xl leading-relaxed text-on-background/80">
							{section.intro}
						</p>
					{/if}
					<div class="mt-7 space-y-6 leading-relaxed text-on-background/75">
						{#each section.paragraphs as paragraph (paragraph)}
							<p>{paragraph}</p>
						{/each}
						{#if section.bullets}
							<ul class="list-disc space-y-3 pl-5">
								{#each section.bullets as bullet (bullet)}
									<li>{bullet}</li>
								{/each}
							</ul>
						{/if}
						{#each section.subsections ?? [] as subsection (subsection.title)}
							<section
								id={slug(subsection.title)}
								class="scroll-mt-28 border-t border-on-background/10 pt-8"
							>
								<h3 class="mb-4 font-serif text-2xl text-on-background">{subsection.title}</h3>
								<div class="space-y-5">
									{#each subsection.paragraphs as paragraph (paragraph)}
										<p>{paragraph}</p>
									{/each}
								</div>
								{#if subsection.bullets}
									<ul class="mt-5 list-disc space-y-3 pl-5">
										{#each subsection.bullets as bullet (bullet)}
											<li>{bullet}</li>
										{/each}
									</ul>
								{/if}
							</section>
						{/each}
					</div>
				</section>
			{/each}
		</div>
	</div>
</section>
