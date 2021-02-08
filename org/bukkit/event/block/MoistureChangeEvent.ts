declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import BlockEvent from './BlockEvent.js'
import BlockState from '../../../../org/bukkit/block/BlockState.js'
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Class from '../../../../java/lang/Class.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface MoistureChangeEvent extends BlockEvent, Cancellable {
	getBlock(): Block;
	getEventName(): string;
	getHandlers(): HandlerList;
	getNewState(): BlockState;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class MoistureChangeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.MoistureChangeEvent');
	}
	public static $isInstance(obj: any): obj is MoistureChangeEvent {
		return obj instanceof MoistureChangeEvent.$javaClass;
	}

	constructor(block: Block, newState: BlockState);
	constructor(...args: any[]) {
		return new MoistureChangeEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return MoistureChangeEvent.$javaClass.getHandlerList(...args);
	}

}

