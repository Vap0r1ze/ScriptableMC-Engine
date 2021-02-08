declare var Java: any;
import Comparator from './Comparator.js'
import Consumer from './function/Consumer.js'
import DoubleConsumer from './function/DoubleConsumer.js'
import Object from '../../java/lang/Object.js'
import Spliterator from './Spliterator.js'
import Spliterator$OfPrimitive from './Spliterator$OfPrimitive.js'

export default interface Spliterator$OfDouble extends Spliterator$OfPrimitive {
	characteristics(): number;
	estimateSize(): number;
	forEachRemaining(arg0: Consumer): void;
	forEachRemaining(arg0: Object): void;
	forEachRemaining(arg0: DoubleConsumer): void;
	getComparator(): Comparator;
	getExactSizeIfKnown(): number;
	hasCharacteristics(arg0: number): boolean;
	tryAdvance(arg0: Object): boolean;
	tryAdvance(arg0: Consumer): boolean;
	tryAdvance(arg0: DoubleConsumer): boolean;
	trySplit(): Spliterator$OfPrimitive;
	trySplit(): Spliterator;
	trySplit(): Spliterator$OfDouble;
}

export default class Spliterator$OfDouble {
	public static get $javaClass(): any {
		return Java.type('java.util.Spliterator$OfDouble');
	}
	public static $isInstance(obj: any): obj is Spliterator$OfDouble {
		return obj instanceof Spliterator$OfDouble.$javaClass;
	}

	public static get CONCURRENT(): number {
		return Spliterator$OfDouble.$javaClass.CONCURRENT;
	}

	public static get DISTINCT(): number {
		return Spliterator$OfDouble.$javaClass.DISTINCT;
	}

	public static get IMMUTABLE(): number {
		return Spliterator$OfDouble.$javaClass.IMMUTABLE;
	}

	public static get NONNULL(): number {
		return Spliterator$OfDouble.$javaClass.NONNULL;
	}

	public static get ORDERED(): number {
		return Spliterator$OfDouble.$javaClass.ORDERED;
	}

	public static get SIZED(): number {
		return Spliterator$OfDouble.$javaClass.SIZED;
	}

	public static get SORTED(): number {
		return Spliterator$OfDouble.$javaClass.SORTED;
	}

	public static get SUBSIZED(): number {
		return Spliterator$OfDouble.$javaClass.SUBSIZED;
	}

}

