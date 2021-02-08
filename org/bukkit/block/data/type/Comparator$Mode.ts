declare var Java: any;
import Class from '../../../../../java/lang/Class.js'
import Enum from '../../../../../java/lang/Enum.js'
import Object from '../../../../../java/lang/Object.js'
import String from '../../../../../java/lang/String.js'

export default interface Comparator$Mode extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class Comparator$Mode {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Comparator$Mode');
	}
	public static $isInstance(obj: any): obj is Comparator$Mode {
		return obj instanceof Comparator$Mode.$javaClass;
	}

	public static get COMPARE(): Comparator$Mode {
		return this.$javaClass.COMPARE;
	}
	public static get SUBTRACT(): Comparator$Mode {
		return this.$javaClass.SUBTRACT;
	}
}

