declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Class from '../../../../java/lang/Class.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityEvent from './EntityEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Object from '../../../../java/lang/Object.js'
import PigZombie from '../../../../org/bukkit/entity/PigZombie.js'
import String from '../../../../java/lang/String.js'

export default interface PigZombieAngerEvent extends EntityEvent, Cancellable {
	getEntity(): Entity;
	getEntity(): PigZombie;
	getEntityType(): EntityType;
	getEventName(): string;
	getHandlers(): HandlerList;
	getNewAnger(): number;
	getTarget(): Entity;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	setNewAnger(newAnger: number): void;
}

export default class PigZombieAngerEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.PigZombieAngerEvent');
	}
	public static $isInstance(obj: any): obj is PigZombieAngerEvent {
		return obj instanceof PigZombieAngerEvent.$javaClass;
	}

	constructor(pigZombie: PigZombie, target: Entity, newAnger: number);
	constructor(...args: any[]) {
		return new PigZombieAngerEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PigZombieAngerEvent.$javaClass.getHandlerList(...args);
	}

}

