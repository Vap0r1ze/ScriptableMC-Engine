declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Object from '../../../../java/lang/Object.js'
import ServerEvent from './ServerEvent.js'
import ServerLoadEvent$LoadType from './ServerLoadEvent$LoadType.js'
import String from '../../../../java/lang/String.js'

export default interface ServerLoadEvent extends ServerEvent {
	getEventName(): string;
	getHandlers(): HandlerList;
	getType(): ServerLoadEvent$LoadType;
	isAsynchronous(): boolean;
}

export default class ServerLoadEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.server.ServerLoadEvent');
	}
	public static $isInstance(obj: any): obj is ServerLoadEvent {
		return obj instanceof ServerLoadEvent.$javaClass;
	}

	constructor(type: ServerLoadEvent$LoadType);
	constructor(...args: any[]) {
		return new ServerLoadEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return ServerLoadEvent.$javaClass.getHandlerList(...args);
	}

}

