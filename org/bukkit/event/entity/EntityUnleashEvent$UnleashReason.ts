declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Enum from '../../../../java/lang/Enum.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface EntityUnleashEvent$UnleashReason extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class EntityUnleashEvent$UnleashReason {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityUnleashEvent$UnleashReason');
	}
	public static $isInstance(obj: any): obj is EntityUnleashEvent$UnleashReason {
		return obj instanceof EntityUnleashEvent$UnleashReason.$javaClass;
	}

	public static get DISTANCE(): EntityUnleashEvent$UnleashReason {
		return this.$javaClass.DISTANCE;
	}
	public static get HOLDER_GONE(): EntityUnleashEvent$UnleashReason {
		return this.$javaClass.HOLDER_GONE;
	}
	public static get PLAYER_UNLEASH(): EntityUnleashEvent$UnleashReason {
		return this.$javaClass.PLAYER_UNLEASH;
	}
	public static get UNKNOWN(): EntityUnleashEvent$UnleashReason {
		return this.$javaClass.UNKNOWN;
	}
}

