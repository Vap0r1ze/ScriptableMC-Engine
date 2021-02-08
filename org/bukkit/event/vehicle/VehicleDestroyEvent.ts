declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Class from '../../../../java/lang/Class.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'
import Vehicle from '../../../../org/bukkit/entity/Vehicle.js'
import VehicleEvent from './VehicleEvent.js'

export default interface VehicleDestroyEvent extends VehicleEvent, Cancellable {
	getAttacker(): Entity;
	getEventName(): string;
	getHandlers(): HandlerList;
	getVehicle(): Vehicle;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class VehicleDestroyEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.vehicle.VehicleDestroyEvent');
	}
	public static $isInstance(obj: any): obj is VehicleDestroyEvent {
		return obj instanceof VehicleDestroyEvent.$javaClass;
	}

	constructor(vehicle: Vehicle, attacker: Entity);
	constructor(...args: any[]) {
		return new VehicleDestroyEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return VehicleDestroyEvent.$javaClass.getHandlerList(...args);
	}

}

