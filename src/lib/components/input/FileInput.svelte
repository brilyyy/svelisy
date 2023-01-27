<script lang="ts" context="module">
	export type TFileInputProps = Omit<HTMLInputAttributes, 'size' | 'color'> &
		IComponentBaseProps & {
			bordered?: boolean;
			borderOffset?: boolean;
			size?: ComponentSize;
			color?: ComponentColor;
		} & {
			files?: FileList;
		};
</script>

<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import clsx from 'clsx';
	import type { HTMLInputAttributes } from 'svelte/elements';
	import type { ComponentColor, ComponentSize, IComponentBaseProps } from '$lib/types';
	//
	type $$Props = TFileInputProps;

	export let dataTheme: $$Props['dataTheme'] = undefined,
		className: $$Props['className'] = '',
		bordered: $$Props['bordered'] = undefined,
		size: $$Props['size'] = undefined,
		value: $$Props['value'] = undefined,
		color: $$Props['color'] = undefined;

	export let files: FileList | undefined = undefined;

	export { className as class };

	$: classes = twMerge(
		'file-input',
		className,
		clsx({
			[`file-input-${size}`]: size,
			[`file-input-${color}`]: color,
			'file-input-bordered': bordered
		})
	);
</script>

<input
	{...$$restProps}
	bind:value
	bind:files
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
	type="file"
	data-theme={dataTheme}
	placeholder={$$props.placeholder}
	class={classes}
/>
