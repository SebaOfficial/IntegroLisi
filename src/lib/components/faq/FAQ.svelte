<script lang="ts">
	import { t } from '$lib/i18n';
</script>

<div class="divide-y divide-charcoal/10 border-y border-charcoal/10">
	{#each $t('faq.questions') as question (question.title)}
		<details class="group py-6">
			<summary class="flex cursor-pointer list-none items-start justify-between gap-6">
				<h2 class="font-serif text-2xl leading-snug text-charcoal">{question.title}</h2>
				<span
					class="mt-2 text-2xl leading-none text-gold transition-transform group-open:rotate-45"
				>
					+
				</span>
			</summary>
			<p class="mt-4 max-w-3xl leading-relaxed text-charcoal/75">{question.description}</p>
		</details>
	{/each}
</div>
