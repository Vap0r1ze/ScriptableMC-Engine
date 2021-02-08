declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Class from '../../../../java/lang/Class.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import HumanEntity from '../../../../org/bukkit/entity/HumanEntity.js'
import Inventory from '../../../../org/bukkit/inventory/Inventory.js'
import InventoryEvent from './InventoryEvent.js'
import InventoryView from '../../../../org/bukkit/inventory/InventoryView.js'
import List from '../../../../java/util/List.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface InventoryOpenEvent extends InventoryEvent, Cancellable {
	getEventName(): string;
	getHandlers(): HandlerList;
	getInventory(): Inventory;
	getPlayer(): HumanEntity;
	getView(): InventoryView;
	getViewers(): Array<HumanEntity>;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class InventoryOpenEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.InventoryOpenEvent');
	}
	public static $isInstance(obj: any): obj is InventoryOpenEvent {
		return obj instanceof InventoryOpenEvent.$javaClass;
	}

	constructor(transaction: InventoryView);
	constructor(...args: any[]) {
		return new InventoryOpenEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return InventoryOpenEvent.$javaClass.getHandlerList(...args);
	}

}

