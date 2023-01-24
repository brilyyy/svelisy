<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import clsx from 'clsx';
	import type { TProps as $$BadgeProps } from './Card.type';

	type $$Props = $$BadgeProps;

	export let dataTheme: $$Props['dataTheme'] = undefined,
		className: $$Props['className'] = '',
		bordered: $$Props['bordered'] = undefined,
		imageFull: $$Props['imageFull'] = undefined,
		compact: $$Props['compact'] = undefined,
		normal: $$Props['normal'] = undefined,
		side: $$Props['side'] = undefined;

	interface ModifierMap {
		[key: string]: {
			[key: string]: string | undefined;
		};
	}

	const DYNAMIC_MODIFIERS: ModifierMap = {
		compact: {
			true: 'card-compact',
			xs: 'xs:card-compact',
			sm: 'sm:card-compact',
			md: 'md:card-compact',
			lg: 'lg:card-compact'
		},
		normal: {
			true: 'card-normal',
			xs: 'xs:card-normal',
			sm: 'sm:card-normal',
			md: 'md:card-normal',
			lg: 'lg:card-normal'
		},
		side: {
			true: 'card-side',
			xs: 'xs:card-side',
			sm: 'sm:card-side',
			md: 'md:card-side',
			lg: 'lg:card-side'
		}
	};

	export { className as class };

	$: classes = twMerge(
		'card',
		className,
		clsx({
			'card-bordered': bordered,
			'image-full': imageFull,
			[(compact && DYNAMIC_MODIFIERS.compact[compact.toString()]) || '']: compact,
			[(normal && DYNAMIC_MODIFIERS.normal[normal.toString()]) || '']: normal,
			[(side && DYNAMIC_MODIFIERS.side[side.toString()]) || '']: side
		})
	);
</script>

<div data-theme={dataTheme} aria-label="Card" {...$$restProps} class={classes}>
	<slot />
</div>
