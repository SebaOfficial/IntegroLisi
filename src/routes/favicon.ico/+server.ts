import png from '#lib/assets/favicon.png?url&inline';
import toIco from 'to-ico';

export const prerender = true;

export const GET = async () => {
	const ico = await toIco([Buffer.from(png.split(',')[1], 'base64')], { resize: true });

	return new Response(new Uint8Array(ico), {
		headers: {
			'Content-Type': 'image/x-icon',
			'Cache-Control': 'public, max-age=86400'
		}
	});
};
