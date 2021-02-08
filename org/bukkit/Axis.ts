declare var Java: any;
import Class from '../../java/lang/Class.js'
import Enum from '../../java/lang/Enum.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'

export default interface Axis extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class Axis {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Axis');
	}
	public static $isInstance(obj: any): obj is Axis {
		return obj instanceof Axis.$javaClass;
	}

	public static get X(): Axis {
		return this.$javaClass.X;
	}
	public static get Y(): Axis {
		return this.$javaClass.Y;
	}
	public static get Z(): Axis {
		return this.$javaClass.Z;
	}
}

