<script lang="ts" context="module">
	export type TDropdownProps = HTMLAttributes<HTMLDivElement> &
		IComponentBaseProps & {
			horizontal?: 'left' | 'center' | 'right';
			vertical?: 'top' | 'middle' | 'end';
			hover?: boolean;
			open?: boolean;
		};
</script>

<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { IComponentBaseProps } from '$lib/types';
	import { twMerge } from 'tailwind-merge';
	import clsx from 'clsx';

	type $$Props = TDropdownProps;

	export let className: $$Props['className'] = '';
	export let dataTheme: $$Props['dataTheme'] = undefined;
	export let horizontal: $$Props['horizontal'] = undefined;
	export let vertical: $$Props['vertical'] = undefined;
	export let hover: $$Props['hover'] = undefined;
	export let open: $$Props['open'] = undefined;

	export { className as class };

	$: classes = twMerge(
		'dropdown',
		className,
		clsx({
			[`dropdown-${horizontal}`]: horizontal,
			[`dropdown-${vertical}`]: vertical,
			'dropdown-hover': hover,
			'dropdown-open': open
		})
	);
</script>

<div role="listbox" class={classes} data-theme={dataTheme} {...$$restProps}>
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<label tabindex="0"><slot /></label>
	<slot name="content" />
</div>
