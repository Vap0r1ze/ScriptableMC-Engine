declare var Java: any;
import ConversationAbandonedEvent from './ConversationAbandonedEvent.js'
import EventListener from '../../../java/util/EventListener.js'

export default interface ConversationAbandonedListener extends EventListener {
	conversationAbandoned(arg0: ConversationAbandonedEvent): void;
}

export default class ConversationAbandonedListener {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.ConversationAbandonedListener');
	}
	public static $isInstance(obj: any): obj is ConversationAbandonedListener {
		return obj instanceof ConversationAbandonedListener.$javaClass;
	}

}

