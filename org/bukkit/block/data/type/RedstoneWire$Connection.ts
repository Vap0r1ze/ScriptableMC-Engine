declare var Java: any;
import Class from '../../../../../java/lang/Class.js'
import Enum from '../../../../../java/lang/Enum.js'
import Object from '../../../../../java/lang/Object.js'
import String from '../../../../../java/lang/String.js'

export default interface RedstoneWire$Connection extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class RedstoneWire$Connection {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.RedstoneWire$Connection');
	}
	public static $isInstance(obj: any): obj is RedstoneWire$Connection {
		return obj instanceof RedstoneWire$Connection.$javaClass;
	}

	public static get NONE(): RedstoneWire$Connection {
		return this.$javaClass.NONE;
	}
	public static get SIDE(): RedstoneWire$Connection {
		return this.$javaClass.SIDE;
	}
	public static get UP(): RedstoneWire$Connection {
		return this.$javaClass.UP;
	}
}

