declare var Java: any;
import BaseStream from './BaseStream.js'
import BiConsumer from '../../../java/util/function/BiConsumer.js'
import BiFunction from '../../../java/util/function/BiFunction.js'
import BinaryOperator from '../../../java/util/function/BinaryOperator.js'
import Collector from './Collector.js'
import Comparator from '../../../java/util/Comparator.js'
import Consumer from '../../../java/util/function/Consumer.js'
import DoubleStream from './DoubleStream.js'
import Function from '../../../java/util/function/Function.js'
import IntFunction from '../../../java/util/function/IntFunction.js'
import IntStream from './IntStream.js'
import Iterator from '../../../java/util/Iterator.js'
import LongStream from './LongStream.js'
import Object from '../../../java/lang/Object.js'
import Optional from '../../../java/util/Optional.js'
import Predicate from '../../../java/util/function/Predicate.js'
import Runnable from '../../../java/lang/Runnable.js'
import Spliterator from '../../../java/util/Spliterator.js'
import Stream$Builder from './Stream$Builder.js'
import Supplier from '../../../java/util/function/Supplier.js'
import ToDoubleFunction from '../../../java/util/function/ToDoubleFunction.js'
import ToIntFunction from '../../../java/util/function/ToIntFunction.js'
import ToLongFunction from '../../../java/util/function/ToLongFunction.js'
import UnaryOperator from '../../../java/util/function/UnaryOperator.js'

export default interface Stream extends BaseStream {
	allMatch(arg0: Predicate): boolean;
	anyMatch(arg0: Predicate): boolean;
	close(): void;
	collect(arg0: Collector): Object;
	collect(arg0: Supplier, arg1: BiConsumer, arg2: BiConsumer): Object;
	count(): number;
	distinct(): Stream;
	filter(arg0: Predicate): Stream;
	findAny(): Optional;
	findFirst(): Optional;
	flatMap(arg0: Function): Stream;
	flatMapToDouble(arg0: Function): DoubleStream;
	flatMapToInt(arg0: Function): IntStream;
	flatMapToLong(arg0: Function): LongStream;
	forEach(arg0: Consumer): void;
	forEachOrdered(arg0: Consumer): void;
	isParallel(): boolean;
	iterator(): Iterator;
	limit(arg0: number): Stream;
	map(arg0: Function): Stream;
	mapToDouble(arg0: ToDoubleFunction): DoubleStream;
	mapToInt(arg0: ToIntFunction): IntStream;
	mapToLong(arg0: ToLongFunction): LongStream;
	max(arg0: Comparator): Optional;
	min(arg0: Comparator): Optional;
	noneMatch(arg0: Predicate): boolean;
	onClose(arg0: Runnable): BaseStream;
	parallel(): BaseStream;
	peek(arg0: Consumer): Stream;
	reduce(arg0: BinaryOperator): Optional;
	reduce(arg0: Object, arg1: BinaryOperator): Object;
	reduce(arg0: Object, arg1: BiFunction, arg2: BinaryOperator): Object;
	sequential(): BaseStream;
	skip(arg0: number): Stream;
	sorted(): Stream;
	sorted(arg0: Comparator): Stream;
	spliterator(): Spliterator;
	toArray(): Array<Object>;
	toArray(arg0: IntFunction): Array<Object>;
	unordered(): BaseStream;
}

export default class Stream {
	public static get $javaClass(): any {
		return Java.type('java.util.stream.Stream');
	}
	public static $isInstance(obj: any): obj is Stream {
		return obj instanceof Stream.$javaClass;
	}

	public static builder(): Stream$Builder;
	public static builder(...args: any[]): any {
		return Stream.$javaClass.builder(...args);
	}

	public static concat(arg0: Stream, arg1: Stream): Stream;
	public static concat(...args: any[]): any {
		return Stream.$javaClass.concat(...args);
	}

	public static empty(): Stream;
	public static empty(...args: any[]): any {
		return Stream.$javaClass.empty(...args);
	}

	public static generate(arg0: Supplier): Stream;
	public static generate(...args: any[]): any {
		return Stream.$javaClass.generate(...args);
	}

	public static iterate(arg0: Object, arg1: UnaryOperator): Stream;
	public static iterate(...args: any[]): any {
		return Stream.$javaClass.iterate(...args);
	}

	public static of(arg0: Array<Object>): Stream;
	public static of(arg0: Object): Stream;
	public static of(...args: any[]): any {
		return Stream.$javaClass.of(...args);
	}

}

