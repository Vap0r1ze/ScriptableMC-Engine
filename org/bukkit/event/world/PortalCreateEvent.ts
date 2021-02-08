declare var Java: any;
import BlockState from '../../../../org/bukkit/block/BlockState.js'
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Class from '../../../../java/lang/Class.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import List from '../../../../java/util/List.js'
import Object from '../../../../java/lang/Object.js'
import PortalCreateEvent$CreateReason from './PortalCreateEvent$CreateReason.js'
import String from '../../../../java/lang/String.js'
import World from '../../../../org/bukkit/World.js'
import WorldEvent from './WorldEvent.js'

export default interface PortalCreateEvent extends WorldEvent, Cancellable {
	getBlocks(): Array<BlockState>;
	getEntity(): Entity;
	getEventName(): string;
	getHandlers(): HandlerList;
	getReason(): PortalCreateEvent$CreateReason;
	getWorld(): World;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class PortalCreateEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.world.PortalCreateEvent');
	}
	public static $isInstance(obj: any): obj is PortalCreateEvent {
		return obj instanceof PortalCreateEvent.$javaClass;
	}

	constructor(blocks: Array<any>, world: World, reason: PortalCreateEvent$CreateReason);
	constructor(blocks: Array<any>, world: World, entity: Entity, reason: PortalCreateEvent$CreateReason);
	constructor(...args: any[]) {
		return new PortalCreateEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PortalCreateEvent.$javaClass.getHandlerList(...args);
	}

}

