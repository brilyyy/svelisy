<script lang="ts" context="module">
	export type TMenuItemProps = HTMLLiAttributes &
		IComponentBaseProps & {
			disabled?: boolean;
		};
</script>

<script lang="ts">
	import type { HTMLLiAttributes } from 'svelte/elements';
	import type { IComponentBaseProps } from '$lib/types';
	import { twMerge } from 'tailwind-merge';
	import clsx from 'clsx';

	type $$Props = TMenuItemProps;

	export let className: $$Props['className'] = '';
	export let disabled: $$Props['disabled'] = undefined;

	export { className as class };

	$: classes = twMerge(
		className,
		clsx({
			disabled: disabled
		})
	);
</script>

<li role="menuitem" class={classes} {...$$restProps}>
	<slot />
</li>
