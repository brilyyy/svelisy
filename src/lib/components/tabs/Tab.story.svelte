<script lang="ts">
	import type { DataTheme } from '$lib/types';
	import { DEFAULT_THEMES } from '$lib/types/defaultThemes';
	import type { Hst } from '@histoire/plugin-svelte';
	import Tab from './Tab.svelte';
	import Tabs from './Tabs.svelte';
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
	let tabIndex: string;
</script>

<Hst.Story group="components">
	<Hst.Variant title="default">
		<div class="flex w-full justify-center" data-theme={dataTheme}>
			<Tabs {dataTheme} bind:value={tabIndex} variant="lifted" size="lg">
				<Tab eventKey="0">1sfd</Tab>
				<Tab eventKey="1">2sdf</Tab>
				<Tab eventKey="2">ffs3</Tab>
			</Tabs>
		</div>

		<svelte:fragment slot="controls">
			<Hst.Select title="Change Theme" bind:value={dataTheme} options={dataThemeOptions} />
		</svelte:fragment>
	</Hst.Variant>
</Hst.Story>
