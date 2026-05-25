<script lang="ts">
	import { t } from '$lib/i18n';
	import { resolve } from '$app/paths';
</script>

<div class="mt-12">
	<a
		href={resolve('/contatti?reason=appointment')}
		class="rounded-full bg-charcoal px-6 py-3 text-sm font-medium tracking-wide text-ivory shadow transition-colors hover:bg-gold"
	>
		{$t('services.cta')}
	</a>
</div>
