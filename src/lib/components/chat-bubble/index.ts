import ChatBubble__SvelteComponent_, { type TChatBubbleProps } from './ChatBubble.svelte';
import Avatar__SvelteComponent_, { type TChatAvatarProps } from './components/Avatar.svelte';
import Header__SvelteComponent_, { type TChatHeaderProps } from './components/Header.svelte';
import Footer__SvelteComponent_, { type TChatFooterProps } from './components/Footer.svelte';
import Time__SvelteComponent_, { type TChatTimeProps } from './components/Time.svelte';
import Message__SvelteComponent_, { type TChatMessageProps } from './components/Message.svelte';

export type ChatBubbleProps = TChatBubbleProps;
export type ChatAvatarProps = TChatAvatarProps;
export type ChatHeaderProps = TChatHeaderProps;
export type ChatFooterProps = TChatFooterProps;
export type ChatTimeProps = TChatTimeProps;
export type ChatMessageProps = TChatMessageProps;

export default Object.assign(ChatBubble__SvelteComponent_, {
	Header: Header__SvelteComponent_,
	Time: Time__SvelteComponent_,
	Footer: Footer__SvelteComponent_,
	Avatar: Avatar__SvelteComponent_,
	Message: Message__SvelteComponent_
});
