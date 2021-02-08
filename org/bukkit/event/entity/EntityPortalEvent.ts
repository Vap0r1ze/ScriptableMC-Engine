declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityTeleportEvent from './EntityTeleportEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Location from '../../../../org/bukkit/Location.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface EntityPortalEvent extends EntityTeleportEvent {
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	getFrom(): Location;
	getHandlers(): HandlerList;
	getSearchRadius(): number;
	getTo(): Location;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	setFrom(from: Location): void;
	setSearchRadius(searchRadius: number): void;
	setTo(to: Location): void;
}

export default class EntityPortalEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityPortalEvent');
	}
	public static $isInstance(obj: any): obj is EntityPortalEvent {
		return obj instanceof EntityPortalEvent.$javaClass;
	}

	constructor(entity: Entity, from: Location, to: Location);
	constructor(entity: Entity, from: Location, to: Location, searchRadius: number);
	constructor(...args: any[]) {
		return new EntityPortalEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return EntityPortalEvent.$javaClass.getHandlerList(...args);
	}

}

