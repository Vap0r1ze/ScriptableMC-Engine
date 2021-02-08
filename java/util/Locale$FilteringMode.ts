declare var Java: any;
import Class from '../../java/lang/Class.js'
import Enum from '../../java/lang/Enum.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'

export default interface Locale$FilteringMode extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class Locale$FilteringMode {
	public static get $javaClass(): any {
		return Java.type('java.util.Locale$FilteringMode');
	}
	public static $isInstance(obj: any): obj is Locale$FilteringMode {
		return obj instanceof Locale$FilteringMode.$javaClass;
	}

	public static get AUTOSELECT_FILTERING(): Locale$FilteringMode {
		return this.$javaClass.AUTOSELECT_FILTERING;
	}
	public static get EXTENDED_FILTERING(): Locale$FilteringMode {
		return this.$javaClass.EXTENDED_FILTERING;
	}
	public static get IGNORE_EXTENDED_RANGES(): Locale$FilteringMode {
		return this.$javaClass.IGNORE_EXTENDED_RANGES;
	}
	public static get MAP_EXTENDED_RANGES(): Locale$FilteringMode {
		return this.$javaClass.MAP_EXTENDED_RANGES;
	}
	public static get REJECT_EXTENDED_RANGES(): Locale$FilteringMode {
		return this.$javaClass.REJECT_EXTENDED_RANGES;
	}
}

