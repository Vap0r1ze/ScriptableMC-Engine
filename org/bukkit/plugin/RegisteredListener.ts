declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Event from '../../../org/bukkit/event/Event.js'
import EventExecutor from './EventExecutor.js'
import EventPriority from '../../../org/bukkit/event/EventPriority.js'
import Listener from '../../../org/bukkit/event/Listener.js'
import Object from '../../../java/lang/Object.js'
import Plugin from './Plugin.js'
import String from '../../../java/lang/String.js'

export default interface RegisteredListener extends Object {
	callEvent(event: Event): void;
	getListener(): Listener;
	getPlugin(): Plugin;
	getPriority(): EventPriority;
	isIgnoringCancelled(): boolean;
}

export default class RegisteredListener {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.RegisteredListener');
	}
	public static $isInstance(obj: any): obj is RegisteredListener {
		return obj instanceof RegisteredListener.$javaClass;
	}

	constructor(listener: Listener, executor: EventExecutor, priority: EventPriority, plugin: Plugin, ignoreCancelled: boolean);
	constructor(...args: any[]) {
		return new RegisteredListener.$javaClass(...args);
	}

}

