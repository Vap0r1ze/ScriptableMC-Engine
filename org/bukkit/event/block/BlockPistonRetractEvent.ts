declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import BlockFace from '../../../../org/bukkit/block/BlockFace.js'
import BlockPistonEvent from './BlockPistonEvent.js'
import Class from '../../../../java/lang/Class.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import List from '../../../../java/util/List.js'
import Location from '../../../../org/bukkit/Location.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface BlockPistonRetractEvent extends BlockPistonEvent {
	getBlock(): Block;
	getBlocks(): Array<Block>;
	getDirection(): BlockFace;
	getEventName(): string;
	getHandlers(): HandlerList;
	getRetractLocation(): Location;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	isSticky(): boolean;
	setCancelled(cancelled: boolean): void;
}

export default class BlockPistonRetractEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockPistonRetractEvent');
	}
	public static $isInstance(obj: any): obj is BlockPistonRetractEvent {
		return obj instanceof BlockPistonRetractEvent.$javaClass;
	}

	constructor(block: Block, blocks: Array<any>, direction: BlockFace);
	constructor(...args: any[]) {
		return new BlockPistonRetractEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return BlockPistonRetractEvent.$javaClass.getHandlerList(...args);
	}

}

