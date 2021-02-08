declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Collection from '../../../java/util/Collection.js'
import CommandSender from '../../../org/bukkit/command/CommandSender.js'
import HelpTopic from './HelpTopic.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface IndexHelpTopic extends HelpTopic {
	amendCanSee(amendedPermission: string): void;
	amendTopic(amendedShortText: string, amendedFullText: string): void;
	canSee(sender: CommandSender): boolean;
	getFullText(sender: CommandSender): string;
	getName(): string;
	getShortText(): string;
}

export default class IndexHelpTopic {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.help.IndexHelpTopic');
	}
	public static $isInstance(obj: any): obj is IndexHelpTopic {
		return obj instanceof IndexHelpTopic.$javaClass;
	}

	constructor(_name: string, shortText: string, permission: string, topics: Array<any>);
	constructor(_name: string, shortText: string, permission: string, topics: Array<any>, preamble: string);
	constructor(...args: any[]) {
		return new IndexHelpTopic.$javaClass(...args);
	}

}

