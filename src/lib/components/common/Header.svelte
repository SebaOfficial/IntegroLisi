<script lang="ts">
	import { navigationLinks } from '.';
	import { resolve } from '$app/paths';
	import { t } from '$lib/i18n';
	import BurgerMenuIcon from '$lib/assets/menu/burger.svg?enhanced';
	import CrossMenuIcon from '$lib/assets/menu/cross.svg?enhanced';
	import Logo from './Logo.svelte';
	import { page } from '$app/state';

	let open = $state(false);

	const toggleMenu = () => (open = !open);

	const closeMenu = () => (open = false);

	let pathname = $derived(page.url.pathname);
</script>

<header class="sticky top-0 z-50 border-b border-charcoal/5 bg-ivory/85 backdrop-blur-md">
	<div class="mx-auto max-w-7xl px-6 md:px-8">
		<div class="flex h-20 items-center justify-between">
			<Logo size="3xl" />

			<button
				type="button"
				aria-label={open ? $t('header.menu.close') : $t('header.menu.open')}
				aria-expanded={open}
				aria-controls="site-navigation"
				class="cursor-pointer p-2 text-charcoal transition-colors hover:text-gold lg:hidden"
				onclick={toggleMenu}
			>
				<enhanced:img src={open ? CrossMenuIcon : BurgerMenuIcon} alt="" class="h-6 w-6" />
			</button>

			<nav
				id="site-navigation"
				class={`
					absolute inset-x-0 top-full border-b border-charcoal/5 bg-ivory
					lg:static lg:block lg:border-0 lg:bg-transparent
					${open ? 'block' : 'hidden'}
				`}
			>
				<div
					class="
						flex flex-col items-center gap-6 px-6 py-6
						text-[13px] font-medium tracking-wide uppercase
						lg:flex-row lg:gap-8 lg:p-0
					"
				>
					{#each navigationLinks as link (link.label)}
						<a
							href={resolve(link.href)}
							class="text-charcoal/80 transition-colors hover:text-gold"
							class:text-gold={pathname === link.href}
							aria-current={pathname === link.href ? 'page' : undefined}
							onclick={closeMenu}
						>
							{$t(link.label)}
						</a>
					{/each}

					<a
						href={resolve('/contatti')}
						class="
							hover:bg-terracotta rounded-full bg-charcoal px-5 py-2.5
							text-center text-xs tracking-widest text-ivory
							transition-colors
						"
						onclick={closeMenu}
					>
						{$t('header.cta')}
					</a>
				</div>
			</nav>
		</div>
	</div>
</header>
