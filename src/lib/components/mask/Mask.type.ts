import type { IComponentBaseProps } from '$lib/types';
import type { HTMLImgAttributes } from 'svelte/elements';

export type TProps = HTMLImgAttributes &
	IComponentBaseProps & {
		variant?:
			| 'squircle'
			| 'heart'
			| 'hexagon'
			| 'hexagon-2'
			| 'decagon'
			| 'pentagon'
			| 'diamond'
			| 'square'
			| 'circle'
			| 'parallelogram'
			| 'parallelogram-2'
			| 'parallelogram-3'
			| 'parallelogram-4'
			| 'star'
			| 'star-2'
			| 'triangle'
			| 'triangle-2'
			| 'triangle-3'
			| 'triangle-4'
			| 'half-1'
			| 'half-2';
	};
