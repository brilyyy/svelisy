<script lang="ts" context="module">
	export type TChatBubbleProps = HTMLAttributes<HTMLDivElement> &
		IComponentBaseProps & { end?: boolean };
</script>

<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { IComponentBaseProps } from '$lib/types';
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = TChatBubbleProps;

	export let className: $$Props['className'] = '';
	export let dataTheme: $$Props['dataTheme'] = undefined;
	export let end: $$Props['end'] = false;

	export { className as class };

	$: classes = twMerge('chat', `chat-${end ? 'end' : 'start'}`, className);
</script>

<div {...$$restProps} data-theme={dataTheme} class={classes}><slot /></div>
