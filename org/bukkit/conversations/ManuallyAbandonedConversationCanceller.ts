declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Conversation from './Conversation.js'
import ConversationCanceller from './ConversationCanceller.js'
import ConversationContext from './ConversationContext.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface ManuallyAbandonedConversationCanceller extends Object, ConversationCanceller {
	cancelBasedOnInput(context: ConversationContext, input: string): boolean;
	clone(): ConversationCanceller;
	clone(): Object;
	setConversation(conversation: Conversation): void;
}

export default class ManuallyAbandonedConversationCanceller {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.ManuallyAbandonedConversationCanceller');
	}
	public static $isInstance(obj: any): obj is ManuallyAbandonedConversationCanceller {
		return obj instanceof ManuallyAbandonedConversationCanceller.$javaClass;
	}

	constructor();
	constructor(...args: any[]) {
		return new ManuallyAbandonedConversationCanceller.$javaClass(...args);
	}

}

