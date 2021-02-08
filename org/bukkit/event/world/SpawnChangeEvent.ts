declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Location from '../../../../org/bukkit/Location.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'
import World from '../../../../org/bukkit/World.js'
import WorldEvent from './WorldEvent.js'

export default interface SpawnChangeEvent extends WorldEvent {
	getEventName(): string;
	getHandlers(): HandlerList;
	getPreviousLocation(): Location;
	getWorld(): World;
	isAsynchronous(): boolean;
}

export default class SpawnChangeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.world.SpawnChangeEvent');
	}
	public static $isInstance(obj: any): obj is SpawnChangeEvent {
		return obj instanceof SpawnChangeEvent.$javaClass;
	}

	constructor(world: World, previousLocation: Location);
	constructor(...args: any[]) {
		return new SpawnChangeEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return SpawnChangeEvent.$javaClass.getHandlerList(...args);
	}

}

