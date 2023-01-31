<script lang="ts">
	import type { DataTheme } from '$lib/types';
	import { DEFAULT_THEMES } from '$lib/types/defaultThemes';
	import type { Hst } from '@histoire/plugin-svelte';
	import { Rating } from '$lib';

	export let Hst: Hst;

	type TDataThemeOptions = {
		label: string;
		value: DataTheme;
	};

	const dataThemeOptions: TDataThemeOptions[] = DEFAULT_THEMES.map((v) => {
		return {
			label: v,
			value: v
		};
	});

	let dataTheme: DataTheme = 'dark';

	let ratingValue = 0;
</script>

<Hst.Story group="components">
	<Hst.Variant title="text">
		<div class="p-5">
			<Rating size="md" hidden bind:value={ratingValue}>
				<Rating.Item name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
				<Rating.Item name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
				<Rating.Item name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
				<Rating.Item name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
				<Rating.Item name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
				<Rating.Item name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
				<Rating.Item name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
				<Rating.Item name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
				<Rating.Item name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
				<Rating.Item name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
			</Rating>
		</div>

		<p>Input value: {ratingValue}</p>
	</Hst.Variant>

	<svelte:fragment slot="controls">
		<Hst.Select title="Change Theme" bind:value={dataTheme} options={dataThemeOptions} />
	</svelte:fragment>
</Hst.Story>
