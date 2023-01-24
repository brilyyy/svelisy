<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import clsx from 'clsx';
	import type { TProps as $$AlertProps } from './Alert.type';

	type $$Props = $$AlertProps

	export let status: $$Props['status'] = undefined,
		dataTheme: $$Props['dataTheme'] = undefined,
		innerClassName: $$Props['innerClassName'] = undefined,
		className: $$Props['className'] = '';

	export { className as class };

	$: classes = twMerge(
		'alert',
		className,
		clsx({
			[`alert-${status}`]: status
		})
	);

	$: innerClasses = twMerge('flex-1', innerClassName);
</script>

<div role="alert" {...$$restProps} data-theme={dataTheme} class={classes}>
	<div class={innerClasses}>
		<slot name="icon" />
		<slot />
	</div>
</div>
