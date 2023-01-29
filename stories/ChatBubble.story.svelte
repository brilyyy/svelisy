<script lang="ts">
	import type { DataTheme } from '$lib/types';
	import { DEFAULT_THEMES } from '$lib/types/defaultThemes';
	import type { Hst } from '@histoire/plugin-svelte';
	import { ChatBubble } from '$lib';

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
		<div class="w-full">
			<ChatBubble>
				<ChatBubble.Avatar src="https://placeimg.com/192/192/people" />

				<ChatBubble.Header>
					Obi-Wan Kenobi <ChatBubble.Time>2 hours ago</ChatBubble.Time>
				</ChatBubble.Header>
				<ChatBubble.Message>You were my brother, Anakin.</ChatBubble.Message>
				<ChatBubble.Footer>Seen</ChatBubble.Footer>
			</ChatBubble>
		</div>

		<svelte:fragment slot="controls">
			<Hst.Select title="Change Theme" bind:value={dataTheme} options={dataThemeOptions} />
		</svelte:fragment>
	</Hst.Variant>
</Hst.Story>
