import type { IComponentBaseProps } from '$lib/types';
import type { HTMLAttributes } from 'svelte/elements';

export const horizontalOptions = {
	start: 'toast-start',
	center: 'toast-center',
	end: 'toast-end'
};

export const verticalOptions = {
	top: 'toast-top',
	middle: 'toast-middle',
	bottom: 'toast-bottom'
};

export type TProps = HTMLAttributes<HTMLDivElement> &
	IComponentBaseProps & {
		horizontal?: keyof typeof horizontalOptions;
		vertical?: keyof typeof verticalOptions;
	};
