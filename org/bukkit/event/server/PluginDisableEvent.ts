declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Object from '../../../../java/lang/Object.js'
import Plugin from '../../../../org/bukkit/plugin/Plugin.js'
import PluginEvent from './PluginEvent.js'
import String from '../../../../java/lang/String.js'

export default interface PluginDisableEvent extends PluginEvent {
	getEventName(): string;
	getHandlers(): HandlerList;
	getPlugin(): Plugin;
	isAsynchronous(): boolean;
}

export default class PluginDisableEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.server.PluginDisableEvent');
	}
	public static $isInstance(obj: any): obj is PluginDisableEvent {
		return obj instanceof PluginDisableEvent.$javaClass;
	}

	constructor(plugin: Plugin);
	constructor(...args: any[]) {
		return new PluginDisableEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PluginDisableEvent.$javaClass.getHandlerList(...args);
	}

}

