<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { TProps as $$TProps } from './Navbar.type';
	//
	type $$Props = $$TProps;

	export let dataTheme: $$Props['dataTheme'] = undefined,
		className: $$Props['className'] = '';

	export { className as class };

	$: classes = twMerge('navbar', className);
</script>

<div role="navigation" aria-label="Navbar" {...$$restProps} data-theme={dataTheme} class={classes}>
	<slot />
</div>
