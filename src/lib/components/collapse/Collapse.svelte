<script lang="ts" context="module">
	export type TCollapseProps = HTMLAttributes<HTMLDivElement> &
		IComponentBaseProps & {
			checkbox?: boolean;
			icon?: 'arrow' | 'boolean';
			open?: boolean;
		};
</script>

<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { IComponentBaseProps } from '$lib/types';
	import { twMerge } from 'tailwind-merge';
	import clsx from 'clsx';
	import { createEventDispatcher } from 'svelte';

	type $$Props = TCollapseProps;

	export let className: $$Props['className'] = '';
	export let dataTheme: $$Props['dataTheme'] = undefined;
	export let checkbox: $$Props['checkbox'] = undefined;
	export let open: $$Props['open'] = undefined;
	export let icon: $$Props['icon'] = undefined;

	export { className as class };

	const dispatch = createEventDispatcher();
	let divEl: HTMLDivElement;
	let checkboxEl: HTMLInputElement;

	function handleBlur(e: FocusEvent) {
		if (!checkbox) {
			dispatch('toggle');
			dispatch('close');
		}
		dispatch('blur', e);
	}
	function handleFocus(e: FocusEvent) {
		if (!checkbox) {
			dispatch('toggle');
			dispatch('close');
		}
		dispatch('focus', e);
	}
	function handleCheckboxChange() {
		dispatch('toggle');
		if (checkboxEl.checked) {
			dispatch('open');
		} else if (!checkboxEl.checked) {
			dispatch('close');
		}

		_isChecked = checkboxEl.checked;
	}

	$: _isChecked = open;

	$: classes = twMerge(
		'collapse',
		className,
		clsx({
			[`collapse-${icon}`]: icon,
			'collapse-open': open === true,
			'collapse-close': open === false
		})
	);
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div
	bind:this={divEl}
	{...$$restProps}
	aria-expanded={open}
	tabindex={_isChecked === true ? undefined : 0}
	class={classes}
	data-theme={dataTheme}
	on:blur={handleBlur}
	on:focus={handleFocus}
>
	{#if checkbox}
		<input
			bind:this={checkboxEl}
			type="checkbox"
			tabindex={_isChecked === true ? 0 : undefined}
			class="peer"
			on:change={handleCheckboxChange}
		/>
	{/if}
	<slot />
</div>
