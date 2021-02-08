declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import BlockEvent from './BlockEvent.js'
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Class from '../../../../java/lang/Class.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import List from '../../../../java/util/List.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface BlockExplodeEvent extends BlockEvent, Cancellable {
	blockList(): Array<Block>;
	getBlock(): Block;
	getEventName(): string;
	getHandlers(): HandlerList;
	getYield(): number;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	setYield(_yield: number): void;
}

export default class BlockExplodeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockExplodeEvent');
	}
	public static $isInstance(obj: any): obj is BlockExplodeEvent {
		return obj instanceof BlockExplodeEvent.$javaClass;
	}

	constructor(what: Block, blocks: Array<any>, _yield: number);
	constructor(...args: any[]) {
		return new BlockExplodeEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return BlockExplodeEvent.$javaClass.getHandlerList(...args);
	}

}

