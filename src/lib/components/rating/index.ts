import Rating from './Rating.svelte';
import RatingItem from './RatingItem.svelte';

// export type TabProps = TTabProps;
// export type TabsProps = TTabsProps;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// Tabs__SvelteComponent_.Tab = Tab__SvelteComponent_;

// const Tabs = Tabs__SvelteComponent_ as typeof Tabs__SvelteComponent_ & {
// 	Item: typeof Tab__SvelteComponent_;
// };

export default Object.assign(Rating, {
	Item: RatingItem
});
