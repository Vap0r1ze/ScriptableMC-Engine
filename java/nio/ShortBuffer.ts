declare var Java: any;
import Buffer from './Buffer.js'
import ByteOrder from './ByteOrder.js'
import Class from '../../java/lang/Class.js'
import Comparable from '../../java/lang/Comparable.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'

export default interface ShortBuffer extends Buffer, Comparable {
	array(): Array<number>;
	array(): Object;
	arrayOffset(): number;
	asReadOnlyBuffer(): ShortBuffer;
	capacity(): number;
	clear(): Buffer;
	compact(): ShortBuffer;
	compareTo(arg0: Object): number;
	compareTo(arg0: ShortBuffer): number;
	duplicate(): ShortBuffer;
	flip(): Buffer;
	get(): number;
	get(arg0: Array<number>): ShortBuffer;
	get(arg0: number): number;
	get(arg0: Array<number>, arg1: number, arg2: number): ShortBuffer;
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
	put(arg0: Array<number>): ShortBuffer;
	put(arg0: ShortBuffer): ShortBuffer;
	put(arg0: number): ShortBuffer;
	put(arg0: number, arg1: number): ShortBuffer;
	put(arg0: Array<number>, arg1: number, arg2: number): ShortBuffer;
	remaining(): number;
	reset(): Buffer;
	rewind(): Buffer;
	slice(): ShortBuffer;
}

export default class ShortBuffer {
	public static get $javaClass(): any {
		return Java.type('java.nio.ShortBuffer');
	}
	public static $isInstance(obj: any): obj is ShortBuffer {
		return obj instanceof ShortBuffer.$javaClass;
	}

	public static allocate(arg0: number): ShortBuffer;
	public static allocate(...args: any[]): any {
		return ShortBuffer.$javaClass.allocate(...args);
	}

	public static wrap(arg0: Array<number>): ShortBuffer;
	public static wrap(arg0: Array<number>, arg1: number, arg2: number): ShortBuffer;
	public static wrap(...args: any[]): any {
		return ShortBuffer.$javaClass.wrap(...args);
	}

}

