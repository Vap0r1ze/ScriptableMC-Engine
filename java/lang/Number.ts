declare var Java: any;
import Class from './Class.js'
import Object from './Object.js'
import Serializable from '../../java/io/Serializable.js'
import String from './String.js'

export default interface Number extends Object, Serializable {
	byteValue(): number;
	doubleValue(): number;
	floatValue(): number;
	intValue(): number;
	longValue(): number;
	shortValue(): number;
}

export default class Number {
	public static get $javaClass(): any {
		return Java.type('java.lang.Number');
	}
	public static $isInstance(obj: any): obj is Number {
		return obj instanceof Number.$javaClass;
	}

	constructor();
	constructor(...args: any[]) {
		return new Number.$javaClass(...args);
	}

}

