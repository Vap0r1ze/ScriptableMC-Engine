declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Conversable from './Conversable.js'
import Conversation$ConversationState from './Conversation$ConversationState.js'
import ConversationAbandonedEvent from './ConversationAbandonedEvent.js'
import ConversationAbandonedListener from './ConversationAbandonedListener.js'
import ConversationCanceller from './ConversationCanceller.js'
import ConversationContext from './ConversationContext.js'
import ConversationPrefix from './ConversationPrefix.js'
import List from '../../../java/util/List.js'
import Map from '../../../java/util/Map.js'
import Object from '../../../java/lang/Object.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'
import Prompt from './Prompt.js'
import String from '../../../java/lang/String.js'

export default interface Conversation extends Object {
	abandon(): void;
	abandon(details: ConversationAbandonedEvent): void;
	acceptInput(input: string): void;
	addConversationAbandonedListener(listener: ConversationAbandonedListener): void;
	begin(): void;
	getCancellers(): Array<ConversationCanceller>;
	getContext(): ConversationContext;
	getForWhom(): Conversable;
	getPrefix(): ConversationPrefix;
	getState(): Conversation$ConversationState;
	isLocalEchoEnabled(): boolean;
	isModal(): boolean;
	outputNextPrompt(): void;
	removeConversationAbandonedListener(listener: ConversationAbandonedListener): void;
	setLocalEchoEnabled(localEchoEnabled: boolean): void;
}

export default class Conversation {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.Conversation');
	}
	public static $isInstance(obj: any): obj is Conversation {
		return obj instanceof Conversation.$javaClass;
	}

	constructor(plugin: Plugin, forWhom: Conversable, firstPrompt: Prompt);
	constructor(plugin: Plugin, forWhom: Conversable, firstPrompt: Prompt, initialSessionData: Map);
	constructor(...args: any[]) {
		return new Conversation.$javaClass(...args);
	}

}

