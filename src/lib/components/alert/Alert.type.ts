import type { IComponentBaseProps, ComponentStatus } from '$lib/types';
import type { HTMLAttributes } from 'svelte/elements';

export type TProps = Omit<HTMLAttributes<HTMLDivElement>, 'color'> &
	IComponentBaseProps & {
		status?: ComponentStatus;
		innerClassName?: string;
	};
