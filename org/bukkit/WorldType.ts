declare var Java: any;
import Class from '../../java/lang/Class.js'
import Enum from '../../java/lang/Enum.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'

export default interface WorldType extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	getName(): string;
	name(): string;
	ordinal(): number;
}

export default class WorldType {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.WorldType');
	}
	public static $isInstance(obj: any): obj is WorldType {
		return obj instanceof WorldType.$javaClass;
	}

	public static get AMPLIFIED(): WorldType {
		return this.$javaClass.AMPLIFIED;
	}
	public static get FLAT(): WorldType {
		return this.$javaClass.FLAT;
	}
	public static get LARGE_BIOMES(): WorldType {
		return this.$javaClass.LARGE_BIOMES;
	}
	public static get NORMAL(): WorldType {
		return this.$javaClass.NORMAL;
	}
}

