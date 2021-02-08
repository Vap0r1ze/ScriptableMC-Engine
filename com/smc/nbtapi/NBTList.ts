declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Collection from '../../../java/util/Collection.js'
import Comparator from '../../../java/util/Comparator.js'
import Consumer from '../../../java/util/function/Consumer.js'
import Iterator from '../../../java/util/Iterator.js'
import List from '../../../java/util/List.js'
import ListIterator from '../../../java/util/ListIterator.js'
import NBTCompound from './NBTCompound.js'
import NBTType from './NBTType.js'
import Object from '../../../java/lang/Object.js'
import Predicate from '../../../java/util/function/Predicate.js'
import Spliterator from '../../../java/util/Spliterator.js'
import Stream from '../../../java/util/stream/Stream.js'
import String from '../../../java/lang/String.js'
import UnaryOperator from '../../../java/util/function/UnaryOperator.js'

export default interface NBTList extends Object, List {
	add(element: Object): boolean;
	add(index: number, element: Object): void;
	addAll(c: Array<any>): boolean;
	addAll(index: number, c: Array<any>): boolean;
	clear(): void;
	contains(o: Object): boolean;
	containsAll(c: Array<any>): boolean;
	forEach(arg0: Consumer): void;
	get(arg0: number): Object;
	getName(): string;
	getParent(): NBTCompound;
	getType(): NBTType;
	indexOf(o: Object): number;
	isEmpty(): boolean;
	iterator(): Iterator;
	lastIndexOf(o: Object): number;
	listIterator(): ListIterator;
	listIterator(startIndex: number): ListIterator;
	parallelStream(): Stream;
	remove(o: Object): boolean;
	remove(i: number): Object;
	removeAll(c: Array<any>): boolean;
	removeIf(arg0: Predicate): boolean;
	replaceAll(arg0: UnaryOperator): void;
	retainAll(c: Array<any>): boolean;
	set(index: number, element: Object): Object;
	size(): number;
	sort(arg0: Comparator): void;
	spliterator(): Spliterator;
	stream(): Stream;
	subList(fromIndex: number, toIndex: number): Array<any>;
	toArray(): Array<Object>;
	toArray(a: Array<Object>): Array<Object>;
}

export default class NBTList {
	public static get $javaClass(): any {
		return Java.type('com.smc.nbtapi.NBTList');
	}
	public static $isInstance(obj: any): obj is NBTList {
		return obj instanceof NBTList.$javaClass;
	}

}

