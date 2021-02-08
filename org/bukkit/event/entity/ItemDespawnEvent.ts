declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Class from '../../../../java/lang/Class.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityEvent from './EntityEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Item from '../../../../org/bukkit/entity/Item.js'
import Location from '../../../../org/bukkit/Location.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface ItemDespawnEvent extends EntityEvent, Cancellable {
	getEntity(): Entity;
	getEntity(): Item;
	getEntityType(): EntityType;
	getEventName(): string;
	getHandlers(): HandlerList;
	getLocation(): Location;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class ItemDespawnEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.ItemDespawnEvent');
	}
	public static $isInstance(obj: any): obj is ItemDespawnEvent {
		return obj instanceof ItemDespawnEvent.$javaClass;
	}

	constructor(despawnee: Item, loc: Location);
	constructor(...args: any[]) {
		return new ItemDespawnEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return ItemDespawnEvent.$javaClass.getHandlerList(...args);
	}

}

