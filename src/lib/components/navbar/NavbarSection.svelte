<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import clsx from 'clsx';
	import type { TSectionProps as $$TProps } from './Navbar.type';
	//
	type $$Props = $$TProps;

	export let dataTheme: $$Props['dataTheme'] = undefined,
		className: $$Props['className'] = '',
		section: $$Props['section'];

	export { className as class };

	$: classes = twMerge(
		className,
		clsx({
			['flex-1']: section !== 'center',
			[`navbar-${section}`]: section
		})
	);
</script>

<div data-theme={dataTheme} class={classes} {...$$restProps}><slot /></div>
