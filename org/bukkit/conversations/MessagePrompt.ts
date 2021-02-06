declare var Java: any;
import ConversationContext from './ConversationContext.js'
import Prompt from './Prompt.js'

export default interface MessagePrompt extends Prompt {
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

