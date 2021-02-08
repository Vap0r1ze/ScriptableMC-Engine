declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Class from '../../../../java/lang/Class.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityEvent from './EntityEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import LivingEntity from '../../../../org/bukkit/entity/LivingEntity.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface EntityToggleSwimEvent extends EntityEvent, Cancellable {
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	getHandlers(): HandlerList;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	isSwimming(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class EntityToggleSwimEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityToggleSwimEvent');
	}
	public static $isInstance(obj: any): obj is EntityToggleSwimEvent {
		return obj instanceof EntityToggleSwimEvent.$javaClass;
	}

	constructor(who: LivingEntity, isSwimming: boolean);
	constructor(...args: any[]) {
		return new EntityToggleSwimEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return EntityToggleSwimEvent.$javaClass.getHandlerList(...args);
	}

}

