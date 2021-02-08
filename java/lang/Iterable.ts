declare var Java: any;
import Consumer from '../../java/util/function/Consumer.js'
import Iterator from '../../java/util/Iterator.js'
import Spliterator from '../../java/util/Spliterator.js'

export default interface Iterable {
	forEach(arg0: Consumer): void;
	iterator(): Iterator;
	spliterator(): Spliterator;
}

export default class Iterable {
	public static get $javaClass(): any {
		return Java.type('java.lang.Iterable');
	}
	public static $isInstance(obj: any): obj is Iterable {
		return obj instanceof Iterable.$javaClass;
	}

}

