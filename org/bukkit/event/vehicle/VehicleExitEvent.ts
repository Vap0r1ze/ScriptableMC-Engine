declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Class from '../../../../java/lang/Class.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import LivingEntity from '../../../../org/bukkit/entity/LivingEntity.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'
import Vehicle from '../../../../org/bukkit/entity/Vehicle.js'
import VehicleEvent from './VehicleEvent.js'

export default interface VehicleExitEvent extends VehicleEvent, Cancellable {
	getEventName(): string;
	getExited(): LivingEntity;
	getHandlers(): HandlerList;
	getVehicle(): Vehicle;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class VehicleExitEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.vehicle.VehicleExitEvent');
	}
	public static $isInstance(obj: any): obj is VehicleExitEvent {
		return obj instanceof VehicleExitEvent.$javaClass;
	}

	constructor(vehicle: Vehicle, exited: LivingEntity);
	constructor(...args: any[]) {
		return new VehicleExitEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return VehicleExitEvent.$javaClass.getHandlerList(...args);
	}

}

