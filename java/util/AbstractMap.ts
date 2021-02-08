declare var Java: any;
import BiConsumer from './function/BiConsumer.js'
import BiFunction from './function/BiFunction.js'
import Class from '../../java/lang/Class.js'
import Collection from './Collection.js'
import Function from './function/Function.js'
import Map from './Map.js'
import Object from '../../java/lang/Object.js'
import Set from './Set.js'
import String from '../../java/lang/String.js'

export default interface AbstractMap extends Object, Map {
	clear(): void;
	compute(arg0: Object, arg1: BiFunction): Object;
	computeIfAbsent(arg0: Object, arg1: Function): Object;
	computeIfPresent(arg0: Object, arg1: BiFunction): Object;
	containsKey(arg0: Object): boolean;
	containsValue(arg0: Object): boolean;
	entrySet(): Set;
	forEach(arg0: BiConsumer): void;
	get(arg0: Object): Object;
	getOrDefault(arg0: Object, arg1: Object): Object;
	isEmpty(): boolean;
	keySet(): Set;
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
	values(): Array<any>;
}

export default class AbstractMap {
	public static get $javaClass(): any {
		return Java.type('java.util.AbstractMap');
	}
	public static $isInstance(obj: any): obj is AbstractMap {
		return obj instanceof AbstractMap.$javaClass;
	}

}

