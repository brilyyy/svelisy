<script lang="ts" context="module">
	export type TArtboardProps = HTMLAttributes<HTMLDivElement> &
		IComponentBaseProps<HTMLDivElement> & {
			size?: 1 | 2 | 3 | 4 | 5 | 6;
			horizontal?: boolean;
		};
</script>

<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import clsx from 'clsx';
	import type { IComponentBaseProps } from '$lib/types';
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = TArtboardProps;

	export let dataTheme: $$Props['dataTheme'] = undefined,
		className: $$Props['className'] = '',
		size: $$Props['size'] = undefined,
		horizontal: $$Props['horizontal'] = undefined;
	export let element: $$Props['element'];

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

<div
	bind:this={element}
	aria-label="Artboard"
	{...$$restProps}
	data-theme={dataTheme}
	class={classes}
>
	<slot />
</div>
