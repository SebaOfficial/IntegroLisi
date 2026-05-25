import { loadTranslations } from '$lib/i18n';

export const load = async ({ url: { pathname } }) => {
	await loadTranslations('it', pathname);
	return {};
};
