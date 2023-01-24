<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import clsx from 'clsx';
	import type { TProps as $$TProps } from './Footer.type';

	type $$Props = $$TProps

	export let dataTheme: $$Props['dataTheme'] = undefined,
		className: $$Props['className'] = '',
		center: $$Props['center'] = undefined;

	export { className as class };

	$: classes = twMerge(
		'footer',
		className,
		clsx({
			'footer-center': center
		})
	);
</script>

<div role="contentinfo" {...$$restProps} data-theme={dataTheme} class={classes}>
	<slot />
</div>
