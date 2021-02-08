declare var Java: any;
import Function from './Function.js'
import Object from '../../../java/lang/Object.js'

export default interface UnaryOperator extends Function {
	andThen(arg0: Function): Function;
	apply(arg0: Object): Object;
	compose(arg0: Function): Function;
}

export default class UnaryOperator {
	public static get $javaClass(): any {
		return Java.type('java.util.function.UnaryOperator');
	}
	public static $isInstance(obj: any): obj is UnaryOperator {
		return obj instanceof UnaryOperator.$javaClass;
	}

	public static identity(): UnaryOperator;
	public static identity(...args: any[]): any {
		return UnaryOperator.$javaClass.identity(...args);
	}

}

