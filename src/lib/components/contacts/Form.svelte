<script lang="ts">
	import { resolve } from '$app/paths';
	import { t } from '$lib/i18n';
	import type { Input } from './types';

	type Props = {
		onsubmit: (inputsData: Record<string, string>) => void;
		inputs: Input[];
		onChange?: (name: string, value: string) => void;
	};

	const { onsubmit, onChange, inputs = $bindable() }: Props = $props();

	let inputsData: Record<string, string> = $state({});

	$effect(() => {
		for (const input of inputs) {
			if (input.type === 'selection' && inputsData[input.name] !== input.selected) {
				inputsData[input.name] = input.selected;
			}
		}
	});
</script>

<form
	onsubmit={(e) => {
		e.preventDefault();
		onsubmit(inputsData);
	}}
	class="space-y-6 rounded-3xl border border-charcoal/10 bg-sand/40 p-8 md:p-10 lg:col-span-3"
>
	{#each inputs as input (input.name)}
		<div>
			<label
				for={input.name}
				class="mb-2 block text-[11px] font-semibold tracking-[0.2em] text-charcoal uppercase"
			>
				{input.label}
				{#if input.required}
					<span class="text-terracotta">*</span>
				{/if}
			</label>

			{#if input.type == 'text'}
				<input
					bind:value={inputsData[input.name]}
					type={input.type}
					id={input.name}
					name={input.name}
					required={input.required}
					maxlength={input.maxlength}
					class="w-full rounded-xl border border-charcoal/15 bg-ivory px-4 py-3 text-sm focus:border-gold focus:outline-none"
				/>
			{:else if input.type == 'selection'}
				<select
					bind:value={inputsData[input.name]}
					onchange={(event) => onChange?.(input.name, event.currentTarget.value)}
					name={input.name}
					id={input.name}
					required={input.required}
					class="w-full rounded-xl border border-charcoal/15 bg-ivory px-4 py-3 text-sm focus:border-gold focus:outline-none"
				>
					{#each input.options as option (option.value)}
						<option value={option.value}>
							{option.label}
						</option>
					{/each}
				</select>
			{:else if input.type == 'textarea'}
				<textarea
					bind:value={inputsData[input.name]}
					name={input.name}
					id={input.name}
					rows={input.rows}
					maxlength={input.maxlength}
					required={input.required}
					class="w-full resize-y rounded-xl border border-charcoal/15 bg-ivory px-4 py-3 text-sm focus:border-gold focus:outline-none"
					placeholder={input.placeholder}
				></textarea>
			{/if}
		</div>
	{/each}

	<label class="flex items-start gap-3 text-sm text-charcoal/75">
		<input type="checkbox" class="mt-1 accent-gold" name="consent" required />
		<span>
			{$t('contacts.form.privacy.0')}<a
				href={resolve('/privacy-policy')}
				class="underline decoration-gold/60 underline-offset-4 hover:text-gold"
			>
				{$t('contacts.form.privacy.1')}
			</a>
			{$t('contacts.form.privacy.2')}
		</span>
	</label>
	<button
		type="submit"
		class="hover:bg-terracotta w-full rounded-full bg-charcoal px-8 py-3.5 text-xs tracking-widest text-ivory uppercase transition-colors md:w-auto"
	>
		{$t('contacts.form.submit')}
	</button>
</form>
