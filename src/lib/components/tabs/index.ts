import Tab__SvelteComponent_, { type TTabProps } from './Tab.svelte';
import Tabs__SvelteComponent_, { type TTabsProps } from './Tabs.svelte';

export type TabProps = TTabProps;
export type TabsProps = TTabsProps;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Tabs__SvelteComponent_.Tab = Tab__SvelteComponent_;

const Tabs = Tabs__SvelteComponent_ as typeof Tabs__SvelteComponent_ & {
	Tab: typeof Tab__SvelteComponent_;
};

export default Tabs;
