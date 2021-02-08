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

export default interface ItemMergeEvent extends EntityEvent, Cancellable {
	getEntity(): Entity;
	getEntity(): Item;
	getEntityType(): EntityType;
	getEventName(): string;
	getHandlers(): HandlerList;
	getTarget(): Item;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancelled: boolean): void;
}

export default class ItemMergeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.ItemMergeEvent');
	}
	public static $isInstance(obj: any): obj is ItemMergeEvent {
		return obj instanceof ItemMergeEvent.$javaClass;
	}

	constructor(item: Item, target: Item);
	constructor(...args: any[]) {
		return new ItemMergeEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return ItemMergeEvent.$javaClass.getHandlerList(...args);
	}

}

