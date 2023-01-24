<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import clsx from 'clsx';
	import type { TProps as $$TProps } from './RadialProgress.type';
	//
	type $$Props = $$TProps

	export let dataTheme: $$Props['dataTheme'] = undefined,
		className: $$Props['className'] = '',
		color: $$Props['color'] = undefined,
		size: $$Props['size'] = '4rem',
		thickness: $$Props['thickness'] = '4px';

	export let value: $$Props['value'];

	export { className as class };

	$: classes = twMerge(
		'radial-progress',
		className,
		clsx({
			[`text-${color}`]: color
		})
	);

	$: displayedValue = Math.min(100, Math.max(0, value));

	$: progressStyle = `
	--value:${displayedValue};
	--size:${size};
	--thickness:${thickness};
	`;
</script>

<div
	role="progressbar"
	aria-valuenow={displayedValue}
	aria-valuemin={0}
	aria-valuemax={100}
	{...$$restProps}
	data-theme={dataTheme}
	class={classes}
	style={progressStyle}
>
	<slot />
</div>
