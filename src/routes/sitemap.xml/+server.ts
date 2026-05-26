import config from '$lib/config';

export const prerender = true;

const PAGES = {
	'/': '2026-05-26',
	'/contatti': '2026-05-26',
	'/faq': '2026-05-26',
	'/privacy-policy': '2026-05-26',
	'/cookie-policy': '2026-05-26',
	'/ambiti-intervento/': '2026-05-26',
};

const urls = Object.entries(PAGES)
	.map(([path, lastmod]) => {
		const priority = path === '/' ? '1' : '0.7';
		return `
<url>
	<loc>${config.baseUrl}${path}</loc>
	<lastmod>${lastmod}</lastmod>
	<priority>${priority}</priority>
</url>`.trim();
	})
	.join('\n');

export const GET = async () => {
	const body = `
<?xml version="1.0" encoding="UTF-8" ?>
<urlset
	xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
	xmlns:xhtml="https://www.w3.org/1999/xhtml"
	xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
	xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
	xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
	xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
${urls}
</urlset>
`.trim();

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml',
		},
	});
};
