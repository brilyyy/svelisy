<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import clsx from 'clsx';
	import { createEventForwarder } from '$lib/utils';
	import { get_current_component } from 'svelte/internal';
	import type { TProps as $$ButtonProps } from './Button.type';

	type $$Props = $$ButtonProps;

	export let dataTheme: $$Props['dataTheme'] = undefined,
		className: $$Props['className'] = '',
		color: $$Props['color'] = undefined,
		href: $$Props['href'] = null,
		shape: $$Props['shape'] = undefined,
		size: $$Props['size'] = undefined,
		variant: $$Props['variant'] = undefined,
		fullWidth: $$Props['fullWidth'] = false,
		responsive: $$Props['responsive'] = false,
		animation: $$Props['animation'] = true,
		loading: $$Props['loading'] = false,
		active: $$Props['active'] = false,
		disabled: $$Props['disabled'] = false,
		glass: $$Props['glass'] = false;
	export let element: $$Props['element'];
	export { className as class };

	$: classes = twMerge(
		twMerge(
			'btn',
			className,
			clsx((($$slots.startIcon && !loading) || $$slots.endIcon) && 'gap-2', {
				[`btn-${size}`]: size,
				[`btn-${shape}`]: shape,
				[`btn-${variant}`]: variant,
				[`btn-${color}`]: color,
				'btn-block': fullWidth,
				'btn-xs md:btn-sm lg:btn-md xl:btn-lg': responsive,
				'no-animation': !animation,
				'btn-active': active,
				'btn-disabled': disabled,
				loading: loading,
				glass: glass
			})
		)
	);

	const forwardEvents = createEventForwarder(get_current_component());
</script>

{#if href}
	<a {href} class={classes} use:forwardEvents>
		{#if $$slots.startIcon}
			<slot name="startIcon" />
		{/if}
		<slot />
		{#if $$slots.endIcon}
			<slot name="endIcon" />
		{/if}
	</a>
{:else}
	<button
		bind:this={element}
		class={classes}
		data-theme={dataTheme}
		{disabled}
		use:forwardEvents
		{...$$restProps}
	>
		{#if $$slots.startIcon}
			<slot name="startIcon" />
		{/if}
		<slot />
		{#if $$slots.endIcon}
			<slot name="endIcon" />
		{/if}
	</button>
{/if}
