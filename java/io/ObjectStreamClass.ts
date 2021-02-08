declare var Java: any;
import Class from '../../java/lang/Class.js'
import Object from '../../java/lang/Object.js'
import ObjectStreamField from './ObjectStreamField.js'
import Serializable from './Serializable.js'
import String from '../../java/lang/String.js'

export default interface ObjectStreamClass extends Object, Serializable {
	forClass(): Class;
	getField(arg0: string): ObjectStreamField;
	getFields(): Array<ObjectStreamField>;
	getName(): string;
	getSerialVersionUID(): number;
}

export default class ObjectStreamClass {
	public static get $javaClass(): any {
		return Java.type('java.io.ObjectStreamClass');
	}
	public static $isInstance(obj: any): obj is ObjectStreamClass {
		return obj instanceof ObjectStreamClass.$javaClass;
	}

	public static get NO_FIELDS(): Array<ObjectStreamField> {
		return ObjectStreamClass.$javaClass.NO_FIELDS;
	}

	public static lookup(arg0: Class): ObjectStreamClass;
	public static lookup(...args: any[]): any {
		return ObjectStreamClass.$javaClass.lookup(...args);
	}

	public static lookupAny(arg0: Class): ObjectStreamClass;
	public static lookupAny(...args: any[]): any {
		return ObjectStreamClass.$javaClass.lookupAny(...args);
	}

}

