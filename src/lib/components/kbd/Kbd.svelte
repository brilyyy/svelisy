<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import clsx from 'clsx';
	import type { TProps as $$TProps } from './Kbd.type';
	//
	type $$Props = $$TProps

	export let dataTheme: $$Props['dataTheme'] = undefined,
		className: $$Props['className'] = '',
		size: $$Props['size'] = undefined;

	export { className as class };

	$: classes = twMerge(
		'kbd',
		className,
		clsx({
			[`kbd-${size}`]: size
		})
	);
</script>

<kbd {...$$restProps} class={classes} data-theme={dataTheme}>
	<slot />
</kbd>
