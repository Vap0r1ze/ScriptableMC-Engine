declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Class from '../../../../java/lang/Class.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js'
import Object from '../../../../java/lang/Object.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from './PlayerEvent.js'
import String from '../../../../java/lang/String.js'

export default interface PlayerItemDamageEvent extends PlayerEvent, Cancellable {
	getDamage(): number;
	getEventName(): string;
	getHandlers(): HandlerList;
	getItem(): ItemStack;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	setDamage(damage: number): void;
}

export default class PlayerItemDamageEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerItemDamageEvent');
	}
	public static $isInstance(obj: any): obj is PlayerItemDamageEvent {
		return obj instanceof PlayerItemDamageEvent.$javaClass;
	}

	constructor(player: Player, what: ItemStack, damage: number);
	constructor(...args: any[]) {
		return new PlayerItemDamageEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerItemDamageEvent.$javaClass.getHandlerList(...args);
	}

}

