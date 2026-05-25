export interface BaseInput {
	label: string;
	name: string;
	type: string;
	required: boolean;
	maxlength?: number;
	placeholder?: string;
}

export interface TextInput extends BaseInput {
	type: 'text';
}

export interface TextAreaInput extends BaseInput {
	type: 'textarea';
	rows: number;
}

export interface SelectionInput extends BaseInput {
	type: 'selection';
	options: { label: string; value: string }[];
	defaultOption: number;
}

export type Input = TextInput | TextAreaInput | SelectionInput;
