<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import clsx from 'clsx';
	import type { TProps as $$TProps } from './PhoneMockup.type';
	//
	type $$Props = $$TProps

	export let dataTheme: $$Props['dataTheme'] = undefined,
		className: $$Props['className'] = '',
		innerClassName: $$Props['innerClassName'] = undefined,
		color: $$Props['color'] = undefined;

	export { className as class };

	$: classes = twMerge(
		'mockup-phone',
		clsx({
			[`border-${color}`]: color
		}),
		className
	);

	$: innerClasses = twMerge('artboard artboard-demo phone-1', innerClassName);
</script>

<div aria-label="Phone mockup" {...$$restProps} data-theme={dataTheme} class={classes}>
	<div class="camera" />
	<div class="display">
		<div class={innerClasses}>
			<slot />
		</div>
	</div>
</div>
