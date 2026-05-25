import config from '$lib/config';

export const prerender = true;

export const GET = () =>
	new Response(
		`
User-agent: *
Disallow:
Sitemap: ${config.baseUrl}/sitemap.xml
`.trim(),
	);
