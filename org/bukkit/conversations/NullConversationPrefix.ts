declare var Java: any;
import Class from '../../../java/lang/Class.js'
import ConversationContext from './ConversationContext.js'
import ConversationPrefix from './ConversationPrefix.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface NullConversationPrefix extends Object, ConversationPrefix {
	getPrefix(context: ConversationContext): string;
}

export default class NullConversationPrefix {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.NullConversationPrefix');
	}
	public static $isInstance(obj: any): obj is NullConversationPrefix {
		return obj instanceof NullConversationPrefix.$javaClass;
	}

	constructor();
	constructor(...args: any[]) {
		return new NullConversationPrefix.$javaClass(...args);
	}

}

