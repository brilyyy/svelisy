import type { IComponentBaseProps, ComponentSize } from '$lib/types';
import type { HTMLAttributes, HTMLImgAttributes } from 'svelte/elements';

export type TProps = Omit<HTMLAttributes<HTMLDivElement>, 'color'> &
	IComponentBaseProps & {
		bordered?: boolean;
		imageFull?: boolean;
		normal?: ComponentSize | boolean;
		compact?: ComponentSize | boolean;
		side?: ComponentSize | boolean;
	};
export type TTitleProps = Omit<HTMLAttributes<HTMLDivElement>, 'color'> &
	IComponentBaseProps & {
		tag?: 'div' | 'h1' | 'h2' | 'h3';
	};

export type TImageProps = HTMLImgAttributes;
export type TBodyProps = HTMLAttributes<HTMLDivElement> & IComponentBaseProps;
