declare var Java: any;
import Class from '../../../java/lang/Class.js'
import ConversationContext from './ConversationContext.js'
import Object from '../../../java/lang/Object.js'
import Pattern from '../../../java/util/regex/Pattern.js'
import Prompt from './Prompt.js'
import String from '../../../java/lang/String.js'
import ValidatingPrompt from './ValidatingPrompt.js'

export default interface RegexPrompt extends ValidatingPrompt {
	acceptInput(context: ConversationContext, input: string): Prompt;
	blocksForInput(context: ConversationContext): boolean;
	getPromptText(arg0: ConversationContext): string;
}

export default class RegexPrompt {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.RegexPrompt');
	}
	public static $isInstance(obj: any): obj is RegexPrompt {
		return obj instanceof RegexPrompt.$javaClass;
	}

	constructor(regex: string);
	constructor(pattern: Pattern);
	constructor(...args: any[]) {
		return new RegexPrompt.$javaClass(...args);
	}

	public static get END_OF_CONVERSATION(): Prompt {
		return RegexPrompt.$javaClass.END_OF_CONVERSATION;
	}

}

