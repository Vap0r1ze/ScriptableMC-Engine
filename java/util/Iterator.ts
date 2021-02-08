declare var Java: any;
import Consumer from './function/Consumer.js'
import Object from '../../java/lang/Object.js'

export default interface Iterator {
	forEachRemaining(arg0: Consumer): void;
	hasNext(): boolean;
	next(): Object;
	remove(): void;
}

export default class Iterator {
	public static get $javaClass(): any {
		return Java.type('java.util.Iterator');
	}
	public static $isInstance(obj: any): obj is Iterator {
		return obj instanceof Iterator.$javaClass;
	}

}

