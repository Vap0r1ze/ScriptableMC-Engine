declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import List from '../../../../java/util/List.js'
import Object from '../../../../java/lang/Object.js'
import Raid from '../../../../org/bukkit/Raid.js'
import RaidEvent from './RaidEvent.js'
import Raider from '../../../../org/bukkit/entity/Raider.js'
import String from '../../../../java/lang/String.js'
import World from '../../../../org/bukkit/World.js'

export default interface RaidSpawnWaveEvent extends RaidEvent {
	getEventName(): string;
	getHandlers(): HandlerList;
	getPatrolLeader(): Raider;
	getRaid(): Raid;
	getRaiders(): Array<Raider>;
	getWorld(): World;
	isAsynchronous(): boolean;
}

export default class RaidSpawnWaveEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.raid.RaidSpawnWaveEvent');
	}
	public static $isInstance(obj: any): obj is RaidSpawnWaveEvent {
		return obj instanceof RaidSpawnWaveEvent.$javaClass;
	}

	constructor(raid: Raid, world: World, leader: Raider, raiders: Array<any>);
	constructor(...args: any[]) {
		return new RaidSpawnWaveEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return RaidSpawnWaveEvent.$javaClass.getHandlerList(...args);
	}

}

