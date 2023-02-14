<script lang="ts">
	import type { IComponentBaseProps } from '$lib/types';
	import type { TItemProps as $$TItemProps } from './Breadcrumbs.type';

	interface $$Props extends $$TItemProps, IComponentBaseProps {}

	export let href: $$Props['href'] = 'undefined';
	export let element: $$Props['element'] = undefined;
</script>

<li role="link" {...$$restProps} bind:this={element}>
	{#if href}
		<a {href}> <slot /> </a>
	{:else}
		<slot />
	{/if}
</li>
