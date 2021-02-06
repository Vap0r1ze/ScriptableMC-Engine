declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import BlockEvent from './BlockEvent.js'
import BlockState from '../../../../org/bukkit/block/BlockState.js'
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'

export default interface BlockGrowEvent extends BlockEvent, Cancellable {
	getBlock(): Block;
	getEventName(): string;
	getHandlers(): HandlerList;
	getNewState(): BlockState;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class BlockGrowEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockGrowEvent');
	}

	constructor(block: Block, newState: BlockState);
	constructor(...args: any[]) {
		return new BlockGrowEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return BlockGrowEvent.$javaClass.getHandlerList(...args);
	}

}

