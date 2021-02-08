declare var Java: any;
import Object from '../../../java/lang/Object.js'

export default interface DoubleFunction {
	apply(arg0: number): Object;
}

export default class DoubleFunction {
	public static get $javaClass(): any {
		return Java.type('java.util.function.DoubleFunction');
	}
	public static $isInstance(obj: any): obj is DoubleFunction {
		return obj instanceof DoubleFunction.$javaClass;
	}

}

