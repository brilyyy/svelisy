import type { ComponentStatus, IComponentBaseProps } from '$lib/types';
import type { HTMLAttributes } from 'svelte/elements';

export type TProps = HTMLAttributes<HTMLDivElement> & IComponentBaseProps;

export type TLineProps = HTMLAttributes<HTMLPreElement> &
	IComponentBaseProps & {
		dataPrefix?: boolean | string;
		status?: ComponentStatus;
	};
