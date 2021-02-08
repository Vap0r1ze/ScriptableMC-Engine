declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Enum from '../../../java/lang/Enum.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface Collector$Characteristics extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class Collector$Characteristics {
	public static get $javaClass(): any {
		return Java.type('java.util.stream.Collector$Characteristics');
	}
	public static $isInstance(obj: any): obj is Collector$Characteristics {
		return obj instanceof Collector$Characteristics.$javaClass;
	}

	public static get CONCURRENT(): Collector$Characteristics {
		return this.$javaClass.CONCURRENT;
	}
	public static get IDENTITY_FINISH(): Collector$Characteristics {
		return this.$javaClass.IDENTITY_FINISH;
	}
	public static get UNORDERED(): Collector$Characteristics {
		return this.$javaClass.UNORDERED;
	}
}

