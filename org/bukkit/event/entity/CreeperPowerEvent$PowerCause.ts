declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Enum from '../../../../java/lang/Enum.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface CreeperPowerEvent$PowerCause extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class CreeperPowerEvent$PowerCause {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.CreeperPowerEvent$PowerCause');
	}
	public static $isInstance(obj: any): obj is CreeperPowerEvent$PowerCause {
		return obj instanceof CreeperPowerEvent$PowerCause.$javaClass;
	}

	public static get LIGHTNING(): CreeperPowerEvent$PowerCause {
		return this.$javaClass.LIGHTNING;
	}
	public static get SET_OFF(): CreeperPowerEvent$PowerCause {
		return this.$javaClass.SET_OFF;
	}
	public static get SET_ON(): CreeperPowerEvent$PowerCause {
		return this.$javaClass.SET_ON;
	}
}

