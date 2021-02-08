declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Class from '../../../../java/lang/Class.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityEvent from './EntityEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import List from '../../../../java/util/List.js'
import Location from '../../../../org/bukkit/Location.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface EntityExplodeEvent extends EntityEvent, Cancellable {
	blockList(): Array<Block>;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	getHandlers(): HandlerList;
	getLocation(): Location;
	getYield(): number;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	setYield(_yield: number): void;
}

export default class EntityExplodeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityExplodeEvent');
	}
	public static $isInstance(obj: any): obj is EntityExplodeEvent {
		return obj instanceof EntityExplodeEvent.$javaClass;
	}

	constructor(what: Entity, location: Location, blocks: Array<any>, _yield: number);
	constructor(...args: any[]) {
		return new EntityExplodeEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return EntityExplodeEvent.$javaClass.getHandlerList(...args);
	}

}

