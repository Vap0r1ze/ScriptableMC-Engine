declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Enum from '../../../java/lang/Enum.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface Pose extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class Pose {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Pose');
	}
	public static $isInstance(obj: any): obj is Pose {
		return obj instanceof Pose.$javaClass;
	}

	public static get DYING(): Pose {
		return this.$javaClass.DYING;
	}
	public static get FALL_FLYING(): Pose {
		return this.$javaClass.FALL_FLYING;
	}
	public static get SLEEPING(): Pose {
		return this.$javaClass.SLEEPING;
	}
	public static get SNEAKING(): Pose {
		return this.$javaClass.SNEAKING;
	}
	public static get SPIN_ATTACK(): Pose {
		return this.$javaClass.SPIN_ATTACK;
	}
	public static get STANDING(): Pose {
		return this.$javaClass.STANDING;
	}
	public static get SWIMMING(): Pose {
		return this.$javaClass.SWIMMING;
	}
}

