<script lang="ts" context="module">
	import type { IComponentBaseProps } from '$lib/types';

	export type TDropdownItemProps = HTMLAnchorAttributes & IComponentBaseProps;
</script>

<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	type $$Props = TDropdownItemProps;

	export let className: $$Props['className'] = '';

	export { className as class };
</script>

<li class={className}>
	<!-- svelte-ignore a11y-missing-attribute -->
	<a {...$$restProps}>
		<slot />
	</a>
</li>
