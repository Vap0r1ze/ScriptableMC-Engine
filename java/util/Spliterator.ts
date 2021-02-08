declare var Java: any;
import Comparator from './Comparator.js'
import Consumer from './function/Consumer.js'

export default interface Spliterator {
	characteristics(): number;
	estimateSize(): number;
	forEachRemaining(arg0: Consumer): void;
	getComparator(): Comparator;
	getExactSizeIfKnown(): number;
	hasCharacteristics(arg0: number): boolean;
	tryAdvance(arg0: Consumer): boolean;
	trySplit(): Spliterator;
}

export default class Spliterator {
	public static get $javaClass(): any {
		return Java.type('java.util.Spliterator');
	}
	public static $isInstance(obj: any): obj is Spliterator {
		return obj instanceof Spliterator.$javaClass;
	}

	public static get CONCURRENT(): number {
		return Spliterator.$javaClass.CONCURRENT;
	}

	public static get DISTINCT(): number {
		return Spliterator.$javaClass.DISTINCT;
	}

	public static get IMMUTABLE(): number {
		return Spliterator.$javaClass.IMMUTABLE;
	}

	public static get NONNULL(): number {
		return Spliterator.$javaClass.NONNULL;
	}

	public static get ORDERED(): number {
		return Spliterator.$javaClass.ORDERED;
	}

	public static get SIZED(): number {
		return Spliterator.$javaClass.SIZED;
	}

	public static get SORTED(): number {
		return Spliterator.$javaClass.SORTED;
	}

	public static get SUBSIZED(): number {
		return Spliterator.$javaClass.SUBSIZED;
	}

}

