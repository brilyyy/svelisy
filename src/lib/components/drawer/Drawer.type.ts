import type { IComponentBaseProps } from '$lib/types';
import type { HTMLAttributes } from 'svelte/elements';

export type TProps = HTMLAttributes<HTMLDivElement> &
	IComponentBaseProps & {
		open?: boolean;
		mobile?: boolean;
		end?: boolean;
		toggleClassName?: string;
		contentClassName?: string;
		sideClassName?: string;
		overlayClassName?: string;
	};
