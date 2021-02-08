declare var Java: any;
import AbstractCollection from './AbstractCollection.js'
import Class from '../../java/lang/Class.js'
import Collection from './Collection.js'
import Consumer from './function/Consumer.js'
import Iterator from './Iterator.js'
import Object from '../../java/lang/Object.js'
import Predicate from './function/Predicate.js'
import Set from './Set.js'
import Spliterator from './Spliterator.js'
import Stream from './stream/Stream.js'
import String from '../../java/lang/String.js'

export default interface AbstractSet extends AbstractCollection, Set {
	add(arg0: Object): boolean;
	addAll(arg0: Array<any>): boolean;
	clear(): void;
	contains(arg0: Object): boolean;
	containsAll(arg0: Array<any>): boolean;
	forEach(arg0: Consumer): void;
	isEmpty(): boolean;
	iterator(): Iterator;
	iterator(): Iterator;
	parallelStream(): Stream;
	remove(arg0: Object): boolean;
	removeAll(arg0: Array<any>): boolean;
	removeIf(arg0: Predicate): boolean;
	retainAll(arg0: Array<any>): boolean;
	size(): number;
	size(): number;
	spliterator(): Spliterator;
	stream(): Stream;
	toArray(): Array<Object>;
	toArray(arg0: Array<Object>): Array<Object>;
}

export default class AbstractSet {
	public static get $javaClass(): any {
		return Java.type('java.util.AbstractSet');
	}
	public static $isInstance(obj: any): obj is AbstractSet {
		return obj instanceof AbstractSet.$javaClass;
	}

}

