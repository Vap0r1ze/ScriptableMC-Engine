declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Command from '../../../org/bukkit/command/Command.js'
import CommandSender from '../../../org/bukkit/command/CommandSender.js'
import HelpTopic from './HelpTopic.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface GenericCommandHelpTopic extends HelpTopic {
	amendCanSee(amendedPermission: string): void;
	amendTopic(amendedShortText: string, amendedFullText: string): void;
	canSee(sender: CommandSender): boolean;
	getFullText(forWho: CommandSender): string;
	getName(): string;
	getShortText(): string;
}

export default class GenericCommandHelpTopic {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.help.GenericCommandHelpTopic');
	}
	public static $isInstance(obj: any): obj is GenericCommandHelpTopic {
		return obj instanceof GenericCommandHelpTopic.$javaClass;
	}

	constructor(command: Command);
	constructor(...args: any[]) {
		return new GenericCommandHelpTopic.$javaClass(...args);
	}

}

