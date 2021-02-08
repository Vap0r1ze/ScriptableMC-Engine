declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Enum from '../../../java/lang/Enum.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface MapView$Scale extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	getValue(): number;
	name(): string;
	ordinal(): number;
}

export default class MapView$Scale {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.map.MapView$Scale');
	}
	public static $isInstance(obj: any): obj is MapView$Scale {
		return obj instanceof MapView$Scale.$javaClass;
	}

	public static get CLOSE(): MapView$Scale {
		return this.$javaClass.CLOSE;
	}
	public static get CLOSEST(): MapView$Scale {
		return this.$javaClass.CLOSEST;
	}
	public static get FAR(): MapView$Scale {
		return this.$javaClass.FAR;
	}
	public static get FARTHEST(): MapView$Scale {
		return this.$javaClass.FARTHEST;
	}
	public static get NORMAL(): MapView$Scale {
		return this.$javaClass.NORMAL;
	}
}

