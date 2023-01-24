const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},
	safelist: [...require('./src/lib/tailwind/safelist.cjs')],

	plugins: [require('daisyui')]
};

module.exports = config;
