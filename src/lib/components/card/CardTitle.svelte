<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { TTitleProps as $$BadgeProps } from './Card.type';

	type $$Props = $$BadgeProps;

	export let className: $$Props['className'] = '',
		tag: $$Props['tag'] = 'div';

	export { className as class };

	$: classes = twMerge('card-title', className);
</script>

<svelte:element this={tag} aria-label="Card" {...$$restProps} class={classes}>
	<slot />
</svelte:element>
