declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Enum from '../../../../java/lang/Enum.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface InventoryType$SlotType extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class InventoryType$SlotType {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.InventoryType$SlotType');
	}
	public static $isInstance(obj: any): obj is InventoryType$SlotType {
		return obj instanceof InventoryType$SlotType.$javaClass;
	}

	public static get ARMOR(): InventoryType$SlotType {
		return this.$javaClass.ARMOR;
	}
	public static get CONTAINER(): InventoryType$SlotType {
		return this.$javaClass.CONTAINER;
	}
	public static get CRAFTING(): InventoryType$SlotType {
		return this.$javaClass.CRAFTING;
	}
	public static get FUEL(): InventoryType$SlotType {
		return this.$javaClass.FUEL;
	}
	public static get OUTSIDE(): InventoryType$SlotType {
		return this.$javaClass.OUTSIDE;
	}
	public static get QUICKBAR(): InventoryType$SlotType {
		return this.$javaClass.QUICKBAR;
	}
	public static get RESULT(): InventoryType$SlotType {
		return this.$javaClass.RESULT;
	}
}

