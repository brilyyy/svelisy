import Component__SvelteComponent_ from './Steps.svelte';
import Step from './Step.svelte';
import type { TProps, TStepProps } from './Steps.type';

export type StepsProps = TProps;
export type StepProps = TStepProps;

export default Object.assign(Component__SvelteComponent_, {
  Step: Step
});
