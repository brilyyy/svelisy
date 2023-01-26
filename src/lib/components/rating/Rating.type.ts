import type { ComponentSize, IComponentBaseProps } from '$lib/types';
import type { HTMLAttributes, HTMLInputAttributes } from 'svelte/elements';

export type TRatingItemProps = HTMLInputAttributes & IComponentBaseProps;

export type TRatingProps = HTMLAttributes<HTMLDivElement> &
	IComponentBaseProps & {
		size?: ComponentSize;
		half?: boolean;
		hidden?: boolean;
		value: number;
	};
