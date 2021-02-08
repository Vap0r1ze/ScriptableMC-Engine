declare var Java: any;
import BiConsumer from '../../../../java/util/function/BiConsumer.js'
import Collection from '../../../../java/util/Collection.js'
import Iterable from '../../../../java/lang/Iterable.js'
import Map from '../../../../java/util/Map.js'
import Multimap from './Multimap.js'
import Multiset from './Multiset.js'
import Object from '../../../../java/lang/Object.js'
import Set from '../../../../java/util/Set.js'

export default interface SetMultimap extends Multimap {
	asMap(): Map;
	clear(): void;
	containsEntry(arg0: Object, arg1: Object): boolean;
	containsKey(arg0: Object): boolean;
	containsValue(arg0: Object): boolean;
	entries(): Set;
	entries(): Array<any>;
	forEach(action: BiConsumer): void;
	get(arg0: Object): Set;
	get(arg0: Object): Array<any>;
	isEmpty(): boolean;
	keySet(): Set;
	keys(): Multiset;
	put(arg0: Object, arg1: Object): boolean;
	putAll(arg0: Multimap): boolean;
	putAll(arg0: Object, arg1: Iterable): boolean;
	remove(arg0: Object, arg1: Object): boolean;
	removeAll(arg0: Object): Array<any>;
	removeAll(arg0: Object): Set;
	replaceValues(arg0: Object, arg1: Iterable): Array<any>;
	replaceValues(arg0: Object, arg1: Iterable): Set;
	size(): number;
	values(): Array<any>;
}

export default class SetMultimap {
	public static get $javaClass(): any {
		return Java.type('com.google.common.collect.SetMultimap');
	}
	public static $isInstance(obj: any): obj is SetMultimap {
		return obj instanceof SetMultimap.$javaClass;
	}

}

