declare var Java: any;
import Class from '../../java/lang/Class.js'
import Enum from '../../java/lang/Enum.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'

export default interface NetherWartsState extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class NetherWartsState {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.NetherWartsState');
	}
	public static $isInstance(obj: any): obj is NetherWartsState {
		return obj instanceof NetherWartsState.$javaClass;
	}

	public static get RIPE(): NetherWartsState {
		return this.$javaClass.RIPE;
	}
	public static get SEEDED(): NetherWartsState {
		return this.$javaClass.SEEDED;
	}
	public static get STAGE_ONE(): NetherWartsState {
		return this.$javaClass.STAGE_ONE;
	}
	public static get STAGE_TWO(): NetherWartsState {
		return this.$javaClass.STAGE_TWO;
	}
}

