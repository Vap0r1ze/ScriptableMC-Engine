declare var Java: any;
import ChatColor from '../../../org/bukkit/ChatColor.js'
import Class from '../../../java/lang/Class.js'
import ConversationContext from './ConversationContext.js'
import ConversationPrefix from './ConversationPrefix.js'
import Object from '../../../java/lang/Object.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'
import String from '../../../java/lang/String.js'

export default interface PluginNameConversationPrefix extends Object, ConversationPrefix {
	getPrefix(context: ConversationContext): string;
}

export default class PluginNameConversationPrefix {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.conversations.PluginNameConversationPrefix');
	}
	public static $isInstance(obj: any): obj is PluginNameConversationPrefix {
		return obj instanceof PluginNameConversationPrefix.$javaClass;
	}

	constructor(plugin: Plugin);
	constructor(plugin: Plugin, separator: string, prefixColor: ChatColor);
	constructor(...args: any[]) {
		return new PluginNameConversationPrefix.$javaClass(...args);
	}

}

