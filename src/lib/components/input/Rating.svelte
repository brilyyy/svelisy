<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import clsx from 'clsx';
	import type { TRatingProps as $$TProps } from './Input.type';
	import RatingItem from './RatingItem.svelte';
	//
	type $$Props = $$TProps

	export let dataTheme: $$Props['dataTheme'] = undefined,
		className: $$Props['className'] = '',
		size: $$Props['size'] = undefined,
		half: $$Props['half'] = undefined,
		hidden: $$Props['hidden'] = undefined,
		value: $$Props['value'] = 0;

	export { className as class };

	$: classes = twMerge(
		'rating',
		className,
		clsx({
			[`rating-${size}`]: size,
			'rating-half': half,
			'rating-hidden': hidden || value === 0
		})
	);
</script>

<div aria-label="Rating" data-theme={dataTheme} class={classes} on:change>
	{#if value === 0}
		<!-- content here -->
		<RatingItem class={clsx(classes, 'hidden')} checked readonly />
	{/if}
	<slot />
</div>
