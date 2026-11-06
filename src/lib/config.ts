const config = {
	site: {
		name: 'IntegroLisi',
		url: 'https://integrolisi.it',
		locale: 'it_IT',
	},
	legal: {
		vat: '07751990016',
		register: '2246',
	},
	contacts: {
		address: 'Via Musinè, 14, 10045 Piossasco TO',
		phone: '+39 335 6846735',
		whatsapp: '393356846735',
		email: ['studio@integrolisi.it', 'aurora.lisi.391@psypec.it'],
	},
	nav: [
		{ url: '/', label: 'Home' },
		{ url: '/psicoterapia', label: 'Psicoterapia' },
		{ url: '/neurofeedback', label: 'Neurofeedback' },
		{ url: '/contatti', label: 'Contatti' },
	],
	map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.0505134141567!2d7.437931776852903!3d44.983284965396784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47883f0062457ee3%3A0x6c9fae5509c6e032!2sStudio%20di%20Psicoterapia%20IntegroLisi!5e0!3m2!1sen!2sit!4v1793981664433!5m2!1sen!2sit',
	seo: {
		'/': {
			title: 'Psicoterapia e Neurofeedback a Piossasco | IntegroLisi',
			description:
				'Lo studio della Dr.ssa Aurora Lisi per psicoterapia, EMDR e neurofeedback a Piossasco, in provincia di Torino.',
			keywords:
				'psicoterapia Piossasco, psicoterapeuta Torino, neurofeedback Piossasco, EMDR Torino',
		},
		'/chi-sono': {
			title: 'Dr.ssa Aurora Lisi, psicoterapeuta | IntegroLisi',
			description:
				'Conosci la Dr.ssa Aurora Lisi, psicoterapeuta a Piossasco. Un percorso clinico integrato tra psicoterapia, EMDR, mindfulness e neurofeedback.',
			keywords: 'Aurora Lisi psicoterapeuta, psicoterapia adleriana, EMDR Piossasco',
		},
		'/psicoterapia': {
			title: 'Psicoterapia integrata a Piossasco | IntegroLisi',
			description:
				'Percorsi di psicoterapia integrata, EMDR, mindfulness e Flash Technique per affrontare sofferenza, traumi e cambiamento con la Dr.ssa Aurora Lisi.',
			keywords: 'psicoterapia Piossasco, EMDR, mindfulness, Flash Technique, psicoterapeuta Torino',
		},
		'/neurofeedback': {
			title: 'Neurofeedback NeurOptimal a Piossasco | IntegroLisi',
			description:
				'Neurofeedback NeurOptimal a Piossasco: un supporto ai processi di autoregolazione del sistema nervoso, integrabile con la psicoterapia.',
			keywords: 'neurofeedback Piossasco, NeurOptimal Torino, autoregolazione, neuroplasticità',
		},
		'/contatti': {
			title: 'Contatti e sede a Piossasco | IntegroLisi',
			description:
				'Contatta lo Studio di Psicoterapia IntegroLisi a Piossasco, in provincia di Torino. Recapiti, sede e indicazioni per raggiungerci.',
			keywords: 'contatti psicoterapeuta Piossasco, studio psicoterapia Torino, Aurora Lisi',
		},
	},
} as const;

export default config;
