import config from '#lib/config.ts';

export const prerender = true;

export const GET = async () => {
	return new Response(
		`
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${config.site.url}/</loc>
  </url>
  <url>
    <loc>${config.site.url}/chi-sono</loc>
  </url>
  <url>
    <loc>${config.site.url}/psicoterapia</loc>
  </url>
  <url>
    <loc>${config.site.url}/neurofeedback</loc>
  </url>
  <url>
    <loc>${config.site.url}/contatti</loc>
  </url>
</urlset>
`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml',
			},
		},
	);
};
