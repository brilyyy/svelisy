<script lang="ts" context="module">
	import { twMerge } from 'tailwind-merge';
	import clsx from 'clsx';
	import type { InputType, TInputProps as $$TProps } from './Input.type';
	const isNumeric = (n: any): n is number => !isNaN(parseFloat(n)) && isFinite(n);
</script>

<script lang="ts">
	//
	interface $$Props extends $$TProps {
		type?: InputType;
		group?: number | string;
		value?: number;
	}

	export let dataTheme: $$Props['dataTheme'] = undefined,
		className: $$Props['className'] = '',
		size: $$Props['size'] = undefined,
		value: $$Props['value'] = undefined,
		step: $$Props['step'] = undefined,
		color: $$Props['color'] = undefined;

	export { className as class };

	$: classes = twMerge(
		'range',
		className,
		clsx({
			[`range-${size}`]: size,
			[`range-${color}`]: color
		})
	);

	$: numSteps = () => {
		const safeStep = Math.max(1, Number(step));
		const steps = Math.ceil(100 / safeStep) ?? 1;
		return [...Array(steps + 1)];
	};
</script>

<input
	{...$$restProps}
	type="range"
	bind:value
	on:change
	on:click
	on:keydown
	on:keypress
	on:keyup
	{step}
	data-theme={dataTheme}
	placeholder={$$props.placeholder}
	class={classes}
/>
{#if isNumeric(step)}
	<div class="w-full flex justify-between text-xs px-2">
		{#each numSteps() as _}
			<span>|</span>
		{/each}
	</div>
{/if}
