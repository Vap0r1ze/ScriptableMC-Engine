declare var Java: any;
import Class from '../../java/lang/Class.js'
import Enum from '../../java/lang/Enum.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'

export default interface FluidCollisionMode extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class FluidCollisionMode {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.FluidCollisionMode');
	}
	public static $isInstance(obj: any): obj is FluidCollisionMode {
		return obj instanceof FluidCollisionMode.$javaClass;
	}

	public static get ALWAYS(): FluidCollisionMode {
		return this.$javaClass.ALWAYS;
	}
	public static get NEVER(): FluidCollisionMode {
		return this.$javaClass.NEVER;
	}
	public static get SOURCE_ONLY(): FluidCollisionMode {
		return this.$javaClass.SOURCE_ONLY;
	}
}

