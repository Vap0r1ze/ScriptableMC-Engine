declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Enum from '../../../../java/lang/Enum.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface TimeSkipEvent$SkipReason extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class TimeSkipEvent$SkipReason {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.world.TimeSkipEvent$SkipReason');
	}
	public static $isInstance(obj: any): obj is TimeSkipEvent$SkipReason {
		return obj instanceof TimeSkipEvent$SkipReason.$javaClass;
	}

	public static get COMMAND(): TimeSkipEvent$SkipReason {
		return this.$javaClass.COMMAND;
	}
	public static get CUSTOM(): TimeSkipEvent$SkipReason {
		return this.$javaClass.CUSTOM;
	}
	public static get NIGHT_SKIP(): TimeSkipEvent$SkipReason {
		return this.$javaClass.NIGHT_SKIP;
	}
}

