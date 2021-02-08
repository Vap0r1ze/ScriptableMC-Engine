declare var Java: any;
import Class from './Class.js'
import Comparable from './Comparable.js'
import Number from './Number.js'
import Object from './Object.js'
import String from './String.js'

export default interface Long extends Number, Comparable {
	byteValue(): number;
	compareTo(arg0: Object): number;
	compareTo(arg0: number): number;
	doubleValue(): number;
	floatValue(): number;
	intValue(): number;
	longValue(): number;
	shortValue(): number;
}

export default class Long {
	public static get $javaClass(): any {
		return Java.type('java.lang.Long');
	}
	public static $isInstance(obj: any): obj is Long {
		return obj instanceof Long.$javaClass;
	}

	constructor(arg0: number);
	constructor(arg0: string);
	constructor(...args: any[]) {
		return new Long.$javaClass(...args);
	}

	public static get BYTES(): number {
		return Long.$javaClass.BYTES;
	}

	public static get MAX_VALUE(): number {
		return Long.$javaClass.MAX_VALUE;
	}

	public static get MIN_VALUE(): number {
		return Long.$javaClass.MIN_VALUE;
	}

	public static get SIZE(): number {
		return Long.$javaClass.SIZE;
	}

	public static get TYPE(): Class {
		return Long.$javaClass.TYPE;
	}

	public static bitCount(arg0: number): number;
	public static bitCount(...args: any[]): any {
		return Long.$javaClass.bitCount(...args);
	}

	public static compare(arg0: number, arg1: number): number;
	public static compare(...args: any[]): any {
		return Long.$javaClass.compare(...args);
	}

	public static compareUnsigned(arg0: number, arg1: number): number;
	public static compareUnsigned(...args: any[]): any {
		return Long.$javaClass.compareUnsigned(...args);
	}

	public static decode(arg0: string): number;
	public static decode(...args: any[]): any {
		return Long.$javaClass.decode(...args);
	}

	public static divideUnsigned(arg0: number, arg1: number): number;
	public static divideUnsigned(...args: any[]): any {
		return Long.$javaClass.divideUnsigned(...args);
	}

	public static getLong(arg0: string): number;
	public static getLong(arg0: string, arg1: number): number;
	public static getLong(arg0: string, arg1: number): number;
	public static getLong(...args: any[]): any {
		return Long.$javaClass.getLong(...args);
	}

	public static highestOneBit(arg0: number): number;
	public static highestOneBit(...args: any[]): any {
		return Long.$javaClass.highestOneBit(...args);
	}

	public static lowestOneBit(arg0: number): number;
	public static lowestOneBit(...args: any[]): any {
		return Long.$javaClass.lowestOneBit(...args);
	}

	public static max(arg0: number, arg1: number): number;
	public static max(...args: any[]): any {
		return Long.$javaClass.max(...args);
	}

	public static min(arg0: number, arg1: number): number;
	public static min(...args: any[]): any {
		return Long.$javaClass.min(...args);
	}

	public static numberOfLeadingZeros(arg0: number): number;
	public static numberOfLeadingZeros(...args: any[]): any {
		return Long.$javaClass.numberOfLeadingZeros(...args);
	}

	public static numberOfTrailingZeros(arg0: number): number;
	public static numberOfTrailingZeros(...args: any[]): any {
		return Long.$javaClass.numberOfTrailingZeros(...args);
	}

	public static parseLong(arg0: string): number;
	public static parseLong(arg0: string, arg1: number): number;
	public static parseLong(...args: any[]): any {
		return Long.$javaClass.parseLong(...args);
	}

	public static parseUnsignedLong(arg0: string): number;
	public static parseUnsignedLong(arg0: string, arg1: number): number;
	public static parseUnsignedLong(...args: any[]): any {
		return Long.$javaClass.parseUnsignedLong(...args);
	}

	public static remainderUnsigned(arg0: number, arg1: number): number;
	public static remainderUnsigned(...args: any[]): any {
		return Long.$javaClass.remainderUnsigned(...args);
	}

	public static reverse(arg0: number): number;
	public static reverse(...args: any[]): any {
		return Long.$javaClass.reverse(...args);
	}

	public static reverseBytes(arg0: number): number;
	public static reverseBytes(...args: any[]): any {
		return Long.$javaClass.reverseBytes(...args);
	}

	public static rotateLeft(arg0: number, arg1: number): number;
	public static rotateLeft(...args: any[]): any {
		return Long.$javaClass.rotateLeft(...args);
	}

	public static rotateRight(arg0: number, arg1: number): number;
	public static rotateRight(...args: any[]): any {
		return Long.$javaClass.rotateRight(...args);
	}

	public static signum(arg0: number): number;
	public static signum(...args: any[]): any {
		return Long.$javaClass.signum(...args);
	}

	public static sum(arg0: number, arg1: number): number;
	public static sum(...args: any[]): any {
		return Long.$javaClass.sum(...args);
	}

	public static toBinaryString(arg0: number): string;
	public static toBinaryString(...args: any[]): any {
		return Long.$javaClass.toBinaryString(...args);
	}

	public static toHexString(arg0: number): string;
	public static toHexString(...args: any[]): any {
		return Long.$javaClass.toHexString(...args);
	}

	public static toOctalString(arg0: number): string;
	public static toOctalString(...args: any[]): any {
		return Long.$javaClass.toOctalString(...args);
	}

	public static toUnsignedString(arg0: number): string;
	public static toUnsignedString(arg0: number, arg1: number): string;
	public static toUnsignedString(...args: any[]): any {
		return Long.$javaClass.toUnsignedString(...args);
	}

	public static valueOf(arg0: number): number;
	public static valueOf(arg0: string): number;
	public static valueOf(arg0: string, arg1: number): number;
	public static valueOf(...args: any[]): any {
		return Long.$javaClass.valueOf(...args);
	}

}

