declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Enum from '../../../../java/lang/Enum.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface RaidStopEvent$Reason extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class RaidStopEvent$Reason {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.raid.RaidStopEvent$Reason');
	}
	public static $isInstance(obj: any): obj is RaidStopEvent$Reason {
		return obj instanceof RaidStopEvent$Reason.$javaClass;
	}

	public static get FINISHED(): RaidStopEvent$Reason {
		return this.$javaClass.FINISHED;
	}
	public static get NOT_IN_VILLAGE(): RaidStopEvent$Reason {
		return this.$javaClass.NOT_IN_VILLAGE;
	}
	public static get PEACE(): RaidStopEvent$Reason {
		return this.$javaClass.PEACE;
	}
	public static get TIMEOUT(): RaidStopEvent$Reason {
		return this.$javaClass.TIMEOUT;
	}
	public static get UNSPAWNABLE(): RaidStopEvent$Reason {
		return this.$javaClass.UNSPAWNABLE;
	}
}

