<script lang="ts">
	import config from '#lib/config.ts';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import Logo from './Logo.svelte';

	let current = $derived(page.url.pathname);
</script>

<header class="sticky top-0 z-50 bg-background-secondary/50 backdrop-blur-md">
	<div class="mx-auto max-w-7xl px-6 md:px-8">
		<div class="flex min-h-20 items-center justify-between">
			<Logo />

			<!-- Mobile menu -->
			<details class="group lg:hidden">
				<summary
					class="text-charcoal hover:bg-charcoal/5 flex size-11 cursor-pointer list-none items-center
					justify-center rounded-md transition-colors
					focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold
					[&::-webkit-details-marker]:hidden"
					aria-label="Toggle navigation menu"
				>
					<!-- Hamburger -->
					<svg
						class="size-6 group-open:hidden"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="1.8"
						aria-hidden="true"
					>
						<path stroke-linecap="round" d="M4 7h16M4 12h16M4 17h16" />
					</svg>

					<!-- Close -->
					<svg
						class="hidden size-6 group-open:block"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="1.8"
						aria-hidden="true"
					>
						<path stroke-linecap="round" d="m6 6 12 12M18 6 6 18" />
					</svg>
				</summary>

				<nav aria-label="Mobile navigation" class="bg-ivory absolute inset-x-0 top-full shadow-lg">
					<div
						class="sticky top-0 z-50 flex flex-col items-center gap-6 bg-background-secondary/90 px-6 py-8 text-[13px] font-medium tracking-wide uppercase backdrop-blur-md"
					>
						{#each config.nav as n (n.url)}
							<a
								href={resolve(n.url)}
								aria-current={current === n.url ? 'page' : undefined}
								class="transition-colors hover:text-gold"
								class:text-gold={current === n.url}
							>
								{n.label}
							</a>
						{/each}
					</div>
				</nav>
			</details>

			<!-- Desktop navigation -->
			<nav aria-label="Main navigation" class="hidden lg:block">
				<div class="flex items-center gap-8 text-[13px] font-medium tracking-wide uppercase">
					{#each config.nav as n (n.url)}
						<a
							href={resolve(n.url)}
							aria-current={current === n.url ? 'page' : undefined}
							class="transition-colors hover:text-gold"
							class:text-gold={current === n.url}
						>
							{n.label}
						</a>
					{/each}
				</div>
			</nav>
		</div>
	</div>
</header>
