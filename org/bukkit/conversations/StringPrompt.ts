declare var Java: any;
import Class from '../../../java/lang/Class.js'
import ConversationContext from './ConversationContext.js'
import Object from '../../../java/lang/Object.js'
import Prompt from './Prompt.js'
import String from '../../../java/lang/String.js'

export default interface StringPrompt extends Object, Prompt {
	acceptInput(arg0: ConversationContext, arg1: string): Prompt;
	blocksForInput(context: ConversationContext): boolean;
	getPromptText(arg0: ConversationContext): string;
}

export default class StringPrompt {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.StringPrompt');
	}
	public static $isInstance(obj: any): obj is StringPrompt {
		return obj instanceof StringPrompt.$javaClass;
	}

	constructor();
	constructor(...args: any[]) {
		return new StringPrompt.$javaClass(...args);
	}

	public static get END_OF_CONVERSATION(): Prompt {
		return StringPrompt.$javaClass.END_OF_CONVERSATION;
	}

}

