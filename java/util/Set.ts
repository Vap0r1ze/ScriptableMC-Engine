declare var Java: any;
import Collection from './Collection.js'
import Consumer from './function/Consumer.js'
import Iterator from './Iterator.js'
import Object from '../../java/lang/Object.js'
import Predicate from './function/Predicate.js'
import Spliterator from './Spliterator.js'
import Stream from './stream/Stream.js'

export default interface Set extends Collection {
	add(arg0: Object): boolean;
	addAll(arg0: Array<any>): boolean;
	clear(): void;
	contains(arg0: Object): boolean;
	containsAll(arg0: Array<any>): boolean;
	forEach(arg0: Consumer): void;
	isEmpty(): boolean;
	iterator(): Iterator;
	parallelStream(): Stream;
	remove(arg0: Object): boolean;
	removeAll(arg0: Array<any>): boolean;
	removeIf(arg0: Predicate): boolean;
	retainAll(arg0: Array<any>): boolean;
	size(): number;
	spliterator(): Spliterator;
	stream(): Stream;
	toArray(): Array<Object>;
	toArray(arg0: Array<Object>): Array<Object>;
}

export default class Set {
	public static get $javaClass(): any {
		return Java.type('java.util.Set');
	}
	public static $isInstance(obj: any): obj is Set {
		return obj instanceof Set.$javaClass;
	}

}

