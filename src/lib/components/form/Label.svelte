<script lang="ts" context="module">
	import type { IComponentBaseProps } from '$lib/types';
	import type { HTMLLabelAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	export type TLabelProps = HTMLLabelAttributes &
		IComponentBaseProps & {
			title?: string;
		};
</script>

<script lang="ts">
	type $$Props = TLabelProps;
	export let className: $$Props['className'] = undefined;
	export let title: $$Props['title'] = undefined;

	export { className as class };

	$: classes = twMerge('label', className);
</script>

<label {...$$restProps} class={classes}>
	<span class="label-text cursor-pointer">{title}</span>
	<slot />
</label>
