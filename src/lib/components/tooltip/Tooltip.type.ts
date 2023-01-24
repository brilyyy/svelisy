import type { ComponentColor, ComponentPosition, IComponentBaseProps } from '$lib/types';
import type { HTMLAttributes } from 'svelte/elements';

export type TProps = Omit<HTMLAttributes<HTMLDivElement>, 'color'> &
	IComponentBaseProps & {
		message: string;
		open?: boolean;
		color?: ComponentColor;
		position?: ComponentPosition;
	};
