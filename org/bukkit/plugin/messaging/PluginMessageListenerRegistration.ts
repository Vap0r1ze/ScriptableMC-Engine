declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Messenger from './Messenger.js'
import Object from '../../../../java/lang/Object.js'
import Plugin from '../../../../org/bukkit/plugin/Plugin.js'
import PluginMessageListener from './PluginMessageListener.js'
import String from '../../../../java/lang/String.js'

export default interface PluginMessageListenerRegistration extends Object {
	getChannel(): string;
	getListener(): PluginMessageListener;
	getPlugin(): Plugin;
	isValid(): boolean;
}

export default class PluginMessageListenerRegistration {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.messaging.PluginMessageListenerRegistration');
	}
	public static $isInstance(obj: any): obj is PluginMessageListenerRegistration {
		return obj instanceof PluginMessageListenerRegistration.$javaClass;
	}

	constructor(messenger: Messenger, plugin: Plugin, channel: string, listener: PluginMessageListener);
	constructor(...args: any[]) {
		return new PluginMessageListenerRegistration.$javaClass(...args);
	}

}

