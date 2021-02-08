declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Class from '../../../../java/lang/Class.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityEvent from './EntityEvent.js'
import EntityRegainHealthEvent$RegainReason from './EntityRegainHealthEvent$RegainReason.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface EntityRegainHealthEvent extends EntityEvent, Cancellable {
	getAmount(): number;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	getHandlers(): HandlerList;
	getRegainReason(): EntityRegainHealthEvent$RegainReason;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setAmount(amount: number): void;
	setCancelled(cancel: boolean): void;
}

export default class EntityRegainHealthEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityRegainHealthEvent');
	}
	public static $isInstance(obj: any): obj is EntityRegainHealthEvent {
		return obj instanceof EntityRegainHealthEvent.$javaClass;
	}

	constructor(entity: Entity, amount: number, regainReason: EntityRegainHealthEvent$RegainReason);
	constructor(...args: any[]) {
		return new EntityRegainHealthEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return EntityRegainHealthEvent.$javaClass.getHandlerList(...args);
	}

}

