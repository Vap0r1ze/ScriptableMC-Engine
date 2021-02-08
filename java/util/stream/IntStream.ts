declare var Java: any;
import BaseStream from './BaseStream.js'
import BiConsumer from '../../../java/util/function/BiConsumer.js'
import DoubleStream from './DoubleStream.js'
import IntBinaryOperator from '../../../java/util/function/IntBinaryOperator.js'
import IntConsumer from '../../../java/util/function/IntConsumer.js'
import IntFunction from '../../../java/util/function/IntFunction.js'
import IntPredicate from '../../../java/util/function/IntPredicate.js'
import IntStream$Builder from './IntStream$Builder.js'
import IntSummaryStatistics from '../../../java/util/IntSummaryStatistics.js'
import IntSupplier from '../../../java/util/function/IntSupplier.js'
import IntToDoubleFunction from '../../../java/util/function/IntToDoubleFunction.js'
import IntToLongFunction from '../../../java/util/function/IntToLongFunction.js'
import IntUnaryOperator from '../../../java/util/function/IntUnaryOperator.js'
import Iterator from '../../../java/util/Iterator.js'
import LongStream from './LongStream.js'
import ObjIntConsumer from '../../../java/util/function/ObjIntConsumer.js'
import Object from '../../../java/lang/Object.js'
import OptionalDouble from '../../../java/util/OptionalDouble.js'
import OptionalInt from '../../../java/util/OptionalInt.js'
import PrimitiveIterator$OfInt from '../../../java/util/PrimitiveIterator$OfInt.js'
import Runnable from '../../../java/lang/Runnable.js'
import Spliterator from '../../../java/util/Spliterator.js'
import Spliterator$OfInt from '../../../java/util/Spliterator$OfInt.js'
import Stream from './Stream.js'
import Supplier from '../../../java/util/function/Supplier.js'

export default interface IntStream extends BaseStream {
	allMatch(arg0: IntPredicate): boolean;
	anyMatch(arg0: IntPredicate): boolean;
	asDoubleStream(): DoubleStream;
	asLongStream(): LongStream;
	average(): OptionalDouble;
	boxed(): Stream;
	close(): void;
	collect(arg0: Supplier, arg1: ObjIntConsumer, arg2: BiConsumer): Object;
	count(): number;
	distinct(): IntStream;
	filter(arg0: IntPredicate): IntStream;
	findAny(): OptionalInt;
	findFirst(): OptionalInt;
	flatMap(arg0: IntFunction): IntStream;
	forEach(arg0: IntConsumer): void;
	forEachOrdered(arg0: IntConsumer): void;
	isParallel(): boolean;
	iterator(): PrimitiveIterator$OfInt;
	iterator(): Iterator;
	limit(arg0: number): IntStream;
	map(arg0: IntUnaryOperator): IntStream;
	mapToDouble(arg0: IntToDoubleFunction): DoubleStream;
	mapToLong(arg0: IntToLongFunction): LongStream;
	mapToObj(arg0: IntFunction): Stream;
	max(): OptionalInt;
	min(): OptionalInt;
	noneMatch(arg0: IntPredicate): boolean;
	onClose(arg0: Runnable): BaseStream;
	parallel(): BaseStream;
	parallel(): IntStream;
	peek(arg0: IntConsumer): IntStream;
	reduce(arg0: IntBinaryOperator): OptionalInt;
	reduce(arg0: number, arg1: IntBinaryOperator): number;
	sequential(): BaseStream;
	sequential(): IntStream;
	skip(arg0: number): IntStream;
	sorted(): IntStream;
	spliterator(): Spliterator$OfInt;
	spliterator(): Spliterator;
	sum(): number;
	summaryStatistics(): IntSummaryStatistics;
	toArray(): Array<number>;
	unordered(): BaseStream;
}

export default class IntStream {
	public static get $javaClass(): any {
		return Java.type('java.util.stream.IntStream');
	}
	public static $isInstance(obj: any): obj is IntStream {
		return obj instanceof IntStream.$javaClass;
	}

	public static builder(): IntStream$Builder;
	public static builder(...args: any[]): any {
		return IntStream.$javaClass.builder(...args);
	}

	public static concat(arg0: IntStream, arg1: IntStream): IntStream;
	public static concat(...args: any[]): any {
		return IntStream.$javaClass.concat(...args);
	}

	public static empty(): IntStream;
	public static empty(...args: any[]): any {
		return IntStream.$javaClass.empty(...args);
	}

	public static generate(arg0: IntSupplier): IntStream;
	public static generate(...args: any[]): any {
		return IntStream.$javaClass.generate(...args);
	}

	public static iterate(arg0: number, arg1: IntUnaryOperator): IntStream;
	public static iterate(...args: any[]): any {
		return IntStream.$javaClass.iterate(...args);
	}

	public static of(arg0: Array<number>): IntStream;
	public static of(arg0: number): IntStream;
	public static of(...args: any[]): any {
		return IntStream.$javaClass.of(...args);
	}

	public static range(arg0: number, arg1: number): IntStream;
	public static range(...args: any[]): any {
		return IntStream.$javaClass.range(...args);
	}

	public static rangeClosed(arg0: number, arg1: number): IntStream;
	public static rangeClosed(...args: any[]): any {
		return IntStream.$javaClass.rangeClosed(...args);
	}

}

