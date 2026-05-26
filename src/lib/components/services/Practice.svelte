<script lang="ts">
	import { resolve } from '$app/paths';

	interface T {
		title: string;
		description: string;
	}

	interface PracticeSection {
		heading: string;
		description: string;
	}

	interface CardGroup {
		title: string;
		bullets: T[];
	}

	interface PracticeContent {
		hero: {
			tagline: string;
			title: string;
			description: string;
			ctas: [string, string];
			cardGroup: CardGroup;
		};
		stepsSection: PracticeSection;
		steps: T[];
		supportSection: PracticeSection;
		reasons: string[];
		supportAreasSection: PracticeSection;
		supportAreas: T[];
		doubtsSection: PracticeSection & { openLabel: string };
		doubts: T[];
		finalCta: {
			tagline: string;
			title: string;
			description: string;
			label: string;
		};
	}

	const { content }: { content: PracticeContent } = $props();
</script>

<section class="relative overflow-hidden px-6 py-20 md:px-8 md:py-28">
	<div
		class="absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(circle_at_top_left,rgba(184,142,90,0.12),transparent_38%),radial-gradient(circle_at_top_right,rgba(74,56,41,0.08),transparent_34%)]"
	></div>
	<div class="mx-auto max-w-6xl">
		<div class="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
			<div>
				<span class="text-[11px] font-medium tracking-[0.25em] text-gold uppercase">
					{content.hero.tagline}
				</span>
				<h1
					class="mt-4 max-w-3xl font-serif text-4xl leading-[1.05] text-charcoal md:text-5xl lg:text-6xl"
				>
					<!-- eslint-disable-next-line svelte/no-at-html-tags -->
					{@html content.hero.title}
				</h1>
				<p class="mt-6 max-w-2xl text-lg leading-relaxed text-charcoal/70 md:text-xl">
					{content.hero.description}
				</p>
				<div class="mt-8 flex flex-wrap gap-4">
					<a
						href={resolve('/contatti?reason=appointment')}
						class="rounded-full bg-charcoal px-8 py-4 text-sm font-medium tracking-wide text-ivory shadow-lg shadow-charcoal/10 transition-colors hover:bg-gold"
					>
						{content.hero.ctas[0]}
					</a>
					<a
						href={resolve('/ambiti-intervento/')}
						class="rounded-full border border-charcoal/20 px-8 py-4 text-sm font-medium tracking-wide text-charcoal transition-colors hover:border-gold"
					>
						{content.hero.ctas[1]}
					</a>
				</div>
			</div>

			<div
				class="rounded-3xl border border-charcoal/5 bg-white/90 p-6 shadow-[0_20px_60px_rgba(51,39,31,0.08)] backdrop-blur"
			>
				<p class="text-[11px] font-medium tracking-[0.28em] text-gold uppercase">
					{content.hero.cardGroup.title}
				</p>
				<div class="mt-5 space-y-4">
					{#each content.hero.cardGroup.bullets as bullet (bullet.title)}
						<div class="rounded-2xl bg-ivory p-4">
							<p class="text-sm font-medium text-charcoal">{bullet.title}</p>
							<p class="mt-1 text-sm leading-relaxed text-charcoal/70">
								{bullet.description}
							</p>
						</div>
					{/each}
				</div>
			</div>
		</div>

		<div class="mt-16 grid gap-8 lg:grid-cols-5">
			<div class="lg:col-span-3">
				<h2 class="font-serif text-3xl text-charcoal md:text-4xl">
					{content.stepsSection.heading}
				</h2>
				<p class="mt-4 max-w-2xl text-charcoal/70">
					{content.stepsSection.description}
				</p>

				<div class="mt-8 grid gap-4">
					{#each content.steps as step (step.title)}
						<article class="rounded-2xl border border-charcoal/5 bg-white p-6 shadow-sm">
							<h3 class="font-serif text-xl text-charcoal">{step.title}</h3>
							<p class="mt-3 leading-relaxed text-charcoal/70">{step.description}</p>
						</article>
					{/each}
				</div>
			</div>

			<aside class="lg:col-span-2">
				<div
					class="rounded-3xl border border-charcoal/5 bg-charcoal p-6 text-ivory shadow-[0_20px_60px_rgba(51,39,31,0.14)]"
				>
					<p class="text-[11px] font-medium tracking-[0.28em] text-gold uppercase">
						{content.supportSection.heading}
					</p>
					<ul class="mt-5 space-y-3 text-sm leading-relaxed text-ivory/82">
						{#each content.reasons as reason (reason)}
							<li class="flex gap-3">
								<span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"></span>
								<span>{reason}</span>
							</li>
						{/each}
					</ul>
					<div class="mt-8 rounded-2xl border border-ivory/10 bg-white/5 p-4">
						<p class="text-sm font-medium text-ivory">{content.supportSection.heading}</p>
						<p class="mt-2 text-sm leading-relaxed text-ivory/78">
							{content.supportSection.description}
						</p>
					</div>
				</div>
			</aside>
		</div>

		<div class="mt-16">
			<div class="max-w-3xl">
				<p class="text-[11px] font-medium tracking-[0.28em] text-gold uppercase">
					{content.supportAreasSection.heading}
				</p>
				<h2 class="mt-4 font-serif text-3xl text-charcoal md:text-4xl">
					{content.supportAreasSection.description}
				</h2>
			</div>

			<div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{#each content.supportAreas as area (area.title)}
					<article
						class="rounded-2xl border border-charcoal/5 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
					>
						<h3 class="font-serif text-xl text-charcoal">{area.title}</h3>
						<p class="mt-3 leading-relaxed text-charcoal/70">{area.description}</p>
					</article>
				{/each}
			</div>
		</div>

		<div class="mt-16 rounded-4xl border border-charcoal/5 bg-ivory p-6 md:p-8">
			<div class="max-w-3xl">
				<p class="text-[11px] font-medium tracking-[0.28em] text-gold uppercase">
					{content.doubtsSection.heading}
				</p>
				<h2 class="mt-4 font-serif text-3xl text-charcoal md:text-4xl">
					{content.doubtsSection.description}
				</h2>
			</div>

			<div class="mt-8 grid gap-4 lg:grid-cols-2">
				{#each content.doubts as doubt (doubt.title)}
					<details class="group rounded-2xl border border-charcoal/5 bg-white p-5 shadow-sm">
						<summary
							class="flex cursor-pointer list-none items-center justify-between gap-4 text-left"
						>
							<span class="font-serif text-xl text-charcoal">{doubt.title}</span>
							<span
								class="rounded-full border border-charcoal/10 px-3 py-1 text-xs font-medium tracking-widest text-charcoal uppercase transition-colors group-open:border-gold group-open:text-gold"
							>
								{content.doubtsSection.openLabel}
							</span>
						</summary>
						<p class="mt-4 leading-relaxed text-charcoal/70">{doubt.description}</p>
					</details>
				{/each}
			</div>
		</div>

		<div
			class="mt-16 grid gap-8 rounded-4xl border border-charcoal/5 bg-white p-8 shadow-sm lg:grid-cols-[1fr_auto] lg:items-center"
		>
			<div>
				<p class="text-[11px] font-medium tracking-[0.28em] text-gold uppercase">
					{content.finalCta.tagline}
				</p>
				<h2 class="mt-4 font-serif text-3xl text-charcoal md:text-4xl">
					{content.finalCta.title}
				</h2>
				<p class="mt-4 max-w-2xl text-charcoal/70">
					{content.finalCta.description}
				</p>
			</div>
			<a
				href={resolve('/contatti?reason=appointment')}
				class="inline-flex items-center justify-center rounded-full bg-charcoal px-8 py-4 text-sm font-medium tracking-wide text-ivory shadow-lg shadow-charcoal/10 transition-colors hover:bg-gold"
			>
				{content.finalCta.label}
			</a>
		</div>
	</div>
</section>
