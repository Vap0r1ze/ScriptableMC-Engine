declare var Java: any;
import Object from '../../../java/lang/Object.js'

export default interface ToLongFunction {
	applyAsLong(arg0: Object): number;
}

export default class ToLongFunction {
	public static get $javaClass(): any {
		return Java.type('java.util.function.ToLongFunction');
	}
	public static $isInstance(obj: any): obj is ToLongFunction {
		return obj instanceof ToLongFunction.$javaClass;
	}

}

