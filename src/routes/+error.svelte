<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import SvelteSeo from 'svelte-seo';
</script>

<SvelteSeo title="Pagina non trovata" />

<svelte:head>
	<meta name="robots" content="noindex" />
</svelte:head>

<main class="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-16 sm:px-12">
	<p class="font-mono text-sm tracking-[0.2em] text-gold uppercase" aria-hidden="true">
		{page.status}
	</p>
	<h1 class="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">Pagina non trovata</h1>
	<p class="mt-6 max-w-xl text-lg leading-8 text-on-background/80">
		La pagina che cerchi non esiste o potrebbe essersi spostata.
	</p>
	<a
		href={resolve('/')}
		class="no-style mt-10 inline-flex w-fit rounded border border-gold px-5 py-3 font-semibold text-gold transition-colors hover:bg-gold hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold motion-reduce:transition-none"
	>
		Torna alla Home
	</a>
</main>
