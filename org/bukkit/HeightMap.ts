declare var Java: any;
import Class from '../../java/lang/Class.js'
import Enum from '../../java/lang/Enum.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'

export default interface HeightMap extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class HeightMap {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.HeightMap');
	}
	public static $isInstance(obj: any): obj is HeightMap {
		return obj instanceof HeightMap.$javaClass;
	}

	public static get MOTION_BLOCKING(): HeightMap {
		return this.$javaClass.MOTION_BLOCKING;
	}
	public static get MOTION_BLOCKING_NO_LEAVES(): HeightMap {
		return this.$javaClass.MOTION_BLOCKING_NO_LEAVES;
	}
	public static get OCEAN_FLOOR(): HeightMap {
		return this.$javaClass.OCEAN_FLOOR;
	}
	public static get OCEAN_FLOOR_WG(): HeightMap {
		return this.$javaClass.OCEAN_FLOOR_WG;
	}
	public static get WORLD_SURFACE(): HeightMap {
		return this.$javaClass.WORLD_SURFACE;
	}
	public static get WORLD_SURFACE_WG(): HeightMap {
		return this.$javaClass.WORLD_SURFACE_WG;
	}
}

