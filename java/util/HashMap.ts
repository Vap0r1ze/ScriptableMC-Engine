declare var Java: any;
import AbstractMap from './AbstractMap.js'
import BiConsumer from './function/BiConsumer.js'
import BiFunction from './function/BiFunction.js'
import Class from '../../java/lang/Class.js'
import Cloneable from '../../java/lang/Cloneable.js'
import Collection from './Collection.js'
import Function from './function/Function.js'
import Map from './Map.js'
import Object from '../../java/lang/Object.js'
import Serializable from '../../java/io/Serializable.js'
import Set from './Set.js'
import String from '../../java/lang/String.js'

export default interface HashMap extends AbstractMap, Map, Cloneable, Serializable {
	clear(): void;
	clone(): Object;
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

export default class HashMap {
	public static get $javaClass(): any {
		return Java.type('java.util.HashMap');
	}
	public static $isInstance(obj: any): obj is HashMap {
		return obj instanceof HashMap.$javaClass;
	}

	constructor();
	constructor(arg0: number);
	constructor(arg0: Map);
	constructor(arg0: number, arg1: number);
	constructor(...args: any[]) {
		return new HashMap.$javaClass(...args);
	}

}

