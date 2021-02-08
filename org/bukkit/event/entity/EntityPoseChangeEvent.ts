declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityEvent from './EntityEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Object from '../../../../java/lang/Object.js'
import Pose from '../../../../org/bukkit/entity/Pose.js'
import String from '../../../../java/lang/String.js'

export default interface EntityPoseChangeEvent extends EntityEvent {
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	getHandlers(): HandlerList;
	getPose(): Pose;
	isAsynchronous(): boolean;
}

export default class EntityPoseChangeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityPoseChangeEvent');
	}
	public static $isInstance(obj: any): obj is EntityPoseChangeEvent {
		return obj instanceof EntityPoseChangeEvent.$javaClass;
	}

	constructor(who: Entity, pose: Pose);
	constructor(...args: any[]) {
		return new EntityPoseChangeEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return EntityPoseChangeEvent.$javaClass.getHandlerList(...args);
	}

}

