<script lang="ts" context="module">
	export type TChatMessageProps = HTMLAttributes<HTMLDivElement> &
		IComponentBaseProps & {
			color?: ComponentColor;
		};
</script>

<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { ComponentColor, IComponentBaseProps } from '$lib/types';
	import type { HTMLAttributes } from 'svelte/elements';
	import clsx from 'clsx';

	type $$Props = TChatMessageProps;

	export let className: $$Props['className'] = '';
	export let color: $$Props['color'] = undefined;

	export { className as class };

	$: classes = twMerge(
		'chat-bubble',
		clsx({
			[`chat-bubble-${color}`]: color
		}),
		className
	);
</script>

<div {...$$restProps} class={classes}><slot /></div>
