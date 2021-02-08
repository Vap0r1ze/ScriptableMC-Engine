declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Class from '../../../../java/lang/Class.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Item from '../../../../org/bukkit/entity/Item.js'
import Object from '../../../../java/lang/Object.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from './PlayerEvent.js'
import String from '../../../../java/lang/String.js'

export default interface PlayerPickupItemEvent extends PlayerEvent, Cancellable {
	getEventName(): string;
	getHandlers(): HandlerList;
	getItem(): Item;
	getPlayer(): Player;
	getRemaining(): number;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class PlayerPickupItemEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerPickupItemEvent');
	}
	public static $isInstance(obj: any): obj is PlayerPickupItemEvent {
		return obj instanceof PlayerPickupItemEvent.$javaClass;
	}

	constructor(player: Player, item: Item, remaining: number);
	constructor(...args: any[]) {
		return new PlayerPickupItemEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerPickupItemEvent.$javaClass.getHandlerList(...args);
	}

}

