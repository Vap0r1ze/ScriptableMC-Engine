declare var Java: any;

export default interface SerializablePermission {
	checkGuard(arg0: any): void;
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

