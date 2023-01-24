import type { IComponentBaseProps } from '$lib/types';
import type { HTMLAttributes } from 'svelte/elements';

export type TProps = HTMLAttributes<HTMLDivElement> &
	IComponentBaseProps & {
		horizontal?: 'start' | 'center' | 'end';
		vertical?: 'top' | 'middle' | 'bottom';
	};
