declare var Java: any;
import Class from '../../java/lang/Class.js'
import Enum from '../../java/lang/Enum.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'

export default interface PortalType extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class PortalType {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.PortalType');
	}
	public static $isInstance(obj: any): obj is PortalType {
		return obj instanceof PortalType.$javaClass;
	}

	public static get CUSTOM(): PortalType {
		return this.$javaClass.CUSTOM;
	}
	public static get ENDER(): PortalType {
		return this.$javaClass.ENDER;
	}
	public static get NETHER(): PortalType {
		return this.$javaClass.NETHER;
	}
}

