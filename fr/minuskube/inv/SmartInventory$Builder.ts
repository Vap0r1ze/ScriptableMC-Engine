declare var Java: any;
import Class from '../../../java/lang/Class.js'
import InventoryListener from './InventoryListener.js'
import InventoryManager from './InventoryManager.js'
import InventoryProvider from './content/InventoryProvider.js'
import InventoryType from '../../../org/bukkit/event/inventory/InventoryType.js'
import Object from '../../../java/lang/Object.js'
import SmartInventory from './SmartInventory.js'
import String from '../../../java/lang/String.js'

export default interface SmartInventory$Builder extends Object {
	build(): SmartInventory;
	closeable(closeable: boolean): SmartInventory$Builder;
	id(id: string): SmartInventory$Builder;
	listener(listener: InventoryListener): SmartInventory$Builder;
	manager(manager: InventoryManager): SmartInventory$Builder;
	parent(parent: SmartInventory): SmartInventory$Builder;
	provider(provider: InventoryProvider): SmartInventory$Builder;
	size(rows: number, columns: number): SmartInventory$Builder;
	title(title: string): SmartInventory$Builder;
	type(type: InventoryType): SmartInventory$Builder;
}

export default class SmartInventory$Builder {
	public static get $javaClass(): any {
		return Java.type('fr.minuskube.inv.SmartInventory$Builder');
	}
	public static $isInstance(obj: any): obj is SmartInventory$Builder {
		return obj instanceof SmartInventory$Builder.$javaClass;
	}

}

