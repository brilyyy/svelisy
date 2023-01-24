import type { IComponentBaseProps } from '$lib/types';
import type { HTMLAttributes } from 'svelte/elements';

export type TProps = HTMLAttributes<HTMLDivElement> &
	IComponentBaseProps & {
		size?: 1 | 2 | 3 | 4 | 5 | 6;
		horizontal?: boolean;
	};
