<script lang="ts">
	import type { ComponentStatus, DataTheme } from '$lib/types';
	import { DEFAULT_THEMES } from '$lib/types/defaultThemes';
	import type { Hst } from '@histoire/plugin-svelte';
	import { Card, Button } from '$lib';
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
		<Card {dataTheme} compact imageFull class="shadow-xl w-96">
			<Card.Image src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" />
			<Card.Body>
				<Card.Title tag="h2">Shoes</Card.Title>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem veritatis natus iure
					reiciendis aut.
				</p>
				<Card.Actions>
					<Button color="primary">Buy</Button>
				</Card.Actions>
			</Card.Body>
		</Card>
	</Hst.Variant>
	<svelte:fragment slot="controls">
		<Hst.Select title="Change Theme" bind:value={dataTheme} options={dataThemeOptions} />
	</svelte:fragment>
</Hst.Story>
