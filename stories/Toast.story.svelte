<script lang="ts">
	import { Alert } from '$lib';
	import type { DataTheme } from '$lib/types';
	import { DEFAULT_THEMES } from '$lib/types/defaultThemes';
	import type { Hst } from '@histoire/plugin-svelte';
	import Toast from './Toast.svelte';
	import type { horizontalOptions, verticalOptions } from './Toast.type';

	export let Hst: Hst;

	type TDataThemeOptions = {
		label: string;
		value: DataTheme;
	};

	type THorizontal = keyof typeof horizontalOptions;
	type TVertical = keyof typeof verticalOptions;

	const dataThemeOptions: TDataThemeOptions[] = DEFAULT_THEMES.map((v) => {
		return {
			label: v,
			value: v
		};
	});

	let dataTheme: DataTheme = 'dark';
	let horizontal: THorizontal = 'end';
	let vertical: TVertical = 'bottom';
</script>

<Hst.Story group="components">
	<Hst.Variant title="default">
		<Toast class="absolute" {vertical} {horizontal}>
			<Alert {dataTheme} status="warning">This is toast</Alert>
		</Toast>

		<svelte:fragment slot="controls">
			<Hst.Select title="Change Theme" bind:value={dataTheme} options={dataThemeOptions} />
			<Hst.Select
				title="Horizontal"
				bind:value={horizontal}
				options={[
					{
						label: 'start',
						value: 'start'
					},
					{
						label: 'center',
						value: 'center'
					},
					{
						label: 'end',
						value: 'end'
					}
				]}
			/>
			<Hst.Select
				title="Vertical"
				bind:value={vertical}
				options={[
					{
						label: 'top',
						value: 'top'
					},
					{
						label: 'middle',
						value: 'middle'
					},
					{
						label: 'bottom',
						value: 'bottom'
					}
				]}
			/>
		</svelte:fragment>
	</Hst.Variant>
</Hst.Story>
