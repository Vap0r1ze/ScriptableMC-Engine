declare var Java: any;
import BiConsumer from '../../../java/util/function/BiConsumer.js'
import BiFunction from '../../../java/util/function/BiFunction.js'
import Class from '../../../java/lang/Class.js'
import Collection from '../../../java/util/Collection.js'
import Function from '../../../java/util/function/Function.js'
import Map from '../../../java/util/Map.js'
import Object from '../../../java/lang/Object.js'
import Set from '../../../java/util/Set.js'
import String from '../../../java/lang/String.js'

export default interface CaseInsensitiveMap extends Object, Map {
	clear(): void;
	compute(arg0: Object, arg1: BiFunction): Object;
	compute(arg0: string, arg1: BiFunction): Object;
	computeIfAbsent(arg0: string, arg1: Function): Object;
	computeIfAbsent(arg0: Object, arg1: Function): Object;
	computeIfPresent(arg0: Object, arg1: BiFunction): Object;
	computeIfPresent(arg0: string, arg1: BiFunction): Object;
	containsKey(arg0: Object): boolean;
	containsKey(key: string): boolean;
	containsValue(value: Object): boolean;
	entrySet(): Set;
	forEach(arg0: BiConsumer): void;
	get(key: string): Object;
	get(arg0: Object): Object;
	getEntries(): Set;
	getKeys(): Set;
	getOrDefault(arg0: Object, arg1: Object): Object;
	getSize(): number;
	getValues(): Array<any>;
	isEmpty(): boolean;
	keySet(): Set;
	merge(arg0: string, arg1: Object, arg2: BiFunction): Object;
	merge(arg0: Object, arg1: Object, arg2: BiFunction): Object;
	put(arg0: Object, arg1: Object): Object;
	put(arg0: string, arg1: Object): Object;
	putAll(arg0: Map): void;
	putIfAbsent(arg0: Object, arg1: Object): Object;
	putIfAbsent(arg0: string, arg1: Object): Object;
	remove(arg0: Object): Object;
	remove(arg0: Object, arg1: Object): boolean;
	replace(arg0: string, arg1: Object): Object;
	replace(arg0: Object, arg1: Object): Object;
	replace(arg0: string, arg1: Object, arg2: Object): boolean;
	replace(arg0: Object, arg1: Object, arg2: Object): boolean;
	replaceAll(arg0: BiFunction): void;
	size(): number;
	values(): Array<any>;
}

export default class CaseInsensitiveMap {
	public static get $javaClass(): any {
		return Java.type('khttp.structures.maps.CaseInsensitiveMap');
	}
	public static $isInstance(obj: any): obj is CaseInsensitiveMap {
		return obj instanceof CaseInsensitiveMap.$javaClass;
	}

	constructor(map: Map);
	constructor(...args: any[]) {
		return new CaseInsensitiveMap.$javaClass(...args);
	}

}

