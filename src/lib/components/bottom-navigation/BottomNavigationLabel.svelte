<script lang="ts" context="module">
	export type TBottomNavigationLabel = HTMLAttributes<HTMLSpanElement> &
		IComponentBaseProps<HTMLSpanElement>;
</script>

<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { IComponentBaseProps } from '$lib/types';
	import { twMerge } from 'tailwind-merge';

	type $$Props = TBottomNavigationLabel;

	export let className: $$Props['className'] = '';
	export let element: $$Props['element'];

	export { className as class };

	$: classes = twMerge('btm-nav-label', className);
</script>

<span bind:this={element} class={classes} {...$$restProps}>
	<slot />
</span>
