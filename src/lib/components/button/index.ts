import Button__SvelteComponent_ from './Button.svelte';
import ButtonGroup__SvelteComponent_ from './ButtonGroup.svelte';
import type { TProps, TGroupProps } from './Button.type';

export type ButtonProps = TProps;
export type ButtonGroupProps = TGroupProps;
export default Object.assign(Button__SvelteComponent_, {
	Group: ButtonGroup__SvelteComponent_
});
