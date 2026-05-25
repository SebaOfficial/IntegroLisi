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
	],
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
