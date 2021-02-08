declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'
import Vehicle from '../../../../org/bukkit/entity/Vehicle.js'
import VehicleEvent from './VehicleEvent.js'

export default interface VehicleUpdateEvent extends VehicleEvent {
	getEventName(): string;
	getHandlers(): HandlerList;
	getVehicle(): Vehicle;
	isAsynchronous(): boolean;
}

export default class VehicleUpdateEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.vehicle.VehicleUpdateEvent');
	}
	public static $isInstance(obj: any): obj is VehicleUpdateEvent {
		return obj instanceof VehicleUpdateEvent.$javaClass;
	}

	constructor(vehicle: Vehicle);
	constructor(...args: any[]) {
		return new VehicleUpdateEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return VehicleUpdateEvent.$javaClass.getHandlerList(...args);
	}

}

