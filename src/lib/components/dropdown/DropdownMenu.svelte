<script lang="ts" context="module">
	export type TDropdownMenuProps = HTMLAttributes<HTMLUListElement> & IComponentBaseProps;
</script>

<script lang="ts">
	import type { HTMLAttributes, HTMLLiAttributes } from 'svelte/elements';
	import type { IComponentBaseProps } from '$lib/types';
	import { twMerge } from 'tailwind-merge';

	type $$Props = TDropdownMenuProps;

	export let className: $$Props['className'] = '';
	export let dataTheme: $$Props['dataTheme'] = undefined;

	export { className as class };

	$: classes = twMerge('dropdown-content menu p-2 shadow bg-base-100 rounded-box', className);
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<ul tabindex="0" class={classes} data-theme={dataTheme} {...$$restProps}>
	<slot />
</ul>
