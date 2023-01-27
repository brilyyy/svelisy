<script lang="ts" context="module">
	export type TDropdownToggleProps = Omit<HTMLLabelAttributes, 'color'> &
		IComponentBaseProps & {
			color?: ComponentColor;
			size?: ComponentSize;
			button?: boolean;
			disabled?: boolean;
		};
</script>

<script lang="ts">
	import type { HTMLLabelAttributes } from 'svelte/elements';
	import type { ComponentColor, ComponentSize, IComponentBaseProps } from '$lib/types';
	import Button from '../button/Button.svelte';

	type $$Props = TDropdownToggleProps;

	export let className: $$Props['className'] = '';
	export let dataTheme: $$Props['dataTheme'] = undefined;
	export let color: $$Props['color'] = undefined;
	export let size: $$Props['size'] = undefined;
	export let button: $$Props['button'] = true;
	export let disabled: $$Props['disabled'] = undefined;

	export { className as class };
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- svelte-ignore a11y-label-has-associated-control -->
<label class={className} tabindex="0" {...$$restProps}>
	{#if button}
		<Button type="button" {dataTheme} {color} {size} {disabled}>
			<slot />
		</Button>
	{:else}
		<slot />
	{/if}
</label>
