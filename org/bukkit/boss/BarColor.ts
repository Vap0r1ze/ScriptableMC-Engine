declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Enum from '../../../java/lang/Enum.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface BarColor extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class BarColor {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.boss.BarColor');
	}
	public static $isInstance(obj: any): obj is BarColor {
		return obj instanceof BarColor.$javaClass;
	}

	public static get BLUE(): BarColor {
		return this.$javaClass.BLUE;
	}
	public static get GREEN(): BarColor {
		return this.$javaClass.GREEN;
	}
	public static get PINK(): BarColor {
		return this.$javaClass.PINK;
	}
	public static get PURPLE(): BarColor {
		return this.$javaClass.PURPLE;
	}
	public static get RED(): BarColor {
		return this.$javaClass.RED;
	}
	public static get WHITE(): BarColor {
		return this.$javaClass.WHITE;
	}
	public static get YELLOW(): BarColor {
		return this.$javaClass.YELLOW;
	}
}

