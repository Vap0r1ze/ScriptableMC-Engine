declare var Java: any;
import Class from './Class.js'
import Enum from './Enum.js'
import Object from './Object.js'
import String from './String.js'

export default interface Thread$State extends Enum {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class Thread$State {
	public static get $javaClass(): any {
		return Java.type('java.lang.Thread$State');
	}
	public static $isInstance(obj: any): obj is Thread$State {
		return obj instanceof Thread$State.$javaClass;
	}

	public static get BLOCKED(): Thread$State {
		return this.$javaClass.BLOCKED;
	}
	public static get NEW(): Thread$State {
		return this.$javaClass.NEW;
	}
	public static get RUNNABLE(): Thread$State {
		return this.$javaClass.RUNNABLE;
	}
	public static get TERMINATED(): Thread$State {
		return this.$javaClass.TERMINATED;
	}
	public static get TIMED_WAITING(): Thread$State {
		return this.$javaClass.TIMED_WAITING;
	}
	public static get WAITING(): Thread$State {
		return this.$javaClass.WAITING;
	}
}

