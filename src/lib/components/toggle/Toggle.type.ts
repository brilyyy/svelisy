import type { ComponentColor, ComponentSize, IComponentBaseProps } from '$lib/types';
import type { HTMLInputAttributes } from 'svelte/elements';

export type TInputProps = Omit<HTMLInputAttributes, 'size'> &
	IComponentBaseProps & {
		size?: ComponentSize;
		color?: ComponentColor;
	};
