declare var Java: any;
import AreaEffectCloud from '../../../../org/bukkit/entity/AreaEffectCloud.js'
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityEvent from './EntityEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import LivingEntity from '../../../../org/bukkit/entity/LivingEntity.js'

export default interface AreaEffectCloudApplyEvent extends EntityEvent, Cancellable {
	getAffectedEntities(): Array<LivingEntity>;
	getEntity(): Entity;
	getEntity(): AreaEffectCloud;
	getEntityType(): EntityType;
	getEventName(): string;
	getHandlers(): HandlerList;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class AreaEffectCloudApplyEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.AreaEffectCloudApplyEvent');
	}
	public static $isInstance(obj: any): obj is AreaEffectCloudApplyEvent {
		return obj instanceof AreaEffectCloudApplyEvent.$javaClass;
	}

	constructor(entity: AreaEffectCloud, affectedEntities: Array<any>);
	constructor(...args: any[]) {
		return new AreaEffectCloudApplyEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return AreaEffectCloudApplyEvent.$javaClass.getHandlerList(...args);
	}

}

