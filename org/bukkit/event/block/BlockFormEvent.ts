declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import BlockGrowEvent from './BlockGrowEvent.js'
import BlockState from '../../../../org/bukkit/block/BlockState.js'
import Class from '../../../../java/lang/Class.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface BlockFormEvent extends BlockGrowEvent {
	getBlock(): Block;
	getEventName(): string;
	getHandlers(): HandlerList;
	getNewState(): BlockState;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class BlockFormEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockFormEvent');
	}
	public static $isInstance(obj: any): obj is BlockFormEvent {
		return obj instanceof BlockFormEvent.$javaClass;
	}

	constructor(block: Block, newState: BlockState);
	constructor(...args: any[]) {
		return new BlockFormEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return BlockFormEvent.$javaClass.getHandlerList(...args);
	}

}

