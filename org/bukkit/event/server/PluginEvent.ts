declare var Java: any;
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Plugin from '../../../../org/bukkit/plugin/Plugin.js'
import ServerEvent from './ServerEvent.js'

export default interface PluginEvent extends ServerEvent {
	getEventName(): string;
	getHandlers(): HandlerList;
	getPlugin(): Plugin;
	isAsynchronous(): boolean;
}

export default class PluginEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.server.PluginEvent');
	}
	public static $isInstance(obj: any): obj is PluginEvent {
		return obj instanceof PluginEvent.$javaClass;
	}

	constructor(plugin: Plugin);
	constructor(...args: any[]) {
		return new PluginEvent.$javaClass(...args);
	}

}

