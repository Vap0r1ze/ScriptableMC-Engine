declare var Java: any;
import BookMeta from '../../../../org/bukkit/inventory/meta/BookMeta.js'
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Class from '../../../../java/lang/Class.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Object from '../../../../java/lang/Object.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from './PlayerEvent.js'
import String from '../../../../java/lang/String.js'

export default interface PlayerEditBookEvent extends PlayerEvent, Cancellable {
	getEventName(): string;
	getHandlers(): HandlerList;
	getNewBookMeta(): BookMeta;
	getPlayer(): Player;
	getPreviousBookMeta(): BookMeta;
	getSlot(): number;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	isSigning(): boolean;
	setCancelled(cancel: boolean): void;
	setNewBookMeta(newBookMeta: BookMeta): void;
	setSigning(signing: boolean): void;
}

export default class PlayerEditBookEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerEditBookEvent');
	}
	public static $isInstance(obj: any): obj is PlayerEditBookEvent {
		return obj instanceof PlayerEditBookEvent.$javaClass;
	}

	constructor(who: Player, slot: number, previousBookMeta: BookMeta, newBookMeta: BookMeta, isSigning: boolean);
	constructor(...args: any[]) {
		return new PlayerEditBookEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerEditBookEvent.$javaClass.getHandlerList(...args);
	}

}

