<script lang="ts" context="module">
	export type TChatHeaderProps = HTMLAttributes<HTMLDivElement> & IComponentBaseProps;
</script>

<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { IComponentBaseProps } from '$lib/types';
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = TChatHeaderProps;

	export let className: $$Props['className'] = '';

	export { className as class };

	$: classes = twMerge('chat-header', className);
</script>

<div {...$$restProps} class={classes}><slot /></div>
