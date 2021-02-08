declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Enum from '../../../../java/lang/Enum.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface Rail$Shape extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class Rail$Shape {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.Rail$Shape');
	}
	public static $isInstance(obj: any): obj is Rail$Shape {
		return obj instanceof Rail$Shape.$javaClass;
	}

	public static get ASCENDING_EAST(): Rail$Shape {
		return this.$javaClass.ASCENDING_EAST;
	}
	public static get ASCENDING_NORTH(): Rail$Shape {
		return this.$javaClass.ASCENDING_NORTH;
	}
	public static get ASCENDING_SOUTH(): Rail$Shape {
		return this.$javaClass.ASCENDING_SOUTH;
	}
	public static get ASCENDING_WEST(): Rail$Shape {
		return this.$javaClass.ASCENDING_WEST;
	}
	public static get EAST_WEST(): Rail$Shape {
		return this.$javaClass.EAST_WEST;
	}
	public static get NORTH_EAST(): Rail$Shape {
		return this.$javaClass.NORTH_EAST;
	}
	public static get NORTH_SOUTH(): Rail$Shape {
		return this.$javaClass.NORTH_SOUTH;
	}
	public static get NORTH_WEST(): Rail$Shape {
		return this.$javaClass.NORTH_WEST;
	}
	public static get SOUTH_EAST(): Rail$Shape {
		return this.$javaClass.SOUTH_EAST;
	}
	public static get SOUTH_WEST(): Rail$Shape {
		return this.$javaClass.SOUTH_WEST;
	}
}

