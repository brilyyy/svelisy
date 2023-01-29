<script lang="ts">
	import type { ComponentStatus, DataTheme } from '$lib/types';
	import { DEFAULT_THEMES } from '$lib/types/defaultThemes';
	import type { Hst } from '@histoire/plugin-svelte';
	import Stack from './Stack.svelte';
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
	let useStack = true;
</script>

<Hst.Story
	group="components"
	layout={{
		type: 'grid',
		width: '100%'
	}}
>
	<Hst.Variant title="default">
		{#if useStack}
			<Stack>
				<div class="grid w-32 h-20 rounded bg-primary text-primary-content place-content-center">
					1
				</div>
				<div class="grid w-32 h-20 rounded bg-accent text-accent-content place-content-center">
					2
				</div>
				<div
					class="grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center"
				>
					3
				</div>
			</Stack>
		{:else}
			<div>
				<div class="grid w-32 h-20 rounded bg-primary text-primary-content place-content-center">
					1
				</div>
				<div class="grid w-32 h-20 rounded bg-accent text-accent-content place-content-center">
					2
				</div>
				<div
					class="grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center"
				>
					3
				</div>
			</div>
		{/if}

		<svelte:fragment slot="controls">
			<Hst.Select title="Change Theme" bind:value={dataTheme} options={dataThemeOptions} />
			<Hst.Checkbox title="Use Stack" bind:value={useStack} />
		</svelte:fragment>
	</Hst.Variant>
</Hst.Story>
