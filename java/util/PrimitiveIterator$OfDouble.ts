declare var Java: any;
import Consumer from './function/Consumer.js'
import Double from '../../java/lang/Double.js'
import DoubleConsumer from './function/DoubleConsumer.js'
import Object from '../../java/lang/Object.js'
import PrimitiveIterator from './PrimitiveIterator.js'

export default interface PrimitiveIterator$OfDouble extends PrimitiveIterator {
	forEachRemaining(arg0: DoubleConsumer): void;
	forEachRemaining(arg0: Object): void;
	forEachRemaining(arg0: Consumer): void;
	hasNext(): boolean;
	next(): Object;
	next(): number;
	nextDouble(): number;
	remove(): void;
}

export default class PrimitiveIterator$OfDouble {
	public static get $javaClass(): any {
		return Java.type('java.util.PrimitiveIterator$OfDouble');
	}
	public static $isInstance(obj: any): obj is PrimitiveIterator$OfDouble {
		return obj instanceof PrimitiveIterator$OfDouble.$javaClass;
	}

}

