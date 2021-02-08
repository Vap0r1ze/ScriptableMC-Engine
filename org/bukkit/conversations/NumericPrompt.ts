declare var Java: any;
import Class from '../../../java/lang/Class.js'
import ConversationContext from './ConversationContext.js'
import Object from '../../../java/lang/Object.js'
import Prompt from './Prompt.js'
import String from '../../../java/lang/String.js'
import ValidatingPrompt from './ValidatingPrompt.js'

export default interface NumericPrompt extends ValidatingPrompt {
	acceptInput(context: ConversationContext, input: string): Prompt;
	blocksForInput(context: ConversationContext): boolean;
	getPromptText(arg0: ConversationContext): string;
}

export default class NumericPrompt {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.NumericPrompt');
	}
	public static $isInstance(obj: any): obj is NumericPrompt {
		return obj instanceof NumericPrompt.$javaClass;
	}

	constructor();
	constructor(...args: any[]) {
		return new NumericPrompt.$javaClass(...args);
	}

	public static get END_OF_CONVERSATION(): Prompt {
		return NumericPrompt.$javaClass.END_OF_CONVERSATION;
	}

}

