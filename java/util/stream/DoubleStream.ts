declare var Java: any;
import BaseStream from './BaseStream.js'
import BiConsumer from '../../../java/util/function/BiConsumer.js'
import DoubleBinaryOperator from '../../../java/util/function/DoubleBinaryOperator.js'
import DoubleConsumer from '../../../java/util/function/DoubleConsumer.js'
import DoubleFunction from '../../../java/util/function/DoubleFunction.js'
import DoublePredicate from '../../../java/util/function/DoublePredicate.js'
import DoubleStream$Builder from './DoubleStream$Builder.js'
import DoubleSummaryStatistics from '../../../java/util/DoubleSummaryStatistics.js'
import DoubleSupplier from '../../../java/util/function/DoubleSupplier.js'
import DoubleToIntFunction from '../../../java/util/function/DoubleToIntFunction.js'
import DoubleToLongFunction from '../../../java/util/function/DoubleToLongFunction.js'
import DoubleUnaryOperator from '../../../java/util/function/DoubleUnaryOperator.js'
import IntStream from './IntStream.js'
import Iterator from '../../../java/util/Iterator.js'
import LongStream from './LongStream.js'
import ObjDoubleConsumer from '../../../java/util/function/ObjDoubleConsumer.js'
import Object from '../../../java/lang/Object.js'
import OptionalDouble from '../../../java/util/OptionalDouble.js'
import PrimitiveIterator$OfDouble from '../../../java/util/PrimitiveIterator$OfDouble.js'
import Runnable from '../../../java/lang/Runnable.js'
import Spliterator from '../../../java/util/Spliterator.js'
import Spliterator$OfDouble from '../../../java/util/Spliterator$OfDouble.js'
import Stream from './Stream.js'
import Supplier from '../../../java/util/function/Supplier.js'

export default interface DoubleStream extends BaseStream {
	allMatch(arg0: DoublePredicate): boolean;
	anyMatch(arg0: DoublePredicate): boolean;
	average(): OptionalDouble;
	boxed(): Stream;
	close(): void;
	collect(arg0: Supplier, arg1: ObjDoubleConsumer, arg2: BiConsumer): Object;
	count(): number;
	distinct(): DoubleStream;
	filter(arg0: DoublePredicate): DoubleStream;
	findAny(): OptionalDouble;
	findFirst(): OptionalDouble;
	flatMap(arg0: DoubleFunction): DoubleStream;
	forEach(arg0: DoubleConsumer): void;
	forEachOrdered(arg0: DoubleConsumer): void;
	isParallel(): boolean;
	iterator(): PrimitiveIterator$OfDouble;
	iterator(): Iterator;
	limit(arg0: number): DoubleStream;
	map(arg0: DoubleUnaryOperator): DoubleStream;
	mapToInt(arg0: DoubleToIntFunction): IntStream;
	mapToLong(arg0: DoubleToLongFunction): LongStream;
	mapToObj(arg0: DoubleFunction): Stream;
	max(): OptionalDouble;
	min(): OptionalDouble;
	noneMatch(arg0: DoublePredicate): boolean;
	onClose(arg0: Runnable): BaseStream;
	parallel(): BaseStream;
	parallel(): DoubleStream;
	peek(arg0: DoubleConsumer): DoubleStream;
	reduce(arg0: DoubleBinaryOperator): OptionalDouble;
	reduce(arg0: number, arg1: DoubleBinaryOperator): number;
	sequential(): DoubleStream;
	sequential(): BaseStream;
	skip(arg0: number): DoubleStream;
	sorted(): DoubleStream;
	spliterator(): Spliterator$OfDouble;
	spliterator(): Spliterator;
	sum(): number;
	summaryStatistics(): DoubleSummaryStatistics;
	toArray(): Array<number>;
	unordered(): BaseStream;
}

export default class DoubleStream {
	public static get $javaClass(): any {
		return Java.type('java.util.stream.DoubleStream');
	}
	public static $isInstance(obj: any): obj is DoubleStream {
		return obj instanceof DoubleStream.$javaClass;
	}

	public static builder(): DoubleStream$Builder;
	public static builder(...args: any[]): any {
		return DoubleStream.$javaClass.builder(...args);
	}

	public static concat(arg0: DoubleStream, arg1: DoubleStream): DoubleStream;
	public static concat(...args: any[]): any {
		return DoubleStream.$javaClass.concat(...args);
	}

	public static empty(): DoubleStream;
	public static empty(...args: any[]): any {
		return DoubleStream.$javaClass.empty(...args);
	}

	public static generate(arg0: DoubleSupplier): DoubleStream;
	public static generate(...args: any[]): any {
		return DoubleStream.$javaClass.generate(...args);
	}

	public static iterate(arg0: number, arg1: DoubleUnaryOperator): DoubleStream;
	public static iterate(...args: any[]): any {
		return DoubleStream.$javaClass.iterate(...args);
	}

	public static of(arg0: number): DoubleStream;
	public static of(arg0: Array<number>): DoubleStream;
	public static of(...args: any[]): any {
		return DoubleStream.$javaClass.of(...args);
	}

}

