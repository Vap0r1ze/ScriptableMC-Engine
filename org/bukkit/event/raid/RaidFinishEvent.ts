declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import List from '../../../../java/util/List.js'
import Object from '../../../../java/lang/Object.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import Raid from '../../../../org/bukkit/Raid.js'
import RaidEvent from './RaidEvent.js'
import String from '../../../../java/lang/String.js'
import World from '../../../../org/bukkit/World.js'

export default interface RaidFinishEvent extends RaidEvent {
	getEventName(): string;
	getHandlers(): HandlerList;
	getRaid(): Raid;
	getWinners(): Array<Player>;
	getWorld(): World;
	isAsynchronous(): boolean;
}

export default class RaidFinishEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.raid.RaidFinishEvent');
	}
	public static $isInstance(obj: any): obj is RaidFinishEvent {
		return obj instanceof RaidFinishEvent.$javaClass;
	}

	constructor(raid: Raid, world: World, winners: Array<any>);
	constructor(...args: any[]) {
		return new RaidFinishEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return RaidFinishEvent.$javaClass.getHandlerList(...args);
	}

}

