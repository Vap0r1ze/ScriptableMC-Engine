declare var Java: any;
import ChatColor from '../../../org/bukkit/ChatColor.js'
import ConversationContext from './ConversationContext.js'
import ConversationPrefix from './ConversationPrefix.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'

export default interface PluginNameConversationPrefix extends ConversationPrefix {
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

