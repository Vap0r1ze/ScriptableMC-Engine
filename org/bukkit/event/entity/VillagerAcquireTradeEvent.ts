declare var Java: any;
import AbstractVillager from '../../../../org/bukkit/entity/AbstractVillager.js'
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Class from '../../../../java/lang/Class.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityEvent from './EntityEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import MerchantRecipe from '../../../../org/bukkit/inventory/MerchantRecipe.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface VillagerAcquireTradeEvent extends EntityEvent, Cancellable {
	getEntity(): Entity;
	getEntity(): AbstractVillager;
	getEntityType(): EntityType;
	getEventName(): string;
	getHandlers(): HandlerList;
	getRecipe(): MerchantRecipe;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	setRecipe(recipe: MerchantRecipe): void;
}

export default class VillagerAcquireTradeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.VillagerAcquireTradeEvent');
	}
	public static $isInstance(obj: any): obj is VillagerAcquireTradeEvent {
		return obj instanceof VillagerAcquireTradeEvent.$javaClass;
	}

	constructor(what: AbstractVillager, recipe: MerchantRecipe);
	constructor(...args: any[]) {
		return new VillagerAcquireTradeEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return VillagerAcquireTradeEvent.$javaClass.getHandlerList(...args);
	}

}

