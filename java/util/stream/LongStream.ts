declare var Java: any;
import BaseStream from './BaseStream.js'
import BiConsumer from '../../../java/util/function/BiConsumer.js'
import DoubleStream from './DoubleStream.js'
import IntStream from './IntStream.js'
import Iterator from '../../../java/util/Iterator.js'
import LongBinaryOperator from '../../../java/util/function/LongBinaryOperator.js'
import LongConsumer from '../../../java/util/function/LongConsumer.js'
import LongFunction from '../../../java/util/function/LongFunction.js'
import LongPredicate from '../../../java/util/function/LongPredicate.js'
import LongStream$Builder from './LongStream$Builder.js'
import LongSummaryStatistics from '../../../java/util/LongSummaryStatistics.js'
import LongSupplier from '../../../java/util/function/LongSupplier.js'
import LongToDoubleFunction from '../../../java/util/function/LongToDoubleFunction.js'
import LongToIntFunction from '../../../java/util/function/LongToIntFunction.js'
import LongUnaryOperator from '../../../java/util/function/LongUnaryOperator.js'
import ObjLongConsumer from '../../../java/util/function/ObjLongConsumer.js'
import Object from '../../../java/lang/Object.js'
import OptionalDouble from '../../../java/util/OptionalDouble.js'
import OptionalLong from '../../../java/util/OptionalLong.js'
import PrimitiveIterator$OfLong from '../../../java/util/PrimitiveIterator$OfLong.js'
import Runnable from '../../../java/lang/Runnable.js'
import Spliterator from '../../../java/util/Spliterator.js'
import Spliterator$OfLong from '../../../java/util/Spliterator$OfLong.js'
import Stream from './Stream.js'
import Supplier from '../../../java/util/function/Supplier.js'

export default interface LongStream extends BaseStream {
	allMatch(arg0: LongPredicate): boolean;
	anyMatch(arg0: LongPredicate): boolean;
	asDoubleStream(): DoubleStream;
	average(): OptionalDouble;
	boxed(): Stream;
	close(): void;
	collect(arg0: Supplier, arg1: ObjLongConsumer, arg2: BiConsumer): Object;
	count(): number;
	distinct(): LongStream;
	filter(arg0: LongPredicate): LongStream;
	findAny(): OptionalLong;
	findFirst(): OptionalLong;
	flatMap(arg0: LongFunction): LongStream;
	forEach(arg0: LongConsumer): void;
	forEachOrdered(arg0: LongConsumer): void;
	isParallel(): boolean;
	iterator(): PrimitiveIterator$OfLong;
	iterator(): Iterator;
	limit(arg0: number): LongStream;
	map(arg0: LongUnaryOperator): LongStream;
	mapToDouble(arg0: LongToDoubleFunction): DoubleStream;
	mapToInt(arg0: LongToIntFunction): IntStream;
	mapToObj(arg0: LongFunction): Stream;
	max(): OptionalLong;
	min(): OptionalLong;
	noneMatch(arg0: LongPredicate): boolean;
	onClose(arg0: Runnable): BaseStream;
	parallel(): BaseStream;
	parallel(): LongStream;
	peek(arg0: LongConsumer): LongStream;
	reduce(arg0: LongBinaryOperator): OptionalLong;
	reduce(arg0: number, arg1: LongBinaryOperator): number;
	sequential(): BaseStream;
	sequential(): LongStream;
	skip(arg0: number): LongStream;
	sorted(): LongStream;
	spliterator(): Spliterator$OfLong;
	spliterator(): Spliterator;
	sum(): number;
	summaryStatistics(): LongSummaryStatistics;
	toArray(): Array<number>;
	unordered(): BaseStream;
}

export default class LongStream {
	public static get $javaClass(): any {
		return Java.type('java.util.stream.LongStream');
	}
	public static $isInstance(obj: any): obj is LongStream {
		return obj instanceof LongStream.$javaClass;
	}

	public static builder(): LongStream$Builder;
	public static builder(...args: any[]): any {
		return LongStream.$javaClass.builder(...args);
	}

	public static concat(arg0: LongStream, arg1: LongStream): LongStream;
	public static concat(...args: any[]): any {
		return LongStream.$javaClass.concat(...args);
	}

	public static empty(): LongStream;
	public static empty(...args: any[]): any {
		return LongStream.$javaClass.empty(...args);
	}

	public static generate(arg0: LongSupplier): LongStream;
	public static generate(...args: any[]): any {
		return LongStream.$javaClass.generate(...args);
	}

	public static iterate(arg0: number, arg1: LongUnaryOperator): LongStream;
	public static iterate(...args: any[]): any {
		return LongStream.$javaClass.iterate(...args);
	}

	public static of(arg0: Array<number>): LongStream;
	public static of(arg0: number): LongStream;
	public static of(...args: any[]): any {
		return LongStream.$javaClass.of(...args);
	}

	public static range(arg0: number, arg1: number): LongStream;
	public static range(...args: any[]): any {
		return LongStream.$javaClass.range(...args);
	}

	public static rangeClosed(arg0: number, arg1: number): LongStream;
	public static rangeClosed(...args: any[]): any {
		return LongStream.$javaClass.rangeClosed(...args);
	}

}

