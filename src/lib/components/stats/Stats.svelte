<script lang="ts" context="module">
	export type TStatItemProps = HTMLAttributes<HTMLDivElement> &
		IComponentBaseProps & { horizontal?: boolean; vertical?: boolean };
</script>

<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { IComponentBaseProps } from '$lib/types';
	import { twMerge } from 'tailwind-merge';
	import clsx from 'clsx';

	type $$Props = TStatItemProps;

	export let className: $$Props['className'] = '';
	export let dataTheme: $$Props['dataTheme'] = undefined;
	export let horizontal: $$Props['horizontal'] = undefined;
	export let vertical: $$Props['vertical'] = undefined;

	export { className as class };

	$: classes = twMerge(
		'stats',
		className,
		clsx({
			'stats-horizontal': horizontal,
			'stats-vertical': vertical
		})
	);
</script>

<div {...$$restProps} data-theme={dataTheme} class={classes}>
	<slot />
</div>
