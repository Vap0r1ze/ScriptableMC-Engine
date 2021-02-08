declare var Java: any;
import Consumer from './function/Consumer.js'
import IntConsumer from './function/IntConsumer.js'
import Integer from '../../java/lang/Integer.js'
import Object from '../../java/lang/Object.js'
import PrimitiveIterator from './PrimitiveIterator.js'

export default interface PrimitiveIterator$OfInt extends PrimitiveIterator {
	forEachRemaining(arg0: IntConsumer): void;
	forEachRemaining(arg0: Object): void;
	forEachRemaining(arg0: Consumer): void;
	hasNext(): boolean;
	next(): Object;
	next(): Integer;
	nextInt(): number;
	remove(): void;
}

export default class PrimitiveIterator$OfInt {
	public static get $javaClass(): any {
		return Java.type('java.util.PrimitiveIterator$OfInt');
	}
	public static $isInstance(obj: any): obj is PrimitiveIterator$OfInt {
		return obj instanceof PrimitiveIterator$OfInt.$javaClass;
	}

}

