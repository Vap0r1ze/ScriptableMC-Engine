declare var Java: any;
import Class from '../../java/lang/Class.js'
import Enum from '../../java/lang/Enum.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'

export default interface TreeSpecies extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getData(): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class TreeSpecies {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.TreeSpecies');
	}
	public static $isInstance(obj: any): obj is TreeSpecies {
		return obj instanceof TreeSpecies.$javaClass;
	}

	public static get ACACIA(): TreeSpecies {
		return this.$javaClass.ACACIA;
	}
	public static get BIRCH(): TreeSpecies {
		return this.$javaClass.BIRCH;
	}
	public static get DARK_OAK(): TreeSpecies {
		return this.$javaClass.DARK_OAK;
	}
	public static get GENERIC(): TreeSpecies {
		return this.$javaClass.GENERIC;
	}
	public static get JUNGLE(): TreeSpecies {
		return this.$javaClass.JUNGLE;
	}
	public static get REDWOOD(): TreeSpecies {
		return this.$javaClass.REDWOOD;
	}
}

