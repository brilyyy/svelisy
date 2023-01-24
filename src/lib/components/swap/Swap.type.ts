import type { IComponentBaseProps } from '$lib/types';
import type { HTMLLabelAttributes } from 'svelte/elements';

export type TProps = HTMLLabelAttributes &
	IComponentBaseProps & { active?: boolean; rotate?: boolean; flip?: boolean };
