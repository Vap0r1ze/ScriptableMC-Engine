declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js'
import Object from '../../../../java/lang/Object.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from './PlayerEvent.js'
import String from '../../../../java/lang/String.js'

export default interface PlayerItemBreakEvent extends PlayerEvent {
	getBrokenItem(): ItemStack;
	getEventName(): string;
	getHandlers(): HandlerList;
	getPlayer(): Player;
	isAsynchronous(): boolean;
}

export default class PlayerItemBreakEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerItemBreakEvent');
	}
	public static $isInstance(obj: any): obj is PlayerItemBreakEvent {
		return obj instanceof PlayerItemBreakEvent.$javaClass;
	}

	constructor(player: Player, brokenItem: ItemStack);
	constructor(...args: any[]) {
		return new PlayerItemBreakEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerItemBreakEvent.$javaClass.getHandlerList(...args);
	}

}

