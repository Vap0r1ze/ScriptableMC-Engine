declare var Java: any;
import CommandSender from '../../../org/bukkit/command/CommandSender.js'

export default interface HelpTopic {
	amendCanSee(amendedPermission: string): void;
	amendTopic(amendedShortText: string, amendedFullText: string): void;
	canSee(arg0: CommandSender): boolean;
	getFullText(forWho: CommandSender): string;
	getName(): string;
	getShortText(): string;
}

export default class HelpTopic {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.help.HelpTopic');
	}
	public static $isInstance(obj: any): obj is HelpTopic {
		return obj instanceof HelpTopic.$javaClass;
	}

	constructor();
	constructor(...args: any[]) {
		return new HelpTopic.$javaClass(...args);
	}

}

