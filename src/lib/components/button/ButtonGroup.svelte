<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import clsx from 'clsx';
	import type { TGroupProps as $$TGroupProps } from './Button.type';

	type $$Props = $$TGroupProps;

	export let dataTheme: $$Props['dataTheme'] = undefined,
		className: $$Props['className'] = '',
		vertical: $$Props['vertical'] = undefined;
	export let element: $$Props['element'];
	export { className as class };

	$: classes = twMerge(
		'btn-group',
		className,
		clsx({
			'btn-group-vertical': vertical
		})
	);
</script>

<div
	bind:this={element}
	aria-label={`Group of buttons`}
	{...$$restProps}
	data-theme={dataTheme}
	class={classes}
>
	<slot />
</div>
