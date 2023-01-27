<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import clsx from 'clsx';
	import type { TTitleProps as $$TProps } from './Footer.type';

	type $$Props = $$TProps;

	$: classes = twMerge('footer-title', $$props.class);
</script>

<span {...$$restProps} class={classes}>
	<slot />
</span>
