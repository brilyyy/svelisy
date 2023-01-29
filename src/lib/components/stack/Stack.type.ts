import type { IComponentBaseProps } from '$lib/types';
import type { HTMLAttributes } from 'svelte/elements';

export type TProps = HTMLAttributes<HTMLDivElement> & IComponentBaseProps;
