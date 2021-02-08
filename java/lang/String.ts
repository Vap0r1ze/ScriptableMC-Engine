declare var Java: any;
import CharSequence from './CharSequence.js'
import Charset from '../../java/nio/charset/Charset.js'
import Class from './Class.js'
import Comparable from './Comparable.js'
import Comparator from '../../java/util/Comparator.js'
import IntStream from '../../java/util/stream/IntStream.js'
import Iterable from './Iterable.js'
import Locale from '../../java/util/Locale.js'
import Object from './Object.js'
import Serializable from '../../java/io/Serializable.js'
import StringBuffer from './StringBuffer.js'
import StringBuilder from './StringBuilder.js'

export default interface String extends Object, Serializable, Comparable, CharSequence {
	charAt(arg0: number): string;
	chars(): IntStream;
	codePointAt(arg0: number): number;
	codePointBefore(arg0: number): number;
	codePointCount(arg0: number, arg1: number): number;
	codePoints(): IntStream;
	compareTo(arg0: Object): number;
	compareTo(arg0: string): number;
	compareToIgnoreCase(arg0: string): number;
	concat(arg0: string): string;
	contains(arg0: CharSequence): boolean;
	contentEquals(arg0: StringBuffer): boolean;
	contentEquals(arg0: CharSequence): boolean;
	endsWith(arg0: string): boolean;
	equalsIgnoreCase(arg0: string): boolean;
	getBytes(): Array<number>;
	getBytes(arg0: string): Array<number>;
	getBytes(arg0: Charset): Array<number>;
	getBytes(arg0: number, arg1: number, arg2: Array<number>, arg3: number): void;
	getChars(arg0: number, arg1: number, arg2: Array<string>, arg3: number): void;
	indexOf(arg0: number): number;
	indexOf(arg0: string): number;
	indexOf(arg0: string, arg1: number): number;
	indexOf(arg0: number, arg1: number): number;
	intern(): string;
	isEmpty(): boolean;
	lastIndexOf(arg0: number): number;
	lastIndexOf(arg0: string): number;
	lastIndexOf(arg0: number, arg1: number): number;
	lastIndexOf(arg0: string, arg1: number): number;
	length(): number;
	matches(arg0: string): boolean;
	offsetByCodePoints(arg0: number, arg1: number): number;
	regionMatches(arg0: number, arg1: string, arg2: number, arg3: number): boolean;
	regionMatches(arg0: boolean, arg1: number, arg2: string, arg3: number, arg4: number): boolean;
	replace(arg0: string, arg1: string): string;
	replace(arg0: CharSequence, arg1: CharSequence): string;
	replaceAll(arg0: string, arg1: string): string;
	replaceFirst(arg0: string, arg1: string): string;
	split(arg0: string): Array<string>;
	split(arg0: string, arg1: number): Array<string>;
	startsWith(arg0: string): boolean;
	startsWith(arg0: string, arg1: number): boolean;
	subSequence(arg0: number, arg1: number): CharSequence;
	substring(arg0: number): string;
	substring(arg0: number, arg1: number): string;
	toCharArray(): Array<string>;
	toLowerCase(): string;
	toLowerCase(arg0: Locale): string;
	toUpperCase(): string;
	toUpperCase(arg0: Locale): string;
	trim(): string;
}

export default class String {
	public static get $javaClass(): any {
		return Java.type('java.lang.String');
	}
	public static $isInstance(obj: any): obj is String {
		return obj instanceof String.$javaClass;
	}

	constructor();
	constructor(arg0: StringBuilder);
	constructor(arg0: StringBuffer);
	constructor(arg0: Array<number>);
	constructor(arg0: Array<string>);
	constructor(arg0: string);
	constructor(arg0: Array<number>, arg1: Charset);
	constructor(arg0: Array<number>, arg1: string);
	constructor(arg0: Array<number>, arg1: number);
	constructor(arg0: Array<number>, arg1: number, arg2: number);
	constructor(arg0: Array<number>, arg1: number, arg2: number);
	constructor(arg0: Array<string>, arg1: number, arg2: number);
	constructor(arg0: Array<number>, arg1: number, arg2: number, arg3: Charset);
	constructor(arg0: Array<number>, arg1: number, arg2: number, arg3: string);
	constructor(arg0: Array<number>, arg1: number, arg2: number, arg3: number);
	constructor(...args: any[]) {
		return new String.$javaClass(...args);
	}

	public static get CASE_INSENSITIVE_ORDER(): Comparator {
		return String.$javaClass.CASE_INSENSITIVE_ORDER;
	}

	public static copyValueOf(arg0: Array<string>): string;
	public static copyValueOf(arg0: Array<string>, arg1: number, arg2: number): string;
	public static copyValueOf(...args: any[]): any {
		return String.$javaClass.copyValueOf(...args);
	}

	public static format(arg0: string, arg1: Array<Object>): string;
	public static format(arg0: Locale, arg1: string, arg2: Array<Object>): string;
	public static format(...args: any[]): any {
		return String.$javaClass.format(...args);
	}

	public static join(arg0: CharSequence, arg1: Array<CharSequence>): string;
	public static join(arg0: CharSequence, arg1: Iterable): string;
	public static join(...args: any[]): any {
		return String.$javaClass.join(...args);
	}

	public static valueOf(arg0: string): string;
	public static valueOf(arg0: Object): string;
	public static valueOf(arg0: boolean): string;
	public static valueOf(arg0: Array<string>): string;
	public static valueOf(arg0: number): string;
	public static valueOf(arg0: number): string;
	public static valueOf(arg0: number): string;
	public static valueOf(arg0: number): string;
	public static valueOf(arg0: Array<string>, arg1: number, arg2: number): string;
	public static valueOf(...args: any[]): any {
		return String.$javaClass.valueOf(...args);
	}

}

