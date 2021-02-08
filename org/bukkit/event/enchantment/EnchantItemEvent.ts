declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Class from '../../../../java/lang/Class.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import HumanEntity from '../../../../org/bukkit/entity/HumanEntity.js'
import Inventory from '../../../../org/bukkit/inventory/Inventory.js'
import InventoryEvent from '../../../../org/bukkit/event/inventory/InventoryEvent.js'
import InventoryView from '../../../../org/bukkit/inventory/InventoryView.js'
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js'
import List from '../../../../java/util/List.js'
import Map from '../../../../java/util/Map.js'
import Object from '../../../../java/lang/Object.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import String from '../../../../java/lang/String.js'

export default interface EnchantItemEvent extends InventoryEvent, Cancellable {
	getEnchantBlock(): Block;
	getEnchanter(): Player;
	getEnchantsToAdd(): Map;
	getEventName(): string;
	getExpLevelCost(): number;
	getHandlers(): HandlerList;
	getInventory(): Inventory;
	getItem(): ItemStack;
	getView(): InventoryView;
	getViewers(): Array<HumanEntity>;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	setExpLevelCost(level: number): void;
	whichButton(): number;
}

export default class EnchantItemEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.enchantment.EnchantItemEvent');
	}
	public static $isInstance(obj: any): obj is EnchantItemEvent {
		return obj instanceof EnchantItemEvent.$javaClass;
	}

	constructor(enchanter: Player, view: InventoryView, table: Block, item: ItemStack, level: number, enchants: Map, i: number);
	constructor(...args: any[]) {
		return new EnchantItemEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return EnchantItemEvent.$javaClass.getHandlerList(...args);
	}

}

