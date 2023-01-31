import { defineConfig } from 'histoire';
import { HstSvelte } from '@histoire/plugin-svelte';

export default defineConfig({
	plugins: [HstSvelte()],
	setupFile: 'histoire.setup.ts',
	tree: {
		groups: [
			{
				id: 'top',
				title: ''
			},
			{
				id: 'components',
				title: 'Components'
			}
		]
	},
	theme: {
		title: 'Svelisy',
		logoHref: 'https://brilyyy.github.io'
	},
	storyMatch: ['./stories/**/*.story.svelte', './stories/*.story.svelte']
});
