<script lang="ts" context="module">
	export type TAlertProps = Omit<HTMLAttributes<HTMLDivElement>, 'color'> &
		IComponentBaseProps<HTMLDivElement> & {
			status?: ComponentStatus;
			innerClassName?: string;
		};
</script>

<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import clsx from 'clsx';

	import type { IComponentBaseProps, ComponentStatus } from '$lib/types';
	import type { HTMLAttributes } from 'svelte/elements';
	//
	type $$Props = TAlertProps;

	export let status: $$Props['status'] = undefined,
		dataTheme: $$Props['dataTheme'] = undefined,
		innerClassName: $$Props['innerClassName'] = undefined,
		className: $$Props['className'] = '';

	export let element: $$Props['element'];

	export { className as class };

	$: classes = twMerge(
		'alert',
		className,
		clsx({
			[`alert-${status}`]: status
		})
	);

	$: innerClasses = twMerge('flex-1', innerClassName);
</script>

<div bind:this={element} role="alert" {...$$restProps} data-theme={dataTheme} class={classes}>
	<div class={innerClasses}>
		<slot name="icon" />
		<slot />
	</div>
</div>
