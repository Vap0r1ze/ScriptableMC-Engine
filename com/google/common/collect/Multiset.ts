declare var Java: any;
import Collection from '../../../../java/util/Collection.js'
import Consumer from '../../../../java/util/function/Consumer.js'
import Iterator from '../../../../java/util/Iterator.js'
import ObjIntConsumer from '../../../../java/util/function/ObjIntConsumer.js'
import Object from '../../../../java/lang/Object.js'
import Predicate from '../../../../java/util/function/Predicate.js'
import Set from '../../../../java/util/Set.js'
import Spliterator from '../../../../java/util/Spliterator.js'
import Stream from '../../../../java/util/stream/Stream.js'
import String from '../../../../java/lang/String.js'

export default interface Multiset extends Collection {
	add(arg0: Object): boolean;
	add(arg0: Object, arg1: number): number;
	addAll(arg0: Array<any>): boolean;
	clear(): void;
	contains(arg0: Object): boolean;
	containsAll(arg0: Array<any>): boolean;
	count(arg0: Object): number;
	elementSet(): Set;
	entrySet(): Set;
	forEach(action: Consumer): void;
	forEachEntry(action: ObjIntConsumer): void;
	isEmpty(): boolean;
	iterator(): Iterator;
	parallelStream(): Stream;
	remove(arg0: Object): boolean;
	remove(arg0: Object, arg1: number): number;
	removeAll(arg0: Array<any>): boolean;
	removeIf(arg0: Predicate): boolean;
	retainAll(arg0: Array<any>): boolean;
	setCount(arg0: Object, arg1: number): number;
	setCount(arg0: Object, arg1: number, arg2: number): boolean;
	size(): number;
	spliterator(): Spliterator;
	stream(): Stream;
	toArray(): Array<Object>;
	toArray(arg0: Array<Object>): Array<Object>;
}

export default class Multiset {
	public static get $javaClass(): any {
		return Java.type('com.google.common.collect.Multiset');
	}
	public static $isInstance(obj: any): obj is Multiset {
		return obj instanceof Multiset.$javaClass;
	}

}

