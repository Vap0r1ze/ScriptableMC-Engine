declare var Java: any;
import Class from '../../java/lang/Class.js'
import Enumeration from './Enumeration.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'

export default interface Dictionary extends Object {
	elements(): Enumeration;
	get(arg0: Object): Object;
	isEmpty(): boolean;
	keys(): Enumeration;
	put(arg0: Object, arg1: Object): Object;
	remove(arg0: Object): Object;
	size(): number;
}

export default class Dictionary {
	public static get $javaClass(): any {
		return Java.type('java.util.Dictionary');
	}
	public static $isInstance(obj: any): obj is Dictionary {
		return obj instanceof Dictionary.$javaClass;
	}

	constructor();
	constructor(...args: any[]) {
		return new Dictionary.$javaClass(...args);
	}

}

