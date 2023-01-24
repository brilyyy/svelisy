import Component__SvelteComponent_ from './Navbar.svelte';
import type { TProps, TSectionProps } from './Navbar.type';
import NavbarCenter__SvelteComponent_ from './NavbarCenter.svelte';
import NavbarEnd__SvelteComponent_ from './NavbarEnd.svelte';
import NavbarStart__SvelteComponent_ from './NavbarStart.svelte';

export type NavbarProps = TProps;
export type NavbarSectionProps = TSectionProps;
export default Object.assign(Component__SvelteComponent_, {
	Start: NavbarStart__SvelteComponent_,
	Center: NavbarCenter__SvelteComponent_,
	End: NavbarEnd__SvelteComponent_
});
