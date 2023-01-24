<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import clsx from 'clsx';
	import type { TProps as $$TProps } from './WindowMockup.type';
	type $$Props = $$TProps;

	export let dataTheme: $$Props['dataTheme'] = undefined,
		className: $$Props['className'] = '',
		frameColor: $$Props['frameColor'] = undefined,
		backgroundColor: $$Props['backgroundColor'] = undefined,
		border: $$Props['border'] = undefined,
		borderColor: $$Props['borderColor'] = undefined;

	export { className as class };

	$: borderColorValue = borderColor ? borderColor : frameColor || 'base-300';

	$: classes = twMerge(
		'mockup-window',
		border && `border border-${borderColorValue}`,
		clsx({
			[`border-${borderColorValue}`]: borderColorValue,
			[`bg-${frameColor}`]: frameColor
		}),
		className
	);

	$: innerClasses = clsx(
		backgroundColor && `bg-${backgroundColor}`,
		border && `border-t border-${borderColorValue}`,
		'p-4'
	);
</script>

<div aria-label="Window mockup" {...$$restProps} data-theme={dataTheme} class={classes}>
	<div class={innerClasses}>
		<slot />
	</div>
</div>
