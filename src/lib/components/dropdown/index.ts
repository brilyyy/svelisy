import Dropdown__SvelteComponent_, { type TDropdownProps } from './Dropdown.svelte';
import DropdownItem__SvelteComponent_, { type TDropdownItemProps } from './DropdownItem.svelte';
import DropdownMenu__SvelteComponent_, { type TDropdownMenuProps } from './DropdownMenu.svelte';
import DropdownToggle__SvelteComponent_, {
	type TDropdownToggleProps
} from './DropdownToggle.svelte';

export type DropdownProps = TDropdownProps;
export type DropdownItemProps = TDropdownItemProps;
export type DropdownMenuProps = TDropdownMenuProps;
export type DropdownToggleProps = TDropdownToggleProps;

export default Object.assign(Dropdown__SvelteComponent_, {
	Item: DropdownItem__SvelteComponent_,
	Menu: DropdownMenu__SvelteComponent_,
	Toggle: DropdownToggle__SvelteComponent_
});
