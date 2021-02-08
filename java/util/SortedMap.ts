declare var Java: any;
import BiConsumer from './function/BiConsumer.js'
import BiFunction from './function/BiFunction.js'
import Collection from './Collection.js'
import Comparator from './Comparator.js'
import Function from './function/Function.js'
import Map from './Map.js'
import Object from '../../java/lang/Object.js'
import Set from './Set.js'

export default interface SortedMap extends Map {
	clear(): void;
	comparator(): Comparator;
	compute(arg0: Object, arg1: BiFunction): Object;
	computeIfAbsent(arg0: Object, arg1: Function): Object;
	computeIfPresent(arg0: Object, arg1: BiFunction): Object;
	containsKey(arg0: Object): boolean;
	containsValue(arg0: Object): boolean;
	entrySet(): Set;
	firstKey(): Object;
	forEach(arg0: BiConsumer): void;
	get(arg0: Object): Object;
	getOrDefault(arg0: Object, arg1: Object): Object;
	headMap(arg0: Object): SortedMap;
	isEmpty(): boolean;
	keySet(): Set;
	lastKey(): Object;
	merge(arg0: Object, arg1: Object, arg2: BiFunction): Object;
	put(arg0: Object, arg1: Object): Object;
	putAll(arg0: Map): void;
	putIfAbsent(arg0: Object, arg1: Object): Object;
	remove(arg0: Object): Object;
	remove(arg0: Object, arg1: Object): boolean;
	replace(arg0: Object, arg1: Object): Object;
	replace(arg0: Object, arg1: Object, arg2: Object): boolean;
	replaceAll(arg0: BiFunction): void;
	size(): number;
	subMap(arg0: Object, arg1: Object): SortedMap;
	tailMap(arg0: Object): SortedMap;
	values(): Array<any>;
}

export default class SortedMap {
	public static get $javaClass(): any {
		return Java.type('java.util.SortedMap');
	}
	public static $isInstance(obj: any): obj is SortedMap {
		return obj instanceof SortedMap.$javaClass;
	}

}

