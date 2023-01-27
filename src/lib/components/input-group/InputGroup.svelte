<script lang="ts" context="module">
	export type TInputGroupProps = HTMLLabelAttributes &
		IComponentBaseProps & {
			size?: ComponentSize;
			vertical?: boolean;
		};
</script>

<script lang="ts">
	import type { HTMLLabelAttributes, HTMLTableAttributes } from 'svelte/elements';
	import type { ComponentSize, IComponentBaseProps } from '$lib/types';
	import { twMerge } from 'tailwind-merge';
	import clsx from 'clsx';

	type $$Props = TInputGroupProps;

	export let className: $$Props['className'] = '';
	export let dataTheme: $$Props['dataTheme'] = undefined;
	export let size: $$Props['size'] = undefined;
	export let vertical: $$Props['vertical'] = undefined;

	export { className as class };

	$: classes = twMerge(
		'input-group',
		className,
		clsx({
			[`input-group-${size}`]: size,
			'input-group-vertical': vertical
		})
	);
</script>

<label {...$$restProps} data-theme={dataTheme} class={classes}> <slot /></label>
