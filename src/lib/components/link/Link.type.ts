import type { ComponentColor, IComponentBaseProps } from '$lib/types';
import type { HTMLAttributes } from 'svelte/elements';

export type TProps = HTMLAttributes<HTMLAnchorElement> &
	IComponentBaseProps & {
		color?: 'neutral' | ComponentColor;
		hover?: boolean;
	};
