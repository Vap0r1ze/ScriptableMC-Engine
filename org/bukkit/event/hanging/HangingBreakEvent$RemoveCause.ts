declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Enum from '../../../../java/lang/Enum.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface HangingBreakEvent$RemoveCause extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class HangingBreakEvent$RemoveCause {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.hanging.HangingBreakEvent$RemoveCause');
	}
	public static $isInstance(obj: any): obj is HangingBreakEvent$RemoveCause {
		return obj instanceof HangingBreakEvent$RemoveCause.$javaClass;
	}

	public static get DEFAULT(): HangingBreakEvent$RemoveCause {
		return this.$javaClass.DEFAULT;
	}
	public static get ENTITY(): HangingBreakEvent$RemoveCause {
		return this.$javaClass.ENTITY;
	}
	public static get EXPLOSION(): HangingBreakEvent$RemoveCause {
		return this.$javaClass.EXPLOSION;
	}
	public static get OBSTRUCTION(): HangingBreakEvent$RemoveCause {
		return this.$javaClass.OBSTRUCTION;
	}
	public static get PHYSICS(): HangingBreakEvent$RemoveCause {
		return this.$javaClass.PHYSICS;
	}
}

