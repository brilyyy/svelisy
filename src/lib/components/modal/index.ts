import Modal__SvelteComponent_, { type TModalProps } from './Modal.svelte';
import ModalHeader__SvelteComponent_, { type TModalHeaderProps } from './ModalHeader.svelte';
import ModalBody__SvelteComponent_, { type TModalBodyProps } from './ModalBody.svelte';
import ModalActions__SvelteComponent_, { type TModalActionProps } from './ModalActions.svelte';

export type ModalProps = TModalProps;
export type ModalHeaderProps = TModalHeaderProps;
export type ModalBodyProps = TModalBodyProps;
export type ModalActionsProps = TModalActionProps;

export default Object.assign(Modal__SvelteComponent_, {
	Header: ModalHeader__SvelteComponent_,
	Body: ModalBody__SvelteComponent_,
	Actions: ModalActions__SvelteComponent_
});
