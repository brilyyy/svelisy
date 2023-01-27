import BottomNavigation__SvelteComponent_, { type TBtmNavProps } from './BottomNavigation.svelte';
import BottomNavigationLabel__SvelteComponent_, {
	type TBottomNavigationLabel
} from './BottomNavigationLabel.svelte';

export type BottomNavigationProps = TBtmNavProps;
export type BottomNavigationLabelProps = TBottomNavigationLabel;

export default Object.assign(BottomNavigation__SvelteComponent_, {
	Label: BottomNavigationLabel__SvelteComponent_
});
