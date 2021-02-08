declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Class from '../../../../java/lang/Class.js'
import ExperienceOrb from '../../../../org/bukkit/entity/ExperienceOrb.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js'
import Object from '../../../../java/lang/Object.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from './PlayerEvent.js'
import String from '../../../../java/lang/String.js'

export default interface PlayerItemMendEvent extends PlayerEvent, Cancellable {
	getEventName(): string;
	getExperienceOrb(): ExperienceOrb;
	getHandlers(): HandlerList;
	getItem(): ItemStack;
	getPlayer(): Player;
	getRepairAmount(): number;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancelled: boolean): void;
	setRepairAmount(amount: number): void;
}

export default class PlayerItemMendEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerItemMendEvent');
	}
	public static $isInstance(obj: any): obj is PlayerItemMendEvent {
		return obj instanceof PlayerItemMendEvent.$javaClass;
	}

	constructor(who: Player, item: ItemStack, experienceOrb: ExperienceOrb, repairAmount: number);
	constructor(...args: any[]) {
		return new PlayerItemMendEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerItemMendEvent.$javaClass.getHandlerList(...args);
	}

}

