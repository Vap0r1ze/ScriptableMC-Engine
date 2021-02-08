declare var Java: any;
import Class from '../../java/lang/Class.js'
import Enum from '../../java/lang/Enum.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'

export default interface Locale$Category extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class Locale$Category {
	public static get $javaClass(): any {
		return Java.type('java.util.Locale$Category');
	}
	public static $isInstance(obj: any): obj is Locale$Category {
		return obj instanceof Locale$Category.$javaClass;
	}

	public static get DISPLAY(): Locale$Category {
		return this.$javaClass.DISPLAY;
	}
	public static get FORMAT(): Locale$Category {
		return this.$javaClass.FORMAT;
	}
}

