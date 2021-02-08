declare var Java: any;
import Collection from '../../../java/util/Collection.js'
import Keyed from '../../../org/bukkit/Keyed.js'
import NamespacedKey from '../../../org/bukkit/NamespacedKey.js'
import String from '../../../java/lang/String.js'

export default interface Advancement extends Keyed {
	getCriteria(): Array<string>;
	getKey(): NamespacedKey;
}

export default class Advancement {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.advancement.Advancement');
	}
	public static $isInstance(obj: any): obj is Advancement {
		return obj instanceof Advancement.$javaClass;
	}

}

