declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import BlockEvent from './BlockEvent.js'
import BlockState from '../../../../org/bukkit/block/BlockState.js'
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Class from '../../../../java/lang/Class.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import List from '../../../../java/util/List.js'
import Object from '../../../../java/lang/Object.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import String from '../../../../java/lang/String.js'

export default interface BlockFertilizeEvent extends BlockEvent, Cancellable {
	getBlock(): Block;
	getBlocks(): Array<BlockState>;
	getEventName(): string;
	getHandlers(): HandlerList;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancelled: boolean): void;
}

export default class BlockFertilizeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockFertilizeEvent');
	}
	public static $isInstance(obj: any): obj is BlockFertilizeEvent {
		return obj instanceof BlockFertilizeEvent.$javaClass;
	}

	constructor(theBlock: Block, player: Player, blocks: Array<any>);
	constructor(...args: any[]) {
		return new BlockFertilizeEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return BlockFertilizeEvent.$javaClass.getHandlerList(...args);
	}

}

