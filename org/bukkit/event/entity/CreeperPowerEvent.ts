declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Class from '../../../../java/lang/Class.js'
import Creeper from '../../../../org/bukkit/entity/Creeper.js'
import CreeperPowerEvent$PowerCause from './CreeperPowerEvent$PowerCause.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityEvent from './EntityEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import LightningStrike from '../../../../org/bukkit/entity/LightningStrike.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface CreeperPowerEvent extends EntityEvent, Cancellable {
	getCause(): CreeperPowerEvent$PowerCause;
	getEntity(): Entity;
	getEntity(): Creeper;
	getEntityType(): EntityType;
	getEventName(): string;
	getHandlers(): HandlerList;
	getLightning(): LightningStrike;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class CreeperPowerEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.CreeperPowerEvent');
	}
	public static $isInstance(obj: any): obj is CreeperPowerEvent {
		return obj instanceof CreeperPowerEvent.$javaClass;
	}

	constructor(creeper: Creeper, cause: CreeperPowerEvent$PowerCause);
	constructor(creeper: Creeper, bolt: LightningStrike, cause: CreeperPowerEvent$PowerCause);
	constructor(...args: any[]) {
		return new CreeperPowerEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return CreeperPowerEvent.$javaClass.getHandlerList(...args);
	}

}

