<script lang="ts" context="module">
	export type TChatAvatarProps = AvatarProps & IComponentBaseProps;
</script>

<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { IComponentBaseProps } from '$lib/types';
	import type { AvatarProps } from '$lib/components/avatar';
	import { Avatar } from '$lib';

	type $$Props = TChatAvatarProps;

	export let className: $$Props['className'] = '';
	export let size: $$Props['size'] = 'xs';
	export let shape: $$Props['shape'] = 'circle';

	export { className as class };

	$: classes = twMerge('chat-image', className);
</script>

<Avatar {size} {shape} {...$$restProps} class={classes} />
