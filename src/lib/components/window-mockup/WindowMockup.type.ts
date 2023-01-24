import type { IComponentBaseProps } from '$lib/types';
import { bgColors, brandColors, componentStatuses } from '$lib/types/constants';
import type { HTMLAttributes } from 'svelte/elements';

export const windowMockupColors = [...bgColors, ...brandColors, ...componentStatuses] as const;

type TWindowMockupColors = (typeof windowMockupColors)[number];

export type TProps = Omit<HTMLAttributes<HTMLDivElement>, 'color'> &
	IComponentBaseProps & {
		frameColor?: TWindowMockupColors;
		backgroundColor?: TWindowMockupColors;
		border?: boolean;
		borderColor?: TWindowMockupColors;
	};
