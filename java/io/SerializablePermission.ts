declare var Java: any;
import Class from '../../java/lang/Class.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'

export default interface SerializablePermission {
	checkGuard(arg0: Object): void;
	getActions(): string;
	getName(): string;
	implies(arg0: any): boolean;
	newPermissionCollection(): any;
}

export default class SerializablePermission {
	public static get $javaClass(): any {
		return Java.type('java.io.SerializablePermission');
	}
	public static $isInstance(obj: any): obj is SerializablePermission {
		return obj instanceof SerializablePermission.$javaClass;
	}

	constructor(arg0: string);
	constructor(arg0: string, arg1: string);
	constructor(...args: any[]) {
		return new SerializablePermission.$javaClass(...args);
	}

}

