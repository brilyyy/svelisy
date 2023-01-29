<script lang="ts" context="module">
	export type TCollapseContentProps = HTMLAttributes<HTMLDivElement> & IComponentBaseProps;
</script>

<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { IComponentBaseProps } from '$lib/types';
	import { twMerge } from 'tailwind-merge';

	type $$Props = TCollapseContentProps;

	export let className: $$Props['className'] = '';

	export { className as class };

	$: classes = twMerge('collapse-content', className);
</script>

<div {...$$restProps} class={classes}>
	<slot />
</div>
