declare var Java: any;
import Class from '../../../java/lang/Class.js'
import ConversationContext from './ConversationContext.js'
import Object from '../../../java/lang/Object.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'
import Prompt from './Prompt.js'
import String from '../../../java/lang/String.js'
import ValidatingPrompt from './ValidatingPrompt.js'

export default interface PlayerNamePrompt extends ValidatingPrompt {
	acceptInput(context: ConversationContext, input: string): Prompt;
	blocksForInput(context: ConversationContext): boolean;
	getPromptText(arg0: ConversationContext): string;
}

export default class PlayerNamePrompt {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.PlayerNamePrompt');
	}
	public static $isInstance(obj: any): obj is PlayerNamePrompt {
		return obj instanceof PlayerNamePrompt.$javaClass;
	}

	constructor(plugin: Plugin);
	constructor(...args: any[]) {
		return new PlayerNamePrompt.$javaClass(...args);
	}

	public static get END_OF_CONVERSATION(): Prompt {
		return PlayerNamePrompt.$javaClass.END_OF_CONVERSATION;
	}

}

