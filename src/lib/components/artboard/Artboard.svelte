<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import clsx from 'clsx';
	import type { TProps as $$ArtboardProps } from './Artboard.type';

	type $$Props = $$ArtboardProps

	export let dataTheme: $$Props['dataTheme'] = undefined,
		className: $$Props['className'] = '',
		size: $$Props['size'] = undefined,
		horizontal: $$Props['horizontal'] = undefined;

	export { className as class };

	$: classes = twMerge(
		'artboard',
		'artboard-demo',
		className,
		clsx({
			[`phone-${size}`]: size,
			horizontal: horizontal
		})
	);
</script>

<div aria-label="Artboard" {...$$restProps} data-theme={dataTheme} class={classes}>
	<slot />
</div>
