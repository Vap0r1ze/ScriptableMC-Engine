declare var Java: any;
import Class from '../../../java/lang/Class.js'
import ClickableItem from '../../../fr/minuskube/inv/ClickableItem.js'
import Consumer from '../../../java/util/function/Consumer.js'
import InventoryManager from '../../../fr/minuskube/inv/InventoryManager.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Object from '../../../java/lang/Object.js'
import SmartInventory$Builder from '../../../fr/minuskube/inv/SmartInventory$Builder.js'
import SmartInventoryProvider from './SmartInventoryProvider.js'
import String from '../../../java/lang/String.js'

export default class SmartInventory {
	public static get $javaClass(): any {
		return Java.type('com.smc.smartinvs.SmartInventory');
	}
	public static $isInstance(obj: any): obj is SmartInventory {
		return obj instanceof SmartInventory.$javaClass;
	}

	constructor();
	constructor(...args: any[]) {
		return new SmartInventory.$javaClass(...args);
	}

	public static builder(inventoryManager: InventoryManager): SmartInventory$Builder;
	public static builder(...args: any[]): any {
		return SmartInventory.$javaClass.builder(...args);
	}

	public static clickableItem(item: ItemStack): ClickableItem;
	public static clickableItem(item: ItemStack, consumer: Consumer): ClickableItem;
	public static clickableItem(...args: any[]): any {
		return SmartInventory.$javaClass.clickableItem(...args);
	}

	public static provider(scriptableObject: any): SmartInventoryProvider;
	public static provider(...args: any[]): any {
		return SmartInventory.$javaClass.provider(...args);
	}

}

