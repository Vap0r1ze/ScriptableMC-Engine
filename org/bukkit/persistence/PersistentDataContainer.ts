declare var Java: any;
import NamespacedKey from '../../../org/bukkit/NamespacedKey.js'
import Object from '../../../java/lang/Object.js'
import PersistentDataAdapterContext from './PersistentDataAdapterContext.js'
import PersistentDataType from './PersistentDataType.js'
import Set from '../../../java/util/Set.js'

export default interface PersistentDataContainer {
	get(arg0: NamespacedKey, arg1: PersistentDataType): Object;
	getAdapterContext(): PersistentDataAdapterContext;
	getKeys(): Set;
	getOrDefault(arg0: NamespacedKey, arg1: PersistentDataType, arg2: Object): Object;
	has(arg0: NamespacedKey, arg1: PersistentDataType): boolean;
	isEmpty(): boolean;
	remove(arg0: NamespacedKey): void;
	set(arg0: NamespacedKey, arg1: PersistentDataType, arg2: Object): void;
}

export default class PersistentDataContainer {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.persistence.PersistentDataContainer');
	}
	public static $isInstance(obj: any): obj is PersistentDataContainer {
		return obj instanceof PersistentDataContainer.$javaClass;
	}

}

