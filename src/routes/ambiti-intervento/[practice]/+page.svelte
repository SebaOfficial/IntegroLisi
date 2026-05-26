<script lang="ts">
	import Practice from '$lib/components/services/Practice.svelte';
	import { t } from '$lib/i18n';
	import type { ComponentProps } from 'svelte';

	const { data } = $props();

	const key = $derived(data.tKey);

	const content: ComponentProps<typeof Practice>['content'] = $derived({
		hero: {
			tagline: $t(`${key}.hero.tagline`),
			title: $t(`${key}.hero.title`),
			description: $t(`${key}.hero.description`),
			ctas: $t(`${key}.hero.ctas`),
			cardGroup: {
				title: $t(`${key}.hero.cardGroup.title`),
				bullets: $t(`${key}.hero.cardGroup.bullets`),
			},
		},
		stepsSection: {
			heading: $t(`${key}.stepsSection.heading`),
			description: $t(`${key}.stepsSection.description`),
		},
		steps: $t(`${key}.steps`),
		supportSection: {
			heading: $t(`${key}.supportSection.heading`),
			description: $t(`${key}.supportSection.description`),
		},
		reasons: $t(`${key}.reasons`),
		supportAreasSection: {
			heading: $t(`${key}.supportAreasSection.heading`),
			description: $t(`${key}.supportAreasSection.description`),
		},
		supportAreas: $t(`${key}.supportAreas`),
		doubtsSection: {
			heading: $t(`${key}.doubtsSection.heading`),
			description: $t(`${key}.doubtsSection.description`),
			openLabel: $t(`${key}.doubtsSection.openLabel`),
		},
		doubts: $t(`${key}.doubts`),
		finalCta: {
			tagline: $t(`${key}.finalCta.tagline`),
			title: $t(`${key}.finalCta.title`),
			description: $t(`${key}.finalCta.description`),
			label: $t(`${key}.finalCta.label`),
		},
	});
</script>

<Practice {content} />
