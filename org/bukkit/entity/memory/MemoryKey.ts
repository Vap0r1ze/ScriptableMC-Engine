declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Keyed from '../../../../org/bukkit/Keyed.js'
import NamespacedKey from '../../../../org/bukkit/NamespacedKey.js'
import Object from '../../../../java/lang/Object.js'
import Set from '../../../../java/util/Set.js'
import String from '../../../../java/lang/String.js'

export default interface MemoryKey extends Object, Keyed {
	getKey(): NamespacedKey;
	getMemoryClass(): Class;
}

export default class MemoryKey {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.memory.MemoryKey');
	}
	public static $isInstance(obj: any): obj is MemoryKey {
		return obj instanceof MemoryKey.$javaClass;
	}

	public static get ADMIRING_DISABLED(): MemoryKey {
		return MemoryKey.$javaClass.ADMIRING_DISABLED;
	}

	public static get ADMIRING_ITEM(): MemoryKey {
		return MemoryKey.$javaClass.ADMIRING_ITEM;
	}

	public static get ANGRY_AT(): MemoryKey {
		return MemoryKey.$javaClass.ANGRY_AT;
	}

	public static get GOLEM_DETECTED_RECENTLY(): MemoryKey {
		return MemoryKey.$javaClass.GOLEM_DETECTED_RECENTLY;
	}

	public static get HOME(): MemoryKey {
		return MemoryKey.$javaClass.HOME;
	}

	public static get HUNTED_RECENTLY(): MemoryKey {
		return MemoryKey.$javaClass.HUNTED_RECENTLY;
	}

	public static get JOB_SITE(): MemoryKey {
		return MemoryKey.$javaClass.JOB_SITE;
	}

	public static get LAST_SLEPT(): MemoryKey {
		return MemoryKey.$javaClass.LAST_SLEPT;
	}

	public static get LAST_WOKEN(): MemoryKey {
		return MemoryKey.$javaClass.LAST_WOKEN;
	}

	public static get LAST_WORKED_AT_POI(): MemoryKey {
		return MemoryKey.$javaClass.LAST_WORKED_AT_POI;
	}

	public static get MEETING_POINT(): MemoryKey {
		return MemoryKey.$javaClass.MEETING_POINT;
	}

	public static get POTENTIAL_JOB_SITE(): MemoryKey {
		return MemoryKey.$javaClass.POTENTIAL_JOB_SITE;
	}

	public static get UNIVERSAL_ANGER(): MemoryKey {
		return MemoryKey.$javaClass.UNIVERSAL_ANGER;
	}

	public static getByKey(namespacedKey: NamespacedKey): MemoryKey;
	public static getByKey(...args: any[]): any {
		return MemoryKey.$javaClass.getByKey(...args);
	}

	public static values(): Set;
	public static values(...args: any[]): any {
		return MemoryKey.$javaClass.values(...args);
	}

}

