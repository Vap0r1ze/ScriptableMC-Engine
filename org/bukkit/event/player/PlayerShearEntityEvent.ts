declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Class from '../../../../java/lang/Class.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EquipmentSlot from '../../../../org/bukkit/inventory/EquipmentSlot.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js'
import Object from '../../../../java/lang/Object.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from './PlayerEvent.js'
import String from '../../../../java/lang/String.js'

export default interface PlayerShearEntityEvent extends PlayerEvent, Cancellable {
	getEntity(): Entity;
	getEventName(): string;
	getHand(): EquipmentSlot;
	getHandlers(): HandlerList;
	getItem(): ItemStack;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class PlayerShearEntityEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerShearEntityEvent');
	}
	public static $isInstance(obj: any): obj is PlayerShearEntityEvent {
		return obj instanceof PlayerShearEntityEvent.$javaClass;
	}

	constructor(who: Player, what: Entity);
	constructor(who: Player, what: Entity, item: ItemStack, hand: EquipmentSlot);
	constructor(...args: any[]) {
		return new PlayerShearEntityEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerShearEntityEvent.$javaClass.getHandlerList(...args);
	}

}

