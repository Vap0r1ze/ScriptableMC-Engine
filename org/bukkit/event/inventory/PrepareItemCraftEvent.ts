declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import CraftingInventory from '../../../../org/bukkit/inventory/CraftingInventory.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import HumanEntity from '../../../../org/bukkit/entity/HumanEntity.js'
import Inventory from '../../../../org/bukkit/inventory/Inventory.js'
import InventoryEvent from './InventoryEvent.js'
import InventoryView from '../../../../org/bukkit/inventory/InventoryView.js'
import List from '../../../../java/util/List.js'
import Object from '../../../../java/lang/Object.js'
import Recipe from '../../../../org/bukkit/inventory/Recipe.js'
import String from '../../../../java/lang/String.js'

export default interface PrepareItemCraftEvent extends InventoryEvent {
	getEventName(): string;
	getHandlers(): HandlerList;
	getInventory(): Inventory;
	getInventory(): CraftingInventory;
	getRecipe(): Recipe;
	getView(): InventoryView;
	getViewers(): Array<HumanEntity>;
	isAsynchronous(): boolean;
	isRepair(): boolean;
}

export default class PrepareItemCraftEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.PrepareItemCraftEvent');
	}
	public static $isInstance(obj: any): obj is PrepareItemCraftEvent {
		return obj instanceof PrepareItemCraftEvent.$javaClass;
	}

	constructor(what: CraftingInventory, view: InventoryView, isRepair: boolean);
	constructor(...args: any[]) {
		return new PrepareItemCraftEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PrepareItemCraftEvent.$javaClass.getHandlerList(...args);
	}

}

