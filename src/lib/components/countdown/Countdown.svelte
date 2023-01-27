<script lang="ts">
	import { onMount } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import type { TProps as $$TProps } from './Countdown.type';

	let timer: NodeJS.Timeout | undefined;
	let initialValue: number;

	type $$Props = $$TProps;

	export let dataTheme: $$Props['dataTheme'] = undefined,
		className: $$Props['className'] = '',
		value: $$Props['value'],
		interval: $$Props['interval'] = 1000,
		stopAtEnd: $$Props['stopAtEnd'] = false;

	onMount(() => {
		initialValue = value;
		timer = setInterval(() => {
			if (value > 0) {
				value -= 1;
			} else {
				value = initialValue;
				if (stopAtEnd) clearInterval(timer);
			}
		}, interval);
	});

	export { className as class };

	$: classes = twMerge('countdown', className);
	$: countdownStyle = `--value:${Math.min(99, Math.max(0, value))}`;
</script>

<span role="timer" {...$$restProps} data-theme={dataTheme} class={classes}>
	<span style={countdownStyle} />
</span>
