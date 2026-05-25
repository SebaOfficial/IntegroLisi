<script lang="ts">
	import config from '$lib/config';
	import { t } from '$lib/i18n';
</script>

<iframe
	src={config.googleMapsEmbedUrl}
	width="600"
	height="450"
	class="absolute inset-0 h-full w-full"
	allowfullscreen
	loading="lazy"
	referrerpolicy="no-referrer-when-downgrade"
	title={$t('common.map.title')}
></iframe>
