<script lang="ts" context="module">
	export type TChatTimeProps = HTMLTimeAttributes & IComponentBaseProps;
</script>

<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { HTMLTimeAttributes } from 'svelte/elements';
	import type { IComponentBaseProps } from '$lib/types';

	type $$Props = TChatTimeProps;

	export let className: $$Props['className'] = '';

	export { className as class };

	$: classes = twMerge('text-xs opacity-50', className);
</script>

<time {...$$restProps} class={classes}>
	<slot />
</time>
