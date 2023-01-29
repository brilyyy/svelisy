<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { TContentProps as $$TProps } from './Hero.type';

	type $$Props = $$TProps;

	export let dataTheme: $$Props['dataTheme'] = undefined,
		className: $$Props['className'] = '';

	export { className as class };

	$: classes = twMerge('hero-content', className);
</script>

<div {...$$restProps} data-theme={dataTheme} class={classes}>
	<slot />
</div>
