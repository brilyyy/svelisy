<script lang="ts">
	import type { ComponentStatus, DataTheme } from '$lib/types';
	import { DEFAULT_THEMES } from '$lib/types/defaultThemes';
	import type { Hst } from '@histoire/plugin-svelte';
	import { Toggle } from '$lib';
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

	let checked = false;
</script>

<Hst.Story group="components">
	<Hst.Variant title="text">
		<Toggle bind:checked placeholder="input" class="mb-3" {dataTheme} />

		<p>Input value: {checked.toString()}</p>
		<br />
		<Toggle bind:checked placeholder="input" class="mb-3" indeterminate {dataTheme} />

		<p>Indeterminate</p>
	</Hst.Variant>

	<svelte:fragment slot="controls">
		<Hst.Select title="Change Theme" bind:value={dataTheme} options={dataThemeOptions} />
	</svelte:fragment>
</Hst.Story>
