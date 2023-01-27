<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import clsx from 'clsx';
	import type { TProps as $$BadgeProps } from './Badge.type';

	type $$Props = $$BadgeProps;

	export let dataTheme: $$Props['dataTheme'] = undefined,
		className: $$Props['className'] = '',
		color: $$Props['color'] = undefined,
		size: $$Props['size'] = undefined,
		variant: $$Props['variant'] = undefined,
		responsive: $$Props['responsive'] = false;

	export { className as class };

	$: classes = twMerge(
		'badge',
		className,
		clsx({
			[`badge-${size}`]: size,
			[`badge-${variant}`]: variant,
			[`badge-${color}`]: color,
			'badge-xs md:badge-sm lg:badge-md xl:badge-lg': responsive
		})
	);
</script>

<div aria-label="Badge" {...$$restProps} data-theme={dataTheme} class={classes}>
	<slot />
</div>
