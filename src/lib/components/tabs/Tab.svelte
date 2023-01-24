<script lang="ts" context="module">
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import { getContext } from 'svelte';
	import { TABS_CONTEXT_ID, type TTabContext } from './Tabs.svelte';
	import clsx from 'clsx';
	import { twMerge } from 'tailwind-merge';
	import { nanoid } from 'nanoid';

	export type TTabProps = HTMLAnchorAttributes & {
		eventKey: string;
	};
</script>

<script lang="ts">
	type $$Props = TTabProps;

	export let eventKey: $$Props['eventKey'];

	const tab = {};

	const { registerTab, selectTab, selectedTab, size, variant } =
		getContext<TTabContext>(TABS_CONTEXT_ID);

	registerTab(tab);

	$: classes = twMerge(
		'tab',
		$$props.class,
		clsx({
			'tab-active': eventKey != undefined && $selectedTab === eventKey,
			[`tab-${size}`]: size,
			[`tab-${variant}`]: variant
		})
	);
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<a
	role="tab"
	{...$$restProps}
	class={classes}
	on:click|stopPropagation={() => {
		selectTab(tab);
	}}
	id={`svelisy-tab-${nanoid(9)}`}
>
	<slot />
</a>
