declare var Java: any;
import Class from './Class.js'
import String from './String.js'

export default class Object {
	public static get $javaClass(): any {
		return Java.type('java.lang.Object');
	}
	public static $isInstance(obj: any): obj is Object {
		return obj instanceof Object.$javaClass;
	}

	constructor();
	constructor(...args: any[]) {
		return new Object.$javaClass(...args);
	}

}

