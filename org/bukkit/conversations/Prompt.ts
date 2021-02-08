declare var Java: any;
import Cloneable from '../../../java/lang/Cloneable.js'
import ConversationContext from './ConversationContext.js'
import String from '../../../java/lang/String.js'

export default interface Prompt extends Cloneable {
	acceptInput(arg0: ConversationContext, arg1: string): Prompt;
	blocksForInput(arg0: ConversationContext): boolean;
	getPromptText(arg0: ConversationContext): string;
}

export default class Prompt {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.Prompt');
	}
	public static $isInstance(obj: any): obj is Prompt {
		return obj instanceof Prompt.$javaClass;
	}

	public static get END_OF_CONVERSATION(): Prompt {
		return Prompt.$javaClass.END_OF_CONVERSATION;
	}

}

