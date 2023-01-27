<script lang="ts" context="module">
	export type TMenuTitleProps = HTMLLiAttributes & IComponentBaseProps;
</script>

<script lang="ts">
	import type { HTMLLiAttributes } from 'svelte/elements';
	import type { IComponentBaseProps } from '$lib/types';
	import { twMerge } from 'tailwind-merge';

	type $$Props = TMenuTitleProps;

	export let className: $$Props['className'] = '';
	export let dataTheme: $$Props['dataTheme'] = undefined;

	export { className as class };

	$: classes = twMerge('menu-title', className);
</script>

<li class={classes} {...$$restProps}>
	<slot />
</li>
