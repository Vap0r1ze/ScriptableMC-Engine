declare var Java: any;
import Function from './Function.js'
import Object from '../../../java/lang/Object.js'

export default interface BiFunction {
	andThen(arg0: Function): BiFunction;
	apply(arg0: Object, arg1: Object): Object;
}

export default class BiFunction {
	public static get $javaClass(): any {
		return Java.type('java.util.function.BiFunction');
	}
	public static $isInstance(obj: any): obj is BiFunction {
		return obj instanceof BiFunction.$javaClass;
	}

}

