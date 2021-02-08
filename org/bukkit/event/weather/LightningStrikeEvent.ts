declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Class from '../../../../java/lang/Class.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import LightningStrike from '../../../../org/bukkit/entity/LightningStrike.js'
import LightningStrikeEvent$Cause from './LightningStrikeEvent$Cause.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'
import WeatherEvent from './WeatherEvent.js'
import World from '../../../../org/bukkit/World.js'

export default interface LightningStrikeEvent extends WeatherEvent, Cancellable {
	getCause(): LightningStrikeEvent$Cause;
	getEventName(): string;
	getHandlers(): HandlerList;
	getLightning(): LightningStrike;
	getWorld(): World;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class LightningStrikeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.weather.LightningStrikeEvent');
	}
	public static $isInstance(obj: any): obj is LightningStrikeEvent {
		return obj instanceof LightningStrikeEvent.$javaClass;
	}

	constructor(world: World, bolt: LightningStrike);
	constructor(world: World, bolt: LightningStrike, cause: LightningStrikeEvent$Cause);
	constructor(...args: any[]) {
		return new LightningStrikeEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return LightningStrikeEvent.$javaClass.getHandlerList(...args);
	}

}

