<script lang="ts" context="module">
	export type TTableProps = HTMLTableAttributes &
		IComponentBaseProps & {
			compact?: boolean;
			zebra?: boolean;
		};
</script>

<script lang="ts">
	import type { HTMLTableAttributes } from 'svelte/elements';
	import type { IComponentBaseProps } from '$lib/types';
	import { twMerge } from 'tailwind-merge';
	import clsx from 'clsx';

	type $$Props = TTableProps;

	export let className: $$Props['className'] = '';
	export let dataTheme: $$Props['dataTheme'] = undefined;
	export let compact: $$Props['compact'] = undefined;
	export let zebra: $$Props['zebra'] = undefined;

	export { className as class };

	$: classes = twMerge(
		'table',
		className,
		clsx({
			'table-zebra': zebra,
			'table-compact': compact
		})
	);
</script>

<table {...$$restProps} data-theme={dataTheme} class={classes}>
	<slot />
</table>
