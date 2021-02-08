declare var Java: any;
import ItemTagAdapterContext from './ItemTagAdapterContext.js'
import ItemTagType from './ItemTagType.js'
import NamespacedKey from '../../../../../org/bukkit/NamespacedKey.js'
import Object from '../../../../../java/lang/Object.js'

export default interface CustomItemTagContainer {
	getAdapterContext(): ItemTagAdapterContext;
	getCustomTag(arg0: NamespacedKey, arg1: ItemTagType): Object;
	hasCustomTag(arg0: NamespacedKey, arg1: ItemTagType): boolean;
	isEmpty(): boolean;
	removeCustomTag(arg0: NamespacedKey): void;
	setCustomTag(arg0: NamespacedKey, arg1: ItemTagType, arg2: Object): void;
}

export default class CustomItemTagContainer {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.meta.tags.CustomItemTagContainer');
	}
	public static $isInstance(obj: any): obj is CustomItemTagContainer {
		return obj instanceof CustomItemTagContainer.$javaClass;
	}

}

