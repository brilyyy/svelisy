<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import clsx from 'clsx';
	import type { TProps as $$TProps } from './CodeMockup.type';
	type $$Props = $$TProps;

	export let dataTheme: $$Props['dataTheme'] = undefined,
		className: $$Props['className'] = '';

	export { className as class };

	$: classes = twMerge('mockup-code', className);
</script>

<div aria-label="Code mockup" {...$$restProps} class={classes} data-theme={dataTheme}>
	<slot />
</div>
