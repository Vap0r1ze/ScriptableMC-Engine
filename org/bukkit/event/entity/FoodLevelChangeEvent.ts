declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Class from '../../../../java/lang/Class.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityEvent from './EntityEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import HumanEntity from '../../../../org/bukkit/entity/HumanEntity.js'
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface FoodLevelChangeEvent extends EntityEvent, Cancellable {
	getEntity(): HumanEntity;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	getFoodLevel(): number;
	getHandlers(): HandlerList;
	getItem(): ItemStack;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	setFoodLevel(level: number): void;
}

export default class FoodLevelChangeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.FoodLevelChangeEvent');
	}
	public static $isInstance(obj: any): obj is FoodLevelChangeEvent {
		return obj instanceof FoodLevelChangeEvent.$javaClass;
	}

	constructor(what: HumanEntity, level: number);
	constructor(what: HumanEntity, level: number, item: ItemStack);
	constructor(...args: any[]) {
		return new FoodLevelChangeEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return FoodLevelChangeEvent.$javaClass.getHandlerList(...args);
	}

}

