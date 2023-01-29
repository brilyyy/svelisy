<script lang="ts" context="module">
	export type TModalProps = HTMLAttributes<HTMLDivElement> &
		IComponentBaseProps & {
			open?: boolean;
			responsive?: boolean;
		};
</script>

<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { IComponentBaseProps } from '$lib/types';
	import { twMerge } from 'tailwind-merge';
	import clsx from 'clsx';
	import { portal } from 'svelte-portal';
	import { createEventDispatcher } from 'svelte';

	type $$Props = TModalProps;

	export let className: $$Props['className'] = '';
	export let dataTheme: $$Props['dataTheme'] = undefined;
	export let open: $$Props['open'] = undefined;
	export let responsive: $$Props['responsive'] = undefined;

	export { className as class };

	const dispatch = createEventDispatcher();

	$: containerClasses = twMerge(
		'modal',
		clsx({
			'modal-open': open,
			'modal-bottom sm:modal-middle': responsive
		})
	);

	$: bodyClasses = twMerge('modal-box', className);
</script>

<div
	use:portal={'body'}
	hidden
	aria-label="Modal"
	aria-hidden={!open}
	aria-modal={open}
	data-theme={dataTheme}
	class={containerClasses}
	on:click|stopPropagation={(e) => {
		if (e.target === e.currentTarget) {
			dispatch('click-backdrop');
		}
	}}
>
	<div {...$$restProps} data-theme={dataTheme} class={bodyClasses}>
		<slot />
	</div>
</div>
