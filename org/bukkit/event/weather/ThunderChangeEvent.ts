declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Class from '../../../../java/lang/Class.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'
import WeatherEvent from './WeatherEvent.js'
import World from '../../../../org/bukkit/World.js'

export default interface ThunderChangeEvent extends WeatherEvent, Cancellable {
	getEventName(): string;
	getHandlers(): HandlerList;
	getWorld(): World;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	toThunderState(): boolean;
}

export default class ThunderChangeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.weather.ThunderChangeEvent');
	}
	public static $isInstance(obj: any): obj is ThunderChangeEvent {
		return obj instanceof ThunderChangeEvent.$javaClass;
	}

	constructor(world: World, to: boolean);
	constructor(...args: any[]) {
		return new ThunderChangeEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return ThunderChangeEvent.$javaClass.getHandlerList(...args);
	}

}

