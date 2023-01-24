import type { ComponentColor, IComponentBaseProps } from '$lib/types';
import type { HTMLProgressAttributes } from 'svelte/elements';

export type TProps = Omit<HTMLProgressAttributes, 'color'> &
	IComponentBaseProps & {
		color?: ComponentColor;
	};
