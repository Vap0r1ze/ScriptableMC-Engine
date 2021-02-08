declare var Java: any;
import Object from './Object.js'

export default interface Comparable {
	compareTo(arg0: Object): number;
}

export default class Comparable {
	public static get $javaClass(): any {
		return Java.type('java.lang.Comparable');
	}
	public static $isInstance(obj: any): obj is Comparable {
		return obj instanceof Comparable.$javaClass;
	}

}

