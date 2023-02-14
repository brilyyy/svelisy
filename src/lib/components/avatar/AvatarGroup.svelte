<script lang="ts">
	import { createEventForwarder } from '$lib/utils';
	import clsx from 'clsx';
	import { get_current_component } from 'svelte/internal';
	import type { TGroupProps as $$AvatarGroupProps } from './Avatar.type';

	type $$Props = $$AvatarGroupProps;
	//
	export let className: $$Props['className'] = '';
	export let space: $$Props['space'] = undefined;
	export let element: $$Props['element'];

	export { className as class };
	//
	const forwardEvents = createEventForwarder(get_current_component());
	$: spacingClass = space && `${space < 0 ? '-' : ''}space-x-${Math.abs(space)}`;
	$: classes = clsx('avatar-group', spacingClass, className);
</script>

<div bind:this={element} class={classes} use:forwardEvents>
	<slot />
</div>
