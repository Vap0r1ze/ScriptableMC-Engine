declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'
import World from '../../../../org/bukkit/World.js'
import WorldEvent from './WorldEvent.js'

export default interface WorldLoadEvent extends WorldEvent {
	getEventName(): string;
	getHandlers(): HandlerList;
	getWorld(): World;
	isAsynchronous(): boolean;
}

export default class WorldLoadEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.world.WorldLoadEvent');
	}
	public static $isInstance(obj: any): obj is WorldLoadEvent {
		return obj instanceof WorldLoadEvent.$javaClass;
	}

	constructor(world: World);
	constructor(...args: any[]) {
		return new WorldLoadEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return WorldLoadEvent.$javaClass.getHandlerList(...args);
	}

}

