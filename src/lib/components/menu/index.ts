import Menu__SvelteComponent_, { type TMenuProps } from './Menu.svelte';
import MenuTitle__SvelteComponent_, { type TMenuTitleProps } from './MenuTitle.svelte';
import MenuItem__SvelteComponent_, { type TMenuItemProps } from './MenuItem.svelte';

export type MenuProps = TMenuProps;
export type MenuItemProps = TMenuItemProps;
export type MenuTitleProps = TMenuTitleProps;

export default Object.assign(Menu__SvelteComponent_, {
	Title: MenuTitle__SvelteComponent_,
	Item: MenuItem__SvelteComponent_
});
