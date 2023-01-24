<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import clsx from 'clsx';
	import type { TTextAreaProps as $$TProps } from './Input.type';

	type $$Props = $$TProps

	export let dataTheme: $$Props['dataTheme'] = undefined,
		className: $$Props['className'] = '',
		bordered: $$Props['bordered'] = undefined,
		borderOffset: $$Props['borderOffset'] = undefined,
		value: $$Props['value'] = undefined,
		color: $$Props['color'] = undefined;

	export { className as class };

	$: classes = twMerge(
		'textarea',
		className,
		clsx({
			[`textarea-${color}`]: color,
			[`focus:outline-offset-0`]: !borderOffset,
			'textarea-bordered': bordered
		})
	);
</script>

<textarea
	bind:value
	on:blur
	on:change
	on:click
	on:contextmenu
	on:focus
	on:input
	on:keydown
	on:keypress
	on:keyup
	on:mouseenter
	on:mouseleave
	on:mouseover
	on:paste
	{...$$restProps}
	class={classes}
	data-theme={dataTheme}
/>
