import type { ComponentColor, IComponentBaseProps } from '$lib/types';
import type { HTMLAnchorAttributes } from 'svelte/elements';

export type TProps = HTMLAnchorAttributes &
	IComponentBaseProps & {
		color?: 'neutral' | ComponentColor;
		hover?: boolean;
	};
