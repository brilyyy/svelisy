<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import clsx from 'clsx';
	import type { TProps as $$TProps } from './Indicator.type';
	//
	type $$Props = $$TProps;

	export let dataTheme: $$Props['dataTheme'] = undefined,
		className: $$Props['className'] = '',
		horizontal: $$Props['horizontal'] = 'end',
		vertical: $$Props['vertical'] = 'top';

	export { className as class };

	$: classes = twMerge(
		'indicator-item',
		className,
		clsx({
			[`indicator-${horizontal}`]: horizontal,
			[`indicator-${vertical}`]: vertical
		})
	);
</script>

<div data-theme={dataTheme} class="indicator">
	<div aria-label="Indicator" {...$$restProps} class={classes}>
		<slot name="item" />
	</div>

	<slot />
</div>
