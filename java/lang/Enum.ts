declare var Java: any;
import Class from './Class.js'
import Comparable from './Comparable.js'
import Object from './Object.js'
import Serializable from '../../java/io/Serializable.js'
import String from './String.js'

export default interface Enum extends Object, Comparable, Serializable {
	compareTo(arg0: Object): number;
	compareTo(arg0: Enum): number;
	getDeclaringClass(): Class;
	name(): string;
	ordinal(): number;
}

export default class Enum {
	public static get $javaClass(): any {
		return Java.type('java.lang.Enum');
	}
	public static $isInstance(obj: any): obj is Enum {
		return obj instanceof Enum.$javaClass;
	}

	public static valueOf(arg0: Class, arg1: string): Enum;
	public static valueOf(...args: any[]): any {
		return Enum.$javaClass.valueOf(...args);
	}

}

