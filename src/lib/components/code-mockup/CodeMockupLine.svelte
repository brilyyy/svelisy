<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import clsx from 'clsx';
	import type { TLineProps as $$TProps } from './CodeMockup.type';
	type $$Props = $$TProps;

	export let className: $$Props['className'] = '',
		dataPrefix: $$Props['dataPrefix'] = undefined,
		status: $$Props['status'] = undefined;

	export { className as class };

	$: classes = twMerge(
		clsx({
			[`bg-${status}`]: status,
			[`text-${status}-content`]: status
		}),
		className
	);
</script>

<pre
	data-prefix={dataPrefix !== false && (dataPrefix || '>')}
	{...$$restProps}
	class={classes}><code><slot /></code></pre>
