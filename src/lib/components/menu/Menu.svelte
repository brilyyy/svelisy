<script lang="ts" context="module">
	export type TMenuProps = HTMLAttributes<HTMLUListElement> &
		IComponentBaseProps & {
			normal?: ComponentSize | boolean; // Applies default paddings
			compact?: ComponentSize | boolean; // Applies smaller padding
			vertical?: ComponentSize | boolean; // Vertical menu (default)
			horizontal?: ComponentSize | boolean; // Horizontal menu
		};
</script>

<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { ComponentSize, IComponentBaseProps } from '$lib/types';
	import { twMerge } from 'tailwind-merge';
	import clsx from 'clsx';

	type $$Props = TMenuProps;

	//
	interface ModifierMap {
		[key: string]: {
			[key: string]: string | undefined;
		};
	}

	const DYNAMIC_MODIFIERS: ModifierMap = {
		compact: {
			true: 'menu-compact',
			xs: 'xs:menu-compact',
			sm: 'sm:menu-compact',
			md: 'md:menu-compact',
			lg: 'lg:menu-compact'
		},
		normal: {
			true: 'menu-normal',
			xs: 'xs:menu-normal',
			sm: 'sm:menu-normal',
			md: 'md:menu-normal',
			lg: 'lg:menu-normal'
		},
		horizontal: {
			true: 'menu-horizontal',
			xs: 'xs:menu-horizontal',
			sm: 'sm:menu-horizontal',
			md: 'md:menu-horizontal',
			lg: 'lg:menu-horizontal'
		},
		vertical: {
			true: 'menu-vertical',
			xs: 'xs:menu-vertical',
			sm: 'sm:menu-vertical',
			md: 'md:menu-vertical',
			lg: 'lg:menu-vertical'
		}
	};

	export let className: $$Props['className'] = '';
	export let dataTheme: $$Props['dataTheme'] = undefined;
	export let horizontal: $$Props['horizontal'] = undefined;
	export let vertical: $$Props['vertical'] = undefined;
	export let normal: $$Props['normal'] = undefined;
	export let compact: $$Props['compact'] = undefined;

	export { className as class };

	$: classes = twMerge(
		'menu',
		className,
		clsx({
			[(compact && DYNAMIC_MODIFIERS.compact[compact.toString()]) || '']: compact,
			[(normal && DYNAMIC_MODIFIERS.normal[normal.toString()]) || '']: normal,
			[(horizontal && DYNAMIC_MODIFIERS.horizontal[horizontal.toString()]) || '']: horizontal,
			[(vertical && DYNAMIC_MODIFIERS.vertical[vertical.toString()]) || '']: vertical
		})
	);
</script>

<ul class={classes} role="menu" data-theme={dataTheme} {...$$restProps}>
	<slot />
</ul>
