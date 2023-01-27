<script lang="ts" context="module">
	export type TSelectProps = Omit<HTMLSelectAttributes, 'size' | 'color'> &
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
	import type { TSelectProps as $$TProps } from './Input.type';
	import type { HTMLSelectAttributes } from 'svelte/elements';
	import type { ComponentColor, ComponentSize, IComponentBaseProps } from '$lib/types';

	interface $$Props extends $$TProps {
		options: { label: string; value: any }[];
	}

	export let dataTheme: $$Props['dataTheme'] = undefined,
		className: $$Props['className'] = '',
		bordered: $$Props['bordered'] = undefined,
		borderOffset: $$Props['borderOffset'] = undefined,
		size: $$Props['size'] = undefined,
		value: $$Props['value'] = undefined,
		options: $$Props['options'],
		color: $$Props['color'] = undefined;

	export { className as class };
	$: classes = twMerge(
		'select',
		className,
		clsx({
			[`select-${size}`]: size,
			[`select-${color}`]: color,
			[`focus:outline-offset-0`]: !borderOffset,
			'select-bordered': bordered
		})
	);
</script>

<select
	bind:value
	on:change
	on:contextmenu
	on:input
	data-theme={dataTheme}
	class={classes}
	{...$$restProps}
>
	{#each options as option}
		<option selected={option.value === value} value={option.value}>{option.label}</option>
	{/each}
</select>
