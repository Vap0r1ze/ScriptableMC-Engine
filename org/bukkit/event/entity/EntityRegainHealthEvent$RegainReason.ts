declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Enum from '../../../../java/lang/Enum.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface EntityRegainHealthEvent$RegainReason extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class EntityRegainHealthEvent$RegainReason {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityRegainHealthEvent$RegainReason');
	}
	public static $isInstance(obj: any): obj is EntityRegainHealthEvent$RegainReason {
		return obj instanceof EntityRegainHealthEvent$RegainReason.$javaClass;
	}

	public static get CUSTOM(): EntityRegainHealthEvent$RegainReason {
		return this.$javaClass.CUSTOM;
	}
	public static get EATING(): EntityRegainHealthEvent$RegainReason {
		return this.$javaClass.EATING;
	}
	public static get ENDER_CRYSTAL(): EntityRegainHealthEvent$RegainReason {
		return this.$javaClass.ENDER_CRYSTAL;
	}
	public static get MAGIC(): EntityRegainHealthEvent$RegainReason {
		return this.$javaClass.MAGIC;
	}
	public static get MAGIC_REGEN(): EntityRegainHealthEvent$RegainReason {
		return this.$javaClass.MAGIC_REGEN;
	}
	public static get REGEN(): EntityRegainHealthEvent$RegainReason {
		return this.$javaClass.REGEN;
	}
	public static get SATIATED(): EntityRegainHealthEvent$RegainReason {
		return this.$javaClass.SATIATED;
	}
	public static get WITHER(): EntityRegainHealthEvent$RegainReason {
		return this.$javaClass.WITHER;
	}
	public static get WITHER_SPAWN(): EntityRegainHealthEvent$RegainReason {
		return this.$javaClass.WITHER_SPAWN;
	}
}

