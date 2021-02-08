declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Class from '../../../../java/lang/Class.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'
import Vehicle from '../../../../org/bukkit/entity/Vehicle.js'
import VehicleEvent from './VehicleEvent.js'

export default interface VehicleCreateEvent extends VehicleEvent, Cancellable {
	getEventName(): string;
	getHandlers(): HandlerList;
	getVehicle(): Vehicle;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancelled: boolean): void;
}

export default class VehicleCreateEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.vehicle.VehicleCreateEvent');
	}
	public static $isInstance(obj: any): obj is VehicleCreateEvent {
		return obj instanceof VehicleCreateEvent.$javaClass;
	}

	constructor(vehicle: Vehicle);
	constructor(...args: any[]) {
		return new VehicleCreateEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return VehicleCreateEvent.$javaClass.getHandlerList(...args);
	}

}

