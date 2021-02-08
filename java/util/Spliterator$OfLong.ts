declare var Java: any;
import Comparator from './Comparator.js'
import Consumer from './function/Consumer.js'
import LongConsumer from './function/LongConsumer.js'
import Object from '../../java/lang/Object.js'
import Spliterator from './Spliterator.js'
import Spliterator$OfPrimitive from './Spliterator$OfPrimitive.js'

export default interface Spliterator$OfLong extends Spliterator$OfPrimitive {
	characteristics(): number;
	estimateSize(): number;
	forEachRemaining(arg0: Consumer): void;
	forEachRemaining(arg0: Object): void;
	forEachRemaining(arg0: LongConsumer): void;
	getComparator(): Comparator;
	getExactSizeIfKnown(): number;
	hasCharacteristics(arg0: number): boolean;
	tryAdvance(arg0: Object): boolean;
	tryAdvance(arg0: Consumer): boolean;
	tryAdvance(arg0: LongConsumer): boolean;
	trySplit(): Spliterator$OfPrimitive;
	trySplit(): Spliterator;
	trySplit(): Spliterator$OfLong;
}

export default class Spliterator$OfLong {
	public static get $javaClass(): any {
		return Java.type('java.util.Spliterator$OfLong');
	}
	public static $isInstance(obj: any): obj is Spliterator$OfLong {
		return obj instanceof Spliterator$OfLong.$javaClass;
	}

	public static get CONCURRENT(): number {
		return Spliterator$OfLong.$javaClass.CONCURRENT;
	}

	public static get DISTINCT(): number {
		return Spliterator$OfLong.$javaClass.DISTINCT;
	}

	public static get IMMUTABLE(): number {
		return Spliterator$OfLong.$javaClass.IMMUTABLE;
	}

	public static get NONNULL(): number {
		return Spliterator$OfLong.$javaClass.NONNULL;
	}

	public static get ORDERED(): number {
		return Spliterator$OfLong.$javaClass.ORDERED;
	}

	public static get SIZED(): number {
		return Spliterator$OfLong.$javaClass.SIZED;
	}

	public static get SORTED(): number {
		return Spliterator$OfLong.$javaClass.SORTED;
	}

	public static get SUBSIZED(): number {
		return Spliterator$OfLong.$javaClass.SUBSIZED;
	}

}

