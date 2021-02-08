declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Class from '../../../../java/lang/Class.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js'
import Object from '../../../../java/lang/Object.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from './PlayerEvent.js'
import String from '../../../../java/lang/String.js'

export default interface PlayerItemConsumeEvent extends PlayerEvent, Cancellable {
	getEventName(): string;
	getHandlers(): HandlerList;
	getItem(): ItemStack;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	setItem(item: ItemStack): void;
}

export default class PlayerItemConsumeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerItemConsumeEvent');
	}
	public static $isInstance(obj: any): obj is PlayerItemConsumeEvent {
		return obj instanceof PlayerItemConsumeEvent.$javaClass;
	}

	constructor(player: Player, item: ItemStack);
	constructor(...args: any[]) {
		return new PlayerItemConsumeEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerItemConsumeEvent.$javaClass.getHandlerList(...args);
	}

}

