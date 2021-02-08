declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Enum from '../../../java/lang/Enum.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface Event$Result extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class Event$Result {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.Event$Result');
	}
	public static $isInstance(obj: any): obj is Event$Result {
		return obj instanceof Event$Result.$javaClass;
	}

	public static get ALLOW(): Event$Result {
		return this.$javaClass.ALLOW;
	}
	public static get DEFAULT(): Event$Result {
		return this.$javaClass.DEFAULT;
	}
	public static get DENY(): Event$Result {
		return this.$javaClass.DENY;
	}
}

