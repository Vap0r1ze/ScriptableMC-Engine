declare var Java: any;
import Consumer from './function/Consumer.js'
import Iterator from './Iterator.js'
import Object from '../../java/lang/Object.js'

export default interface ListIterator extends Iterator {
	add(arg0: Object): void;
	forEachRemaining(arg0: Consumer): void;
	hasNext(): boolean;
	hasPrevious(): boolean;
	next(): Object;
	nextIndex(): number;
	previous(): Object;
	previousIndex(): number;
	remove(): void;
	set(arg0: Object): void;
}

export default class ListIterator {
	public static get $javaClass(): any {
		return Java.type('java.util.ListIterator');
	}
	public static $isInstance(obj: any): obj is ListIterator {
		return obj instanceof ListIterator.$javaClass;
	}

}

