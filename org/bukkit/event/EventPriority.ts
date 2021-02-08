declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Enum from '../../../java/lang/Enum.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface EventPriority extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	getSlot(): number;
	name(): string;
	ordinal(): number;
}

export default class EventPriority {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.EventPriority');
	}
	public static $isInstance(obj: any): obj is EventPriority {
		return obj instanceof EventPriority.$javaClass;
	}

	public static get HIGH(): EventPriority {
		return this.$javaClass.HIGH;
	}
	public static get HIGHEST(): EventPriority {
		return this.$javaClass.HIGHEST;
	}
	public static get LOW(): EventPriority {
		return this.$javaClass.LOW;
	}
	public static get LOWEST(): EventPriority {
		return this.$javaClass.LOWEST;
	}
	public static get MONITOR(): EventPriority {
		return this.$javaClass.MONITOR;
	}
	public static get NORMAL(): EventPriority {
		return this.$javaClass.NORMAL;
	}
}

