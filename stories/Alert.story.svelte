<script lang="ts">
	import type { ComponentStatus, DataTheme } from '$lib/types';
	import { DEFAULT_THEMES } from '$lib/types/defaultThemes';
	import type { Hst } from '@histoire/plugin-svelte';
	import Alert from './Alert.svelte';
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

	let status: ComponentStatus = 'success';
	let dataTheme: DataTheme = 'dark';
	let withIcon = false;
</script>

<Hst.Story
	group="components"
	layout={{
		type: 'grid',
		width: '100%'
	}}
>
	<Hst.Variant title="default">
		<Alert {dataTheme}>12 unread messages. Tap to see.</Alert>
		<svelte:fragment slot="controls">
			<Hst.Select title="Change Theme" bind:value={dataTheme} options={dataThemeOptions} />
		</svelte:fragment>
	</Hst.Variant>
	<Hst.Variant title="with color">
		<Alert {status} {dataTheme}>12 unread messages. Tap to see.</Alert>
		<svelte:fragment slot="controls">
			<Hst.Select title="Change Theme" bind:value={dataTheme} options={dataThemeOptions} />
			<Hst.Select
				title="Change Status"
				bind:value={status}
				options={[
					{
						label: 'success',
						value: 'success'
					},
					{
						label: 'error',
						value: 'error'
					},
					{
						label: 'warning',
						value: 'warning'
					},
					{
						label: 'info',
						value: 'info'
					}
				]}
			/>
			<Hst.Checkbox title="With icon" bind:value={withIcon} />
		</svelte:fragment>
	</Hst.Variant>
</Hst.Story>
