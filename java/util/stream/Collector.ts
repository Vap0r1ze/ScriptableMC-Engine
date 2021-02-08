declare var Java: any;
import BiConsumer from '../../../java/util/function/BiConsumer.js'
import BinaryOperator from '../../../java/util/function/BinaryOperator.js'
import Collector$Characteristics from './Collector$Characteristics.js'
import Function from '../../../java/util/function/Function.js'
import Set from '../../../java/util/Set.js'
import Supplier from '../../../java/util/function/Supplier.js'

export default interface Collector {
	accumulator(): BiConsumer;
	characteristics(): Set;
	combiner(): BinaryOperator;
	finisher(): Function;
	supplier(): Supplier;
}

export default class Collector {
	public static get $javaClass(): any {
		return Java.type('java.util.stream.Collector');
	}
	public static $isInstance(obj: any): obj is Collector {
		return obj instanceof Collector.$javaClass;
	}

	public static of(arg0: Supplier, arg1: BiConsumer, arg2: BinaryOperator, arg3: Array<Collector$Characteristics>): Collector;
	public static of(arg0: Supplier, arg1: BiConsumer, arg2: BinaryOperator, arg3: Function, arg4: Array<Collector$Characteristics>): Collector;
	public static of(...args: any[]): any {
		return Collector.$javaClass.of(...args);
	}

}

