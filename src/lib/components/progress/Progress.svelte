<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import clsx from 'clsx';
	import type { TProps as $$TProps } from './Progress.type';
	//
	type $$Props = $$TProps

	export let dataTheme: $$Props['dataTheme'] = undefined,
		className: $$Props['className'] = '',
		color: $$Props['color'] = undefined;

	export { className as class };

	$: classes = twMerge(
		'progress',
		className,
		clsx({
			[`progress-${color}`]: color
		})
	);
</script>

<progress {...$$restProps} data-theme={dataTheme} class={classes} />
