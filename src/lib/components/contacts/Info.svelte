<script lang="ts">
	import { t } from '$lib/i18n';
	import config from '$lib/config';
	import Map from '../common/Map.svelte';
</script>

<aside class="space-y-10 lg:col-span-2">
	<div>
		<h2 class="mb-3 font-serif text-2xl text-charcoal">Studio</h2>
		<address class="leading-relaxed text-charcoal/75 not-italic">
			{config.addressInfo.street}<br />{config.addressInfo.postalCode}
			{config.addressInfo.city} ({config.addressInfo.province})
		</address>
	</div>
	<div>
		<h2 class="mb-3 font-serif text-2xl text-charcoal">{$t('contacts.info.contact.title')}</h2>
		<ul class="space-y-1 leading-relaxed text-charcoal/75">
			<li>
				{$t('contacts.info.contact.phone')}:
				<a href="tel:{config.phone}" class="hover:text-gold">{config.phone}</a>
			</li>
			<li>
				{$t('contacts.info.contact.email')}:
				<a href="mailto:{config.email}" class="hover:text-gold">{config.email}</a>
			</li>
			<li>
				{$t('contacts.info.contact.pec')}:
				<a href="mailto:{config.pec}" class="hover:text-gold">{config.pec}</a>
			</li>
		</ul>
	</div>
	<div>
		<h2 class="mb-3 font-serif text-2xl text-charcoal">Orari</h2>
		<p class="leading-relaxed text-charcoal/75">
			Lun – Ven · 9:00 – 20:00<br />Sabato su appuntamento
		</p>
	</div>
	<div class="line"></div>
	<div class="relative aspect-4/3 overflow-hidden rounded-3xl border border-charcoal/10">
		<Map />
	</div>
</aside>
