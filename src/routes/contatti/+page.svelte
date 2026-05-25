<script lang="ts">
	import Form from '$lib/components/contacts/Form.svelte';
	import { t } from '$lib/i18n';
	import type { Input } from '$lib/components/contacts/types';
	import config from '$lib/config';
	import Hero from '$lib/components/contacts/Hero.svelte';
	import Info from '$lib/components/contacts/Info.svelte';

	const onsubmit = (data: Record<string, string>) => {
		if (!data.reason || !data.message) {
			return;
		}

		const url = new URL(`https://wa.me/${config.phone.replaceAll(' ', '')}`);
		url.searchParams.set(
			'text',
			$t(`contacts.form.reasons.${data.reason}.template`, {
				name: data.name,
				message: data.message,
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
			} as any),
		);
		window.location.href = url.href;
	};

	const inputs: Input[] = [
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
				{ label: $t('contacts.form.reasons.appointment.label'), value: 'richiesta-appuntamento' },
				{ label: $t('contacts.form.reasons.partnership.label'), value: 'partnership' },
				{ label: $t('contacts.form.reasons.other.label'), value: 'other' },
			],
			defaultOption: 0,
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
	];
</script>

<div class="px-6 py-20 md:px-8 md:py-28">
	<div class="mx-auto max-w-6xl">
		<Hero />
		<div class="grid gap-12 lg:grid-cols-5">
			<Form {onsubmit} {inputs} />
			<Info />
		</div>
	</div>
</div>
