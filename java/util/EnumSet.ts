declare var Java: any;
import AbstractSet from './AbstractSet.js'
import Class from '../../java/lang/Class.js'
import Cloneable from '../../java/lang/Cloneable.js'
import Collection from './Collection.js'
import Consumer from './function/Consumer.js'
import Enum from '../../java/lang/Enum.js'
import Iterator from './Iterator.js'
import Object from '../../java/lang/Object.js'
import Predicate from './function/Predicate.js'
import Serializable from '../../java/io/Serializable.js'
import Spliterator from './Spliterator.js'
import Stream from './stream/Stream.js'
import String from '../../java/lang/String.js'

export default interface EnumSet extends AbstractSet, Cloneable, Serializable {
	add(arg0: Object): boolean;
	addAll(arg0: Array<any>): boolean;
	clear(): void;
	clone(): EnumSet;
	clone(): Object;
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

export default class EnumSet {
	public static get $javaClass(): any {
		return Java.type('java.util.EnumSet');
	}
	public static $isInstance(obj: any): obj is EnumSet {
		return obj instanceof EnumSet.$javaClass;
	}

	public static allOf(arg0: Class): EnumSet;
	public static allOf(...args: any[]): any {
		return EnumSet.$javaClass.allOf(...args);
	}

	public static complementOf(arg0: EnumSet): EnumSet;
	public static complementOf(...args: any[]): any {
		return EnumSet.$javaClass.complementOf(...args);
	}

	public static copyOf(arg0: EnumSet): EnumSet;
	public static copyOf(arg0: Array<any>): EnumSet;
	public static copyOf(...args: any[]): any {
		return EnumSet.$javaClass.copyOf(...args);
	}

	public static noneOf(arg0: Class): EnumSet;
	public static noneOf(...args: any[]): any {
		return EnumSet.$javaClass.noneOf(...args);
	}

	public static of(arg0: Enum): EnumSet;
	public static of(arg0: Enum, arg1: Array<Enum>): EnumSet;
	public static of(arg0: Enum, arg1: Enum): EnumSet;
	public static of(arg0: Enum, arg1: Enum, arg2: Enum): EnumSet;
	public static of(arg0: Enum, arg1: Enum, arg2: Enum, arg3: Enum): EnumSet;
	public static of(arg0: Enum, arg1: Enum, arg2: Enum, arg3: Enum, arg4: Enum): EnumSet;
	public static of(...args: any[]): any {
		return EnumSet.$javaClass.of(...args);
	}

	public static range(arg0: Enum, arg1: Enum): EnumSet;
	public static range(...args: any[]): any {
		return EnumSet.$javaClass.range(...args);
	}

}

