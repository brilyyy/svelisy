<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import clsx from 'clsx';
	import type { TProps as $$TProps } from './Breadcrumbs.type';

	type $$Props = $$TProps;

	export let dataTheme: $$Props['dataTheme'] = undefined,
		className: $$Props['className'] = '';

	export { className as class };

	$: classes = twMerge('breadcrumbs', 'text-sm', className);
</script>

<div
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
