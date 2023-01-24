import type { TProps, TContentProps, TOverlayProps } from './Hero.type';
import Hero__SvelteComponent_ from './Hero.svelte';
import HeroContent__SvelteComponent_ from './HeroContent.svelte';
import HeroOverlay__SvelteComponent_ from './HeroOverlay.svelte';

export type HeroProps = TProps;
export type HeroContentProps = TContentProps;
export type HeroOverlayProps = TOverlayProps;

export default Object.assign(Hero__SvelteComponent_, {
	Content: HeroContent__SvelteComponent_,
	Overlay: HeroOverlay__SvelteComponent_
});
