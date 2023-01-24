import type { ComponentSize, IComponentBaseProps } from '$lib/types';
import type { HTMLAttributes } from 'svelte/elements';

export type TProps = HTMLAttributes<HTMLElement> &
	IComponentBaseProps & {
		size?: ComponentSize;
	};
