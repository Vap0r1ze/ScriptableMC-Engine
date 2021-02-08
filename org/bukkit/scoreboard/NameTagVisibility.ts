declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Enum from '../../../java/lang/Enum.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface NameTagVisibility extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class NameTagVisibility {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.scoreboard.NameTagVisibility');
	}
	public static $isInstance(obj: any): obj is NameTagVisibility {
		return obj instanceof NameTagVisibility.$javaClass;
	}

	public static get ALWAYS(): NameTagVisibility {
		return this.$javaClass.ALWAYS;
	}
	public static get HIDE_FOR_OTHER_TEAMS(): NameTagVisibility {
		return this.$javaClass.HIDE_FOR_OTHER_TEAMS;
	}
	public static get HIDE_FOR_OWN_TEAM(): NameTagVisibility {
		return this.$javaClass.HIDE_FOR_OWN_TEAM;
	}
	public static get NEVER(): NameTagVisibility {
		return this.$javaClass.NEVER;
	}
}

