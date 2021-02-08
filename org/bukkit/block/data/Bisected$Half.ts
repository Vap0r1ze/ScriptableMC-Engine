declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Enum from '../../../../java/lang/Enum.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface Bisected$Half extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class Bisected$Half {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.Bisected$Half');
	}
	public static $isInstance(obj: any): obj is Bisected$Half {
		return obj instanceof Bisected$Half.$javaClass;
	}

	public static get BOTTOM(): Bisected$Half {
		return this.$javaClass.BOTTOM;
	}
	public static get TOP(): Bisected$Half {
		return this.$javaClass.TOP;
	}
}

