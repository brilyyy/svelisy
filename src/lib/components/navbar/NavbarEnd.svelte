<script lang="ts">
	import type { TSectionProps as $$TProps } from './Navbar.type';
	import NavbarSection from './NavbarSection.svelte';
	//
	type $$Props = Omit<$$TProps, 'section'>;

	export let dataTheme: $$Props['dataTheme'] = undefined,
		className: $$Props['className'] = '';

	export { className as class };
</script>

<NavbarSection class={className} {dataTheme} section="end">
	<slot />
</NavbarSection>
