import type { ComponentColor, IComponentBaseProps } from '$lib/types';
import type { HTMLAttributes } from 'svelte/elements';

export type TProps = HTMLAttributes<HTMLDivElement> &
	IComponentBaseProps & {
		color?: Omit<ComponentColor, 'ghost'>;
		innerClassName?: string;
	};
