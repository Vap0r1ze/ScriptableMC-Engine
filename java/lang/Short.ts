declare var Java: any;
import Class from './Class.js'
import Comparable from './Comparable.js'
import Number from './Number.js'
import Object from './Object.js'
import String from './String.js'

export default interface Short extends Number, Comparable {
	byteValue(): number;
	compareTo(arg0: number): number;
	compareTo(arg0: Object): number;
	doubleValue(): number;
	floatValue(): number;
	intValue(): number;
	longValue(): number;
	shortValue(): number;
}

export default class Short {
	public static get $javaClass(): any {
		return Java.type('java.lang.Short');
	}
	public static $isInstance(obj: any): obj is Short {
		return obj instanceof Short.$javaClass;
	}

	constructor(arg0: number);
	constructor(arg0: string);
	constructor(...args: any[]) {
		return new Short.$javaClass(...args);
	}

	public static get BYTES(): number {
		return Short.$javaClass.BYTES;
	}

	public static get MAX_VALUE(): number {
		return Short.$javaClass.MAX_VALUE;
	}

	public static get MIN_VALUE(): number {
		return Short.$javaClass.MIN_VALUE;
	}

	public static get SIZE(): number {
		return Short.$javaClass.SIZE;
	}

	public static get TYPE(): Class {
		return Short.$javaClass.TYPE;
	}

	public static compare(arg0: number, arg1: number): number;
	public static compare(...args: any[]): any {
		return Short.$javaClass.compare(...args);
	}

	public static decode(arg0: string): number;
	public static decode(...args: any[]): any {
		return Short.$javaClass.decode(...args);
	}

	public static parseShort(arg0: string): number;
	public static parseShort(arg0: string, arg1: number): number;
	public static parseShort(...args: any[]): any {
		return Short.$javaClass.parseShort(...args);
	}

	public static reverseBytes(arg0: number): number;
	public static reverseBytes(...args: any[]): any {
		return Short.$javaClass.reverseBytes(...args);
	}

	public static toUnsignedInt(arg0: number): number;
	public static toUnsignedInt(...args: any[]): any {
		return Short.$javaClass.toUnsignedInt(...args);
	}

	public static toUnsignedLong(arg0: number): number;
	public static toUnsignedLong(...args: any[]): any {
		return Short.$javaClass.toUnsignedLong(...args);
	}

	public static valueOf(arg0: number): number;
	public static valueOf(arg0: string): number;
	public static valueOf(arg0: string, arg1: number): number;
	public static valueOf(...args: any[]): any {
		return Short.$javaClass.valueOf(...args);
	}

}

