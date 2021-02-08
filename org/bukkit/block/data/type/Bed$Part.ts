declare var Java: any;
import Class from '../../../../../java/lang/Class.js'
import Enum from '../../../../../java/lang/Enum.js'
import Object from '../../../../../java/lang/Object.js'
import String from '../../../../../java/lang/String.js'

export default interface Bed$Part extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class Bed$Part {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Bed$Part');
	}
	public static $isInstance(obj: any): obj is Bed$Part {
		return obj instanceof Bed$Part.$javaClass;
	}

	public static get FOOT(): Bed$Part {
		return this.$javaClass.FOOT;
	}
	public static get HEAD(): Bed$Part {
		return this.$javaClass.HEAD;
	}
}

