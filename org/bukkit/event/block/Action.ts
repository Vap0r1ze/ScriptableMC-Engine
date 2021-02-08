declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Enum from '../../../../java/lang/Enum.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface Action extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class Action {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.Action');
	}
	public static $isInstance(obj: any): obj is Action {
		return obj instanceof Action.$javaClass;
	}

	public static get LEFT_CLICK_AIR(): Action {
		return this.$javaClass.LEFT_CLICK_AIR;
	}
	public static get LEFT_CLICK_BLOCK(): Action {
		return this.$javaClass.LEFT_CLICK_BLOCK;
	}
	public static get PHYSICAL(): Action {
		return this.$javaClass.PHYSICAL;
	}
	public static get RIGHT_CLICK_AIR(): Action {
		return this.$javaClass.RIGHT_CLICK_AIR;
	}
	public static get RIGHT_CLICK_BLOCK(): Action {
		return this.$javaClass.RIGHT_CLICK_BLOCK;
	}
}

