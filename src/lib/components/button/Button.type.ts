import type {
	IComponentBaseProps,
	ComponentColor,
	ComponentShape,
	ComponentSize
} from '$lib/types';
import type { HTMLAttributes, HTMLButtonAttributes } from 'svelte/elements';

export type TProps = Omit<HTMLButtonAttributes, 'color'> &
	IComponentBaseProps & {
		href?: string | null;
		shape?: ComponentShape;
		size?: ComponentSize;
		variant?: 'outline' | 'link';
		color?: ComponentColor;
		fullWidth?: boolean;
		responsive?: boolean;
		animation?: boolean;
		loading?: boolean;
		active?: boolean;
		disabled?: boolean;
		glass?: boolean;
	};

export type TGroupProps = HTMLAttributes<HTMLDivElement> &
	IComponentBaseProps & {
		vertical?: boolean;
	};
