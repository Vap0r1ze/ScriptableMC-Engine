declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Object from '../../../java/lang/Object.js'
import Serializable from '../../../java/io/Serializable.js'
import String from '../../../java/lang/String.js'

export default interface Level extends Object, Serializable {
	getLocalizedName(): string;
	getName(): string;
	getResourceBundleName(): string;
	intValue(): number;
}

export default class Level {
	public static get $javaClass(): any {
		return Java.type('java.util.logging.Level');
	}
	public static $isInstance(obj: any): obj is Level {
		return obj instanceof Level.$javaClass;
	}

	public static get ALL(): Level {
		return Level.$javaClass.ALL;
	}

	public static get CONFIG(): Level {
		return Level.$javaClass.CONFIG;
	}

	public static get FINE(): Level {
		return Level.$javaClass.FINE;
	}

	public static get FINER(): Level {
		return Level.$javaClass.FINER;
	}

	public static get FINEST(): Level {
		return Level.$javaClass.FINEST;
	}

	public static get INFO(): Level {
		return Level.$javaClass.INFO;
	}

	public static get OFF(): Level {
		return Level.$javaClass.OFF;
	}

	public static get SEVERE(): Level {
		return Level.$javaClass.SEVERE;
	}

	public static get WARNING(): Level {
		return Level.$javaClass.WARNING;
	}

	public static parse(arg0: string): Level;
	public static parse(...args: any[]): any {
		return Level.$javaClass.parse(...args);
	}

}

