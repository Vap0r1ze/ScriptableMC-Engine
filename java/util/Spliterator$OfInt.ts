declare var Java: any;
import Comparator from './Comparator.js'
import Consumer from './function/Consumer.js'
import IntConsumer from './function/IntConsumer.js'
import Object from '../../java/lang/Object.js'
import Spliterator from './Spliterator.js'
import Spliterator$OfPrimitive from './Spliterator$OfPrimitive.js'

export default interface Spliterator$OfInt extends Spliterator$OfPrimitive {
	characteristics(): number;
	estimateSize(): number;
	forEachRemaining(arg0: Consumer): void;
	forEachRemaining(arg0: Object): void;
	forEachRemaining(arg0: IntConsumer): void;
	getComparator(): Comparator;
	getExactSizeIfKnown(): number;
	hasCharacteristics(arg0: number): boolean;
	tryAdvance(arg0: Object): boolean;
	tryAdvance(arg0: Consumer): boolean;
	tryAdvance(arg0: IntConsumer): boolean;
	trySplit(): Spliterator$OfPrimitive;
	trySplit(): Spliterator;
	trySplit(): Spliterator$OfInt;
}

export default class Spliterator$OfInt {
	public static get $javaClass(): any {
		return Java.type('java.util.Spliterator$OfInt');
	}
	public static $isInstance(obj: any): obj is Spliterator$OfInt {
		return obj instanceof Spliterator$OfInt.$javaClass;
	}

	public static get CONCURRENT(): number {
		return Spliterator$OfInt.$javaClass.CONCURRENT;
	}

	public static get DISTINCT(): number {
		return Spliterator$OfInt.$javaClass.DISTINCT;
	}

	public static get IMMUTABLE(): number {
		return Spliterator$OfInt.$javaClass.IMMUTABLE;
	}

	public static get NONNULL(): number {
		return Spliterator$OfInt.$javaClass.NONNULL;
	}

	public static get ORDERED(): number {
		return Spliterator$OfInt.$javaClass.ORDERED;
	}

	public static get SIZED(): number {
		return Spliterator$OfInt.$javaClass.SIZED;
	}

	public static get SORTED(): number {
		return Spliterator$OfInt.$javaClass.SORTED;
	}

	public static get SUBSIZED(): number {
		return Spliterator$OfInt.$javaClass.SUBSIZED;
	}

}

