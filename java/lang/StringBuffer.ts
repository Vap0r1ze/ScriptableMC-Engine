declare var Java: any;
import AbstractStringBuilder from './AbstractStringBuilder.js'
import Appendable from './Appendable.js'
import CharSequence from './CharSequence.js'
import Class from './Class.js'
import IntStream from '../../java/util/stream/IntStream.js'
import Object from './Object.js'
import Serializable from '../../java/io/Serializable.js'
import String from './String.js'

export default interface StringBuffer extends AbstractStringBuilder, Serializable, CharSequence {
	append(arg0: number): StringBuffer;
	append(arg0: number): StringBuffer;
	append(arg0: CharSequence): AbstractStringBuilder;
	append(arg0: boolean): StringBuffer;
	append(arg0: string): StringBuffer;
	append(arg0: number): StringBuffer;
	append(arg0: StringBuffer): AbstractStringBuilder;
	append(arg0: number): StringBuffer;
	append(arg0: string): AbstractStringBuilder;
	append(arg0: number): AbstractStringBuilder;
	append(arg0: number): AbstractStringBuilder;
	append(arg0: number): AbstractStringBuilder;
	append(arg0: number): AbstractStringBuilder;
	append(arg0: Array<string>): AbstractStringBuilder;
	append(arg0: boolean): AbstractStringBuilder;
	append(arg0: CharSequence): Appendable;
	append(arg0: string): AbstractStringBuilder;
	append(arg0: Object): StringBuffer;
	append(arg0: string): StringBuffer;
	append(arg0: Object): AbstractStringBuilder;
	append(arg0: string): Appendable;
	append(arg0: CharSequence): StringBuffer;
	append(arg0: Array<string>): StringBuffer;
	append(arg0: StringBuffer): StringBuffer;
	append(arg0: CharSequence, arg1: number, arg2: number): AbstractStringBuilder;
	append(arg0: Array<string>, arg1: number, arg2: number): AbstractStringBuilder;
	append(arg0: CharSequence, arg1: number, arg2: number): Appendable;
	append(arg0: CharSequence, arg1: number, arg2: number): StringBuffer;
	append(arg0: Array<string>, arg1: number, arg2: number): StringBuffer;
	appendCodePoint(arg0: number): StringBuffer;
	appendCodePoint(arg0: number): AbstractStringBuilder;
	capacity(): number;
	charAt(arg0: number): string;
	chars(): IntStream;
	codePointAt(arg0: number): number;
	codePointBefore(arg0: number): number;
	codePointCount(arg0: number, arg1: number): number;
	codePoints(): IntStream;
	delete(arg0: number, arg1: number): AbstractStringBuilder;
	delete(arg0: number, arg1: number): StringBuffer;
	deleteCharAt(arg0: number): AbstractStringBuilder;
	deleteCharAt(arg0: number): StringBuffer;
	ensureCapacity(arg0: number): void;
	getChars(arg0: number, arg1: number, arg2: Array<string>, arg3: number): void;
	indexOf(arg0: string): number;
	indexOf(arg0: string, arg1: number): number;
	insert(arg0: number, arg1: Array<string>): AbstractStringBuilder;
	insert(arg0: number, arg1: CharSequence): AbstractStringBuilder;
	insert(arg0: number, arg1: boolean): AbstractStringBuilder;
	insert(arg0: number, arg1: string): AbstractStringBuilder;
	insert(arg0: number, arg1: Object): AbstractStringBuilder;
	insert(arg0: number, arg1: CharSequence): StringBuffer;
	insert(arg0: number, arg1: boolean): StringBuffer;
	insert(arg0: number, arg1: string): StringBuffer;
	insert(arg0: number, arg1: number): StringBuffer;
	insert(arg0: number, arg1: number): StringBuffer;
	insert(arg0: number, arg1: number): StringBuffer;
	insert(arg0: number, arg1: Object): StringBuffer;
	insert(arg0: number, arg1: string): StringBuffer;
	insert(arg0: number, arg1: Array<string>): StringBuffer;
	insert(arg0: number, arg1: number): AbstractStringBuilder;
	insert(arg0: number, arg1: number): AbstractStringBuilder;
	insert(arg0: number, arg1: number): AbstractStringBuilder;
	insert(arg0: number, arg1: number): AbstractStringBuilder;
	insert(arg0: number, arg1: string): AbstractStringBuilder;
	insert(arg0: number, arg1: number): StringBuffer;
	insert(arg0: number, arg1: CharSequence, arg2: number, arg3: number): AbstractStringBuilder;
	insert(arg0: number, arg1: Array<string>, arg2: number, arg3: number): AbstractStringBuilder;
	insert(arg0: number, arg1: CharSequence, arg2: number, arg3: number): StringBuffer;
	insert(arg0: number, arg1: Array<string>, arg2: number, arg3: number): StringBuffer;
	lastIndexOf(arg0: string): number;
	lastIndexOf(arg0: string, arg1: number): number;
	length(): number;
	offsetByCodePoints(arg0: number, arg1: number): number;
	replace(arg0: number, arg1: number, arg2: string): AbstractStringBuilder;
	replace(arg0: number, arg1: number, arg2: string): StringBuffer;
	reverse(): StringBuffer;
	reverse(): AbstractStringBuilder;
	setCharAt(arg0: number, arg1: string): void;
	setLength(arg0: number): void;
	subSequence(arg0: number, arg1: number): CharSequence;
	substring(arg0: number): string;
	substring(arg0: number, arg1: number): string;
	trimToSize(): void;
}

export default class StringBuffer {
	public static get $javaClass(): any {
		return Java.type('java.lang.StringBuffer');
	}
	public static $isInstance(obj: any): obj is StringBuffer {
		return obj instanceof StringBuffer.$javaClass;
	}

	constructor();
	constructor(arg0: CharSequence);
	constructor(arg0: string);
	constructor(arg0: number);
	constructor(...args: any[]) {
		return new StringBuffer.$javaClass(...args);
	}

}

