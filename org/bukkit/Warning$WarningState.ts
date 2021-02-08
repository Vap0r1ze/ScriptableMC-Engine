declare var Java: any;
import Class from '../../java/lang/Class.js'
import Enum from '../../java/lang/Enum.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'
import Warning from './Warning.js'

export default interface Warning$WarningState extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
	printFor(warning: Warning): boolean;
}

export default class Warning$WarningState {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Warning$WarningState');
	}
	public static $isInstance(obj: any): obj is Warning$WarningState {
		return obj instanceof Warning$WarningState.$javaClass;
	}

	public static get DEFAULT(): Warning$WarningState {
		return this.$javaClass.DEFAULT;
	}
	public static get OFF(): Warning$WarningState {
		return this.$javaClass.OFF;
	}
	public static get ON(): Warning$WarningState {
		return this.$javaClass.ON;
	}
}

