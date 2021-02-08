declare var Java: any;
import Buffer from './Buffer.js'
import ByteOrder from './ByteOrder.js'
import CharBuffer from './CharBuffer.js'
import DoubleBuffer from './DoubleBuffer.js'
import FloatBuffer from './FloatBuffer.js'
import IntBuffer from './IntBuffer.js'
import LongBuffer from './LongBuffer.js'
import ShortBuffer from './ShortBuffer.js'

export default interface ByteBuffer extends Buffer {
	array(): any;
	array(): Array<number>;
	arrayOffset(): number;
	asCharBuffer(): CharBuffer;
	asDoubleBuffer(): DoubleBuffer;
	asFloatBuffer(): FloatBuffer;
	asIntBuffer(): IntBuffer;
	asLongBuffer(): LongBuffer;
	asReadOnlyBuffer(): ByteBuffer;
	asShortBuffer(): ShortBuffer;
	capacity(): number;
	clear(): Buffer;
	compact(): ByteBuffer;
	compareTo(arg0: any): number;
	compareTo(arg0: ByteBuffer): number;
	duplicate(): ByteBuffer;
	flip(): Buffer;
	get(): number;
	get(arg0: number): number;
	get(arg0: Array<number>): ByteBuffer;
	get(arg0: Array<number>, arg1: number, arg2: number): ByteBuffer;
	getChar(): string;
	getChar(arg0: number): string;
	getDouble(): number;
	getDouble(arg0: number): number;
	getFloat(): number;
	getFloat(arg0: number): number;
	getInt(): number;
	getInt(arg0: number): number;
	getLong(): number;
	getLong(arg0: number): number;
	getShort(): number;
	getShort(arg0: number): number;
	hasArray(): boolean;
	hasRemaining(): boolean;
	isDirect(): boolean;
	isReadOnly(): boolean;
	limit(): number;
	limit(arg0: number): Buffer;
	mark(): Buffer;
	order(): ByteOrder;
	order(arg0: ByteOrder): ByteBuffer;
	position(): number;
	position(arg0: number): Buffer;
	put(arg0: number): ByteBuffer;
	put(arg0: ByteBuffer): ByteBuffer;
	put(arg0: Array<number>): ByteBuffer;
	put(arg0: number, arg1: number): ByteBuffer;
	put(arg0: Array<number>, arg1: number, arg2: number): ByteBuffer;
	putChar(arg0: string): ByteBuffer;
	putChar(arg0: number, arg1: string): ByteBuffer;
	putDouble(arg0: number): ByteBuffer;
	putDouble(arg0: number, arg1: number): ByteBuffer;
	putFloat(arg0: number): ByteBuffer;
	putFloat(arg0: number, arg1: number): ByteBuffer;
	putInt(arg0: number): ByteBuffer;
	putInt(arg0: number, arg1: number): ByteBuffer;
	putLong(arg0: number): ByteBuffer;
	putLong(arg0: number, arg1: number): ByteBuffer;
	putShort(arg0: number): ByteBuffer;
	putShort(arg0: number, arg1: number): ByteBuffer;
	remaining(): number;
	reset(): Buffer;
	rewind(): Buffer;
	slice(): ByteBuffer;
}

export default class ByteBuffer {
	public static get $javaClass(): any {
		return Java.type('java.nio.ByteBuffer');
	}
	public static $isInstance(obj: any): obj is ByteBuffer {
		return obj instanceof ByteBuffer.$javaClass;
	}

	public static allocate(arg0: number): ByteBuffer;
	public static allocate(...args: any[]): any {
		return ByteBuffer.$javaClass.allocate(...args);
	}

	public static allocateDirect(arg0: number): ByteBuffer;
	public static allocateDirect(...args: any[]): any {
		return ByteBuffer.$javaClass.allocateDirect(...args);
	}

	public static wrap(arg0: Array<number>): ByteBuffer;
	public static wrap(arg0: Array<number>, arg1: number, arg2: number): ByteBuffer;
	public static wrap(...args: any[]): any {
		return ByteBuffer.$javaClass.wrap(...args);
	}

}

