<script lang="ts">
	import type { ComponentStatus, DataTheme } from '$lib/types';
	import { DEFAULT_THEMES } from '$lib/types/defaultThemes';
	import type { Hst } from '@histoire/plugin-svelte';
	import Button from '../button/Button.svelte';
	import Card from './Card.svelte';
	import CardActions from './CardActions.svelte';
	import CardBody from './CardBody.svelte';
	import CardImage from './CardImage.svelte';
	import CardTitle from './CardTitle.svelte';
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
			<CardImage src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" />
			<CardBody>
				<CardTitle tag="h2">Shoes</CardTitle>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem veritatis natus iure
					reiciendis aut.
				</p>
				<CardActions>
					<Button color="primary">Buy</Button>
				</CardActions>
			</CardBody>
		</Card>
	</Hst.Variant>
	<svelte:fragment slot="controls">
		<Hst.Select title="Change Theme" bind:value={dataTheme} options={dataThemeOptions} />
	</svelte:fragment>
</Hst.Story>
