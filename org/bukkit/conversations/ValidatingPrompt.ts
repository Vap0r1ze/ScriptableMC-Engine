declare var Java: any;
import Class from '../../../java/lang/Class.js'
import ConversationContext from './ConversationContext.js'
import Object from '../../../java/lang/Object.js'
import Prompt from './Prompt.js'
import String from '../../../java/lang/String.js'

export default interface ValidatingPrompt extends Object, Prompt {
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

