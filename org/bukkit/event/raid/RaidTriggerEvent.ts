declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Class from '../../../../java/lang/Class.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Object from '../../../../java/lang/Object.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import Raid from '../../../../org/bukkit/Raid.js'
import RaidEvent from './RaidEvent.js'
import String from '../../../../java/lang/String.js'
import World from '../../../../org/bukkit/World.js'

export default interface RaidTriggerEvent extends RaidEvent, Cancellable {
	getEventName(): string;
	getHandlers(): HandlerList;
	getPlayer(): Player;
	getRaid(): Raid;
	getWorld(): World;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class RaidTriggerEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.raid.RaidTriggerEvent');
	}
	public static $isInstance(obj: any): obj is RaidTriggerEvent {
		return obj instanceof RaidTriggerEvent.$javaClass;
	}

	constructor(raid: Raid, world: World, player: Player);
	constructor(...args: any[]) {
		return new RaidTriggerEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return RaidTriggerEvent.$javaClass.getHandlerList(...args);
	}

}

