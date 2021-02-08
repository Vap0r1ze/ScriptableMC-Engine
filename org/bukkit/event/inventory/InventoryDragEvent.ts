declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import DragType from './DragType.js'
import Event$Result from '../../../../org/bukkit/event/Event$Result.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import HumanEntity from '../../../../org/bukkit/entity/HumanEntity.js'
import Inventory from '../../../../org/bukkit/inventory/Inventory.js'
import InventoryInteractEvent from './InventoryInteractEvent.js'
import InventoryView from '../../../../org/bukkit/inventory/InventoryView.js'
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js'
import List from '../../../../java/util/List.js'
import Map from '../../../../java/util/Map.js'
import Object from '../../../../java/lang/Object.js'
import Set from '../../../../java/util/Set.js'
import String from '../../../../java/lang/String.js'

export default interface InventoryDragEvent extends InventoryInteractEvent {
	getCursor(): ItemStack;
	getEventName(): string;
	getHandlers(): HandlerList;
	getInventory(): Inventory;
	getInventorySlots(): Set;
	getNewItems(): Map;
	getOldCursor(): ItemStack;
	getRawSlots(): Set;
	getResult(): Event$Result;
	getType(): DragType;
	getView(): InventoryView;
	getViewers(): Array<HumanEntity>;
	getWhoClicked(): HumanEntity;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(toCancel: boolean): void;
	setCursor(newCursor: ItemStack): void;
	setResult(newResult: Event$Result): void;
}

export default class InventoryDragEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.InventoryDragEvent');
	}
	public static $isInstance(obj: any): obj is InventoryDragEvent {
		return obj instanceof InventoryDragEvent.$javaClass;
	}

	constructor(what: InventoryView, newCursor: ItemStack, oldCursor: ItemStack, right: boolean, slots: Map);
	constructor(...args: any[]) {
		return new InventoryDragEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return InventoryDragEvent.$javaClass.getHandlerList(...args);
	}

}

