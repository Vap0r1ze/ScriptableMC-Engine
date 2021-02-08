declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Enum from '../../../../java/lang/Enum.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface Mirror extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class Mirror {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.structure.Mirror');
	}
	public static $isInstance(obj: any): obj is Mirror {
		return obj instanceof Mirror.$javaClass;
	}

	public static get FRONT_BACK(): Mirror {
		return this.$javaClass.FRONT_BACK;
	}
	public static get LEFT_RIGHT(): Mirror {
		return this.$javaClass.LEFT_RIGHT;
	}
	public static get NONE(): Mirror {
		return this.$javaClass.NONE;
	}
}

