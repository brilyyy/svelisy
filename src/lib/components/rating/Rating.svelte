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
		value: $$Props['value'] = -1;

	export { className as class };

	let valueIndex = value - 1;

	const contextStore = writable({ value: valueIndex, hidden: hidden || false });

	setContext<TRatingContext>(RATING_CTX, contextStore);

	onMount(() => {
		setupRatingItem();
	});

	function setupRatingItem() {
		const children = ratingEl.querySelectorAll('.svelisy-rating-item');
		for (let [index, item] of Array.from(children).entries()) {
			if (hidden && index === 0) {
				continue;
			}
			if (hidden) {
				item.setAttribute('data-svelisy-rating', index.toString());
				item.addEventListener('click', () => onStarClick(index - 1));
			}
		}
	}

	function onStarClick(index: number) {
		contextStore.set({ ...$contextStore, value: index });
		value = $contextStore.value + 1;
	}

	$: classes = twMerge(
		'rating',
		className,
		clsx({
			[`rating-${size}`]: size,
			'rating-half': half,
			'rating-hidden': hidden || valueIndex === -1
		})
	);
</script>

<div bind:this={ratingEl} aria-label="Rating" data-theme={dataTheme} class={classes}>
	{#if valueIndex === -1}
		<RatingItem class={clsx(classes, 'hidden')} checked readonly />
	{/if}
	<slot />
</div>
