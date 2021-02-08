declare var Java: any;
import Class from '../../java/lang/Class.js'
import Comparable from '../../java/lang/Comparable.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'

export default interface ObjectStreamField extends Object, Comparable {
	compareTo(arg0: Object): number;
	getName(): string;
	getOffset(): number;
	getType(): Class;
	getTypeCode(): string;
	getTypeString(): string;
	isPrimitive(): boolean;
	isUnshared(): boolean;
}

export default class ObjectStreamField {
	public static get $javaClass(): any {
		return Java.type('java.io.ObjectStreamField');
	}
	public static $isInstance(obj: any): obj is ObjectStreamField {
		return obj instanceof ObjectStreamField.$javaClass;
	}

	constructor(arg0: string, arg1: Class);
	constructor(arg0: string, arg1: Class, arg2: boolean);
	constructor(...args: any[]) {
		return new ObjectStreamField.$javaClass(...args);
	}

}

