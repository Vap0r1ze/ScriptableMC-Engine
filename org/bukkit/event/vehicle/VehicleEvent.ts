declare var Java: any;
import Event from '../../../../org/bukkit/event/Event.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Vehicle from '../../../../org/bukkit/entity/Vehicle.js'

export default interface VehicleEvent extends Event {
	getEventName(): string;
	getHandlers(): HandlerList;
	getVehicle(): Vehicle;
	isAsynchronous(): boolean;
}

export default class VehicleEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.vehicle.VehicleEvent');
	}
	public static $isInstance(obj: any): obj is VehicleEvent {
		return obj instanceof VehicleEvent.$javaClass;
	}

	constructor(vehicle: Vehicle);
	constructor(...args: any[]) {
		return new VehicleEvent.$javaClass(...args);
	}

}

