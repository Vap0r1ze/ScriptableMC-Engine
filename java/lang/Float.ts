declare var Java: any;
import Class from './Class.js'
import Comparable from './Comparable.js'
import Number from './Number.js'
import Object from './Object.js'
import String from './String.js'

export default interface Float extends Number, Comparable {
	byteValue(): number;
	compareTo(arg0: number): number;
	compareTo(arg0: Object): number;
	doubleValue(): number;
	floatValue(): number;
	intValue(): number;
	isInfinite(): boolean;
	isNaN(): boolean;
	longValue(): number;
	shortValue(): number;
}

export default class Float {
	public static get $javaClass(): any {
		return Java.type('java.lang.Float');
	}
	public static $isInstance(obj: any): obj is Float {
		return obj instanceof Float.$javaClass;
	}

	constructor(arg0: string);
	constructor(arg0: number);
	constructor(arg0: number);
	constructor(...args: any[]) {
		return new Float.$javaClass(...args);
	}

	public static get BYTES(): number {
		return Float.$javaClass.BYTES;
	}

	public static get MAX_EXPONENT(): number {
		return Float.$javaClass.MAX_EXPONENT;
	}

	public static get MAX_VALUE(): number {
		return Float.$javaClass.MAX_VALUE;
	}

	public static get MIN_EXPONENT(): number {
		return Float.$javaClass.MIN_EXPONENT;
	}

	public static get MIN_NORMAL(): number {
		return Float.$javaClass.MIN_NORMAL;
	}

	public static get MIN_VALUE(): number {
		return Float.$javaClass.MIN_VALUE;
	}

	public static get NEGATIVE_INFINITY(): number {
		return Float.$javaClass.NEGATIVE_INFINITY;
	}

	public static get NaN(): number {
		return Float.$javaClass.NaN;
	}

	public static get POSITIVE_INFINITY(): number {
		return Float.$javaClass.POSITIVE_INFINITY;
	}

	public static get SIZE(): number {
		return Float.$javaClass.SIZE;
	}

	public static get TYPE(): Class {
		return Float.$javaClass.TYPE;
	}

	public static compare(arg0: number, arg1: number): number;
	public static compare(...args: any[]): any {
		return Float.$javaClass.compare(...args);
	}

	public static floatToIntBits(arg0: number): number;
	public static floatToIntBits(...args: any[]): any {
		return Float.$javaClass.floatToIntBits(...args);
	}

	public static floatToRawIntBits(arg0: number): number;
	public static floatToRawIntBits(...args: any[]): any {
		return Float.$javaClass.floatToRawIntBits(...args);
	}

	public static intBitsToFloat(arg0: number): number;
	public static intBitsToFloat(...args: any[]): any {
		return Float.$javaClass.intBitsToFloat(...args);
	}

	public static isFinite(arg0: number): boolean;
	public static isFinite(...args: any[]): any {
		return Float.$javaClass.isFinite(...args);
	}

	public static isInfinite(arg0: number): boolean;
	public static isInfinite(...args: any[]): any {
		return Float.$javaClass.isInfinite(...args);
	}

	public static isNaN(arg0: number): boolean;
	public static isNaN(...args: any[]): any {
		return Float.$javaClass.isNaN(...args);
	}

	public static max(arg0: number, arg1: number): number;
	public static max(...args: any[]): any {
		return Float.$javaClass.max(...args);
	}

	public static min(arg0: number, arg1: number): number;
	public static min(...args: any[]): any {
		return Float.$javaClass.min(...args);
	}

	public static parseFloat(arg0: string): number;
	public static parseFloat(...args: any[]): any {
		return Float.$javaClass.parseFloat(...args);
	}

	public static sum(arg0: number, arg1: number): number;
	public static sum(...args: any[]): any {
		return Float.$javaClass.sum(...args);
	}

	public static toHexString(arg0: number): string;
	public static toHexString(...args: any[]): any {
		return Float.$javaClass.toHexString(...args);
	}

	public static valueOf(arg0: number): number;
	public static valueOf(arg0: string): number;
	public static valueOf(...args: any[]): any {
		return Float.$javaClass.valueOf(...args);
	}

}

