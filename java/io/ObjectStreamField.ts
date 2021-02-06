declare var Java: any;

export default interface ObjectStreamField {
	compareTo(arg0: any): number;
	getName(): string;
	getOffset(): number;
	getType(): any;
	getTypeCode(): string;
	getTypeString(): string;
	isPrimitive(): boolean;
	isUnshared(): boolean;
}

export default class ObjectStreamField {
	public static get $javaClass(): any {
		return Java.type('java.io.ObjectStreamField');
	}

	constructor(arg0: string, arg1: any);
	constructor(arg0: string, arg1: any, arg2: boolean);
	constructor(...args: any[]) {
		return new ObjectStreamField.$javaClass(...args);
	}

}

