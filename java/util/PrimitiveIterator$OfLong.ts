declare var Java: any;
import Consumer from './function/Consumer.js'
import Long from '../../java/lang/Long.js'
import LongConsumer from './function/LongConsumer.js'
import Object from '../../java/lang/Object.js'
import PrimitiveIterator from './PrimitiveIterator.js'

export default interface PrimitiveIterator$OfLong extends PrimitiveIterator {
	forEachRemaining(arg0: LongConsumer): void;
	forEachRemaining(arg0: Object): void;
	forEachRemaining(arg0: Consumer): void;
	hasNext(): boolean;
	next(): Object;
	next(): number;
	nextLong(): number;
	remove(): void;
}

export default class PrimitiveIterator$OfLong {
	public static get $javaClass(): any {
		return Java.type('java.util.PrimitiveIterator$OfLong');
	}
	public static $isInstance(obj: any): obj is PrimitiveIterator$OfLong {
		return obj instanceof PrimitiveIterator$OfLong.$javaClass;
	}

}

