import { error } from '@sveltejs/kit';
import { pathnameToKey } from '$lib/i18n';

const practices = ['neurofeedback', 'psicoterapia'];

export const entries = () => {
	return practices.map((practice) => ({ practice }));
};

export const load = ({ url: { pathname }, params: { practice } }) => {
	if (!practices.includes(practice)) {
		throw error(404);
	}

	return {
		practice,
		tKey: pathnameToKey(pathname),
	};
};
