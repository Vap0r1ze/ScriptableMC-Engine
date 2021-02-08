declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'
import Vehicle from '../../../../org/bukkit/entity/Vehicle.js'
import VehicleEvent from './VehicleEvent.js'

export default interface VehicleCollisionEvent extends VehicleEvent {
	getEventName(): string;
	getHandlers(): HandlerList;
	getVehicle(): Vehicle;
	isAsynchronous(): boolean;
}

export default class VehicleCollisionEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.vehicle.VehicleCollisionEvent');
	}
	public static $isInstance(obj: any): obj is VehicleCollisionEvent {
		return obj instanceof VehicleCollisionEvent.$javaClass;
	}

	constructor(vehicle: Vehicle);
	constructor(...args: any[]) {
		return new VehicleCollisionEvent.$javaClass(...args);
	}

}

