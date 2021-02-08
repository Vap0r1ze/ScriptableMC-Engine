declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import BlockFace from '../../../../org/bukkit/block/BlockFace.js'
import BlockPistonEvent from './BlockPistonEvent.js'
import Class from '../../../../java/lang/Class.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import List from '../../../../java/util/List.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface BlockPistonExtendEvent extends BlockPistonEvent {
	getBlock(): Block;
	getBlocks(): Array<Block>;
	getDirection(): BlockFace;
	getEventName(): string;
	getHandlers(): HandlerList;
	getLength(): number;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	isSticky(): boolean;
	setCancelled(cancelled: boolean): void;
}

export default class BlockPistonExtendEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockPistonExtendEvent');
	}
	public static $isInstance(obj: any): obj is BlockPistonExtendEvent {
		return obj instanceof BlockPistonExtendEvent.$javaClass;
	}

	constructor(block: Block, length: number, direction: BlockFace);
	constructor(block: Block, blocks: Array<any>, direction: BlockFace);
	constructor(...args: any[]) {
		return new BlockPistonExtendEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return BlockPistonExtendEvent.$javaClass.getHandlerList(...args);
	}

}

