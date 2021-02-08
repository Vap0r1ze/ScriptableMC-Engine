declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Event from '../../../../org/bukkit/event/Event.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'
import World from '../../../../org/bukkit/World.js'

export default interface WeatherEvent extends Event {
	getEventName(): string;
	getHandlers(): HandlerList;
	getWorld(): World;
	isAsynchronous(): boolean;
}

export default class WeatherEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.weather.WeatherEvent');
	}
	public static $isInstance(obj: any): obj is WeatherEvent {
		return obj instanceof WeatherEvent.$javaClass;
	}

	constructor(where: World);
	constructor(...args: any[]) {
		return new WeatherEvent.$javaClass(...args);
	}

}

