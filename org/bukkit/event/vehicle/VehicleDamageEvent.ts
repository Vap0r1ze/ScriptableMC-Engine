declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Class from '../../../../java/lang/Class.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'
import Vehicle from '../../../../org/bukkit/entity/Vehicle.js'
import VehicleEvent from './VehicleEvent.js'

export default interface VehicleDamageEvent extends VehicleEvent, Cancellable {
	getAttacker(): Entity;
	getDamage(): number;
	getEventName(): string;
	getHandlers(): HandlerList;
	getVehicle(): Vehicle;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	setDamage(damage: number): void;
}

export default class VehicleDamageEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.vehicle.VehicleDamageEvent');
	}
	public static $isInstance(obj: any): obj is VehicleDamageEvent {
		return obj instanceof VehicleDamageEvent.$javaClass;
	}

	constructor(vehicle: Vehicle, attacker: Entity, damage: number);
	constructor(...args: any[]) {
		return new VehicleDamageEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return VehicleDamageEvent.$javaClass.getHandlerList(...args);
	}

}

