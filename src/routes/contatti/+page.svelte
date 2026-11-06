<script lang="ts">
	import config from '#lib/config.ts';
</script>

<section class="px-6 pt-16 pb-24 md:px-8 md:pt-24 md:pb-32">
	<div class="mx-auto max-w-7xl">
		<div class="max-w-3xl">
			<div class="line mb-8"></div>
			<b class="text-[11px] font-medium tracking-[0.25em] uppercase">Contatti</b>
			<h1 class="mt-5 mb-8 font-serif text-5xl leading-[1.05] text-balance md:text-7xl">
				Iniziamo da qui.
			</h1>
			<p class="max-w-2xl text-lg leading-relaxed text-on-background/75 md:text-xl">
				Per informazioni, per capire se questo è il momento giusto per iniziare un percorso o per
				conoscere meglio le possibilità dello studio, puoi contattarmi direttamente.
			</p>
		</div>

		<div class="mt-16 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
			<div>
				<div class="border-t border-on-background/15 py-7">
					<p class="mb-3 text-[11px] font-medium tracking-[0.2em] text-gold uppercase">
						Metodo preferito
					</p>
					<h2 class="mb-4 font-serif text-3xl leading-tight">Scrivimi su WhatsApp</h2>
					<p class="mb-5 max-w-sm leading-relaxed text-on-background/70">
						Per una prima richiesta o per concordare un appuntamento, puoi scrivermi direttamente.
					</p>
					<a
						href={`https://wa.me/${config.contacts.whatsapp}`}
						target="_blank"
						rel="noreferrer"
						class="no-style inline-flex items-center bg-on-background px-5 py-3 text-sm font-medium tracking-wide text-background transition-colors hover:bg-gold hover:text-on-background"
					>
						Apri WhatsApp <span aria-hidden="true" class="ml-3">↗</span>
					</a>
				</div>

				<div class="border-t border-on-background/15 py-7">
					<p class="mb-3 text-[11px] font-medium tracking-[0.2em] text-gold uppercase">
						Altri contatti
					</p>
					<div class="space-y-3 leading-relaxed">
						<p>
							<span class="mr-2 text-on-background/55">Telefono:</span>
							<a href="tel:{config.contacts.phone}">{config.contacts.phone}</a>
						</p>
						{#each config.contacts.email as email (email)}
							<p>
								<span class="mr-2 text-on-background/55">Email:</span>
								<a href="mailto:{email}">{email}</a>
							</p>
						{/each}
					</div>
				</div>

				<div class="border-t border-on-background/15 py-7">
					<p class="mb-3 text-[11px] font-medium tracking-[0.2em] text-gold uppercase">
						Dove trovarmi
					</p>
					<address class="text-lg leading-relaxed not-italic">{config.contacts.address}</address>
					<p class="mt-4 leading-relaxed text-on-background/70">
						Lo studio riceve su appuntamento. Per concordare giorno e orario, scrivimi o chiamami.
					</p>
				</div>

				<div
					class="border-t border-on-background/15 pt-7 text-sm leading-relaxed text-on-background/60"
				>
					<p>P.IVA {config.legal.vat}</p>
					<p>Albo Psicologi n. {config.legal.register}</p>
					<p>Dr.ssa Aurora Lisi</p>
				</div>
			</div>

			<div>
				<div class="mb-6">
					<p class="mb-3 text-[11px] font-medium tracking-[0.2em] text-gold uppercase">La sede</p>
					<h2 class="font-serif text-3xl leading-tight md:text-4xl">
						Studio di Psicoterapia IntegroLisi
					</h2>
				</div>
				<div
					class="overflow-hidden bg-background-secondary outline-1 -outline-offset-1 outline-black/10"
				>
					<iframe
						src={config.map}
						width="600"
						height="450"
						style="border:0;"
						allowfullscreen
						loading="lazy"
						referrerpolicy="strict-origin-when-cross-origin"
						title="Mappa dello Studio di Psicoterapia IntegroLisi"
						class="block aspect-4/3 h-auto w-full"
					></iframe>
				</div>
				<a
					href="https://www.google.com/maps/search/?api=1&query=Studio+di+Psicoterapia+IntegroLisi"
					target="_blank"
					rel="noreferrer"
					class="mt-5 inline-flex text-sm font-medium tracking-wide uppercase transition-colors hover:text-gold"
				>
					Apri in Google Maps <span aria-hidden="true" class="ml-2">↗</span>
				</a>
			</div>
		</div>

		<div
			class="mt-20 border-t border-on-background/15 pt-10 md:mt-28 md:flex md:items-start md:justify-between md:gap-12"
		>
			<h2 class="max-w-sm font-serif text-3xl leading-tight md:text-4xl">
				Un primo messaggio può essere sufficiente.
			</h2>
			<p class="mt-6 max-w-xl leading-relaxed text-on-background/70 md:mt-0">
				Raccontami brevemente cosa ti porta a contattarmi e quali sono le tue disponibilità. Ti
				risponderò per concordare un primo colloquio e comprendere insieme il percorso più adatto.
			</p>
		</div>
	</div>
</section>
