<script lang="ts">
	import { Rating } from '$lib';

	let value: number = 1;

	$: {
		console.log(value);
	}
</script>

<Rating bind:value>
	<Rating.Item class="mask mask-heart bg-red-400" />
	<Rating.Item class="mask mask-heart bg-orange-400" />
	<Rating.Item class="mask mask-heart bg-yellow-400" />
	<Rating.Item class="mask mask-heart bg-lime-400" />
	<Rating.Item class="mask mask-heart bg-green-400" />
</Rating>
