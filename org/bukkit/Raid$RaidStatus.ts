declare var Java: any;
import Class from '../../java/lang/Class.js'
import Enum from '../../java/lang/Enum.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'

export default interface Raid$RaidStatus extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class Raid$RaidStatus {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Raid$RaidStatus');
	}
	public static $isInstance(obj: any): obj is Raid$RaidStatus {
		return obj instanceof Raid$RaidStatus.$javaClass;
	}

	public static get LOSS(): Raid$RaidStatus {
		return this.$javaClass.LOSS;
	}
	public static get ONGOING(): Raid$RaidStatus {
		return this.$javaClass.ONGOING;
	}
	public static get STOPPED(): Raid$RaidStatus {
		return this.$javaClass.STOPPED;
	}
	public static get VICTORY(): Raid$RaidStatus {
		return this.$javaClass.VICTORY;
	}
}

