<script lang="ts" context="module">
	export type TStatItemProps = HTMLAttributes<HTMLDivElement> & IComponentBaseProps;
</script>

<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { IComponentBaseProps } from '$lib/types';
	import { twMerge } from 'tailwind-merge';

	type $$Props = TStatItemProps;

	export let className: $$Props['className'] = '';
	export let dataTheme: $$Props['dataTheme'] = undefined;

	export { className as class };

	$: classes = twMerge('stat', className);
</script>

<div {...$$restProps} data-theme={dataTheme} class={classes}>
	<slot />
</div>
