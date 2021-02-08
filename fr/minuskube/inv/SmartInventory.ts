declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Inventory from '../../../org/bukkit/inventory/Inventory.js'
import InventoryManager from './InventoryManager.js'
import InventoryProvider from './content/InventoryProvider.js'
import InventoryType from '../../../org/bukkit/event/inventory/InventoryType.js'
import Object from '../../../java/lang/Object.js'
import Optional from '../../../java/util/Optional.js'
import Player from '../../../org/bukkit/entity/Player.js'
import SmartInventory$Builder from './SmartInventory$Builder.js'
import String from '../../../java/lang/String.js'

export default interface SmartInventory extends Object {
	close(player: Player): void;
	getColumns(): number;
	getId(): string;
	getManager(): InventoryManager;
	getParent(): Optional;
	getProvider(): InventoryProvider;
	getRows(): number;
	getTitle(): string;
	getType(): InventoryType;
	isCloseable(): boolean;
	open(player: Player): Inventory;
	open(player: Player, page: number): Inventory;
	setCloseable(closeable: boolean): void;
}

export default class SmartInventory {
	public static get $javaClass(): any {
		return Java.type('fr.minuskube.inv.SmartInventory');
	}
	public static $isInstance(obj: any): obj is SmartInventory {
		return obj instanceof SmartInventory.$javaClass;
	}

	public static builder(): SmartInventory$Builder;
	public static builder(...args: any[]): any {
		return SmartInventory.$javaClass.builder(...args);
	}

}

