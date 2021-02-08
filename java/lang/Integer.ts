declare var Java: any;
import Class from './Class.js'
import Comparable from './Comparable.js'
import Number from './Number.js'
import Object from './Object.js'
import String from './String.js'

export default interface Integer extends Number, Comparable {
	byteValue(): number;
	compareTo(arg0: Integer): number;
	compareTo(arg0: Object): number;
	doubleValue(): number;
	floatValue(): number;
	intValue(): number;
	longValue(): number;
	shortValue(): number;
}

export default class Integer {
	public static get $javaClass(): any {
		return Java.type('java.lang.Integer');
	}
	public static $isInstance(obj: any): obj is Integer {
		return obj instanceof Integer.$javaClass;
	}

	constructor(arg0: number);
	constructor(arg0: string);
	constructor(...args: any[]) {
		return new Integer.$javaClass(...args);
	}

	public static get BYTES(): number {
		return Integer.$javaClass.BYTES;
	}

	public static get MAX_VALUE(): number {
		return Integer.$javaClass.MAX_VALUE;
	}

	public static get MIN_VALUE(): number {
		return Integer.$javaClass.MIN_VALUE;
	}

	public static get SIZE(): number {
		return Integer.$javaClass.SIZE;
	}

	public static get TYPE(): Class {
		return Integer.$javaClass.TYPE;
	}

	public static bitCount(arg0: number): number;
	public static bitCount(...args: any[]): any {
		return Integer.$javaClass.bitCount(...args);
	}

	public static compare(arg0: number, arg1: number): number;
	public static compare(...args: any[]): any {
		return Integer.$javaClass.compare(...args);
	}

	public static compareUnsigned(arg0: number, arg1: number): number;
	public static compareUnsigned(...args: any[]): any {
		return Integer.$javaClass.compareUnsigned(...args);
	}

	public static decode(arg0: string): Integer;
	public static decode(...args: any[]): any {
		return Integer.$javaClass.decode(...args);
	}

	public static divideUnsigned(arg0: number, arg1: number): number;
	public static divideUnsigned(...args: any[]): any {
		return Integer.$javaClass.divideUnsigned(...args);
	}

	public static getInteger(arg0: string): Integer;
	public static getInteger(arg0: string, arg1: number): Integer;
	public static getInteger(arg0: string, arg1: Integer): Integer;
	public static getInteger(...args: any[]): any {
		return Integer.$javaClass.getInteger(...args);
	}

	public static highestOneBit(arg0: number): number;
	public static highestOneBit(...args: any[]): any {
		return Integer.$javaClass.highestOneBit(...args);
	}

	public static lowestOneBit(arg0: number): number;
	public static lowestOneBit(...args: any[]): any {
		return Integer.$javaClass.lowestOneBit(...args);
	}

	public static max(arg0: number, arg1: number): number;
	public static max(...args: any[]): any {
		return Integer.$javaClass.max(...args);
	}

	public static min(arg0: number, arg1: number): number;
	public static min(...args: any[]): any {
		return Integer.$javaClass.min(...args);
	}

	public static numberOfLeadingZeros(arg0: number): number;
	public static numberOfLeadingZeros(...args: any[]): any {
		return Integer.$javaClass.numberOfLeadingZeros(...args);
	}

	public static numberOfTrailingZeros(arg0: number): number;
	public static numberOfTrailingZeros(...args: any[]): any {
		return Integer.$javaClass.numberOfTrailingZeros(...args);
	}

	public static parseInt(arg0: string): number;
	public static parseInt(arg0: string, arg1: number): number;
	public static parseInt(...args: any[]): any {
		return Integer.$javaClass.parseInt(...args);
	}

	public static parseUnsignedInt(arg0: string): number;
	public static parseUnsignedInt(arg0: string, arg1: number): number;
	public static parseUnsignedInt(...args: any[]): any {
		return Integer.$javaClass.parseUnsignedInt(...args);
	}

	public static remainderUnsigned(arg0: number, arg1: number): number;
	public static remainderUnsigned(...args: any[]): any {
		return Integer.$javaClass.remainderUnsigned(...args);
	}

	public static reverse(arg0: number): number;
	public static reverse(...args: any[]): any {
		return Integer.$javaClass.reverse(...args);
	}

	public static reverseBytes(arg0: number): number;
	public static reverseBytes(...args: any[]): any {
		return Integer.$javaClass.reverseBytes(...args);
	}

	public static rotateLeft(arg0: number, arg1: number): number;
	public static rotateLeft(...args: any[]): any {
		return Integer.$javaClass.rotateLeft(...args);
	}

	public static rotateRight(arg0: number, arg1: number): number;
	public static rotateRight(...args: any[]): any {
		return Integer.$javaClass.rotateRight(...args);
	}

	public static signum(arg0: number): number;
	public static signum(...args: any[]): any {
		return Integer.$javaClass.signum(...args);
	}

	public static sum(arg0: number, arg1: number): number;
	public static sum(...args: any[]): any {
		return Integer.$javaClass.sum(...args);
	}

	public static toBinaryString(arg0: number): string;
	public static toBinaryString(...args: any[]): any {
		return Integer.$javaClass.toBinaryString(...args);
	}

	public static toHexString(arg0: number): string;
	public static toHexString(...args: any[]): any {
		return Integer.$javaClass.toHexString(...args);
	}

	public static toOctalString(arg0: number): string;
	public static toOctalString(...args: any[]): any {
		return Integer.$javaClass.toOctalString(...args);
	}

	public static toUnsignedLong(arg0: number): number;
	public static toUnsignedLong(...args: any[]): any {
		return Integer.$javaClass.toUnsignedLong(...args);
	}

	public static toUnsignedString(arg0: number): string;
	public static toUnsignedString(arg0: number, arg1: number): string;
	public static toUnsignedString(...args: any[]): any {
		return Integer.$javaClass.toUnsignedString(...args);
	}

	public static valueOf(arg0: number): Integer;
	public static valueOf(arg0: string): Integer;
	public static valueOf(arg0: string, arg1: number): Integer;
	public static valueOf(...args: any[]): any {
		return Integer.$javaClass.valueOf(...args);
	}

}

