declare var Java: any;
import Appendable from './Appendable.js'
import CharSequence from './CharSequence.js'
import Class from './Class.js'
import IntStream from '../../java/util/stream/IntStream.js'
import Object from './Object.js'
import String from './String.js'
import StringBuffer from './StringBuffer.js'

export default interface AbstractStringBuilder extends Object, Appendable, CharSequence {
	append(arg0: Array<string>): AbstractStringBuilder;
	append(arg0: boolean): AbstractStringBuilder;
	append(arg0: StringBuffer): AbstractStringBuilder;
	append(arg0: string): AbstractStringBuilder;
	append(arg0: CharSequence): AbstractStringBuilder;
	append(arg0: number): AbstractStringBuilder;
	append(arg0: string): Appendable;
	append(arg0: CharSequence): Appendable;
	append(arg0: string): AbstractStringBuilder;
	append(arg0: number): AbstractStringBuilder;
	append(arg0: number): AbstractStringBuilder;
	append(arg0: number): AbstractStringBuilder;
	append(arg0: Object): AbstractStringBuilder;
	append(arg0: CharSequence, arg1: number, arg2: number): AbstractStringBuilder;
	append(arg0: Array<string>, arg1: number, arg2: number): AbstractStringBuilder;
	append(arg0: CharSequence, arg1: number, arg2: number): Appendable;
	appendCodePoint(arg0: number): AbstractStringBuilder;
	capacity(): number;
	charAt(arg0: number): string;
	chars(): IntStream;
	codePointAt(arg0: number): number;
	codePointBefore(arg0: number): number;
	codePointCount(arg0: number, arg1: number): number;
	codePoints(): IntStream;
	delete(arg0: number, arg1: number): AbstractStringBuilder;
	deleteCharAt(arg0: number): AbstractStringBuilder;
	ensureCapacity(arg0: number): void;
	getChars(arg0: number, arg1: number, arg2: Array<string>, arg3: number): void;
	indexOf(arg0: string): number;
	indexOf(arg0: string, arg1: number): number;
	insert(arg0: number, arg1: number): AbstractStringBuilder;
	insert(arg0: number, arg1: string): AbstractStringBuilder;
	insert(arg0: number, arg1: boolean): AbstractStringBuilder;
	insert(arg0: number, arg1: Object): AbstractStringBuilder;
	insert(arg0: number, arg1: number): AbstractStringBuilder;
	insert(arg0: number, arg1: number): AbstractStringBuilder;
	insert(arg0: number, arg1: number): AbstractStringBuilder;
	insert(arg0: number, arg1: string): AbstractStringBuilder;
	insert(arg0: number, arg1: CharSequence): AbstractStringBuilder;
	insert(arg0: number, arg1: Array<string>): AbstractStringBuilder;
	insert(arg0: number, arg1: CharSequence, arg2: number, arg3: number): AbstractStringBuilder;
	insert(arg0: number, arg1: Array<string>, arg2: number, arg3: number): AbstractStringBuilder;
	lastIndexOf(arg0: string): number;
	lastIndexOf(arg0: string, arg1: number): number;
	length(): number;
	offsetByCodePoints(arg0: number, arg1: number): number;
	replace(arg0: number, arg1: number, arg2: string): AbstractStringBuilder;
	reverse(): AbstractStringBuilder;
	setCharAt(arg0: number, arg1: string): void;
	setLength(arg0: number): void;
	subSequence(arg0: number, arg1: number): CharSequence;
	substring(arg0: number): string;
	substring(arg0: number, arg1: number): string;
	trimToSize(): void;
}

export default class AbstractStringBuilder {
	public static get $javaClass(): any {
		return Java.type('java.lang.AbstractStringBuilder');
	}
	public static $isInstance(obj: any): obj is AbstractStringBuilder {
		return obj instanceof AbstractStringBuilder.$javaClass;
	}

}

