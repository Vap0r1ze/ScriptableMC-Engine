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

export default interface Parameters extends Object, Map {
	clear(): void;
	compute(arg0: string, arg1: BiFunction): string;
	compute(arg0: Object, arg1: BiFunction): Object;
	computeIfAbsent(arg0: Object, arg1: Function): Object;
	computeIfAbsent(arg0: string, arg1: Function): string;
	computeIfPresent(arg0: string, arg1: BiFunction): string;
	computeIfPresent(arg0: Object, arg1: BiFunction): Object;
	containsKey(key: string): boolean;
	containsKey(arg0: Object): boolean;
	containsValue(arg0: Object): boolean;
	containsValue(value: string): boolean;
	entrySet(): Set;
	forEach(arg0: BiConsumer): void;
	get(key: string): string;
	get(arg0: Object): Object;
	getEntries(): Set;
	getKeys(): Set;
	getOrDefault(arg0: Object, arg1: Object): Object;
	getParameters(): Array<any>;
	getSize(): number;
	getValues(): Array<string>;
	isEmpty(): boolean;
	keySet(): Set;
	merge(arg0: string, arg1: string, arg2: BiFunction): string;
	merge(arg0: Object, arg1: Object, arg2: BiFunction): Object;
	put(arg0: Object, arg1: Object): Object;
	put(arg0: string, arg1: string): string;
	putAll(arg0: Map): void;
	putIfAbsent(arg0: Object, arg1: Object): Object;
	putIfAbsent(arg0: string, arg1: string): string;
	remove(arg0: Object): Object;
	remove(arg0: Object, arg1: Object): boolean;
	replace(arg0: Object, arg1: Object): Object;
	replace(arg0: string, arg1: string): string;
	replace(arg0: Object, arg1: Object, arg2: Object): boolean;
	replace(arg0: string, arg1: string, arg2: string): boolean;
	replaceAll(arg0: BiFunction): void;
	size(): number;
	values(): Array<string>;
}

export default class Parameters {
	public static get $javaClass(): any {
		return Java.type('khttp.structures.parameters.Parameters');
	}
	public static $isInstance(obj: any): obj is Parameters {
		return obj instanceof Parameters.$javaClass;
	}

	constructor(parameters: Map);
	constructor(parameters: Array<any>);
	constructor(...args: any[]) {
		return new Parameters.$javaClass(...args);
	}

}

