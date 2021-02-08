declare var Java: any;
import Object from '../../../java/lang/Object.js'

export default interface LongFunction {
	apply(arg0: number): Object;
}

export default class LongFunction {
	public static get $javaClass(): any {
		return Java.type('java.util.function.LongFunction');
	}
	public static $isInstance(obj: any): obj is LongFunction {
		return obj instanceof LongFunction.$javaClass;
	}

}

