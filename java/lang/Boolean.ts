declare var Java: any;
import Class from './Class.js'
import Comparable from './Comparable.js'
import Object from './Object.js'
import Serializable from '../../java/io/Serializable.js'
import String from './String.js'

export default interface Boolean extends Object, Serializable, Comparable {
	booleanValue(): boolean;
	compareTo(arg0: boolean): number;
	compareTo(arg0: Object): number;
}

export default class Boolean {
	public static get $javaClass(): any {
		return Java.type('java.lang.Boolean');
	}
	public static $isInstance(obj: any): obj is Boolean {
		return obj instanceof Boolean.$javaClass;
	}

	constructor(arg0: boolean);
	constructor(arg0: string);
	constructor(...args: any[]) {
		return new Boolean.$javaClass(...args);
	}

	public static get FALSE(): boolean {
		return Boolean.$javaClass.FALSE;
	}

	public static get TRUE(): boolean {
		return Boolean.$javaClass.TRUE;
	}

	public static get TYPE(): Class {
		return Boolean.$javaClass.TYPE;
	}

	public static compare(arg0: boolean, arg1: boolean): number;
	public static compare(...args: any[]): any {
		return Boolean.$javaClass.compare(...args);
	}

	public static getBoolean(arg0: string): boolean;
	public static getBoolean(...args: any[]): any {
		return Boolean.$javaClass.getBoolean(...args);
	}

	public static logicalAnd(arg0: boolean, arg1: boolean): boolean;
	public static logicalAnd(...args: any[]): any {
		return Boolean.$javaClass.logicalAnd(...args);
	}

	public static logicalOr(arg0: boolean, arg1: boolean): boolean;
	public static logicalOr(...args: any[]): any {
		return Boolean.$javaClass.logicalOr(...args);
	}

	public static logicalXor(arg0: boolean, arg1: boolean): boolean;
	public static logicalXor(...args: any[]): any {
		return Boolean.$javaClass.logicalXor(...args);
	}

	public static parseBoolean(arg0: string): boolean;
	public static parseBoolean(...args: any[]): any {
		return Boolean.$javaClass.parseBoolean(...args);
	}

	public static valueOf(arg0: string): boolean;
	public static valueOf(arg0: boolean): boolean;
	public static valueOf(...args: any[]): any {
		return Boolean.$javaClass.valueOf(...args);
	}

}

