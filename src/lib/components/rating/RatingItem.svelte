<script lang="ts">
	import clsx from 'clsx';
	import { getContext, onMount } from 'svelte';
	import type { TRatingItemProps as $$TProps } from './Rating.type';
	import type { TRatingContext } from './Rating.svelte';
	import { RATING_CTX } from './Rating.svelte';

	interface $$Props extends $$TProps {
		checked?: boolean;
	}

	let el: Element;
	export let checked: $$Props['checked'] = undefined;
	let thisElValue: number;

	export let className: $$Props['className'] = undefined;

	export { className as class };

	const state = getContext<TRatingContext>(RATING_CTX);

	onMount(() => {
		calculateActive();
	});

	function calculateActive() {
		if (!el) return;

		const children = el.parentNode?.children;
		const index = Array.prototype.indexOf.call(children, el);

		_checked = checked !== undefined ? $$props.checked : $state.value - 1 === index;
	}
	$: _checked = checked;
	// $: _checked = checked;
	$: classes = clsx('svelisy-rating-item', className);
	$: $state, calculateActive();
</script>

<input bind:this={el} {...$$restProps} class={classes} type="checkbox" bind:checked={_checked} />
