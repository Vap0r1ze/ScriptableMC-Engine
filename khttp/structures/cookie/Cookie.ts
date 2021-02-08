declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Map from '../../../java/util/Map.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface Cookie extends Object {
	component1(): string;
	component2(): Object;
	component3(): Map;
	copy(key: string, value: Object, attributes: Map): Cookie;
	getAttributes(): Map;
	getKey(): string;
	getValue(): Object;
	getValueWithAttributes(): string;
}

export default class Cookie {
	public static get $javaClass(): any {
		return Java.type('khttp.structures.cookie.Cookie');
	}
	public static $isInstance(obj: any): obj is Cookie {
		return obj instanceof Cookie.$javaClass;
	}

	constructor(cookie: Cookie);
	constructor(string: string);
	constructor(key: string, value: Object, attributes: Map);
	constructor(arg0: string, arg1: Object, arg2: Map, arg3: number, arg4: any);
	constructor(...args: any[]) {
		return new Cookie.$javaClass(...args);
	}

	public static copy$default(arg0: Cookie, arg1: string, arg2: Object, arg3: Map, arg4: number, arg5: Object): Cookie;
	public static copy$default(...args: any[]): any {
		return Cookie.$javaClass.copy$default(...args);
	}

}

