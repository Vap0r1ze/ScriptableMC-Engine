declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import BlockFormEvent from './BlockFormEvent.js'
import BlockState from '../../../../org/bukkit/block/BlockState.js'
import Class from '../../../../java/lang/Class.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface BlockSpreadEvent extends BlockFormEvent {
	getBlock(): Block;
	getEventName(): string;
	getHandlers(): HandlerList;
	getNewState(): BlockState;
	getSource(): Block;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class BlockSpreadEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockSpreadEvent');
	}
	public static $isInstance(obj: any): obj is BlockSpreadEvent {
		return obj instanceof BlockSpreadEvent.$javaClass;
	}

	constructor(block: Block, source: Block, newState: BlockState);
	constructor(...args: any[]) {
		return new BlockSpreadEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return BlockSpreadEvent.$javaClass.getHandlerList(...args);
	}

}

