import type { IComponentBaseProps } from '$lib/types';
import type { HTMLAttributes } from 'svelte/elements';

export type TProps = HTMLAttributes<HTMLDivElement> & IComponentBaseProps;

export type TSectionProps = TProps & {
	section: 'start' | 'center' | 'end';
};
