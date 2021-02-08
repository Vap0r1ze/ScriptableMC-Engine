declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import CommandSender from '../../../../org/bukkit/command/CommandSender.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Object from '../../../../java/lang/Object.js'
import ServerCommandEvent from './ServerCommandEvent.js'
import String from '../../../../java/lang/String.js'

export default interface RemoteServerCommandEvent extends ServerCommandEvent {
	getCommand(): string;
	getEventName(): string;
	getHandlers(): HandlerList;
	getSender(): CommandSender;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	setCommand(message: string): void;
}

export default class RemoteServerCommandEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.server.RemoteServerCommandEvent');
	}
	public static $isInstance(obj: any): obj is RemoteServerCommandEvent {
		return obj instanceof RemoteServerCommandEvent.$javaClass;
	}

	constructor(sender: CommandSender, command: string);
	constructor(...args: any[]) {
		return new RemoteServerCommandEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return RemoteServerCommandEvent.$javaClass.getHandlerList(...args);
	}

}

