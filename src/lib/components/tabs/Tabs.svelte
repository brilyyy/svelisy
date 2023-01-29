<script lang="ts" context="module">
	import type { ComponentSize, IComponentBaseProps } from '$lib/types';
	import type { HTMLAttributes } from 'svelte/elements';

	export type TTabsProps = HTMLAttributes<HTMLDivElement> &
		IComponentBaseProps & {
			variant?: 'bordered' | 'lifted';
			size?: ComponentSize;
			boxed?: boolean;
			active?: number;
			initialTab?: number;
		};

	export type TTabContext = Writable<{
		active?: number;
		variant?: 'bordered' | 'lifted';
		size?: ComponentSize;
	}>;
	export const TABS_CONTEXT = `svelisy-tabs`;
</script>

<script lang="ts">
	import clsx from 'clsx';
	import { twMerge } from 'tailwind-merge';
	import { writable, type Writable } from 'svelte/store';
	import { setContext, onMount, createEventDispatcher } from 'svelte';

	type $$Props = TTabsProps;

	export let className: $$Props['className'] = undefined;
	export let dataTheme: $$Props['dataTheme'] = undefined;
	export let active: $$Props['active'] = -1;
	export let variant: $$Props['variant'] = undefined;
	export let size: $$Props['size'] = undefined;
	export let boxed: $$Props['boxed'] = undefined;
	export let initialTab: $$Props['initialTab'] = 0;

	export { className as class };

	let element: HTMLDivElement;

	const dispatch = createEventDispatcher();

	// initialize reactive content
	// thanks to svelteui source code
	const contextStore = writable({
		active: active === -1 ? initialTab : active,
		variant: variant,
		size: size
	});

	setContext<TTabContext>(TABS_CONTEXT, contextStore);

	$: $contextStore = {
		active: _active,
		variant: variant,
		size: size
	};

	// Getting all tabs button
	function setupTabs() {
		const tabs = element.querySelectorAll('.svelisy-tab');
		for (let [index, tab] of Array.from(tabs).entries()) {
			const key = tab.getAttribute('data-svelisy-tab-key');
			tab.addEventListener('click', () => onTabClick(index, key!));
		}
	}

	function onTabClick(index: number, key: string) {
		dispatch('change', { index: index, key: key });
		_active = index;
		contextStore.set({ ...$contextStore, active: index });
	}

	function calculateActive() {
		if (!element) return;
	}

	onMount(() => {
		setupTabs();
		calculateActive();
	});

	$: _active = active === -1 ? initialTab : active;
	$: $contextStore, _active, calculateActive();
	$: classes = twMerge(
		'tabs',
		className,
		clsx({
			'tabs-boxed': boxed
		})
	);
</script>

<div bind:this={element} role="tablist" {...$$restProps} data-theme={dataTheme} class={classes}>
	<slot />
</div>
