import type { ComponentColor, IComponentBaseProps } from '$lib/types';
import type { HTMLAttributes, HTMLLiAttributes, HTMLProgressAttributes } from 'svelte/elements';

export type TProps = HTMLAttributes<HTMLUListElement> &
	IComponentBaseProps & {
		vertical?: boolean;
		horizontal?: boolean;
	};

export type TStepProps = Omit<HTMLLiAttributes, 'value' | 'color'> &
	IComponentBaseProps & {
		value?: string;
		color?: 'neutral' | ComponentColor;
	};
