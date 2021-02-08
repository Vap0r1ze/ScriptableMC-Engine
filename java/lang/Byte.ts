declare var Java: any;
import Class from './Class.js'
import Comparable from './Comparable.js'
import Number from './Number.js'
import Object from './Object.js'
import String from './String.js'

export default interface Byte extends Number, Comparable {
	byteValue(): number;
	compareTo(arg0: number): number;
	compareTo(arg0: Object): number;
	doubleValue(): number;
	floatValue(): number;
	intValue(): number;
	longValue(): number;
	shortValue(): number;
}

export default class Byte {
	public static get $javaClass(): any {
		return Java.type('java.lang.Byte');
	}
	public static $isInstance(obj: any): obj is Byte {
		return obj instanceof Byte.$javaClass;
	}

	constructor(arg0: number);
	constructor(arg0: string);
	constructor(...args: any[]) {
		return new Byte.$javaClass(...args);
	}

	public static get BYTES(): number {
		return Byte.$javaClass.BYTES;
	}

	public static get MAX_VALUE(): number {
		return Byte.$javaClass.MAX_VALUE;
	}

	public static get MIN_VALUE(): number {
		return Byte.$javaClass.MIN_VALUE;
	}

	public static get SIZE(): number {
		return Byte.$javaClass.SIZE;
	}

	public static get TYPE(): Class {
		return Byte.$javaClass.TYPE;
	}

	public static compare(arg0: number, arg1: number): number;
	public static compare(...args: any[]): any {
		return Byte.$javaClass.compare(...args);
	}

	public static decode(arg0: string): number;
	public static decode(...args: any[]): any {
		return Byte.$javaClass.decode(...args);
	}

	public static parseByte(arg0: string): number;
	public static parseByte(arg0: string, arg1: number): number;
	public static parseByte(...args: any[]): any {
		return Byte.$javaClass.parseByte(...args);
	}

	public static toUnsignedInt(arg0: number): number;
	public static toUnsignedInt(...args: any[]): any {
		return Byte.$javaClass.toUnsignedInt(...args);
	}

	public static toUnsignedLong(arg0: number): number;
	public static toUnsignedLong(...args: any[]): any {
		return Byte.$javaClass.toUnsignedLong(...args);
	}

	public static valueOf(arg0: number): number;
	public static valueOf(arg0: string): number;
	public static valueOf(arg0: string, arg1: number): number;
	public static valueOf(...args: any[]): any {
		return Byte.$javaClass.valueOf(...args);
	}

}

