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
	import { createEventForwarder } from '$lib/utils';
	import { get_current_component } from 'svelte/internal';
	//
	type $$Props = TBtmNavProps;

	export let className: $$Props['className'] = '';
	export let dataTheme: $$Props['dataTheme'] = undefined;
	export let size: $$Props['size'] = undefined;
	export let element: $$Props['element'];
	export { className as class };
	//
	const forwardEvents = createEventForwarder(get_current_component());
	$: classes = twMerge(
		'btm-nav',
		clsx({
			[`btm-nav-${size}`]: size
		}),
		className
	);
</script>

<div use:forwardEvents bind:this={element} class={classes} data-theme={dataTheme} {...$$restProps}>
	<slot />
</div>
