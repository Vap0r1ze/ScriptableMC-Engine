declare var Java: any;
import Buffer from './Buffer.js'
import ByteOrder from './ByteOrder.js'

export default interface CharBuffer extends Buffer {
	append(arg0: string): CharBuffer;
	append(arg0: any): any;
	append(arg0: string): any;
	append(arg0: any): CharBuffer;
	append(arg0: any, arg1: number, arg2: number): CharBuffer;
	append(arg0: any, arg1: number, arg2: number): any;
	array(): Array<string>;
	array(): any;
	arrayOffset(): number;
	asReadOnlyBuffer(): CharBuffer;
	capacity(): number;
	charAt(arg0: number): string;
	chars(): any;
	clear(): Buffer;
	codePoints(): any;
	compact(): CharBuffer;
	compareTo(arg0: CharBuffer): number;
	compareTo(arg0: any): number;
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
	subSequence(arg0: number, arg1: number): any;
	subSequence(arg0: number, arg1: number): CharBuffer;
}

export default class CharBuffer {
	public static get $javaClass(): any {
		return Java.type('java.nio.CharBuffer');
	}

	public static allocate(arg0: number): CharBuffer;
	public static allocate(...args: any[]): any {
		return CharBuffer.$javaClass.allocate(...args);
	}

	public static wrap(arg0: any): CharBuffer;
	public static wrap(arg0: Array<string>): CharBuffer;
	public static wrap(arg0: Array<string>, arg1: number, arg2: number): CharBuffer;
	public static wrap(arg0: any, arg1: number, arg2: number): CharBuffer;
	public static wrap(...args: any[]): any {
		return CharBuffer.$javaClass.wrap(...args);
	}

}

