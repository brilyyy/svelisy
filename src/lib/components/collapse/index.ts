import Collapse__SvelteComponent_, { type TCollapseProps } from './Collapse.svelte';
import CollapseContent__SvelteComponent_, {
	type TCollapseContentProps
} from './CollapseContent.svelte';
import CollapseTitle__SvelteComponent_, { type TCollapseTitleProps } from './CollapseTitle.svelte';

export type CollapseProps = TCollapseProps;
export type CollapseContentProps = TCollapseContentProps;
export type CollapseTitleProps = TCollapseTitleProps;

export default Object.assign(Collapse__SvelteComponent_, {
	Content: CollapseContent__SvelteComponent_,
	Title: CollapseTitle__SvelteComponent_
});
