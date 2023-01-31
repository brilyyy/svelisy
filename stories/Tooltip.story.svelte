<script lang="ts">
	import type { DataTheme } from '$lib/types';
	import { DEFAULT_THEMES } from '$lib/types/defaultThemes';
	import type { Hst } from '@histoire/plugin-svelte';
	import { Tooltip, Button } from '$lib';
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
	let open = false;
</script>

<Hst.Story
	group="components"
	layout={{
		type: 'grid',
		width: '100%'
	}}
>
	<Hst.Variant title="default">
		<Tooltip {open} message="hello" position="right">
			<Button>Hi</Button>
		</Tooltip>

		<svelte:fragment slot="controls">
			<Hst.Select title="Change Theme" bind:value={dataTheme} options={dataThemeOptions} />
		</svelte:fragment>
	</Hst.Variant>
</Hst.Story>
