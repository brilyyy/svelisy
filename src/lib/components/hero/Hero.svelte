<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { TProps as $$TProps } from './Hero.type';

	type $$Props = $$TProps

	export let dataTheme: $$Props['dataTheme'] = undefined,
		className: $$Props['className'] = '';

	export { className as class };

	$: classes = twMerge('hero', className);
</script>

<div role="banner" {...$$restProps} data-theme={dataTheme} class={classes}>
	<slot />
</div>
