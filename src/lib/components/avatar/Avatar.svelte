<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import clsx from 'clsx';
	import type { TProps as $$AvatarProps } from './Avatar.type';

	type $$Props = $$AvatarProps;

	export let dataTheme: $$Props['dataTheme'] = undefined,
		className: $$Props['className'] = '',
		src: $$Props['src'] = '',
		letters: $$Props['letters'] = '',
		size: $$Props['size'] = 'md',
		shape: $$Props['shape'] = undefined,
		color: $$Props['color'] = undefined,
		border: $$Props['border'] = undefined,
		borderColor: $$Props['borderColor'] = undefined,
		online: $$Props['online'] = undefined,
		offline: $$Props['offline'] = undefined,
		rounded: $$Props['rounded'] = undefined;

	export { className as class };

	$: containerClasses = twMerge(
		'avatar',
		className,
		clsx({
			online: online,
			offline: offline,
			placeholder: !src
		})
	);

	$: imgClasses = clsx({
		'ring ring-offset-base-100 ring-offset-2': border,
		[`ring-${borderColor}`]: borderColor,
		'rounded-btn': shape === 'square',
		'rounded-full': shape === 'circle',
		'w-32 h-32': size === 'lg',
		'w-24 h-24': size === 'md',
		'w-14 h-14': size === 'sm',
		'w-10 h-10': size === 'xs',
		['rounded']: !rounded,
		[`rounded${'-' + rounded}`]: rounded
	});

	$: placeholderClasses = clsx({
		'bg-neutral-focus': !color,
		'text-neutral-content': !color,
		[`bg-${color}`]: color,
		[`text-${color}-content`]: color,
		'ring ring-offset-base-100 ring-offset-2': border,
		[`ring-${borderColor}`]: borderColor,
		'rounded-btn': shape === 'square',
		'rounded-full': shape === 'circle',
		'w-32 h-32 text-3xl': size === 'lg',
		'w-24 h-24 text-xl': size === 'md',
		'w-14 h-14': size === 'sm',
		'w-10 h-10': size === 'xs'
	});

	const customImageDimension = typeof size === 'number' ? `width:${size}; height:${size};` : '';
</script>

<div aria-label="Avatar photo" {...$$restProps} data-theme={dataTheme} class={containerClasses}>
	{#if src}
		<div class={imgClasses} style={customImageDimension}>
			<img {src} alt="Avatar" />
		</div>
	{:else if letters}
		<div class={placeholderClasses} style={customImageDimension}>
			<span>{letters}</span>
		</div>
	{:else}
		<div class={imgClasses} style={customImageDimension}>
			<slot />
		</div>
	{/if}
</div>
