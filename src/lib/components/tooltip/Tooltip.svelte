<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import clsx from 'clsx';
	import type { TProps as $$TProps } from './Tooltip.type';
	//
	type $$Props = $$TProps;

	export let dataTheme: $$Props['dataTheme'] = undefined,
		className: $$Props['className'] = '',
		open: $$Props['open'] = false,
		color: $$Props['color'] = undefined,
		position: $$Props['position'] = undefined;
	export let message: $$Props['message'];
	export { className as class };

	$: classes = twMerge(
		'tooltip',
		className,
		clsx({
			'tooltip-open': open,
			[`tooltip-${color}`]: color,
			'tooltip-top': position === 'top',
			'tooltip-bottom': position === 'bottom',
			'tooltip-left': position === 'left',
			'tooltip-right': position === 'right'
		})
	);
</script>

<div
	role="tooltip"
	on:pointerenter={() => (open = true)}
	on:pointerleave={() => (open = false)}
	{...$$restProps}
	data-theme={dataTheme}
	data-tip={message}
	class={classes}
>
	<slot />
</div>
