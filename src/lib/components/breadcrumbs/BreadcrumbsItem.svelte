<script lang="ts">
	import type { TItemProps as $$TItemProps } from './Breadcrumbs.type';

	type $$Props = $$TItemProps;

	export let href: $$Props['href'] = 'undefined';
</script>

<li role="link" {...$$restProps}>
	{#if href}
		<a {href}> <slot /> </a>
	{:else}
		<slot />
	{/if}
</li>
