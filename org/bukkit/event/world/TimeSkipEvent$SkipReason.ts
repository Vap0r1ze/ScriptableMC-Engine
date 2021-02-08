declare var Java: any;

export default interface TimeSkipEvent$SkipReason {
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
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

