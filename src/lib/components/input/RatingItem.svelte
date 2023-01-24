<script lang="ts">
	import type { TRatingItemProps as $$TProps } from './Input.type';

	interface $$Props extends $$TProps {}

	export let checked: $$Props['checked'] = false;

	export { className as class };
</script>

<input
	type="checkbox"
	{...$$restProps}
	bind:checked
	on:blur
	on:change
	on:click
	on:contextmenu
	on:focus
	on:keydown
	on:keypress
	on:keyup
	on:mouseover
	on:mouseenter
	on:mouseleave
	on:paste
	on:input
/>
