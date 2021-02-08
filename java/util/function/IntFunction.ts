declare var Java: any;
import Object from '../../../java/lang/Object.js'

export default interface IntFunction {
	apply(arg0: number): Object;
}

export default class IntFunction {
	public static get $javaClass(): any {
		return Java.type('java.util.function.IntFunction');
	}
	public static $isInstance(obj: any): obj is IntFunction {
		return obj instanceof IntFunction.$javaClass;
	}

}

