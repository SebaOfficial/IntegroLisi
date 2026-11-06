import config from '#lib/config.ts';

export const prerender = true;

export const GET = () => {
	return new Response(
		`
User-agent: *
Disallow:
Sitemap: ${config.site.url}/sitemap.xml
`.trim(),
		{
			headers: {
				'Content-Type': 'text/plain; charset=utf-8',
			},
		},
	);
};
