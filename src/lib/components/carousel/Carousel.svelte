<script lang="ts" context="module">
	export type TCollapseProps = HTMLAttributes<HTMLDivElement> &
		IComponentBaseProps & {
			display?: 'slider' | 'numbered' | 'sequential';
			snap?: 'start' | 'center' | 'end';
			vertical?: boolean;
			width?: CarouselItemWidth;
		};
</script>

<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { IComponentBaseProps } from '$lib/types';
	import { twMerge } from 'tailwind-merge';
	import clsx from 'clsx';
	import { onMount } from 'svelte';
	import type { CarouselItemWidth } from './CarouselItem.svelte';
	import Button from '../button/Button.svelte';

	type $$Props = TCollapseProps;

	export let className: $$Props['className'] = '';
	export let dataTheme: $$Props['dataTheme'] = undefined;
	export let display: $$Props['display'] = 'slider';
	export let snap: $$Props['snap'] = undefined;
	export let vertical: $$Props['vertical'] = undefined;
	export let width: $$Props['width'] = undefined;

	export { className as class };

	let carouselEl: HTMLDivElement;
	let children: Element[];

	onMount(() => {
		setupCarousel();
	});

	function setupCarousel() {
		const ch = carouselEl.querySelectorAll('.svelisy-carousel-item');
		children = Array.from(ch);
		for (let [index, item] of children.entries()) {
			item.setAttribute('id', `carousel-item${index}`);
			item.setAttribute('data-carousel-index', `${index}`);
		}
	}

	$: classes = twMerge(
		'carousel',
		className,
		clsx({
			[`carousel-${snap}`]: snap,
			'carousel-vertical': vertical,
			'w-full': display !== 'slider'
		})
	);
</script>

<div
	bind:this={carouselEl}
	role="listbox"
	aria-label="Image carousel"
	{...$$restProps}
	data-theme={dataTheme}
	class={classes}
>
	<slot />
</div>

{#if display === 'numbered'}
	<div class="flex justify-center w-full py-2 gap-2">
		{#if children}
			{#each children as x, i}
				<Button href={`#carousel-item${i}`}>{i + 1}</Button>
			{/each}
		{/if}
	</div>
{/if}
