declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Enum from '../../../../java/lang/Enum.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface PortalCreateEvent$CreateReason extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class PortalCreateEvent$CreateReason {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.world.PortalCreateEvent$CreateReason');
	}
	public static $isInstance(obj: any): obj is PortalCreateEvent$CreateReason {
		return obj instanceof PortalCreateEvent$CreateReason.$javaClass;
	}

	public static get END_PLATFORM(): PortalCreateEvent$CreateReason {
		return this.$javaClass.END_PLATFORM;
	}
	public static get FIRE(): PortalCreateEvent$CreateReason {
		return this.$javaClass.FIRE;
	}
	public static get NETHER_PAIR(): PortalCreateEvent$CreateReason {
		return this.$javaClass.NETHER_PAIR;
	}
}

