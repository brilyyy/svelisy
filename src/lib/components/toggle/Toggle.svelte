<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import clsx from 'clsx';
	import type { TInputProps as $$TProps } from './Toggle.type';
	import { onMount } from 'svelte';
	//
	interface $$Props extends $$TProps {
		value?: string | number;
		indeterminate?: boolean;
	}

	export let dataTheme: $$Props['dataTheme'] = undefined,
		className: $$Props['className'] = '',
		size: $$Props['size'] = undefined,
		value: $$Props['value'] = '',
		indeterminate: $$Props['indeterminate'] = false,
		checked: $$Props['checked'] = undefined,
		color: $$Props['color'] = undefined;

	let inputElement: HTMLInputElement;

	export { className as class };

	function watchIndeterminate(i: boolean) {
		if (inputElement) inputElement.indeterminate = !!indeterminate;
	}

	onMount(() => {
		watchIndeterminate(indeterminate!);
	});

	$: classes = twMerge(
		'toggle',
		className,
		clsx({
			[`toggle-${size}`]: size,
			[`toggle-${color}`]: color
		})
	);
	$: checked = indeterminate || checked;
	$: watchIndeterminate(indeterminate!);
</script>

<input
	bind:this={inputElement}
	type="checkbox"
	data-theme={dataTheme}
	class={classes}
	bind:checked
	{value}
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
	{...$$restProps}
/>
