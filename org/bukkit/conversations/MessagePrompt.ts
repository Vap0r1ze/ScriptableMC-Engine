declare var Java: any;
import Class from '../../../java/lang/Class.js'
import ConversationContext from './ConversationContext.js'
import Object from '../../../java/lang/Object.js'
import Prompt from './Prompt.js'
import String from '../../../java/lang/String.js'

export default interface MessagePrompt extends Object, Prompt {
	acceptInput(context: ConversationContext, input: string): Prompt;
	blocksForInput(context: ConversationContext): boolean;
	getPromptText(arg0: ConversationContext): string;
}

export default class MessagePrompt {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.MessagePrompt');
	}
	public static $isInstance(obj: any): obj is MessagePrompt {
		return obj instanceof MessagePrompt.$javaClass;
	}

	constructor();
	constructor(...args: any[]) {
		return new MessagePrompt.$javaClass(...args);
	}

	public static get END_OF_CONVERSATION(): Prompt {
		return MessagePrompt.$javaClass.END_OF_CONVERSATION;
	}

}

