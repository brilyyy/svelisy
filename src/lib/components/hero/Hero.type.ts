import type { IComponentBaseProps } from '$lib/types';
import type { HTMLAttributes } from 'svelte/elements';

export type TContentProps = HTMLAttributes<HTMLDivElement> & IComponentBaseProps;
export type TOverlayProps = HTMLAttributes<HTMLDivElement> & IComponentBaseProps;
export type TProps = HTMLAttributes<HTMLDivElement> & IComponentBaseProps;
