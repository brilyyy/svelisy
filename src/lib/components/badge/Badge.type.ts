import type { IComponentBaseProps, ComponentColor, ComponentSize } from '$lib/types';
import type { HTMLAttributes } from 'svelte/elements';

export type TProps = Omit<HTMLAttributes<HTMLDivElement>, 'color'> &
	IComponentBaseProps & {
		variant?: 'outline';
		size?: ComponentSize;
		color?: ComponentColor;
		responsive?: boolean;
	};
