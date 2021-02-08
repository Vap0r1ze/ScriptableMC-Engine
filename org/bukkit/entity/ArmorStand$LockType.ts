declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Enum from '../../../java/lang/Enum.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface ArmorStand$LockType extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class ArmorStand$LockType {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.ArmorStand$LockType');
	}
	public static $isInstance(obj: any): obj is ArmorStand$LockType {
		return obj instanceof ArmorStand$LockType.$javaClass;
	}

	public static get ADDING(): ArmorStand$LockType {
		return this.$javaClass.ADDING;
	}
	public static get ADDING_OR_CHANGING(): ArmorStand$LockType {
		return this.$javaClass.ADDING_OR_CHANGING;
	}
	public static get REMOVING_OR_CHANGING(): ArmorStand$LockType {
		return this.$javaClass.REMOVING_OR_CHANGING;
	}
}

