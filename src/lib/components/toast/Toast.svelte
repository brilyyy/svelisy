<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import clsx from 'clsx';
	import type { TProps as $$TProps } from './Toast.type';
	import { horizontalOptions, verticalOptions } from './Toast.type';
	import { createEventForwarder } from '$lib/utils';
	import { get_current_component } from 'svelte/internal';
	//
	type $$Props = $$TProps

	export let dataTheme: $$Props['dataTheme'] = undefined,
		className: $$Props['className'] = '',
		horizontal: $$Props['horizontal'] = 'end',
		vertical: $$Props['vertical'] = 'bottom';
	export { className as class };

	$: classes = twMerge(
		'toast',
		horizontalOptions[horizontal!],
		verticalOptions[vertical!],
		className
	);

	const forwardEvents = createEventForwarder(get_current_component());
</script>

<div {...$$restProps} data-theme={dataTheme} class={classes}>
	<slot />
</div>
