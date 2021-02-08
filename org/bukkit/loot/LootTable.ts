declare var Java: any;
import Collection from '../../../java/util/Collection.js'
import Inventory from '../../../org/bukkit/inventory/Inventory.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Keyed from '../../../org/bukkit/Keyed.js'
import LootContext from './LootContext.js'
import NamespacedKey from '../../../org/bukkit/NamespacedKey.js'
import Random from '../../../java/util/Random.js'

export default interface LootTable extends Keyed {
	fillInventory(arg0: Inventory, arg1: Random, arg2: LootContext): void;
	getKey(): NamespacedKey;
	populateLoot(arg0: Random, arg1: LootContext): Array<ItemStack>;
}

export default class LootTable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.loot.LootTable');
	}
	public static $isInstance(obj: any): obj is LootTable {
		return obj instanceof LootTable.$javaClass;
	}

}

