import Checkbox__SvelteComponent_, { type TCheckboxProps } from './Checkbox.svelte';
import FileInput__SvelteComponent_, { type TFileInputProps } from './FileInput.svelte';
import Input__SvelteComponent_, { type TInputProps } from './Input.svelte';
import Radio__SvelteComponent_, { type TRadioProps } from './Radio.svelte';
import Range__SvelteComponent_, { type TRangeProps } from './Range.svelte';
import Select__SvelteComponent_, { type TSelectProps } from './Select.svelte';
import Textarea__SvelteComponent_, { type TTextAreaProps } from './Textarea.svelte';

export type CheckboxProps = TCheckboxProps;
export type FileInputProps = TFileInputProps;
export type InputProps = TInputProps;
export type RadioProps = TRadioProps;
export type RangeProps = TRangeProps;
export type SelectProps = TSelectProps;
export type TextareaProps = TTextAreaProps;

export default Object.assign(Input__SvelteComponent_, {
	Checkbox: Checkbox__SvelteComponent_,
	File: FileInput__SvelteComponent_,
	Radio: Radio__SvelteComponent_,
	Range: Range__SvelteComponent_,
	Select: Select__SvelteComponent_,
	Textarea: Textarea__SvelteComponent_
});
