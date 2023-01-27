<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import clsx from 'clsx';
	import type { TProps as $$TProps } from './Divider.type';

	type $$Props = $$TProps;

	export let dataTheme: $$Props['dataTheme'] = undefined,
		className: $$Props['className'] = '',
		horizontal: $$Props['horizontal'] = false;

	export { className as class };

	$: classes = twMerge(
		'divider',
		className,
		clsx({
			'divider-horizontal': horizontal
		})
	);
</script>

<div role="separator" {...$$restProps} data-theme={dataTheme} class={classes}>
	<slot />
</div>
