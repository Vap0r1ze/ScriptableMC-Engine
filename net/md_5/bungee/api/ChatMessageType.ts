declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Enum from '../../../../java/lang/Enum.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface ChatMessageType extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
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

