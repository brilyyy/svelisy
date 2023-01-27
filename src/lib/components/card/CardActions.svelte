<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { TBodyProps as $$BadgeProps } from './Card.type';

	type $$Props = $$BadgeProps;

	export let className: $$Props['className'] = '';

	export { className as class };

	$: classes = twMerge('card-actions', className);
</script>

<div class={classes} {...$$restProps}>
	<slot />
</div>
