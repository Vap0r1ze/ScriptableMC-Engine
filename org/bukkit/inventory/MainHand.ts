declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Enum from '../../../java/lang/Enum.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface MainHand extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class MainHand {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.MainHand');
	}
	public static $isInstance(obj: any): obj is MainHand {
		return obj instanceof MainHand.$javaClass;
	}

	public static get LEFT(): MainHand {
		return this.$javaClass.LEFT;
	}
	public static get RIGHT(): MainHand {
		return this.$javaClass.RIGHT;
	}
}

