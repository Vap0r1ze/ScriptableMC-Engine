declare var Java: any;
import Multimap from './Multimap.js'
import Multiset from './Multiset.js'

export default interface SetMultimap extends Multimap {
	asMap(): any;
	clear(): void;
	containsEntry(arg0: any, arg1: any): boolean;
	containsKey(arg0: any): boolean;
	containsValue(arg0: any): boolean;
	entries(): any;
	entries(): Array<any>;
	forEach(action: any): void;
	get(arg0: any): Array<any>;
	get(arg0: any): any;
	isEmpty(): boolean;
	keySet(): any;
	keys(): Multiset;
	put(arg0: any, arg1: any): boolean;
	putAll(arg0: Multimap): boolean;
	putAll(arg0: any, arg1: any): boolean;
	remove(arg0: any, arg1: any): boolean;
	removeAll(arg0: any): Array<any>;
	removeAll(arg0: any): any;
	replaceValues(arg0: any, arg1: any): any;
	replaceValues(arg0: any, arg1: any): Array<any>;
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

