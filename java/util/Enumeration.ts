declare var Java: any;
import Object from '../../java/lang/Object.js'

export default interface Enumeration {
	hasMoreElements(): boolean;
	nextElement(): Object;
}

export default class Enumeration {
	public static get $javaClass(): any {
		return Java.type('java.util.Enumeration');
	}
	public static $isInstance(obj: any): obj is Enumeration {
		return obj instanceof Enumeration.$javaClass;
	}

}

