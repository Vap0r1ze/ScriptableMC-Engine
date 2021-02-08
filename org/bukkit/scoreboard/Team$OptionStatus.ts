declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Enum from '../../../java/lang/Enum.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface Team$OptionStatus extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class Team$OptionStatus {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.scoreboard.Team$OptionStatus');
	}
	public static $isInstance(obj: any): obj is Team$OptionStatus {
		return obj instanceof Team$OptionStatus.$javaClass;
	}

	public static get ALWAYS(): Team$OptionStatus {
		return this.$javaClass.ALWAYS;
	}
	public static get FOR_OTHER_TEAMS(): Team$OptionStatus {
		return this.$javaClass.FOR_OTHER_TEAMS;
	}
	public static get FOR_OWN_TEAM(): Team$OptionStatus {
		return this.$javaClass.FOR_OWN_TEAM;
	}
	public static get NEVER(): Team$OptionStatus {
		return this.$javaClass.NEVER;
	}
}

