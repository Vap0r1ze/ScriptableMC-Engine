declare var Java: any;
import ConversationContext from './ConversationContext.js'
import Prompt from './Prompt.js'
import ValidatingPrompt from './ValidatingPrompt.js'

export default interface BooleanPrompt extends ValidatingPrompt {
	acceptInput(context: ConversationContext, input: string): Prompt;
	blocksForInput(context: ConversationContext): boolean;
	getPromptText(arg0: ConversationContext): string;
}

export default class BooleanPrompt {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.BooleanPrompt');
	}
	public static $isInstance(obj: any): obj is BooleanPrompt {
		return obj instanceof BooleanPrompt.$javaClass;
	}

	constructor();
	constructor(...args: any[]) {
		return new BooleanPrompt.$javaClass(...args);
	}

	public static get END_OF_CONVERSATION(): Prompt {
		return BooleanPrompt.$javaClass.END_OF_CONVERSATION;
	}

}

