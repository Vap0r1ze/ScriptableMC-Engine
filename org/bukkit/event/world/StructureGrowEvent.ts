declare var Java: any;
import BlockState from '../../../../org/bukkit/block/BlockState.js'
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Class from '../../../../java/lang/Class.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import List from '../../../../java/util/List.js'
import Location from '../../../../org/bukkit/Location.js'
import Object from '../../../../java/lang/Object.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import String from '../../../../java/lang/String.js'
import TreeType from '../../../../org/bukkit/TreeType.js'
import World from '../../../../org/bukkit/World.js'
import WorldEvent from './WorldEvent.js'

export default interface StructureGrowEvent extends WorldEvent, Cancellable {
	getBlocks(): Array<BlockState>;
	getEventName(): string;
	getHandlers(): HandlerList;
	getLocation(): Location;
	getPlayer(): Player;
	getSpecies(): TreeType;
	getWorld(): World;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	isFromBonemeal(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class StructureGrowEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.world.StructureGrowEvent');
	}
	public static $isInstance(obj: any): obj is StructureGrowEvent {
		return obj instanceof StructureGrowEvent.$javaClass;
	}

	constructor(location: Location, species: TreeType, bonemeal: boolean, player: Player, blocks: Array<any>);
	constructor(...args: any[]) {
		return new StructureGrowEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return StructureGrowEvent.$javaClass.getHandlerList(...args);
	}

}

