<script lang="ts" context="module">
	export type TInputType =
		| 'color'
		| 'date'
		| 'datetime-local'
		| 'email'
		| 'hidden'
		| 'image'
		| 'month'
		| 'number'
		| 'password'
		| 'reset'
		| 'tel'
		| 'text'
		| 'time'
		| 'url'
		| 'week'
		| 'search';

	export type TInputProps = Omit<HTMLInputAttributes, 'size' | 'color'> &
		IComponentBaseProps & {
			bordered?: boolean;
			borderOffset?: boolean;
			size?: ComponentSize;
			color?: ComponentColor;
		};
</script>

<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import clsx from 'clsx';
	import type { ComponentColor, ComponentSize, IComponentBaseProps } from '$lib/types';
	import type { HTMLInputAttributes } from 'svelte/elements';
	//
	type $$Props = TInputProps & {
		type: TInputType;
	};

	export let dataTheme: $$Props['dataTheme'] = undefined,
		className: $$Props['className'] = '',
		bordered: $$Props['bordered'] = undefined,
		borderOffset: $$Props['borderOffset'] = undefined,
		size: $$Props['size'] = undefined,
		value: $$Props['value'] = undefined,
		color: $$Props['color'] = undefined,
		type: $$Props['type'] = 'text';

	export { className as class };

	const setType = (node: HTMLInputElement, _type: string) => {
		node.type = _type;
		return {
			update(_type: string) {
				node.type = _type;
			}
		};
	};

	$: classes = twMerge(
		'input',
		className,
		clsx({
			[`input-${size}`]: size,
			[`input-${color}`]: color,
			[`focus:outline-offset-0`]: !borderOffset,
			'input-bordered': bordered
		})
	);
</script>

<input
	{...$$restProps}
	bind:value
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
	use:setType={type}
	data-theme={dataTheme}
	placeholder={$$props.placeholder}
	class={classes}
/>
