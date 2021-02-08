declare var Java: any;
import EventPriority from './EventPriority.js'

export default interface EventHandler {
	annotationType(): any;
	ignoreCancelled(): boolean;
	priority(): EventPriority;
}

export default class EventHandler {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.EventHandler');
	}
	public static $isInstance(obj: any): obj is EventHandler {
		return obj instanceof EventHandler.$javaClass;
	}

}

