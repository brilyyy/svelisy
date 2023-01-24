import type { ComponentColor, IComponentBaseProps } from '$lib/types';
import type { HTMLAttributes, HTMLProgressAttributes } from 'svelte/elements';

export type TProps = HTMLAttributes<HTMLDivElement> &
	IComponentBaseProps & {
		color?: ComponentColor;
		value: number;
		size?: string;
		thickness?: string;
	};
