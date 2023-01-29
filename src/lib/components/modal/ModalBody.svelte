<script lang="ts" context="module">
	export type TModalBodyProps = HTMLAttributes<HTMLDivElement>;
</script>

<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = TModalBodyProps;
</script>

<div {...$$restProps}>
	<slot />
</div>
