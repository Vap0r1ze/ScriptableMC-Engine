declare var Java: any;
import BlockState from '../../../../org/bukkit/block/BlockState.js'
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Class from '../../../../java/lang/Class.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityEvent from './EntityEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import List from '../../../../java/util/List.js'
import LivingEntity from '../../../../org/bukkit/entity/LivingEntity.js'
import Object from '../../../../java/lang/Object.js'
import PortalType from '../../../../org/bukkit/PortalType.js'
import String from '../../../../java/lang/String.js'

export default interface EntityCreatePortalEvent extends EntityEvent, Cancellable {
	getBlocks(): Array<BlockState>;
	getEntity(): LivingEntity;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	getHandlers(): HandlerList;
	getPortalType(): PortalType;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class EntityCreatePortalEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityCreatePortalEvent');
	}
	public static $isInstance(obj: any): obj is EntityCreatePortalEvent {
		return obj instanceof EntityCreatePortalEvent.$javaClass;
	}

	constructor(what: LivingEntity, blocks: Array<any>, type: PortalType);
	constructor(...args: any[]) {
		return new EntityCreatePortalEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return EntityCreatePortalEvent.$javaClass.getHandlerList(...args);
	}

}

