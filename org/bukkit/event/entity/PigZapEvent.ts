declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Class from '../../../../java/lang/Class.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityTransformEvent from './EntityTransformEvent.js'
import EntityTransformEvent$TransformReason from './EntityTransformEvent$TransformReason.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import LightningStrike from '../../../../org/bukkit/entity/LightningStrike.js'
import List from '../../../../java/util/List.js'
import Object from '../../../../java/lang/Object.js'
import Pig from '../../../../org/bukkit/entity/Pig.js'
import PigZombie from '../../../../org/bukkit/entity/PigZombie.js'
import String from '../../../../java/lang/String.js'

export default interface PigZapEvent extends EntityTransformEvent, Cancellable {
	getEntity(): Entity;
	getEntity(): Pig;
	getEntityType(): EntityType;
	getEventName(): string;
	getHandlers(): HandlerList;
	getLightning(): LightningStrike;
	getPigZombie(): PigZombie;
	getTransformReason(): EntityTransformEvent$TransformReason;
	getTransformedEntities(): Array<Entity>;
	getTransformedEntity(): Entity;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class PigZapEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.PigZapEvent');
	}
	public static $isInstance(obj: any): obj is PigZapEvent {
		return obj instanceof PigZapEvent.$javaClass;
	}

	constructor(pig: Pig, bolt: LightningStrike, pigzombie: PigZombie);
	constructor(...args: any[]) {
		return new PigZapEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PigZapEvent.$javaClass.getHandlerList(...args);
	}

}

