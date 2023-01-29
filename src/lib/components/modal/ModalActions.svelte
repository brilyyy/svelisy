<script lang="ts" context="module">
	import type { IComponentBaseProps } from '$lib/types';

	export type TModalActionProps = HTMLAttributes<HTMLDivElement> & IComponentBaseProps;
</script>

<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type $$Props = TModalActionProps;

	export let className: $$Props['className'] = '';

	export { className as class };

	$: classes = twMerge('modal-action', className);
</script>

<div {...$$restProps} class={classes}>
	<slot />
</div>
