<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { t } from '$lib/i18n';

	const { size }: { size: '3xl' | '2xl' } = $props();
</script>

<a
	class="font-serif text-{size} tracking-tight text-charcoal"
	href={resolve('/')}
	aria-current={page.url.pathname === '/' ? 'page' : undefined}
>
	{$t('app.name')[0]}<span class="text-gold italic">{$t('app.name')[1]}</span>
</a>
