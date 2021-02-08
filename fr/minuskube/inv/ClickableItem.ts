declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Consumer from '../../../java/util/function/Consumer.js'
import InventoryClickEvent from '../../../org/bukkit/event/inventory/InventoryClickEvent.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface ClickableItem extends Object {
	getItem(): ItemStack;
	run(e: InventoryClickEvent): void;
}

export default class ClickableItem {
	public static get $javaClass(): any {
		return Java.type('fr.minuskube.inv.ClickableItem');
	}
	public static $isInstance(obj: any): obj is ClickableItem {
		return obj instanceof ClickableItem.$javaClass;
	}

	public static empty(item: ItemStack): ClickableItem;
	public static empty(...args: any[]): any {
		return ClickableItem.$javaClass.empty(...args);
	}

	public static of(item: ItemStack, consumer: Consumer): ClickableItem;
	public static of(...args: any[]): any {
		return ClickableItem.$javaClass.of(...args);
	}

}

