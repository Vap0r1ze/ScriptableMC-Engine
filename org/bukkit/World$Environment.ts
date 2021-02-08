declare var Java: any;
import Class from '../../java/lang/Class.js'
import Enum from '../../java/lang/Enum.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'

export default interface World$Environment extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	getId(): number;
	name(): string;
	ordinal(): number;
}

export default class World$Environment {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.World$Environment');
	}
	public static $isInstance(obj: any): obj is World$Environment {
		return obj instanceof World$Environment.$javaClass;
	}

	public static get NETHER(): World$Environment {
		return this.$javaClass.NETHER;
	}
	public static get NORMAL(): World$Environment {
		return this.$javaClass.NORMAL;
	}
	public static get THE_END(): World$Environment {
		return this.$javaClass.THE_END;
	}
}

