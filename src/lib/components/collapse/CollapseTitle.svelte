<script lang="ts" context="module">
	export type TCollapseTitleProps = HTMLAttributes<HTMLDivElement> & IComponentBaseProps;
</script>

<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { IComponentBaseProps } from '$lib/types';
	import { twMerge } from 'tailwind-merge';

	type $$Props = TCollapseTitleProps;

	export let className: $$Props['className'] = '';

	export { className as class };

	$: classes = twMerge('collapse-title', className);
</script>

<div {...$$restProps} class={classes}>
	<slot />
</div>
