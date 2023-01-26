<script lang="ts">
	import type { DataTheme } from '$lib/types';
	import { DEFAULT_THEMES } from '$lib/types/defaultThemes';
	import type { Hst } from '@histoire/plugin-svelte';
	import { Tabs } from '$lib';
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
</script>

<Hst.Story group="components">
	<Hst.Variant title="default">
		<div class="flex w-full justify-center" data-theme={dataTheme}>
			<Tabs {dataTheme} variant="lifted" size="lg">
				<Tabs.Tab eventKey="0">xxx</Tabs.Tab>
				<Tabs.Tab eventKey="1">yyy</Tabs.Tab>
				<Tabs.Tab eventKey="2">zzz</Tabs.Tab>
			</Tabs>
		</div>

		<svelte:fragment slot="controls">
			<Hst.Select title="Change Theme" bind:value={dataTheme} options={dataThemeOptions} />
		</svelte:fragment>
	</Hst.Variant>
</Hst.Story>
