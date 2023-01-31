<script lang="ts" context="module">
	export type TBtmNavProps = HTMLAttributes<HTMLDivElement> &
		IComponentBaseProps<HTMLDivElement> & {
			size?: ComponentSize;
		};
</script>

<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { ComponentSize, IComponentBaseProps } from '$lib/types';
	import { twMerge } from 'tailwind-merge';
	import clsx from 'clsx';
	//
	type $$Props = TBtmNavProps;

	export let className: $$Props['className'] = '';
	export let dataTheme: $$Props['dataTheme'] = undefined;
	export let size: $$Props['size'] = undefined;
	export let element: $$Props['element'];
	export { className as class };

	$: classes = twMerge(
		'btm-nav',
		clsx({
			[`btm-nav-${size}`]: size
		}),
		className
	);
</script>

<div bind:this={element} class={classes} data-theme={dataTheme} {...$$restProps}>
	<slot />
</div>
