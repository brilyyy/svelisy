<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import clsx from 'clsx';
	import type { InputType, TInputProps as $$TProps } from './Input.type';
	//
	interface $$Props extends $$TProps {
		type?: InputType;
		group?: number | string;
	}

	export let dataTheme: $$Props['dataTheme'] = undefined,
		className: $$Props['className'] = '',
		size: $$Props['size'] = undefined,
		value: $$Props['value'] = undefined,
		group: $$Props['group'] = '',
		color: $$Props['color'] = undefined;

	export { className as class };

	$: classes = twMerge(
		'radio',
		className,
		clsx({
			[`radio-${size}`]: size,
			[`radio-${color}`]: color
		})
	);
</script>

<input
	{...$$restProps}
	type="radio"
	bind:group
	on:blur
	on:change
	on:click
	on:contextmenu
	on:focus
	on:keydown
	on:keypress
	on:keyup
	on:mouseover
	on:mouseenter
	on:mouseleave
	on:paste
	on:input
	data-theme={dataTheme}
	class={classes}
	{value}
/>
