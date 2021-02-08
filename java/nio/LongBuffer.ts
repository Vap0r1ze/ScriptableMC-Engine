declare var Java: any;
import Buffer from './Buffer.js'
import ByteOrder from './ByteOrder.js'

export default interface LongBuffer extends Buffer {
	array(): Array<number>;
	array(): any;
	arrayOffset(): number;
	asReadOnlyBuffer(): LongBuffer;
	capacity(): number;
	clear(): Buffer;
	compact(): LongBuffer;
	compareTo(arg0: any): number;
	compareTo(arg0: LongBuffer): number;
	duplicate(): LongBuffer;
	flip(): Buffer;
	get(): number;
	get(arg0: Array<number>): LongBuffer;
	get(arg0: number): number;
	get(arg0: Array<number>, arg1: number, arg2: number): LongBuffer;
	hasArray(): boolean;
	hasRemaining(): boolean;
	isDirect(): boolean;
	isReadOnly(): boolean;
	limit(): number;
	limit(arg0: number): Buffer;
	mark(): Buffer;
	order(): ByteOrder;
	position(): number;
	position(arg0: number): Buffer;
	put(arg0: Array<number>): LongBuffer;
	put(arg0: LongBuffer): LongBuffer;
	put(arg0: number): LongBuffer;
	put(arg0: number, arg1: number): LongBuffer;
	put(arg0: Array<number>, arg1: number, arg2: number): LongBuffer;
	remaining(): number;
	reset(): Buffer;
	rewind(): Buffer;
	slice(): LongBuffer;
}

export default class LongBuffer {
	public static get $javaClass(): any {
		return Java.type('java.nio.LongBuffer');
	}
	public static $isInstance(obj: any): obj is LongBuffer {
		return obj instanceof LongBuffer.$javaClass;
	}

	public static allocate(arg0: number): LongBuffer;
	public static allocate(...args: any[]): any {
		return LongBuffer.$javaClass.allocate(...args);
	}

	public static wrap(arg0: Array<number>): LongBuffer;
	public static wrap(arg0: Array<number>, arg1: number, arg2: number): LongBuffer;
	public static wrap(...args: any[]): any {
		return LongBuffer.$javaClass.wrap(...args);
	}

}

