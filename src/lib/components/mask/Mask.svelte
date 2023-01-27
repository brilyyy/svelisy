<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import clsx from 'clsx';
	import type { TProps as $$TProps } from './Mask.type';

	type $$Props = $$TProps;

	export let dataTheme: $$Props['dataTheme'] = undefined,
		className: $$Props['className'] = '',
		variant: $$Props['variant'] = undefined;

	export { className as class };

	$: classes = twMerge(
		'mask',
		className,
		clsx({
			[`mask-${variant}`]: variant
		})
	);
</script>

<!-- svelte-ignore a11y-img-redundant-alt -->
<!-- svelte-ignore a11y-missing-attribute -->
<img data-theme={dataTheme} class={classes} {...$$restProps} />
