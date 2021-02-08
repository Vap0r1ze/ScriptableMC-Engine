declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Enum from '../../../java/lang/Enum.js'
import Keyed from '../../../org/bukkit/Keyed.js'
import NamespacedKey from '../../../org/bukkit/NamespacedKey.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface Villager$Type extends Enum, Keyed {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	getKey(): NamespacedKey;
	name(): string;
	ordinal(): number;
}

export default class Villager$Type {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Villager$Type');
	}
	public static $isInstance(obj: any): obj is Villager$Type {
		return obj instanceof Villager$Type.$javaClass;
	}

	public static get DESERT(): Villager$Type {
		return this.$javaClass.DESERT;
	}
	public static get JUNGLE(): Villager$Type {
		return this.$javaClass.JUNGLE;
	}
	public static get PLAINS(): Villager$Type {
		return this.$javaClass.PLAINS;
	}
	public static get SAVANNA(): Villager$Type {
		return this.$javaClass.SAVANNA;
	}
	public static get SNOW(): Villager$Type {
		return this.$javaClass.SNOW;
	}
	public static get SWAMP(): Villager$Type {
		return this.$javaClass.SWAMP;
	}
	public static get TAIGA(): Villager$Type {
		return this.$javaClass.TAIGA;
	}
}

