<script lang="ts" context="module">
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import { TABS_CONTEXT, type TTabContext } from './Tabs.svelte';

	export type TTabProps = HTMLAnchorAttributes & {
		eventKey: string;
		active?: boolean;
	};
</script>

<script lang="ts">
	import clsx from 'clsx';
	import { twMerge } from 'tailwind-merge';
	import { getContext, onMount } from 'svelte';

	type $$Props = TTabProps;
	let element: Element;

	export let eventKey: $$Props['eventKey'];
	export let active: $$Props['active'] = undefined;

	const state: TTabContext = getContext<TTabContext>(TABS_CONTEXT);

	onMount(() => calculateActive());

	function calculateActive() {
		if (!element) return;
		const children = element.parentNode?.children;
		const index = Array.prototype.indexOf.call(children, element);
		_active = active !== undefined ? active : $state.active === index;
	}
	$: _active = active;
	$: $state, calculateActive();

	$: classes = twMerge(
		'svelisy-tab',
		'tab',
		$$props.class,
		clsx({
			'tab-active': _active,
			[`tab-${$state.size}`]: $state.size,
			[`tab-${$state.variant}`]: $state.variant
		})
	);
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<a bind:this={element} role="tab" {...$$restProps} class={classes} data-svelisy-tab-key={eventKey}>
	<slot />
</a>
