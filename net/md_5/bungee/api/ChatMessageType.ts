declare var Java: any;

export default interface ChatMessageType {
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class ChatMessageType {
	public static get $javaClass(): any {
		return Java.type('net.md_5.bungee.api.ChatMessageType');
	}
	public static $isInstance(obj: any): obj is ChatMessageType {
		return obj instanceof ChatMessageType.$javaClass;
	}

	public static get ACTION_BAR(): ChatMessageType {
		return this.$javaClass.ACTION_BAR;
	}
	public static get CHAT(): ChatMessageType {
		return this.$javaClass.CHAT;
	}
	public static get SYSTEM(): ChatMessageType {
		return this.$javaClass.SYSTEM;
	}
}

