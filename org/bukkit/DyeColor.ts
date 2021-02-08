declare var Java: any;
import Class from '../../java/lang/Class.js'
import Color from './Color.js'
import Enum from '../../java/lang/Enum.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'

export default interface DyeColor extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getColor(): Color;
	getDeclaringClass(): Class;
	getDyeData(): number;
	getFireworkColor(): Color;
	getWoolData(): number;
	name(): string;
	ordinal(): number;
}

export default class DyeColor {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.DyeColor');
	}
	public static $isInstance(obj: any): obj is DyeColor {
		return obj instanceof DyeColor.$javaClass;
	}

	public static get BLACK(): DyeColor {
		return this.$javaClass.BLACK;
	}
	public static get BLUE(): DyeColor {
		return this.$javaClass.BLUE;
	}
	public static get BROWN(): DyeColor {
		return this.$javaClass.BROWN;
	}
	public static get CYAN(): DyeColor {
		return this.$javaClass.CYAN;
	}
	public static get GRAY(): DyeColor {
		return this.$javaClass.GRAY;
	}
	public static get GREEN(): DyeColor {
		return this.$javaClass.GREEN;
	}
	public static get LIGHT_BLUE(): DyeColor {
		return this.$javaClass.LIGHT_BLUE;
	}
	public static get LIGHT_GRAY(): DyeColor {
		return this.$javaClass.LIGHT_GRAY;
	}
	public static get LIME(): DyeColor {
		return this.$javaClass.LIME;
	}
	public static get MAGENTA(): DyeColor {
		return this.$javaClass.MAGENTA;
	}
	public static get ORANGE(): DyeColor {
		return this.$javaClass.ORANGE;
	}
	public static get PINK(): DyeColor {
		return this.$javaClass.PINK;
	}
	public static get PURPLE(): DyeColor {
		return this.$javaClass.PURPLE;
	}
	public static get RED(): DyeColor {
		return this.$javaClass.RED;
	}
	public static get WHITE(): DyeColor {
		return this.$javaClass.WHITE;
	}
	public static get YELLOW(): DyeColor {
		return this.$javaClass.YELLOW;
	}
}

