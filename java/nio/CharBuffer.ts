declare var Java: any;
import Appendable from '../../java/lang/Appendable.js'
import Buffer from './Buffer.js'
import ByteOrder from './ByteOrder.js'
import CharSequence from '../../java/lang/CharSequence.js'
import Class from '../../java/lang/Class.js'
import Comparable from '../../java/lang/Comparable.js'
import IntStream from '../../java/util/stream/IntStream.js'
import Object from '../../java/lang/Object.js'
import Readable from '../../java/lang/Readable.js'
import String from '../../java/lang/String.js'

export default interface CharBuffer extends Buffer, Comparable, Appendable, CharSequence, Readable {
	append(arg0: string): CharBuffer;
	append(arg0: CharSequence): Appendable;
	append(arg0: string): Appendable;
	append(arg0: CharSequence): CharBuffer;
	append(arg0: CharSequence, arg1: number, arg2: number): CharBuffer;
	append(arg0: CharSequence, arg1: number, arg2: number): Appendable;
	array(): Array<string>;
	array(): Object;
	arrayOffset(): number;
	asReadOnlyBuffer(): CharBuffer;
	capacity(): number;
	charAt(arg0: number): string;
	chars(): IntStream;
	clear(): Buffer;
	codePoints(): IntStream;
	compact(): CharBuffer;
	compareTo(arg0: CharBuffer): number;
	compareTo(arg0: Object): number;
	duplicate(): CharBuffer;
	flip(): Buffer;
	get(): string;
	get(arg0: number): string;
	get(arg0: Array<string>): CharBuffer;
	get(arg0: Array<string>, arg1: number, arg2: number): CharBuffer;
	hasArray(): boolean;
	hasRemaining(): boolean;
	isDirect(): boolean;
	isReadOnly(): boolean;
	length(): number;
	limit(): number;
	limit(arg0: number): Buffer;
	mark(): Buffer;
	order(): ByteOrder;
	position(): number;
	position(arg0: number): Buffer;
	put(arg0: string): CharBuffer;
	put(arg0: Array<string>): CharBuffer;
	put(arg0: CharBuffer): CharBuffer;
	put(arg0: string): CharBuffer;
	put(arg0: number, arg1: string): CharBuffer;
	put(arg0: Array<string>, arg1: number, arg2: number): CharBuffer;
	put(arg0: string, arg1: number, arg2: number): CharBuffer;
	read(arg0: CharBuffer): number;
	remaining(): number;
	reset(): Buffer;
	rewind(): Buffer;
	slice(): CharBuffer;
	subSequence(arg0: number, arg1: number): CharSequence;
	subSequence(arg0: number, arg1: number): CharBuffer;
}

export default class CharBuffer {
	public static get $javaClass(): any {
		return Java.type('java.nio.CharBuffer');
	}
	public static $isInstance(obj: any): obj is CharBuffer {
		return obj instanceof CharBuffer.$javaClass;
	}

	public static allocate(arg0: number): CharBuffer;
	public static allocate(...args: any[]): any {
		return CharBuffer.$javaClass.allocate(...args);
	}

	public static wrap(arg0: CharSequence): CharBuffer;
	public static wrap(arg0: Array<string>): CharBuffer;
	public static wrap(arg0: Array<string>, arg1: number, arg2: number): CharBuffer;
	public static wrap(arg0: CharSequence, arg1: number, arg2: number): CharBuffer;
	public static wrap(...args: any[]): any {
		return CharBuffer.$javaClass.wrap(...args);
	}

}

