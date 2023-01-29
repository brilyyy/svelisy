<script lang="ts" context="module">
	export type CarouselItemWidth = 'full' | 'half';
	export type TCollapseContentProps = HTMLAttributes<HTMLDivElement> & {
		src?: string;
		alt?: string;
		width?: CarouselItemWidth;
		hasButtons?: boolean;
	};
</script>

<script lang="ts">
	import clsx from 'clsx';
	import { onMount } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';
	import Button from '../button/Button.svelte';

	type $$Props = TCollapseContentProps;

	export let src: $$Props['src'] = undefined;
	export let alt: $$Props['alt'] = undefined;
	export let width: $$Props['width'] = undefined;
	export let hasButtons: $$Props['hasButtons'] = undefined;

	let itemEl: HTMLDivElement;
	let prevEl: number;
	let nextEl: number;

	onMount(() => {
		const children = itemEl.parentNode?.children;
		const index = Array.prototype.indexOf.call(children, itemEl);
		const maxChildren = Array.from(children!).length;
		if (index === 0) {
			prevEl = maxChildren - 1;
		} else {
			prevEl = index - 1;
		}
		if (index === maxChildren - 1) {
			nextEl = 0;
		} else {
			nextEl = index + 1;
		}
	});

	$: classes = twMerge(
		'svelisy-carousel-item',
		'carousel-item relative',
		$$props.class,
		clsx({
			'w-full': width === 'full',
			'w-1/2': width === 'half',
			'h-full': true
		})
	);

	$: imageClasses = clsx({
		'w-full': width === 'full'
	});
</script>

<div bind:this={itemEl} {...$$restProps} class={classes}>
	{#if src}
		<img {src} {alt} class={imageClasses} />
	{:else}
		<slot />
	{/if}

	{#if hasButtons}
		<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
			<Button href={`#carousel-item${prevEl}`} shape="circle">❮</Button>
			<Button href={`#carousel-item${nextEl}`} shape="circle">❯</Button>
		</div>
	{/if}
</div>
