<script lang="ts">
	import Carousel from '$lib/components/carousel/Carousel.svelte';
	import CarouselItem from '$lib/components/carousel/CarouselItem.svelte';

	let open = false;
</script>

<Carousel display="slider" width="half" class="rounded-box">
	<CarouselItem src="https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2" alt="Car" />
	<CarouselItem src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB" alt="Car" />
	<CarouselItem src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6" alt="Car" />
	<CarouselItem src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693" alt="Car" />
</Carousel>
