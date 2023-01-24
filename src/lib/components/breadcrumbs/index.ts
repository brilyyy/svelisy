import Breadcrumbs__SvelteComponent_ from './Breadcrumbs.svelte';
import BreadcrumbsItem__SvelteComponent_ from './BreadcrumbsItem.svelte';
import type { TProps, TItemProps } from './Breadcrumbs.type';

export type BreadcrumbsProps = TProps;
export type BreadcrumbsItemProps = TItemProps;
export default Object.assign(Breadcrumbs__SvelteComponent_, {
	Item: BreadcrumbsItem__SvelteComponent_
});
