<script lang="ts">
	import clsx from 'clsx';
	import type { TGroupProps as $$AvatarGroupProps } from './Avatar.type';

	type $$Props = $$AvatarGroupProps;

	export let className: $$Props['className'] = '';
	export let space: $$Props['space'] = undefined;
	export let element: $$Props['element'];

	export { className as class };

	$: spacingClass = space && `${space < 0 ? '-' : ''}space-x-${Math.abs(space)}`;
	$: classes = clsx('avatar-group', spacingClass, className);
</script>

<div bind:this={element} class={classes}>
	<slot />
</div>
