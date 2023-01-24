<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import clsx from 'clsx';
	import type { TProps as $$TProps } from './Drawer.type';
	import { createEventDispatcher } from 'svelte';

	type $$Props = $$TProps

	export let dataTheme: $$Props['dataTheme'] = undefined,
		className: $$Props['className'] = '',
		open: $$Props['open'] = false,
		mobile: $$Props['mobile'] = undefined,
		end: $$Props['end'] = undefined,
		toggleClassName: $$Props['toggleClassName'] = undefined,
		contentClassName: $$Props['contentClassName'] = undefined,
		sideClassName: $$Props['sideClassName'] = undefined,
		overlayClassName: $$Props['overlayClassName'] = undefined;

	export { className as class };

	let dispatch = createEventDispatcher();

	$: classes = twMerge(
		'drawer',
		className,
		clsx({
			'drawer-mobile': mobile,
			'drawer-end': end
		})
	);

	$: contentClasses = clsx('drawer-content', contentClassName);
	$: toggleClasses = clsx('drawer-toggle', toggleClassName);
	$: sideClasses = clsx('drawer-side', sideClassName);
	$: overlayClasses = clsx('drawer-overlay', overlayClassName);
</script>

<div aria-expanded={open} {...$$restProps} data-theme={dataTheme} class={classes}>
	<input type="checkbox" class={toggleClasses} checked={open} readOnly />
	<div class={contentClasses}>
		<slot />
	</div>
	<div class={sideClasses}>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label
			class={overlayClasses}
			on:click={() => {
				dispatch('overlayclick');
			}}
		/>
		<slot name="side" />
	</div>
</div>
