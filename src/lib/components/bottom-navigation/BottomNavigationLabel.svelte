<script lang="ts" context="module">
	export type TBottomNavigationLabel = HTMLAttributes<HTMLSpanElement> & IComponentBaseProps;
</script>

<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { IComponentBaseProps } from '$lib/types';
	import { twMerge } from 'tailwind-merge';

	type $$Props = TBottomNavigationLabel;

	export let className: $$Props['className'] = '';

	export { className as class };

	$: classes = twMerge('btm-nav-label', className);
</script>

<span class={classes} {...$$restProps}>
	<slot />
</span>
