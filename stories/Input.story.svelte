<script lang="ts">
	import type { ComponentStatus, DataTheme } from '$lib/types';
	import { DEFAULT_THEMES } from '$lib/types/defaultThemes';
	import type { Hst } from '@histoire/plugin-svelte';
	import { Input } from '$lib';

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

	let textValue = '';
	let numberValue = 0;
	let file = '';
	let files: FileList | undefined = undefined;
	let check = false;
	let checkboxSelected: (string | number)[] = [];
	let radioGroup = '';
	let rangeValue = 0;
	let selectedItem = '';
	let textAreaValue = '';
	let ratingValue = 1;

	let checkboxOptions = ['opt-1', 'opt-2', 'opt-3'];
</script>

<Hst.Story group="components">
	<Hst.Variant title="text">
		<Input type="text" bind:value={textValue} placeholder="input" class="w-full mb-3" {dataTheme} />

		<p>Input value: {textValue}</p>
	</Hst.Variant>

	<Hst.Variant title="number">
		<Input
			type="number"
			bind:value={numberValue}
			placeholder="input"
			class="w-full mb-3"
			{dataTheme}
		/>

		<p>Input value: {numberValue}</p>
	</Hst.Variant>

	<Hst.Variant title="file">
		<Input.File class="mb-3" bind:value={file} />

		<p>Input value: {file}</p>
	</Hst.Variant>

	<Hst.Variant title="multiple files">
		<Input.File class="mb-3" multiple bind:files />

		<p>Input value: {files}</p>
	</Hst.Variant>

	<Hst.Variant title="checkbox">
		<Input.Checkbox color="error" indeterminate />

		<p>Input value: {check.toString()}</p>
	</Hst.Variant>

	<Hst.Variant title="checkbox group">
		{#each checkboxOptions as item}
			<Input.Checkbox color="primary" bind:group={checkboxSelected} value={item} /> {item} <br />
		{/each}

		<p>Input value: {checkboxSelected && checkboxSelected.join(', ')}</p>
	</Hst.Variant>

	<Hst.Variant title="radio">
		{#each checkboxOptions as item}
			<Input.Radio color="primary" bind:group={radioGroup} value={item} name="radio-test" />
			{item} <br />
		{/each}

		<p>Input value: {radioGroup}</p>
	</Hst.Variant>

	<Hst.Variant title="range">
		<Input.Range min="0" max="100" bind:value={rangeValue} />

		<p>Input value: {rangeValue}</p>
	</Hst.Variant>

	<Hst.Variant title="range with step">
		<Input.Range min="0" max="100" step={25} bind:value={rangeValue} />

		<p>Input value: {rangeValue}</p>
	</Hst.Variant>

	<Hst.Variant title="select">
		<Input.Select {dataTheme} bind:value={selectedItem} options={dataThemeOptions} />

		<!-- <Textarea bind:value={textAreaValue} /> -->

		<p>Input value: {selectedItem}</p>
	</Hst.Variant>

	<Hst.Variant title="text area">
		<!-- <Select {dataTheme} bind:value={selectedItem} options={dataThemeOptions} /> -->

		<Input.Textarea bind:value={textAreaValue} />

		<p>Input value: {textAreaValue}</p>
	</Hst.Variant>

	<svelte:fragment slot="controls">
		<Hst.Select title="Change Theme" bind:value={dataTheme} options={dataThemeOptions} />
	</svelte:fragment>
</Hst.Story>
