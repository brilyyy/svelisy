import type { IComponentBaseProps } from '$lib/types';
import type { HTMLAttributes, HTMLLiAttributes } from 'svelte/elements';

export type TProps = Omit<HTMLAttributes<HTMLDivElement>, 'color'> &
	IComponentBaseProps<HTMLDivElement>;

export type TItemProps = HTMLLiAttributes & {
	href?: string;
};
