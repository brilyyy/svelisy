<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { TProps as $$TProps } from './Breadcrumbs.type';

	type $$Props = $$TProps;

	export let dataTheme: $$Props['dataTheme'] = undefined,
		className: $$Props['className'] = '';
	export let element: $$Props['element'];

	export { className as class };

	$: classes = twMerge('breadcrumbs', 'text-sm', className);
</script>

<div
	bind:this={element}
	role="navigation"
	aria-label="Breadcrumbs"
	{...$$restProps}
	data-theme={dataTheme}
	class={classes}
>
	<ul>
		<slot />
	</ul>
</div>
