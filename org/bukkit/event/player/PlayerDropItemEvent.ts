declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Class from '../../../../java/lang/Class.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Item from '../../../../org/bukkit/entity/Item.js'
import Object from '../../../../java/lang/Object.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from './PlayerEvent.js'
import String from '../../../../java/lang/String.js'

export default interface PlayerDropItemEvent extends PlayerEvent, Cancellable {
	getEventName(): string;
	getHandlers(): HandlerList;
	getItemDrop(): Item;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class PlayerDropItemEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerDropItemEvent');
	}
	public static $isInstance(obj: any): obj is PlayerDropItemEvent {
		return obj instanceof PlayerDropItemEvent.$javaClass;
	}

	constructor(player: Player, drop: Item);
	constructor(...args: any[]) {
		return new PlayerDropItemEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerDropItemEvent.$javaClass.getHandlerList(...args);
	}

}

