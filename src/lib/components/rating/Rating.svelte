<script lang="ts" context="module">
	import type { Writable } from 'svelte/store';
	export const RATING_CTX = 'Svelisy-Rating-Input';
	export type TRatingContext = Writable<{ value: number; hidden: boolean }>;
</script>

<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { createEventDispatcher, onMount, setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import clsx from 'clsx';
	import type { TRatingProps as $$TProps } from './Rating.type';
	import RatingItem from './RatingItem.svelte';

	type $$Props = $$TProps;

	let ratingEl: Element;

	export let dataTheme: $$Props['dataTheme'] = undefined,
		className: $$Props['className'] = '',
		size: $$Props['size'] = undefined,
		half: $$Props['half'] = undefined,
		hidden: $$Props['hidden'] = undefined,
		value: $$Props['value'] = 0;

	export { className as class };

	const contextStore = writable({ value: value, hidden: hidden || false });

	setContext<TRatingContext>(RATING_CTX, contextStore);

	onMount(() => {
		setupRatingItem();
	});

	function setupRatingItem() {
		const children = ratingEl.querySelectorAll('.svelisy-rating-item');
		for (let [index, item] of Array.from(children).entries()) {
			const inputItem = item as HTMLInputElement;
			if (item.className.includes('hidden') && $contextStore.value === 0 && $contextStore.hidden) {
				continue;
			}

			item.setAttribute('data-svelisy-rating', `${index + 1}`);
			item.addEventListener('click', () => onStarClick(inputItem));
		}
	}

	function onStarClick(item: HTMLInputElement) {
		const itemValue = parseInt(item.getAttribute('data-svelisy-rating')!);
		if ($contextStore.value === itemValue && hidden) {
			contextStore.set({ ...$contextStore, value: 0 });
		} else {
			contextStore.set({ ...$contextStore, value: itemValue });
			value = itemValue;
		}
	}

	$: classes = twMerge(
		'rating',
		className,
		clsx({
			[`rating-${size}`]: size,
			'rating-half': half,
			'rating-hidden': hidden || value === 0
		})
	);

	$: isZeroValue = $contextStore.value === 0;

	$: $contextStore;
</script>

<div bind:this={ratingEl} aria-label="Rating" data-theme={dataTheme} class={classes}>
	{#if isZeroValue}
		<input type="checkbox" class={clsx(classes, 'hidden')} checked readonly />
	{/if}
	<slot />
</div>
