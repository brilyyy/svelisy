<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import clsx from 'clsx';
	import type { TProps as $$BadgeProps } from './Badge.type';
	import { createEventForwarder } from '$lib/utils';
	import { get_current_component } from 'svelte/internal';
	//
	type $$Props = $$BadgeProps;

	export let dataTheme: $$Props['dataTheme'] = undefined;
	export let className: $$Props['className'] = '';
	export let color: $$Props['color'] = undefined;
	export let size: $$Props['size'] = undefined;
	export let variant: $$Props['variant'] = undefined;
	export let responsive: $$Props['responsive'] = false;
	export let element: $$Props['element'];

	export { className as class };
	//
	const forwardEvents = createEventForwarder(get_current_component());
	$: classes = twMerge(
		'badge',
		className,
		clsx({
			[`badge-${size}`]: size,
			[`badge-${variant}`]: variant,
			[`badge-${color}`]: color,
			'badge-xs md:badge-sm lg:badge-md xl:badge-lg': responsive
		})
	);
</script>

<div
	use:forwardEvents
	bind:this={element}
	aria-label="Badge"
	{...$$restProps}
	data-theme={dataTheme}
	class={classes}
>
	<slot />
</div>
