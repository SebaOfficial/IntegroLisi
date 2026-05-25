<script lang="ts">
	import { resolve } from '$app/paths';
	import config from '$lib/config';
	import { t } from '$lib/i18n';
	import { navigationLinks } from '.';
	import Logo from './Logo.svelte';
</script>

<footer class="mt-24 bg-sand px-6 py-20 md:px-8">
	<div class="mx-auto max-w-7xl">
		<div class="mb-16 grid gap-12 md:grid-cols-4">
			<div class="md:col-span-2">
				<Logo size="2xl" />
				<p class="mt-6 max-w-sm text-sm leading-relaxed text-charcoal/60">
					{$t('footer.description')}
				</p>
			</div>
			<div>
				<h4 class="mb-5 text-[11px] font-semibold tracking-[0.2em] text-charcoal uppercase">
					{$t('footer.navigation')}
				</h4>
				<ul class="space-y-3 text-sm text-charcoal/70">
					{#each navigationLinks as link (link.label)}
						<li>
							<a href={resolve(link.href)} class="hover:text-gold">{$t(link.label)}</a>
						</li>
					{/each}
				</ul>
			</div>
			<div>
				<h4 class="mb-5 text-[11px] font-semibold tracking-[0.2em] text-charcoal uppercase">
					{$t('footer.contact')}
				</h4>
				<address class="text-sm leading-relaxed text-charcoal/70 not-italic">
					{config.address}<br />
					<a href={`tel:${config.phone}`} class="hover:text-gold">{config.phone}</a><br />
					<a href={`mailto:${config.email}`} class="hover:text-gold">{config.email}</a><br />
					<a href={`mailto:${config.pec}`} class="hover:text-gold">{config.pec}</a>
				</address>
			</div>
		</div>
		<div class="kintsugi-line mb-8"></div>
		<div
			class="flex flex-col justify-between gap-4 text-[11px] font-medium tracking-widest text-charcoal/45 uppercase md:flex-row"
		>
			<p>
				<!--eslint-disable-next-line svelte/no-at-html-tags -->
				{@html $t('footer.copyright', {
					YEAR: new Date().getFullYear(),
					VAT_NUMBER: config.vatNumber,
					ORDER_NUMBER: config.orderNumber
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
				} as any)}
			</p>
			<div class="flex flex-wrap gap-6">
				<a href={resolve('/privacy-policy')} class="hover:text-gold">
					{$t('footer.privacy_policy')}
				</a>
				<a href={resolve('/cookie-policy')} class="hover:text-gold">
					{$t('footer.cookie_policy')}
				</a>
			</div>
		</div>
		<p class="mt-6 max-w-3xl text-[11px] leading-relaxed text-charcoal/40">
			{$t('footer.disclaimer')}
		</p>
	</div>
</footer>
