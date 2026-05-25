<script lang="ts">
	import { t } from '$lib/i18n';
	import { resolve } from '$app/paths';
</script>

<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
	{#each $t('services.list') as service (service.title)}
		<article
			class="rounded-2xl border border-charcoal/5 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
		>
			<h3 class="mb-2 font-serif text-xl text-charcoal">{service.title}</h3>
			<p class="mb-4 text-charcoal/70">{service.description}</p>

			{#if service['link.label'] && service['link.url']}
				<a
					href={resolve(service['link.url'])}
					class="text-sm font-medium tracking-widest text-charcoal uppercase transition-colors hover:text-gold"
				>
					{service['link.label']} →
				</a>
			{/if}
		</article>
	{/each}
</div>
