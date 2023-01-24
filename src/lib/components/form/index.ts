import Form__SvelteComponent_, { type TFormProps } from './Form.svelte';
import Label__SvelteComponent_, { type TLabelProps } from './Label.svelte';

export type FormProps = TFormProps;
export type LabelProps = TLabelProps;
export default Object.assign(Form__SvelteComponent_, {
	Label: Label__SvelteComponent_
});
