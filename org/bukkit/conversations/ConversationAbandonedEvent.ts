declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Conversation from './Conversation.js'
import ConversationCanceller from './ConversationCanceller.js'
import ConversationContext from './ConversationContext.js'
import EventObject from '../../../java/util/EventObject.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface ConversationAbandonedEvent extends EventObject {
	getCanceller(): ConversationCanceller;
	getContext(): ConversationContext;
	getSource(): Object;
	gracefulExit(): boolean;
}

export default class ConversationAbandonedEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.ConversationAbandonedEvent');
	}
	public static $isInstance(obj: any): obj is ConversationAbandonedEvent {
		return obj instanceof ConversationAbandonedEvent.$javaClass;
	}

	constructor(conversation: Conversation);
	constructor(conversation: Conversation, canceller: ConversationCanceller);
	constructor(...args: any[]) {
		return new ConversationAbandonedEvent.$javaClass(...args);
	}

}

