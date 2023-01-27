<script lang="ts" context="module">
	export type TTableRowProps = HTMLAttributes<HTMLTableRowElement> &
		IComponentBaseProps & {
			active?: boolean;
			hover?: boolean;
		};
</script>

<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { IComponentBaseProps } from '$lib/types';
	import { twMerge } from 'tailwind-merge';
	import clsx from 'clsx';

	type $$Props = TTableRowProps;

	export let className: $$Props['className'] = '';
	export let active: $$Props['active'] = undefined;
	export let hover: $$Props['hover'] = undefined;

	export { className as class };

	$: classes = twMerge(
		className,
		clsx({
			active: active,
			hover: hover
		})
	);
</script>

<tr {...$$restProps} class={classes}>
	<slot />
</tr>
