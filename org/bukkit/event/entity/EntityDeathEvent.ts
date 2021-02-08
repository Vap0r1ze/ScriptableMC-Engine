declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityEvent from './EntityEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js'
import List from '../../../../java/util/List.js'
import LivingEntity from '../../../../org/bukkit/entity/LivingEntity.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface EntityDeathEvent extends EntityEvent {
	getDroppedExp(): number;
	getDrops(): Array<ItemStack>;
	getEntity(): LivingEntity;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	getHandlers(): HandlerList;
	isAsynchronous(): boolean;
	setDroppedExp(exp: number): void;
}

export default class EntityDeathEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityDeathEvent');
	}
	public static $isInstance(obj: any): obj is EntityDeathEvent {
		return obj instanceof EntityDeathEvent.$javaClass;
	}

	constructor(entity: LivingEntity, drops: Array<any>);
	constructor(what: LivingEntity, drops: Array<any>, droppedExp: number);
	constructor(...args: any[]) {
		return new EntityDeathEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return EntityDeathEvent.$javaClass.getHandlerList(...args);
	}

}

