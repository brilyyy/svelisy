<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import clsx from 'clsx';
	import type { TStepProps as $$TProps } from './Steps.type';
	//
	type $$Props = $$TProps

	export let dataTheme: $$Props['dataTheme'] = undefined,
		className: $$Props['className'] = '',
		color: $$Props['color'] = undefined,
		value: $$Props['value'] = undefined;

	export { className as class };

	$: classes = twMerge(
		'step',
		className,
		clsx({
			[`step-${color}`]: color
		})
	);
</script>

<li aria-label="Step" {...$$restProps} data-theme={dataTheme} data-content={value} class={classes}>
	<slot />
</li>
