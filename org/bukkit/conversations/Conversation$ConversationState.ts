declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Enum from '../../../java/lang/Enum.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface Conversation$ConversationState extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class Conversation$ConversationState {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.Conversation$ConversationState');
	}
	public static $isInstance(obj: any): obj is Conversation$ConversationState {
		return obj instanceof Conversation$ConversationState.$javaClass;
	}

	public static get ABANDONED(): Conversation$ConversationState {
		return this.$javaClass.ABANDONED;
	}
	public static get STARTED(): Conversation$ConversationState {
		return this.$javaClass.STARTED;
	}
	public static get UNSTARTED(): Conversation$ConversationState {
		return this.$javaClass.UNSTARTED;
	}
}

