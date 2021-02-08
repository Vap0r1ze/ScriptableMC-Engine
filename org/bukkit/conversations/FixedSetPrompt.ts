declare var Java: any;
import Class from '../../../java/lang/Class.js'
import ConversationContext from './ConversationContext.js'
import Object from '../../../java/lang/Object.js'
import Prompt from './Prompt.js'
import String from '../../../java/lang/String.js'
import ValidatingPrompt from './ValidatingPrompt.js'

export default interface FixedSetPrompt extends ValidatingPrompt {
	acceptInput(context: ConversationContext, input: string): Prompt;
	blocksForInput(context: ConversationContext): boolean;
	getPromptText(arg0: ConversationContext): string;
}

export default class FixedSetPrompt {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.FixedSetPrompt');
	}
	public static $isInstance(obj: any): obj is FixedSetPrompt {
		return obj instanceof FixedSetPrompt.$javaClass;
	}

	constructor(fixedSet: Array<string>);
	constructor(...args: any[]) {
		return new FixedSetPrompt.$javaClass(...args);
	}

	public static get END_OF_CONVERSATION(): Prompt {
		return FixedSetPrompt.$javaClass.END_OF_CONVERSATION;
	}

}

