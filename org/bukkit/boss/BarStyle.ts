declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Enum from '../../../java/lang/Enum.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface BarStyle extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class BarStyle {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.boss.BarStyle');
	}
	public static $isInstance(obj: any): obj is BarStyle {
		return obj instanceof BarStyle.$javaClass;
	}

	public static get SEGMENTED_10(): BarStyle {
		return this.$javaClass.SEGMENTED_10;
	}
	public static get SEGMENTED_12(): BarStyle {
		return this.$javaClass.SEGMENTED_12;
	}
	public static get SEGMENTED_20(): BarStyle {
		return this.$javaClass.SEGMENTED_20;
	}
	public static get SEGMENTED_6(): BarStyle {
		return this.$javaClass.SEGMENTED_6;
	}
	public static get SOLID(): BarStyle {
		return this.$javaClass.SOLID;
	}
}

