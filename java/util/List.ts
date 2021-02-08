declare var Java: any;
import Collection from './Collection.js'
import Comparator from './Comparator.js'
import Consumer from './function/Consumer.js'
import Iterator from './Iterator.js'
import ListIterator from './ListIterator.js'
import Object from '../../java/lang/Object.js'
import Predicate from './function/Predicate.js'
import Spliterator from './Spliterator.js'
import Stream from './stream/Stream.js'
import UnaryOperator from './function/UnaryOperator.js'

export default interface List extends Collection {
	add(arg0: Object): boolean;
	add(arg0: number, arg1: Object): void;
	addAll(arg0: Array<any>): boolean;
	addAll(arg0: number, arg1: Array<any>): boolean;
	clear(): void;
	contains(arg0: Object): boolean;
	containsAll(arg0: Array<any>): boolean;
	forEach(arg0: Consumer): void;
	get(arg0: number): Object;
	indexOf(arg0: Object): number;
	isEmpty(): boolean;
	iterator(): Iterator;
	lastIndexOf(arg0: Object): number;
	listIterator(): ListIterator;
	listIterator(arg0: number): ListIterator;
	parallelStream(): Stream;
	remove(arg0: Object): boolean;
	remove(arg0: number): Object;
	removeAll(arg0: Array<any>): boolean;
	removeIf(arg0: Predicate): boolean;
	replaceAll(arg0: UnaryOperator): void;
	retainAll(arg0: Array<any>): boolean;
	set(arg0: number, arg1: Object): Object;
	size(): number;
	sort(arg0: Comparator): void;
	spliterator(): Spliterator;
	stream(): Stream;
	subList(arg0: number, arg1: number): Array<any>;
	toArray(): Array<Object>;
	toArray(arg0: Array<Object>): Array<Object>;
}

export default class List {
	public static get $javaClass(): any {
		return Java.type('java.util.List');
	}
	public static $isInstance(obj: any): obj is List {
		return obj instanceof List.$javaClass;
	}

}

