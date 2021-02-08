declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Class from '../../../../java/lang/Class.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Object from '../../../../java/lang/Object.js'
import ServerEvent from './ServerEvent.js'
import Set from '../../../../java/util/Set.js'
import String from '../../../../java/lang/String.js'

export default interface BroadcastMessageEvent extends ServerEvent, Cancellable {
	getEventName(): string;
	getHandlers(): HandlerList;
	getMessage(): string;
	getRecipients(): Set;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancelled: boolean): void;
	setMessage(message: string): void;
}

export default class BroadcastMessageEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.server.BroadcastMessageEvent');
	}
	public static $isInstance(obj: any): obj is BroadcastMessageEvent {
		return obj instanceof BroadcastMessageEvent.$javaClass;
	}

	constructor(message: string, recipients: Set);
	constructor(isAsync: boolean, message: string, recipients: Set);
	constructor(...args: any[]) {
		return new BroadcastMessageEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return BroadcastMessageEvent.$javaClass.getHandlerList(...args);
	}

}

