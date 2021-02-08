declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Class from '../../../../java/lang/Class.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityEvent from './EntityEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface EntityCombustEvent extends EntityEvent, Cancellable {
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

export default class EntityCombustEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityCombustEvent');
	}
	public static $isInstance(obj: any): obj is EntityCombustEvent {
		return obj instanceof EntityCombustEvent.$javaClass;
	}

	constructor(combustee: Entity, duration: number);
	constructor(...args: any[]) {
		return new EntityCombustEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return EntityCombustEvent.$javaClass.getHandlerList(...args);
	}

}

