declare var Java: any;
import Class from '../../../java/lang/Class.js'
import DoubleChestInventory from '../../../org/bukkit/inventory/DoubleChestInventory.js'
import Inventory from '../../../org/bukkit/inventory/Inventory.js'
import InventoryHolder from '../../../org/bukkit/inventory/InventoryHolder.js'
import Location from '../../../org/bukkit/Location.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'
import World from '../../../org/bukkit/World.js'

export default interface DoubleChest extends Object, InventoryHolder {
	getInventory(): Inventory;
	getLeftSide(): InventoryHolder;
	getLocation(): Location;
	getRightSide(): InventoryHolder;
	getWorld(): World;
	getX(): number;
	getY(): number;
	getZ(): number;
}

export default class DoubleChest {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.DoubleChest');
	}
	public static $isInstance(obj: any): obj is DoubleChest {
		return obj instanceof DoubleChest.$javaClass;
	}

	constructor(chest: DoubleChestInventory);
	constructor(...args: any[]) {
		return new DoubleChest.$javaClass(...args);
	}

}

