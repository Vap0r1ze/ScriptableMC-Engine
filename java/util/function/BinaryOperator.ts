declare var Java: any;
import BiFunction from './BiFunction.js'
import Comparator from '../../../java/util/Comparator.js'
import Function from './Function.js'
import Object from '../../../java/lang/Object.js'

export default interface BinaryOperator extends BiFunction {
	andThen(arg0: Function): BiFunction;
	apply(arg0: Object, arg1: Object): Object;
}

export default class BinaryOperator {
	public static get $javaClass(): any {
		return Java.type('java.util.function.BinaryOperator');
	}
	public static $isInstance(obj: any): obj is BinaryOperator {
		return obj instanceof BinaryOperator.$javaClass;
	}

	public static maxBy(arg0: Comparator): BinaryOperator;
	public static maxBy(...args: any[]): any {
		return BinaryOperator.$javaClass.maxBy(...args);
	}

	public static minBy(arg0: Comparator): BinaryOperator;
	public static minBy(...args: any[]): any {
		return BinaryOperator.$javaClass.minBy(...args);
	}

}

