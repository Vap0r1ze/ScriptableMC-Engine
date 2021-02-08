declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityCombustEvent from './EntityCombustEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface EntityCombustByEntityEvent extends EntityCombustEvent {
	getCombuster(): Entity;
	getDuration(): number;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	getHandlers(): HandlerList;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	setDuration(duration: number): void;
}

export default class EntityCombustByEntityEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityCombustByEntityEvent');
	}
	public static $isInstance(obj: any): obj is EntityCombustByEntityEvent {
		return obj instanceof EntityCombustByEntityEvent.$javaClass;
	}

	constructor(combuster: Entity, combustee: Entity, duration: number);
	constructor(...args: any[]) {
		return new EntityCombustByEntityEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return EntityCombustByEntityEvent.$javaClass.getHandlerList(...args);
	}

}

