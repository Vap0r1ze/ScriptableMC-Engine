declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import BlockEvent from './BlockEvent.js'
import BlockFace from '../../../../org/bukkit/block/BlockFace.js'
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Class from '../../../../java/lang/Class.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface BlockPistonEvent extends BlockEvent, Cancellable {
	getBlock(): Block;
	getDirection(): BlockFace;
	getEventName(): string;
	getHandlers(): HandlerList;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	isSticky(): boolean;
	setCancelled(cancelled: boolean): void;
}

export default class BlockPistonEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockPistonEvent');
	}
	public static $isInstance(obj: any): obj is BlockPistonEvent {
		return obj instanceof BlockPistonEvent.$javaClass;
	}

	constructor(block: Block, direction: BlockFace);
	constructor(...args: any[]) {
		return new BlockPistonEvent.$javaClass(...args);
	}

}

