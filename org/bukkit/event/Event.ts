declare var Java: any;
import Class from '../../../java/lang/Class.js'
import HandlerList from './HandlerList.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface Event extends Object {
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

