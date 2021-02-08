declare var Java: any;
import Player from '../../../../org/bukkit/entity/Player.js'
import String from '../../../../java/lang/String.js'

export default interface PluginMessageListener {
	onPluginMessageReceived(arg0: string, arg1: Player, arg2: Array<number>): void;
}

export default class PluginMessageListener {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.messaging.PluginMessageListener');
	}
	public static $isInstance(obj: any): obj is PluginMessageListener {
		return obj instanceof PluginMessageListener.$javaClass;
	}

}

