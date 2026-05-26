import i18n, { type Config } from 'sveltekit-i18n';

const config: Config = {
	loaders: [
		{
			locale: 'it', // should be for all locales, but for simplicity we only have one
			key: 'app',
			loader: async () => (await import('./locales/app.json')).default,
		},
		{
			locale: 'it',
			key: 'common',
			loader: async () => (await import('./locales/it/common.json')).default,
		},
		{
			locale: 'it',
			key: 'header',
			loader: async () => (await import('./locales/it/header.json')).default,
		},
		{
			locale: 'it',
			key: 'footer',
			loader: async () => (await import('./locales/it/footer.json')).default,
		},
		{
			locale: 'it',
			key: 'home',
			routes: ['/'],
			loader: async () => (await import('./locales/it/home.json')).default,
		},
		{
			locale: 'it',
			key: 'contacts',
			routes: ['/contatti'],
			loader: async () => (await import('./locales/it/contacts.json')).default,
		},
		{
			locale: 'it',
			key: 'faq',
			routes: ['/faq'],
			loader: async () => (await import('./locales/it/faq.json')).default,
		},
		{
			locale: 'it',
			key: 'services',
			routes: ['/ambiti-intervento/'],
			loader: async () => (await import('./locales/it/services.json')).default,
		},
		{
			locale: 'it',
			key: 'services.psy',
			routes: ['/ambiti-intervento/psicoterapia'],
			loader: async () => (await import('./locales/it/services.psy.json')).default,
		},
		{
			locale: 'it',
			key: 'services.nf',
			routes: ['/ambiti-intervento/neurofeedback'],
			loader: async () => (await import('./locales/it/services.nf.json')).default,
		},
		{
			locale: 'it',
			key: 'privacy',
			routes: ['/privacy-policy'],
			loader: async () => (await import('./locales/it/privacy.json')).default,
		},
		{
			locale: 'it',
			key: 'cookies',
			routes: ['/cookie-policy'],
			loader: async () => (await import('./locales/it/cookies.json')).default,
		},
	],
	preprocess: 'preserveArrays',
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);

export const pathnameToKey = (pathname: string) => {
	switch (pathname) {
		case '/':
			return 'home';
		case '/contatti':
			return 'contacts';
		case '/faq':
			return 'faq';
		case '/ambiti-intervento/':
			return 'services';
		case '/ambiti-intervento/psicoterapia':
			return 'services.psy';
		case '/ambiti-intervento/neurofeedback':
			return 'services.nf';
		case '/privacy-policy':
			return 'privacy';
		case '/cookie-policy':
			return 'cookies';
		default:
			return pathname.slice(1).replace(/\//g, '-');
	}
};
