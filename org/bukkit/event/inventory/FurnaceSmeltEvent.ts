declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import BlockCookEvent from '../../../../org/bukkit/event/block/BlockCookEvent.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js'

export default interface FurnaceSmeltEvent extends BlockCookEvent {
	getBlock(): Block;
	getEventName(): string;
	getHandlers(): HandlerList;
	getResult(): ItemStack;
	getSource(): ItemStack;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	setResult(result: ItemStack): void;
}

export default class FurnaceSmeltEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.FurnaceSmeltEvent');
	}
	public static $isInstance(obj: any): obj is FurnaceSmeltEvent {
		return obj instanceof FurnaceSmeltEvent.$javaClass;
	}

	constructor(furnace: Block, source: ItemStack, result: ItemStack);
	constructor(...args: any[]) {
		return new FurnaceSmeltEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return FurnaceSmeltEvent.$javaClass.getHandlerList(...args);
	}

}

