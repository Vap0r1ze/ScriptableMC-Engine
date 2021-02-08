declare var Java: any;
import Object from '../../../java/lang/Object.js'

export default interface ToDoubleFunction {
	applyAsDouble(arg0: Object): number;
}

export default class ToDoubleFunction {
	public static get $javaClass(): any {
		return Java.type('java.util.function.ToDoubleFunction');
	}
	public static $isInstance(obj: any): obj is ToDoubleFunction {
		return obj instanceof ToDoubleFunction.$javaClass;
	}

}

