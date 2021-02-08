declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Object from '../../../../java/lang/Object.js'
import Raid from '../../../../org/bukkit/Raid.js'
import RaidEvent from './RaidEvent.js'
import RaidStopEvent$Reason from './RaidStopEvent$Reason.js'
import String from '../../../../java/lang/String.js'
import World from '../../../../org/bukkit/World.js'

export default interface RaidStopEvent extends RaidEvent {
	getEventName(): string;
	getHandlers(): HandlerList;
	getRaid(): Raid;
	getReason(): RaidStopEvent$Reason;
	getWorld(): World;
	isAsynchronous(): boolean;
}

export default class RaidStopEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.raid.RaidStopEvent');
	}
	public static $isInstance(obj: any): obj is RaidStopEvent {
		return obj instanceof RaidStopEvent.$javaClass;
	}

	constructor(raid: Raid, world: World, reason: RaidStopEvent$Reason);
	constructor(...args: any[]) {
		return new RaidStopEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return RaidStopEvent.$javaClass.getHandlerList(...args);
	}

}

