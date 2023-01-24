<script lang="ts" context="module">
	import type { ComponentSize, IComponentBaseProps } from '$lib/types';
	import type { HTMLAttributes } from 'svelte/elements';
	import clsx from 'clsx';
	import { twMerge } from 'tailwind-merge';
	import { writable, type Writable } from 'svelte/store';
	import { setContext, onDestroy } from 'svelte';
	import { nanoid } from 'nanoid';

	export type TTabsProps = HTMLAttributes<HTMLDivElement> &
		IComponentBaseProps & {
			value?: string;
			variant?: 'bordered' | 'lifted';
			size?: ComponentSize;
			boxed?: boolean;
		};

	export const TABS_CONTEXT_ID = `svelisy-tabs-${nanoid(9)}`;
	export type TTabContext = {
		registerTab: (tab: any) => void;
		selectTab: (tab: any) => void;
		selectedTab: Writable<string>;
		variant?: 'bordered' | 'lifted';
		size?: ComponentSize;
	};
</script>

<script lang="ts">
	type $$Props = TTabsProps;

	export let dataTheme: $$Props['dataTheme'] = undefined;
	export let value: $$Props['value'] = undefined;
	export let variant: $$Props['variant'] = undefined;
	export let size: $$Props['size'] = undefined;
	export let boxed: $$Props['boxed'] = undefined;

	const tabs: any[] = [];
	const selectedTab = writable<string>(value);

	setContext<TTabContext>(TABS_CONTEXT_ID, {
		registerTab: (tab: any) => {
			tabs.push(tab);
			selectedTab.update((current) => current || tabs.indexOf(tab).toString());

			onDestroy(() => {
				const i = tabs.indexOf(tab);
				tabs.splice(i, 1);
				selectedTab.update((current) =>
					current === tab ? tabs[i] || tabs[tabs.length - 1] : current
				);
			});
		},
		selectTab: (tab: any) => {
			const i = tabs.indexOf(tab).toString();
			selectedTab.set(i);
		},
		selectedTab,
		variant,
		size
	});

	$: classes = twMerge(
		'tabs',
		$$props.class,
		clsx({
			'tabs-boxed': boxed
		})
	);

	$: value = $selectedTab;
</script>

<div id={TABS_CONTEXT_ID} role="tablist" {...$$restProps} data-theme={dataTheme} class={classes}>
	<slot />
</div>
