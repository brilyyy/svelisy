import Avatar__SvelteComponent_ from './Avatar.svelte';
import AvatarGroup__SvelteComponent_ from './AvatarGroup.svelte';
import type { TProps, TGroupProps } from './Avatar.type';

export type AvatarProps = TProps;
export type AvatarGroupProps = TGroupProps;
export default Object.assign(Avatar__SvelteComponent_, {
	Group: AvatarGroup__SvelteComponent_
});
