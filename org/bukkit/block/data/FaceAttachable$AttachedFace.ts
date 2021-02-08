declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Enum from '../../../../java/lang/Enum.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface FaceAttachable$AttachedFace extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class FaceAttachable$AttachedFace {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.FaceAttachable$AttachedFace');
	}
	public static $isInstance(obj: any): obj is FaceAttachable$AttachedFace {
		return obj instanceof FaceAttachable$AttachedFace.$javaClass;
	}

	public static get CEILING(): FaceAttachable$AttachedFace {
		return this.$javaClass.CEILING;
	}
	public static get FLOOR(): FaceAttachable$AttachedFace {
		return this.$javaClass.FLOOR;
	}
	public static get WALL(): FaceAttachable$AttachedFace {
		return this.$javaClass.WALL;
	}
}

