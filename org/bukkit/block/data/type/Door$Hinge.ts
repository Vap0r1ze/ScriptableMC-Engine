declare var Java: any;
import Class from '../../../../../java/lang/Class.js'
import Enum from '../../../../../java/lang/Enum.js'
import Object from '../../../../../java/lang/Object.js'
import String from '../../../../../java/lang/String.js'

export default interface Door$Hinge extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class Door$Hinge {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Door$Hinge');
	}
	public static $isInstance(obj: any): obj is Door$Hinge {
		return obj instanceof Door$Hinge.$javaClass;
	}

	public static get LEFT(): Door$Hinge {
		return this.$javaClass.LEFT;
	}
	public static get RIGHT(): Door$Hinge {
		return this.$javaClass.RIGHT;
	}
}

