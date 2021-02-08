declare var Java: any;
import Class from '../../../java/lang/Class.js'
import InventoryContents from '../../../fr/minuskube/inv/content/InventoryContents.js'
import InventoryProvider from '../../../fr/minuskube/inv/content/InventoryProvider.js'
import Object from '../../../java/lang/Object.js'
import Player from '../../../org/bukkit/entity/Player.js'
import String from '../../../java/lang/String.js'

export default interface SmartInventoryProvider extends Object, InventoryProvider {
	init(player: Player, contents: InventoryContents): void;
	update(player: Player, contents: InventoryContents): void;
}

export default class SmartInventoryProvider {
	public static get $javaClass(): any {
		return Java.type('com.smc.smartinvs.SmartInventoryProvider');
	}
	public static $isInstance(obj: any): obj is SmartInventoryProvider {
		return obj instanceof SmartInventoryProvider.$javaClass;
	}

	constructor(scriptableObject: any);
	constructor(...args: any[]) {
		return new SmartInventoryProvider.$javaClass(...args);
	}

}

