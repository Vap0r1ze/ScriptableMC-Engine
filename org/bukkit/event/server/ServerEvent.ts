declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Event from '../../../../org/bukkit/event/Event.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface ServerEvent extends Event {
	getEventName(): string;
	getHandlers(): HandlerList;
	isAsynchronous(): boolean;
}

export default class ServerEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.server.ServerEvent');
	}
	public static $isInstance(obj: any): obj is ServerEvent {
		return obj instanceof ServerEvent.$javaClass;
	}

	constructor();
	constructor(isAsync: boolean);
	constructor(...args: any[]) {
		return new ServerEvent.$javaClass(...args);
	}

}

