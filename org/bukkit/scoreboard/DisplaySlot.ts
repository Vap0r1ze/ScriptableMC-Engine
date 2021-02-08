declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Enum from '../../../java/lang/Enum.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface DisplaySlot extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class DisplaySlot {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.scoreboard.DisplaySlot');
	}
	public static $isInstance(obj: any): obj is DisplaySlot {
		return obj instanceof DisplaySlot.$javaClass;
	}

	public static get BELOW_NAME(): DisplaySlot {
		return this.$javaClass.BELOW_NAME;
	}
	public static get PLAYER_LIST(): DisplaySlot {
		return this.$javaClass.PLAYER_LIST;
	}
	public static get SIDEBAR(): DisplaySlot {
		return this.$javaClass.SIDEBAR;
	}
}

