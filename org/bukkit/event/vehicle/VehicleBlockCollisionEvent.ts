declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import Class from '../../../../java/lang/Class.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'
import Vehicle from '../../../../org/bukkit/entity/Vehicle.js'
import VehicleCollisionEvent from './VehicleCollisionEvent.js'

export default interface VehicleBlockCollisionEvent extends VehicleCollisionEvent {
	getBlock(): Block;
	getEventName(): string;
	getHandlers(): HandlerList;
	getVehicle(): Vehicle;
	isAsynchronous(): boolean;
}

export default class VehicleBlockCollisionEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.vehicle.VehicleBlockCollisionEvent');
	}
	public static $isInstance(obj: any): obj is VehicleBlockCollisionEvent {
		return obj instanceof VehicleBlockCollisionEvent.$javaClass;
	}

	constructor(vehicle: Vehicle, block: Block);
	constructor(...args: any[]) {
		return new VehicleBlockCollisionEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return VehicleBlockCollisionEvent.$javaClass.getHandlerList(...args);
	}

}

