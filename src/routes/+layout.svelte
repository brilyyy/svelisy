<script>
	import { SvelisyProvider, SvelisyThemeChanger } from '$lib/provider';
	import '../app.postcss';
</script>

<SvelisyProvider>
	<div class="p-3">
		<SvelisyThemeChanger />
		<slot />
	</div>
</SvelisyProvider>
