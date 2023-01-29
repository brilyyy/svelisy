import Carousel__SvelteComponent_, { type TCarouselProps } from './Carousel.svelte';
import CarouselItem__SvelteComponent_, { type TCarouselItemProps } from './CarouselItem.svelte';

export type CarouselItemProps = TCarouselItemProps;
export type CarouselPros = TCarouselProps;

export default Object.assign(Carousel__SvelteComponent_, { Item: CarouselItem__SvelteComponent_ });
