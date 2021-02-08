declare var Java: any;
import Buffer from './Buffer.js'
import ByteOrder from './ByteOrder.js'
import Class from '../../java/lang/Class.js'
import Comparable from '../../java/lang/Comparable.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'

export default interface IntBuffer extends Buffer, Comparable {
	array(): Array<number>;
	array(): Object;
	arrayOffset(): number;
	asReadOnlyBuffer(): IntBuffer;
	capacity(): number;
	clear(): Buffer;
	compact(): IntBuffer;
	compareTo(arg0: Object): number;
	compareTo(arg0: IntBuffer): number;
	duplicate(): IntBuffer;
	flip(): Buffer;
	get(): number;
	get(arg0: Array<number>): IntBuffer;
	get(arg0: number): number;
	get(arg0: Array<number>, arg1: number, arg2: number): IntBuffer;
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
	put(arg0: Array<number>): IntBuffer;
	put(arg0: IntBuffer): IntBuffer;
	put(arg0: number): IntBuffer;
	put(arg0: number, arg1: number): IntBuffer;
	put(arg0: Array<number>, arg1: number, arg2: number): IntBuffer;
	remaining(): number;
	reset(): Buffer;
	rewind(): Buffer;
	slice(): IntBuffer;
}

export default class IntBuffer {
	public static get $javaClass(): any {
		return Java.type('java.nio.IntBuffer');
	}
	public static $isInstance(obj: any): obj is IntBuffer {
		return obj instanceof IntBuffer.$javaClass;
	}

	public static allocate(arg0: number): IntBuffer;
	public static allocate(...args: any[]): any {
		return IntBuffer.$javaClass.allocate(...args);
	}

	public static wrap(arg0: Array<number>): IntBuffer;
	public static wrap(arg0: Array<number>, arg1: number, arg2: number): IntBuffer;
	public static wrap(...args: any[]): any {
		return IntBuffer.$javaClass.wrap(...args);
	}

}

