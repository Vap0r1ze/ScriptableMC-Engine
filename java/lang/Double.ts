declare var Java: any;
import Class from './Class.js'
import Comparable from './Comparable.js'
import Number from './Number.js'
import Object from './Object.js'
import String from './String.js'

export default interface Double extends Number, Comparable {
	byteValue(): number;
	compareTo(arg0: Object): number;
	compareTo(arg0: number): number;
	doubleValue(): number;
	floatValue(): number;
	intValue(): number;
	isInfinite(): boolean;
	isNaN(): boolean;
	longValue(): number;
	shortValue(): number;
}

export default class Double {
	public static get $javaClass(): any {
		return Java.type('java.lang.Double');
	}
	public static $isInstance(obj: any): obj is Double {
		return obj instanceof Double.$javaClass;
	}

	constructor(arg0: number);
	constructor(arg0: string);
	constructor(...args: any[]) {
		return new Double.$javaClass(...args);
	}

	public static get BYTES(): number {
		return Double.$javaClass.BYTES;
	}

	public static get MAX_EXPONENT(): number {
		return Double.$javaClass.MAX_EXPONENT;
	}

	public static get MAX_VALUE(): number {
		return Double.$javaClass.MAX_VALUE;
	}

	public static get MIN_EXPONENT(): number {
		return Double.$javaClass.MIN_EXPONENT;
	}

	public static get MIN_NORMAL(): number {
		return Double.$javaClass.MIN_NORMAL;
	}

	public static get MIN_VALUE(): number {
		return Double.$javaClass.MIN_VALUE;
	}

	public static get NEGATIVE_INFINITY(): number {
		return Double.$javaClass.NEGATIVE_INFINITY;
	}

	public static get NaN(): number {
		return Double.$javaClass.NaN;
	}

	public static get POSITIVE_INFINITY(): number {
		return Double.$javaClass.POSITIVE_INFINITY;
	}

	public static get SIZE(): number {
		return Double.$javaClass.SIZE;
	}

	public static get TYPE(): Class {
		return Double.$javaClass.TYPE;
	}

	public static compare(arg0: number, arg1: number): number;
	public static compare(...args: any[]): any {
		return Double.$javaClass.compare(...args);
	}

	public static doubleToLongBits(arg0: number): number;
	public static doubleToLongBits(...args: any[]): any {
		return Double.$javaClass.doubleToLongBits(...args);
	}

	public static doubleToRawLongBits(arg0: number): number;
	public static doubleToRawLongBits(...args: any[]): any {
		return Double.$javaClass.doubleToRawLongBits(...args);
	}

	public static isFinite(arg0: number): boolean;
	public static isFinite(...args: any[]): any {
		return Double.$javaClass.isFinite(...args);
	}

	public static isInfinite(arg0: number): boolean;
	public static isInfinite(...args: any[]): any {
		return Double.$javaClass.isInfinite(...args);
	}

	public static isNaN(arg0: number): boolean;
	public static isNaN(...args: any[]): any {
		return Double.$javaClass.isNaN(...args);
	}

	public static longBitsToDouble(arg0: number): number;
	public static longBitsToDouble(...args: any[]): any {
		return Double.$javaClass.longBitsToDouble(...args);
	}

	public static max(arg0: number, arg1: number): number;
	public static max(...args: any[]): any {
		return Double.$javaClass.max(...args);
	}

	public static min(arg0: number, arg1: number): number;
	public static min(...args: any[]): any {
		return Double.$javaClass.min(...args);
	}

	public static parseDouble(arg0: string): number;
	public static parseDouble(...args: any[]): any {
		return Double.$javaClass.parseDouble(...args);
	}

	public static sum(arg0: number, arg1: number): number;
	public static sum(...args: any[]): any {
		return Double.$javaClass.sum(...args);
	}

	public static toHexString(arg0: number): string;
	public static toHexString(...args: any[]): any {
		return Double.$javaClass.toHexString(...args);
	}

	public static valueOf(arg0: string): number;
	public static valueOf(arg0: number): number;
	public static valueOf(...args: any[]): any {
		return Double.$javaClass.valueOf(...args);
	}

}

