declare var Java: any;
import Cloneable from '../../../java/lang/Cloneable.js'
import Conversation from './Conversation.js'
import ConversationContext from './ConversationContext.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface ConversationCanceller extends Cloneable {
	cancelBasedOnInput(arg0: ConversationContext, arg1: string): boolean;
	clone(): Object;
	clone(): ConversationCanceller;
	setConversation(arg0: Conversation): void;
}

export default class ConversationCanceller {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.ConversationCanceller');
	}
	public static $isInstance(obj: any): obj is ConversationCanceller {
		return obj instanceof ConversationCanceller.$javaClass;
	}

}

