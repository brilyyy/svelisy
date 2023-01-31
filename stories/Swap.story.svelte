<script lang="ts">
	import type { DataTheme } from '$lib/types';
	import { DEFAULT_THEMES } from '$lib/types/defaultThemes';
	import type { Hst } from '@histoire/plugin-svelte';
	import { Swap } from '$lib';
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
	let rotate = false;
	let flip = false;
</script>

<Hst.Story
	group="components"
	layout={{
		type: 'grid',
		width: '100%'
	}}
>
	<Hst.Variant title="default">
		<Swap {flip} {rotate} {dataTheme}>
			<svelte:fragment slot="swap-on">On</svelte:fragment>
			<svelte:fragment slot="swap-off">Off</svelte:fragment>
		</Swap>

		<svelte:fragment slot="controls">
			<Hst.Select title="Change Theme" bind:value={dataTheme} options={dataThemeOptions} />
			<Hst.Checkbox title="Rotate" bind:value={rotate} />
			<Hst.Checkbox title="Flip" bind:value={flip} />
		</svelte:fragment>
	</Hst.Variant>
</Hst.Story>
