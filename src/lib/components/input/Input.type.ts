import type { ComponentColor, ComponentSize, IComponentBaseProps } from '$lib/types';
import type {
	HTMLAttributes,
	HTMLInputAttributes,
	HTMLInputTypeAttribute,
	HTMLSelectAttributes,
	HTMLTextareaAttributes
} from 'svelte/elements';

export type InputType =
	| 'color'
	| 'date'
	| 'datetime-local'
	| 'email'
	| 'file'
	| 'hidden'
	| 'image'
	| 'month'
	| 'number'
	| 'password'
	| 'reset'
	| 'submit'
	| 'tel'
	| 'text'
	| 'time'
	| 'url'
	| 'week'
	| 'search';

export type TInputProps = Omit<HTMLInputAttributes, 'size' | 'color'> &
	IComponentBaseProps & {
		bordered?: boolean;
		borderOffset?: boolean;
		size?: ComponentSize;
		color?: ComponentColor;
	};
export type TSelectProps = Omit<HTMLSelectAttributes, 'size' | 'color'> &
	IComponentBaseProps & {
		bordered?: boolean;
		borderOffset?: boolean;
		size?: ComponentSize;
		color?: ComponentColor;
	};
export type TTextAreaProps = Omit<HTMLTextareaAttributes, 'color'> &
	IComponentBaseProps & {
		bordered?: boolean;
		borderOffset?: boolean;
		color?: ComponentColor;
	};

export type TRatingItemProps = HTMLInputAttributes;

export type TRatingProps = HTMLAttributes<HTMLDivElement> &
	IComponentBaseProps & {
		size?: ComponentSize;
		half?: boolean;
		hidden?: boolean;
		value: number;
	};
