declare var Java: any;
import ConversationContext from './ConversationContext.js'

export default interface ConversationPrefix {
	getPrefix(arg0: ConversationContext): string;
}

export default class ConversationPrefix {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.ConversationPrefix');
	}
	public static $isInstance(obj: any): obj is ConversationPrefix {
		return obj instanceof ConversationPrefix.$javaClass;
	}

}

