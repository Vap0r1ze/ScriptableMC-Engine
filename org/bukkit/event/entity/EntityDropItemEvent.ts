declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Class from '../../../../java/lang/Class.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityEvent from './EntityEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Item from '../../../../org/bukkit/entity/Item.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface EntityDropItemEvent extends EntityEvent, Cancellable {
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	getHandlers(): HandlerList;
	getItemDrop(): Item;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class EntityDropItemEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityDropItemEvent');
	}
	public static $isInstance(obj: any): obj is EntityDropItemEvent {
		return obj instanceof EntityDropItemEvent.$javaClass;
	}

	constructor(entity: Entity, drop: Item);
	constructor(...args: any[]) {
		return new EntityDropItemEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return EntityDropItemEvent.$javaClass.getHandlerList(...args);
	}

}

