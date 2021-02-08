declare var Java: any;
import Consumer from './function/Consumer.js'
import Iterator from './Iterator.js'
import Object from '../../java/lang/Object.js'

export default interface PrimitiveIterator extends Iterator {
	forEachRemaining(arg0: Object): void;
	forEachRemaining(arg0: Consumer): void;
	hasNext(): boolean;
	next(): Object;
	remove(): void;
}

export default class PrimitiveIterator {
	public static get $javaClass(): any {
		return Java.type('java.util.PrimitiveIterator');
	}
	public static $isInstance(obj: any): obj is PrimitiveIterator {
		return obj instanceof PrimitiveIterator.$javaClass;
	}

}

