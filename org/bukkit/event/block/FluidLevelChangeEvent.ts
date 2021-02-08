declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import BlockData from '../../../../org/bukkit/block/data/BlockData.js'
import BlockEvent from './BlockEvent.js'
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Class from '../../../../java/lang/Class.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface FluidLevelChangeEvent extends BlockEvent, Cancellable {
	getBlock(): Block;
	getEventName(): string;
	getHandlers(): HandlerList;
	getNewData(): BlockData;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancelled: boolean): void;
	setNewData(newData: BlockData): void;
}

export default class FluidLevelChangeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.FluidLevelChangeEvent');
	}
	public static $isInstance(obj: any): obj is FluidLevelChangeEvent {
		return obj instanceof FluidLevelChangeEvent.$javaClass;
	}

	constructor(theBlock: Block, newData: BlockData);
	constructor(...args: any[]) {
		return new FluidLevelChangeEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return FluidLevelChangeEvent.$javaClass.getHandlerList(...args);
	}

}

