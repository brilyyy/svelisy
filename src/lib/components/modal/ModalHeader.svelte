<script lang="ts" context="module">
	export type TModalHeaderProps = HTMLAttributes<HTMLDivElement>;
</script>

<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type $$Props = TModalHeaderProps;

	$: classes = twMerge('w-full mb-8 text-xl', $$props.class);
</script>

<div {...$$restProps} class={classes}>
	<slot />
</div>
