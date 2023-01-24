import Footer__SvelteComponent_ from './Footer.svelte';
import FooterTitle__SvelteComponent_ from './FooterTitle.svelte';
import type { TProps, TTitleProps } from './Footer.type';

export default Object.assign(Footer__SvelteComponent_, {
	Title: FooterTitle__SvelteComponent_
});
export type FooterProps = TProps;
export type FooterTitleProps = TTitleProps;
