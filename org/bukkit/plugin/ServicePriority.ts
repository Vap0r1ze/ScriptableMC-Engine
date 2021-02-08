declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Enum from '../../../java/lang/Enum.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface ServicePriority extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class ServicePriority {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.ServicePriority');
	}
	public static $isInstance(obj: any): obj is ServicePriority {
		return obj instanceof ServicePriority.$javaClass;
	}

	public static get High(): ServicePriority {
		return this.$javaClass.High;
	}
	public static get Highest(): ServicePriority {
		return this.$javaClass.Highest;
	}
	public static get Low(): ServicePriority {
		return this.$javaClass.Low;
	}
	public static get Lowest(): ServicePriority {
		return this.$javaClass.Lowest;
	}
	public static get Normal(): ServicePriority {
		return this.$javaClass.Normal;
	}
}

