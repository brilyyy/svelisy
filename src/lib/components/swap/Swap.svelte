<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import clsx from 'clsx';
	import type { TProps as $$TProps } from './Swap.type';
	//
	type $$Props = $$TProps

	export let dataTheme: $$Props['dataTheme'] = undefined,
		className: $$Props['className'] = '',
		active: $$Props['active'] = undefined,
		rotate: $$Props['rotate'] = undefined,
		flip: $$Props['flip'] = undefined;

	export { className as class };

	$: classes = twMerge(
		'swap',
		className,
		clsx({
			'swap-active': active,
			'swap-rotate': rotate,
			'swap-flip': flip
		})
	);
</script>

<label {...$$restProps} data-theme={dataTheme} class={classes}>
	<input type="checkbox" />
	<div class="swap-on"><slot name="swap-on" /></div>
	<div class="swap-off"><slot name="swap-off" /></div>
</label>
