declare var Java: any;
import Class from '../../../../../java/lang/Class.js'
import Enum from '../../../../../java/lang/Enum.js'
import Object from '../../../../../java/lang/Object.js'
import String from '../../../../../java/lang/String.js'

export default interface Bell$Attachment extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class Bell$Attachment {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Bell$Attachment');
	}
	public static $isInstance(obj: any): obj is Bell$Attachment {
		return obj instanceof Bell$Attachment.$javaClass;
	}

	public static get CEILING(): Bell$Attachment {
		return this.$javaClass.CEILING;
	}
	public static get DOUBLE_WALL(): Bell$Attachment {
		return this.$javaClass.DOUBLE_WALL;
	}
	public static get FLOOR(): Bell$Attachment {
		return this.$javaClass.FLOOR;
	}
	public static get SINGLE_WALL(): Bell$Attachment {
		return this.$javaClass.SINGLE_WALL;
	}
}

