<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { TProps as $$TProps } from './Toast.type';
	import { horizontalOptions, verticalOptions } from './Toast.type';
	//
	type $$Props = $$TProps;

	export let dataTheme: $$Props['dataTheme'] = undefined,
		className: $$Props['className'] = '',
		horizontal: $$Props['horizontal'] = 'end',
		vertical: $$Props['vertical'] = 'bottom';
	export { className as class };

	$: classes = twMerge(
		'toast',
		horizontalOptions[horizontal!],
		verticalOptions[vertical!],
		className
	);
</script>

<div {...$$restProps} data-theme={dataTheme} class={classes}>
	<slot />
</div>
