declare var Java: any;
import Class from '../../java/lang/Class.js'
import Enum from '../../java/lang/Enum.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'

export default interface Rotation extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
	rotateClockwise(): Rotation;
	rotateCounterClockwise(): Rotation;
}

export default class Rotation {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Rotation');
	}
	public static $isInstance(obj: any): obj is Rotation {
		return obj instanceof Rotation.$javaClass;
	}

	public static get CLOCKWISE(): Rotation {
		return this.$javaClass.CLOCKWISE;
	}
	public static get CLOCKWISE_135(): Rotation {
		return this.$javaClass.CLOCKWISE_135;
	}
	public static get CLOCKWISE_45(): Rotation {
		return this.$javaClass.CLOCKWISE_45;
	}
	public static get COUNTER_CLOCKWISE(): Rotation {
		return this.$javaClass.COUNTER_CLOCKWISE;
	}
	public static get COUNTER_CLOCKWISE_45(): Rotation {
		return this.$javaClass.COUNTER_CLOCKWISE_45;
	}
	public static get FLIPPED(): Rotation {
		return this.$javaClass.FLIPPED;
	}
	public static get FLIPPED_45(): Rotation {
		return this.$javaClass.FLIPPED_45;
	}
	public static get NONE(): Rotation {
		return this.$javaClass.NONE;
	}
}

