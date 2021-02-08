declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Class from '../../../../java/lang/Class.js'
import CommandSender from '../../../../org/bukkit/command/CommandSender.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Object from '../../../../java/lang/Object.js'
import ServerEvent from './ServerEvent.js'
import String from '../../../../java/lang/String.js'

export default interface ServerCommandEvent extends ServerEvent, Cancellable {
	getCommand(): string;
	getEventName(): string;
	getHandlers(): HandlerList;
	getSender(): CommandSender;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	setCommand(message: string): void;
}

export default class ServerCommandEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.server.ServerCommandEvent');
	}
	public static $isInstance(obj: any): obj is ServerCommandEvent {
		return obj instanceof ServerCommandEvent.$javaClass;
	}

	constructor(sender: CommandSender, command: string);
	constructor(...args: any[]) {
		return new ServerCommandEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return ServerCommandEvent.$javaClass.getHandlerList(...args);
	}

}

