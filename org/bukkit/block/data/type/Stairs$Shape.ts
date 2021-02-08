declare var Java: any;
import Class from '../../../../../java/lang/Class.js'
import Enum from '../../../../../java/lang/Enum.js'
import Object from '../../../../../java/lang/Object.js'
import String from '../../../../../java/lang/String.js'

export default interface Stairs$Shape extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class Stairs$Shape {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Stairs$Shape');
	}
	public static $isInstance(obj: any): obj is Stairs$Shape {
		return obj instanceof Stairs$Shape.$javaClass;
	}

	public static get INNER_LEFT(): Stairs$Shape {
		return this.$javaClass.INNER_LEFT;
	}
	public static get INNER_RIGHT(): Stairs$Shape {
		return this.$javaClass.INNER_RIGHT;
	}
	public static get OUTER_LEFT(): Stairs$Shape {
		return this.$javaClass.OUTER_LEFT;
	}
	public static get OUTER_RIGHT(): Stairs$Shape {
		return this.$javaClass.OUTER_RIGHT;
	}
	public static get STRAIGHT(): Stairs$Shape {
		return this.$javaClass.STRAIGHT;
	}
}

