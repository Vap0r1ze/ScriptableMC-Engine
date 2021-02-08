declare var Java: any;
import Plugin from '../../../../org/bukkit/plugin/Plugin.js'
import Set from '../../../../java/util/Set.js'
import String from '../../../../java/lang/String.js'

export default interface PluginMessageRecipient {
	getListeningPluginChannels(): Set;
	sendPluginMessage(arg0: Plugin, arg1: string, arg2: Array<number>): void;
}

export default class PluginMessageRecipient {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.messaging.PluginMessageRecipient');
	}
	public static $isInstance(obj: any): obj is PluginMessageRecipient {
		return obj instanceof PluginMessageRecipient.$javaClass;
	}

}

