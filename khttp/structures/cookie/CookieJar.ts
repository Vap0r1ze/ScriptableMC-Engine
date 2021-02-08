declare var Java: any;
import BiConsumer from '../../../java/util/function/BiConsumer.js'
import BiFunction from '../../../java/util/function/BiFunction.js'
import Class from '../../../java/lang/Class.js'
import Collection from '../../../java/util/Collection.js'
import Cookie from './Cookie.js'
import Function from '../../../java/util/function/Function.js'
import Map from '../../../java/util/Map.js'
import Object from '../../../java/lang/Object.js'
import Set from '../../../java/util/Set.js'
import String from '../../../java/lang/String.js'

export default interface CookieJar extends Object, Map {
	clear(): void;
	compute(arg0: Object, arg1: BiFunction): Object;
	computeIfAbsent(arg0: Object, arg1: Function): Object;
	computeIfPresent(arg0: Object, arg1: BiFunction): Object;
	containsKey(key: string): boolean;
	containsKey(arg0: Object): boolean;
	containsValue(arg0: Object): boolean;
	containsValue(value: string): boolean;
	entrySet(): Set;
	forEach(arg0: BiConsumer): void;
	get(key: string): string;
	get(arg0: Object): Object;
	getCookie(key: string): Cookie;
	getCookies(): Array<Cookie>;
	getEntries(): Set;
	getKeys(): Set;
	getOrDefault(arg0: Object, arg1: Object): Object;
	getSize(): number;
	getValues(): Array<string>;
	isEmpty(): boolean;
	keySet(): Set;
	merge(arg0: Object, arg1: Object, arg2: BiFunction): Object;
	put(arg0: Object, arg1: Object): Object;
	put(key: string, value: string): string;
	putAll(from: Map): void;
	putIfAbsent(arg0: Object, arg1: Object): Object;
	remove(key: string): string;
	remove(arg0: Object): Object;
	remove(arg0: Object, arg1: Object): boolean;
	replace(arg0: Object, arg1: Object): Object;
	replace(arg0: Object, arg1: Object, arg2: Object): boolean;
	replaceAll(arg0: BiFunction): void;
	setCookie(cookie: Cookie): void;
	size(): number;
	values(): Array<string>;
}

export default class CookieJar {
	public static get $javaClass(): any {
		return Java.type('khttp.structures.cookie.CookieJar');
	}
	public static $isInstance(obj: any): obj is CookieJar {
		return obj instanceof CookieJar.$javaClass;
	}

	constructor();
	constructor(cookies: Map);
	constructor(cookies: Array<Cookie>);
	constructor(arg0: Array<Cookie>, arg1: number, arg2: any);
	constructor(...args: any[]) {
		return new CookieJar.$javaClass(...args);
	}

}

