<script lang="ts">
	import config from '#lib/config.ts';
	import { resolve } from '$app/paths';
	import Logo from './Logo.svelte';
</script>

<footer class="mt-24 bg-background-secondary px-6 py-20 md:px-8">
	<div class="mx-auto max-w-7xl">
		<div class="mb-16 grid gap-12 md:grid-cols-4">
			<div class="md:col-span-2">
				<Logo />
				<p class="text-charcoal/60 mt-6 max-w-sm text-sm leading-relaxed">
					Uno studio di psicoterapia e neurofeedback dedicato alla ricostruzione dell'integrità
					emotiva. La cura della Dr.ssa Aurora Lisi unisce l'evidenza scientifica al calore della
					relazione terapeutica.
				</p>
			</div>
			<div>
				<h4 class="text-charcoal mb-5 text-[11px] font-semibold tracking-[0.2em] uppercase">
					Navigazione
				</h4>
				<ul class="text-charcoal/70 space-y-3 text-sm">
					{#each config.nav as n (n.url)}
						<li><a href={resolve(n.url)}>{n.label}</a></li>
					{/each}
				</ul>
			</div>
			<div>
				<h4 class="text-charcoal mb-5 text-[11px] font-semibold tracking-[0.2em] uppercase">
					Contatti
				</h4>
				<address class="text-charcoal/70 text-sm leading-relaxed not-italic">
					{config.contacts.address}<br />
					<a href="tel:{config.contacts.phone}">{config.contacts.phone}</a><br />
					{#each config.contacts.email as email (email)}
						<a href="mailto:{email}">{email}</a><br />
					{/each}
				</address>
			</div>
		</div>
		<div class="kintsugi-line mb-8"></div>
		<div
			class="text-charcoal/45 flex flex-col justify-between gap-4 text-[11px] font-medium tracking-widest uppercase md:flex-row"
		>
			<p>
				&copy; {new Date().getFullYear()} IntegroLisi Tutti i Diritti Riservati · Dr.ssa Aurora Lisi ·
				P.IVA {config.legal.vat} · Albo Psicologi n. {config.legal.register}. Sito creato da
				<a href="https://racca.me">Sebastiano Racca</a>
			</p>
		</div>
		<p class="text-charcoal/40 mt-6 max-w-3xl text-[11px] leading-relaxed">
			Le informazioni presenti su questo sito hanno finalità divulgativa e non sostituiscono il
			parere di un professionista. Nessun trattamento garantisce esiti specifici. Comunicazione
			conforme alle linee guida deontologiche dell'Ordine degli Psicologi italiano.
		</p>
	</div>
</footer>
