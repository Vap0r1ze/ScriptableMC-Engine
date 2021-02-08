declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Class from '../../../../java/lang/Class.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Object from '../../../../java/lang/Object.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from './PlayerEvent.js'
import Set from '../../../../java/util/Set.js'
import String from '../../../../java/lang/String.js'

export default interface AsyncPlayerChatEvent extends PlayerEvent, Cancellable {
	getEventName(): string;
	getFormat(): string;
	getHandlers(): HandlerList;
	getMessage(): string;
	getPlayer(): Player;
	getRecipients(): Set;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	setFormat(format: string): void;
	setMessage(message: string): void;
}

export default class AsyncPlayerChatEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.AsyncPlayerChatEvent');
	}
	public static $isInstance(obj: any): obj is AsyncPlayerChatEvent {
		return obj instanceof AsyncPlayerChatEvent.$javaClass;
	}

	constructor(async: boolean, who: Player, message: string, players: Set);
	constructor(...args: any[]) {
		return new AsyncPlayerChatEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return AsyncPlayerChatEvent.$javaClass.getHandlerList(...args);
	}

}

