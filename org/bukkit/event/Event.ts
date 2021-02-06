declare var Java: any;
import HandlerList from './HandlerList.js'

export default interface Event {
	getEventName(): string;
	getHandlers(): HandlerList;
	isAsynchronous(): boolean;
}

export default class Event {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.Event');
	}
	public static $isInstance(obj: any): obj is Event {
		return obj instanceof Event.$javaClass;
	}

	constructor();
	constructor(isAsync: boolean);
	constructor(...args: any[]) {
		return new Event.$javaClass(...args);
	}

}

