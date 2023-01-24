import type {
	ComponentSize,
	IComponentBaseProps,
	ComponentShape,
	ComponentColor
} from '$lib/types';
import type { HTMLAttributes } from 'svelte/elements';

type TRounded = ComponentSize | 'xl' | '2xl' | 'full';

export type TProps = Omit<HTMLAttributes<HTMLDivElement>, 'color'> &
	IComponentBaseProps & {
		src?: string;
		letters?: string;
		size?: ComponentSize | number;
		shape?: ComponentShape;
		color?: ComponentColor;
		border?: boolean;
		borderColor?: ComponentColor;
		online?: boolean;
		offline?: boolean;
		rounded?: TRounded;
	};

export type TGroupProps = Omit<HTMLAttributes<HTMLDivElement>, 'color'> &
	IComponentBaseProps & {
		space?: number;
	};
