declare var Java: any;
import AbstractStringBuilder from './AbstractStringBuilder.js'
import Appendable from './Appendable.js'
import CharSequence from './CharSequence.js'
import Class from './Class.js'
import IntStream from '../../java/util/stream/IntStream.js'
import Object from './Object.js'
import Serializable from '../../java/io/Serializable.js'
import String from './String.js'
import StringBuffer from './StringBuffer.js'

export default interface StringBuilder extends AbstractStringBuilder, Serializable, CharSequence {
	append(arg0: number): AbstractStringBuilder;
	append(arg0: number): AbstractStringBuilder;
	append(arg0: string): AbstractStringBuilder;
	append(arg0: boolean): AbstractStringBuilder;
	append(arg0: CharSequence): Appendable;
	append(arg0: number): AbstractStringBuilder;
	append(arg0: number): AbstractStringBuilder;
	append(arg0: StringBuffer): AbstractStringBuilder;
	append(arg0: string): AbstractStringBuilder;
	append(arg0: Object): AbstractStringBuilder;
	append(arg0: string): Appendable;
	append(arg0: Array<string>): AbstractStringBuilder;
	append(arg0: CharSequence): AbstractStringBuilder;
	append(arg0: boolean): StringBuilder;
	append(arg0: CharSequence): StringBuilder;
	append(arg0: string): StringBuilder;
	append(arg0: number): StringBuilder;
	append(arg0: StringBuffer): StringBuilder;
	append(arg0: Array<string>): StringBuilder;
	append(arg0: number): StringBuilder;
	append(arg0: string): StringBuilder;
	append(arg0: Object): StringBuilder;
	append(arg0: number): StringBuilder;
	append(arg0: number): StringBuilder;
	append(arg0: CharSequence, arg1: number, arg2: number): AbstractStringBuilder;
	append(arg0: Array<string>, arg1: number, arg2: number): AbstractStringBuilder;
	append(arg0: CharSequence, arg1: number, arg2: number): Appendable;
	append(arg0: CharSequence, arg1: number, arg2: number): StringBuilder;
	append(arg0: Array<string>, arg1: number, arg2: number): StringBuilder;
	appendCodePoint(arg0: number): AbstractStringBuilder;
	appendCodePoint(arg0: number): StringBuilder;
	capacity(): number;
	charAt(arg0: number): string;
	chars(): IntStream;
	codePointAt(arg0: number): number;
	codePointBefore(arg0: number): number;
	codePointCount(arg0: number, arg1: number): number;
	codePoints(): IntStream;
	delete(arg0: number, arg1: number): AbstractStringBuilder;
	delete(arg0: number, arg1: number): StringBuilder;
	deleteCharAt(arg0: number): AbstractStringBuilder;
	deleteCharAt(arg0: number): StringBuilder;
	ensureCapacity(arg0: number): void;
	getChars(arg0: number, arg1: number, arg2: Array<string>, arg3: number): void;
	indexOf(arg0: string): number;
	indexOf(arg0: string, arg1: number): number;
	insert(arg0: number, arg1: number): AbstractStringBuilder;
	insert(arg0: number, arg1: number): StringBuilder;
	insert(arg0: number, arg1: number): StringBuilder;
	insert(arg0: number, arg1: number): StringBuilder;
	insert(arg0: number, arg1: number): StringBuilder;
	insert(arg0: number, arg1: Object): StringBuilder;
	insert(arg0: number, arg1: number): AbstractStringBuilder;
	insert(arg0: number, arg1: number): AbstractStringBuilder;
	insert(arg0: number, arg1: string): StringBuilder;
	insert(arg0: number, arg1: Array<string>): StringBuilder;
	insert(arg0: number, arg1: CharSequence): StringBuilder;
	insert(arg0: number, arg1: boolean): StringBuilder;
	insert(arg0: number, arg1: string): StringBuilder;
	insert(arg0: number, arg1: boolean): AbstractStringBuilder;
	insert(arg0: number, arg1: CharSequence): AbstractStringBuilder;
	insert(arg0: number, arg1: Array<string>): AbstractStringBuilder;
	insert(arg0: number, arg1: Object): AbstractStringBuilder;
	insert(arg0: number, arg1: string): AbstractStringBuilder;
	insert(arg0: number, arg1: string): AbstractStringBuilder;
	insert(arg0: number, arg1: number): AbstractStringBuilder;
	insert(arg0: number, arg1: Array<string>, arg2: number, arg3: number): StringBuilder;
	insert(arg0: number, arg1: CharSequence, arg2: number, arg3: number): StringBuilder;
	insert(arg0: number, arg1: CharSequence, arg2: number, arg3: number): AbstractStringBuilder;
	insert(arg0: number, arg1: Array<string>, arg2: number, arg3: number): AbstractStringBuilder;
	lastIndexOf(arg0: string): number;
	lastIndexOf(arg0: string, arg1: number): number;
	length(): number;
	offsetByCodePoints(arg0: number, arg1: number): number;
	replace(arg0: number, arg1: number, arg2: string): AbstractStringBuilder;
	replace(arg0: number, arg1: number, arg2: string): StringBuilder;
	reverse(): AbstractStringBuilder;
	reverse(): StringBuilder;
	setCharAt(arg0: number, arg1: string): void;
	setLength(arg0: number): void;
	subSequence(arg0: number, arg1: number): CharSequence;
	substring(arg0: number): string;
	substring(arg0: number, arg1: number): string;
	trimToSize(): void;
}

export default class StringBuilder {
	public static get $javaClass(): any {
		return Java.type('java.lang.StringBuilder');
	}
	public static $isInstance(obj: any): obj is StringBuilder {
		return obj instanceof StringBuilder.$javaClass;
	}

	constructor();
	constructor(arg0: CharSequence);
	constructor(arg0: string);
	constructor(arg0: number);
	constructor(...args: any[]) {
		return new StringBuilder.$javaClass(...args);
	}

}

