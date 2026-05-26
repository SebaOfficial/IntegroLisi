<script lang="ts">
	import Form from '$lib/components/contacts/Form.svelte';
	import { t } from '$lib/i18n';
	import type { Input } from '$lib/components/contacts/types';
	import config from '$lib/config';
	import Hero from '$lib/components/contacts/Hero.svelte';
	import Info from '$lib/components/contacts/Info.svelte';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { replaceState } from '$app/navigation';

	const reasons = ['general', 'appointment', 'partnership', 'other'] as const;
	type Reason = (typeof reasons)[number];

	const isReason = (value: string | null): value is Reason =>
		value !== null && reasons.includes(value as Reason);

	let reason = $state<Reason>('general');

	let inputs: Input[] = $derived([
		{
			label: $t('contacts.form.inputs.name'),
			name: 'name',
			type: 'text',
			required: true,
			maxlength: 80,
		},
		{
			label: $t('contacts.form.inputs.reason'),
			name: 'reason',
			type: 'selection',
			required: true,
			options: [
				{ label: $t('contacts.form.reasons.general.label'), value: 'general' },
				{ label: $t('contacts.form.reasons.appointment.label'), value: 'appointment' },
				{ label: $t('contacts.form.reasons.partnership.label'), value: 'partnership' },
				{ label: $t('contacts.form.reasons.other.label'), value: 'other' },
			],
			selected: reason,
		},
		{
			label: $t('contacts.form.inputs.message.label'),
			name: 'message',
			type: 'textarea',
			required: true,
			maxlength: 2000,
			placeholder: $t('contacts.form.inputs.message.placeholder'),
			rows: 6,
		},
	]);

	const updateReason = (value: Reason) => {
		console.log('Updating reason to', reason, value);
		reason = value;

		if (!browser) return;
		const url = new URL(window.location.href);
		url.searchParams.set('reason', value);
		// eslint-disable-next-line svelte/no-navigation-without-resolve
		replaceState(url, '');
	};

	onMount(() => {
		const urlReason = new URL(window.location.href).searchParams.get('reason');

		if (isReason(urlReason)) {
			reason = urlReason;
		}
	});

	const onsubmit = (data: Record<string, string>) => {
		const normalizedPhone = config.phone.replace(/\D/g, '');
		if (!data.reason || !data.message || normalizedPhone.length < 7) {
			return;
		}

		const url = new URL(`https://wa.me/${normalizedPhone}`);

		const message = $t(`contacts.form.reasons.${data.reason}.template`, {
			name: data.name ?? '',
			message: data.message ?? '',
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} as any);

		url.searchParams.set('text', message);
		window.location.href = url.href;
	};
</script>

<div class="px-6 py-20 md:px-8 md:py-28">
	<div class="mx-auto max-w-6xl">
		<Hero />
		<div class="grid gap-12 lg:grid-cols-5">
			<Form {onsubmit} {inputs} onChange={(_, value) => updateReason(value as Reason)} />
			<Info />
		</div>
	</div>
</div>
