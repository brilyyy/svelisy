<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import clsx from 'clsx';
	import type { TProps as $$TProps } from './Steps.type';
	//
	type $$Props = $$TProps;

	export let dataTheme: $$Props['dataTheme'] = undefined,
		className: $$Props['className'] = '',
		vertical: $$Props['vertical'] = undefined,
		horizontal: $$Props['horizontal'] = undefined;

	export { className as class };

	$: classes = twMerge(
		'steps',
		className,
		clsx({
			['steps-vertical']: vertical,
			['steps-horizontal']: horizontal
		})
	);
</script>

<ul aria-label="Steps" role="group" {...$$restProps} data-theme={dataTheme} class={classes}>
	<slot />
</ul>
