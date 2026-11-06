<script lang="ts">
	type TocChild = {
		id: string;
		title: string;
	};

	type TocItem = {
		id: string;
		title: string;
		children?: TocChild[];
	};

	let { items }: { items: TocItem[] } = $props();
</script>

<details open class="group border-y border-on-background/10 lg:sticky lg:top-28">
	<summary
		class="flex cursor-pointer list-none items-center justify-between py-6 text-[11px] font-medium tracking-[0.2em] text-gold uppercase focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold [&::-webkit-details-marker]:hidden"
	>
		<span>In questa pagina</span>
		<span aria-hidden="true" class="font-serif text-xl transition-transform group-open:rotate-45"
			>+</span
		>
	</summary>
	<nav aria-label="Indice della pagina" class="pb-6">
		<ol class="space-y-3 text-sm leading-relaxed">
			{#each items as item (item.id)}
				<li>
					<a class="transition-colors hover:text-gold" href={'#' + item.id}>{item.title}</a>
					{#if item.children?.length}
						<ul
							class="mt-2 ml-4 space-y-2 border-l border-on-background/10 pl-4 text-on-background/65"
						>
							{#each item.children as child (child.id)}
								<li>
									<a class="transition-colors hover:text-gold" href={'#' + child.id}
										>{child.title}</a
									>
								</li>
							{/each}
						</ul>
					{/if}
				</li>
			{/each}
		</ol>
	</nav>
</details>
