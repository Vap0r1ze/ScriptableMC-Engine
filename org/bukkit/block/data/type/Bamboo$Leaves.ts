declare var Java: any;
import Class from '../../../../../java/lang/Class.js'
import Enum from '../../../../../java/lang/Enum.js'
import Object from '../../../../../java/lang/Object.js'
import String from '../../../../../java/lang/String.js'

export default interface Bamboo$Leaves extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class Bamboo$Leaves {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Bamboo$Leaves');
	}
	public static $isInstance(obj: any): obj is Bamboo$Leaves {
		return obj instanceof Bamboo$Leaves.$javaClass;
	}

	public static get LARGE(): Bamboo$Leaves {
		return this.$javaClass.LARGE;
	}
	public static get NONE(): Bamboo$Leaves {
		return this.$javaClass.NONE;
	}
	public static get SMALL(): Bamboo$Leaves {
		return this.$javaClass.SMALL;
	}
}

