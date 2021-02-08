declare var Java: any;
import Class from '../../java/lang/Class.js'
import Enum from '../../java/lang/Enum.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'

export default interface GrassSpecies extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getData(): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class GrassSpecies {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.GrassSpecies');
	}
	public static $isInstance(obj: any): obj is GrassSpecies {
		return obj instanceof GrassSpecies.$javaClass;
	}

	public static get DEAD(): GrassSpecies {
		return this.$javaClass.DEAD;
	}
	public static get FERN_LIKE(): GrassSpecies {
		return this.$javaClass.FERN_LIKE;
	}
	public static get NORMAL(): GrassSpecies {
		return this.$javaClass.NORMAL;
	}
}

