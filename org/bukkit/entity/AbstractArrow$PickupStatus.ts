declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Enum from '../../../java/lang/Enum.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface AbstractArrow$PickupStatus extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class AbstractArrow$PickupStatus {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.AbstractArrow$PickupStatus');
	}
	public static $isInstance(obj: any): obj is AbstractArrow$PickupStatus {
		return obj instanceof AbstractArrow$PickupStatus.$javaClass;
	}

	public static get ALLOWED(): AbstractArrow$PickupStatus {
		return this.$javaClass.ALLOWED;
	}
	public static get CREATIVE_ONLY(): AbstractArrow$PickupStatus {
		return this.$javaClass.CREATIVE_ONLY;
	}
	public static get DISALLOWED(): AbstractArrow$PickupStatus {
		return this.$javaClass.DISALLOWED;
	}
}

