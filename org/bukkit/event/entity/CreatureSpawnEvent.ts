declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import CreatureSpawnEvent$SpawnReason from './CreatureSpawnEvent$SpawnReason.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntitySpawnEvent from './EntitySpawnEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import LivingEntity from '../../../../org/bukkit/entity/LivingEntity.js'
import Location from '../../../../org/bukkit/Location.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface CreatureSpawnEvent extends EntitySpawnEvent {
	getEntity(): Entity;
	getEntity(): LivingEntity;
	getEntityType(): EntityType;
	getEventName(): string;
	getHandlers(): HandlerList;
	getLocation(): Location;
	getSpawnReason(): CreatureSpawnEvent$SpawnReason;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class CreatureSpawnEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.CreatureSpawnEvent');
	}
	public static $isInstance(obj: any): obj is CreatureSpawnEvent {
		return obj instanceof CreatureSpawnEvent.$javaClass;
	}

	constructor(spawnee: LivingEntity, spawnReason: CreatureSpawnEvent$SpawnReason);
	constructor(...args: any[]) {
		return new CreatureSpawnEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return CreatureSpawnEvent.$javaClass.getHandlerList(...args);
	}

}

