declare var Java: any;
import Class from '../../../java/lang/Class.js'
import InventoryOpener from './opener/InventoryOpener.js'
import InventoryType from '../../../org/bukkit/event/inventory/InventoryType.js'
import JavaPlugin from '../../../org/bukkit/plugin/java/JavaPlugin.js'
import List from '../../../java/util/List.js'
import Object from '../../../java/lang/Object.js'
import Optional from '../../../java/util/Optional.js'
import Player from '../../../org/bukkit/entity/Player.js'
import SmartInventory from './SmartInventory.js'
import String from '../../../java/lang/String.js'

export default interface InventoryManager extends Object {
	findOpener(type: InventoryType): Optional;
	getContents(p: Player): Optional;
	getInventory(p: Player): Optional;
	getOpenedPlayers(inv: SmartInventory): Array<Player>;
	init(): void;
	registerOpeners(openers: Array<InventoryOpener>): void;
}

export default class InventoryManager {
	public static get $javaClass(): any {
		return Java.type('fr.minuskube.inv.InventoryManager');
	}
	public static $isInstance(obj: any): obj is InventoryManager {
		return obj instanceof InventoryManager.$javaClass;
	}

	constructor(plugin: JavaPlugin);
	constructor(...args: any[]) {
		return new InventoryManager.$javaClass(...args);
	}

}

