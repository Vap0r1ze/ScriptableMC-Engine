declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Conversation from './Conversation.js'
import ConversationCanceller from './ConversationCanceller.js'
import ConversationContext from './ConversationContext.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface ExactMatchConversationCanceller extends Object, ConversationCanceller {
	cancelBasedOnInput(context: ConversationContext, input: string): boolean;
	clone(): ConversationCanceller;
	clone(): Object;
	setConversation(conversation: Conversation): void;
}

export default class ExactMatchConversationCanceller {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.ExactMatchConversationCanceller');
	}
	public static $isInstance(obj: any): obj is ExactMatchConversationCanceller {
		return obj instanceof ExactMatchConversationCanceller.$javaClass;
	}

	constructor(escapeSequence: string);
	constructor(...args: any[]) {
		return new ExactMatchConversationCanceller.$javaClass(...args);
	}

}

