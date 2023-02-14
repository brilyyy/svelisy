<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import clsx from 'clsx';
	import type { TProps as $$TProps } from './Link.type';
	import { createEventForwarder } from '$lib/utils';
	import { get_current_component } from 'svelte/internal';
	//
	interface $$Props extends $$TProps {
		href?: string;
	}

	export let dataTheme: $$Props['dataTheme'] = undefined,
		className: $$Props['className'] = '',
		color: $$Props['color'] = undefined,
		hover: $$Props['hover'] = true,
		href: $$Props['href'] = undefined;

	export { className as class };

	const forwardEvents = createEventForwarder(get_current_component());

	$: classes = twMerge(
		'link',
		className,
		clsx({
			[`link-${color}`]: color,
			'link-hover': hover
		})
	);
</script>

<a
	use:forwardEvents
	{href}
	rel="noopener noreferrer"
	{...$$restProps}
	data-theme={dataTheme}
	class={classes}
>
	<slot />
</a>
