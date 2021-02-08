declare var Java: any;
import Object from '../../../java/lang/Object.js'

export default interface ToIntFunction {
	applyAsInt(arg0: Object): number;
}

export default class ToIntFunction {
	public static get $javaClass(): any {
		return Java.type('java.util.function.ToIntFunction');
	}
	public static $isInstance(obj: any): obj is ToIntFunction {
		return obj instanceof ToIntFunction.$javaClass;
	}

}

