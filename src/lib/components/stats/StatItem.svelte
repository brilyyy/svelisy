<script lang="ts" context="module">
	export type TStatItemProps = HTMLAttributes<HTMLDivElement> &
		IComponentBaseProps & {
			variant: 'title' | 'value' | 'desc' | 'figure';
		};
</script>

<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { IComponentBaseProps } from '$lib/types';
	import { twMerge } from 'tailwind-merge';
	import clsx from 'clsx';

	type $$Props = TStatItemProps;

	export let className: $$Props['className'] = '';
	export let variant: $$Props['variant'];

	export { className as class };

	$: classes = twMerge(
		className,
		clsx({
			[`stat-${variant}`]: variant
		})
	);
</script>

<div {...$$restProps} class={classes}>
	<slot />
</div>
