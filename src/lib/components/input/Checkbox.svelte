<script context="module" lang="ts">
	export type TCheckboxProps = Omit<HTMLInputAttributes, 'size' | 'color'> &
		IComponentBaseProps & {
			bordered?: boolean;
			borderOffset?: boolean;
			size?: ComponentSize;
			color?: ComponentColor;
		} & {
			indeterminate?: boolean;
			value?: string | number;
			group?: (string | number)[];
			noStyle?: boolean;
		};
</script>

<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import clsx from 'clsx';
	import { onMount } from 'svelte';
	import type { HTMLInputAttributes } from 'svelte/elements';
	import type { ComponentColor, ComponentSize, IComponentBaseProps } from '$lib/types';
	//
	type $$Props = TCheckboxProps;

	export let dataTheme: $$Props['dataTheme'] = undefined,
		className: $$Props['className'] = '',
		size: $$Props['size'] = undefined,
		value: $$Props['value'] = '',
		indeterminate: $$Props['indeterminate'] = false,
		checked: $$Props['checked'] = undefined,
		group: $$Props['group'] = [],
		noStyle: $$Props['noStyle'] = false,
		color: $$Props['color'] = undefined;

	export { className as class };

	let inputElement: HTMLInputElement;

	// code from svelte flowbite
	// react on external group changes
	function init(_: HTMLElement, _group: (string | number)[]) {
		if (checked === undefined) checked = _group.includes(value!);
		onChange();

		return {
			update(_group: (string | number)[]) {
				checked = _group.includes(value!);
			}
		};
	}

	function onChange() {
		// There's a bug in Svelte and bind:group is not working with wrapped checkbox
		// This workaround is taken from:
		// https://svelte.dev/repl/de117399559f4e7e9e14e2fc9ab243cc?version=3.12.1
		const index = group!.indexOf(value!);

		if (checked === undefined) checked = index >= 0;

		if (checked) {
			if (index < 0) {
				group!.push(value!);
				group = group;
			}
		} else {
			if (index >= 0) {
				group!.splice(index, 1);
				group = group;
			}
		}
	}

	function watchIndeterminate(i: boolean) {
		if (inputElement) inputElement.indeterminate = !!indeterminate;
	}

	onMount(() => {
		watchIndeterminate(indeterminate!);
	});

	$: classes = twMerge(
		'checkbox',
		className,
		clsx({
			[`checkbox-${size}`]: size,
			[`checkbox-${color}`]: color
		})
	);

	$: checked = indeterminate || checked;
	$: watchIndeterminate(indeterminate!);
</script>

{#if !noStyle}
	<input
		use:init={group !== undefined ? group : []}
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
		on:change={onChange}
		{...$$restProps}
	/>
{:else}
	<input
		type="checkbox"
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
{/if}
