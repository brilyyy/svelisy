<script lang="ts" context="module">
	import type { IComponentBaseProps } from '$lib/types';
	import { createEventForwarder } from '$lib/utils';
	import type { HTMLFormAttributes } from 'svelte/elements';
	import { get_current_component } from 'svelte/internal';
	import { twMerge } from 'tailwind-merge';

	export type TFormProps = HTMLFormAttributes & IComponentBaseProps;
</script>

<script lang="ts">
	type $$Props = TFormProps;
	export let dataTheme: $$Props['dataTheme'] = undefined;
	export let className: $$Props['className'] = undefined;

	export { className as class };

	const forwardEvents = createEventForwarder(get_current_component());

	$: classes = twMerge('form-control', className);
</script>

<form use:forwardEvents {...$$restProps} data-theme={dataTheme} class={classes}>
	<slot />
</form>
