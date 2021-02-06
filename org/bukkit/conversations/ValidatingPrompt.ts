declare var Java: any;
import ConversationContext from './ConversationContext.js'
import Prompt from './Prompt.js'

export default interface ValidatingPrompt extends Prompt {
	acceptInput(context: ConversationContext, input: string): Prompt;
	blocksForInput(context: ConversationContext): boolean;
	getPromptText(arg0: ConversationContext): string;
}

export default class ValidatingPrompt {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.ValidatingPrompt');
	}
	public static $isInstance(obj: any): obj is ValidatingPrompt {
		return obj instanceof ValidatingPrompt.$javaClass;
	}

	constructor();
	constructor(...args: any[]) {
		return new ValidatingPrompt.$javaClass(...args);
	}

	public static get END_OF_CONVERSATION(): Prompt {
		return ValidatingPrompt.$javaClass.END_OF_CONVERSATION;
	}

}

