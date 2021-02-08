declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Event from '../../../org/bukkit/event/Event.js'
import EventExecutor from './EventExecutor.js'
import EventPriority from '../../../org/bukkit/event/EventPriority.js'
import Listener from '../../../org/bukkit/event/Listener.js'
import Object from '../../../java/lang/Object.js'
import Plugin from './Plugin.js'
import RegisteredListener from './RegisteredListener.js'
import String from '../../../java/lang/String.js'

export default interface TimedRegisteredListener extends RegisteredListener {
	callEvent(event: Event): void;
	getCount(): number;
	getEventClass(): Class;
	getListener(): Listener;
	getPlugin(): Plugin;
	getPriority(): EventPriority;
	getTotalTime(): number;
	hasMultiple(): boolean;
	isIgnoringCancelled(): boolean;
	reset(): void;
}

export default class TimedRegisteredListener {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.TimedRegisteredListener');
	}
	public static $isInstance(obj: any): obj is TimedRegisteredListener {
		return obj instanceof TimedRegisteredListener.$javaClass;
	}

	constructor(pluginListener: Listener, eventExecutor: EventExecutor, eventPriority: EventPriority, registeredPlugin: Plugin, listenCancelled: boolean);
	constructor(...args: any[]) {
		return new TimedRegisteredListener.$javaClass(...args);
	}

}

