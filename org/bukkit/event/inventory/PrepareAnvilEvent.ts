declare var Java: any;
import AnvilInventory from '../../../../org/bukkit/inventory/AnvilInventory.js'
import Class from '../../../../java/lang/Class.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import HumanEntity from '../../../../org/bukkit/entity/HumanEntity.js'
import Inventory from '../../../../org/bukkit/inventory/Inventory.js'
import InventoryEvent from './InventoryEvent.js'
import InventoryView from '../../../../org/bukkit/inventory/InventoryView.js'
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js'
import List from '../../../../java/util/List.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface PrepareAnvilEvent extends InventoryEvent {
	getEventName(): string;
	getHandlers(): HandlerList;
	getInventory(): AnvilInventory;
	getInventory(): Inventory;
	getResult(): ItemStack;
	getView(): InventoryView;
	getViewers(): Array<HumanEntity>;
	isAsynchronous(): boolean;
	setResult(result: ItemStack): void;
}

export default class PrepareAnvilEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.PrepareAnvilEvent');
	}
	public static $isInstance(obj: any): obj is PrepareAnvilEvent {
		return obj instanceof PrepareAnvilEvent.$javaClass;
	}

	constructor(inventory: InventoryView, result: ItemStack);
	constructor(...args: any[]) {
		return new PrepareAnvilEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PrepareAnvilEvent.$javaClass.getHandlerList(...args);
	}

}

