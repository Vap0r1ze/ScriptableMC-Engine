declare var Java: any;
import Comparator from './Comparator.js'
import Consumer from './function/Consumer.js'
import Object from '../../java/lang/Object.js'
import Spliterator from './Spliterator.js'

export default interface Spliterator$OfPrimitive extends Spliterator {
	characteristics(): number;
	estimateSize(): number;
	forEachRemaining(arg0: Object): void;
	forEachRemaining(arg0: Consumer): void;
	getComparator(): Comparator;
	getExactSizeIfKnown(): number;
	hasCharacteristics(arg0: number): boolean;
	tryAdvance(arg0: Object): boolean;
	tryAdvance(arg0: Consumer): boolean;
	trySplit(): Spliterator;
	trySplit(): Spliterator$OfPrimitive;
}

export default class Spliterator$OfPrimitive {
	public static get $javaClass(): any {
		return Java.type('java.util.Spliterator$OfPrimitive');
	}
	public static $isInstance(obj: any): obj is Spliterator$OfPrimitive {
		return obj instanceof Spliterator$OfPrimitive.$javaClass;
	}

	public static get CONCURRENT(): number {
		return Spliterator$OfPrimitive.$javaClass.CONCURRENT;
	}

	public static get DISTINCT(): number {
		return Spliterator$OfPrimitive.$javaClass.DISTINCT;
	}

	public static get IMMUTABLE(): number {
		return Spliterator$OfPrimitive.$javaClass.IMMUTABLE;
	}

	public static get NONNULL(): number {
		return Spliterator$OfPrimitive.$javaClass.NONNULL;
	}

	public static get ORDERED(): number {
		return Spliterator$OfPrimitive.$javaClass.ORDERED;
	}

	public static get SIZED(): number {
		return Spliterator$OfPrimitive.$javaClass.SIZED;
	}

	public static get SORTED(): number {
		return Spliterator$OfPrimitive.$javaClass.SORTED;
	}

	public static get SUBSIZED(): number {
		return Spliterator$OfPrimitive.$javaClass.SUBSIZED;
	}

}

