declare var Java: any;
import Class from '../../java/lang/Class.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'

export default interface Buffer extends Object {
	array(): Object;
	arrayOffset(): number;
	capacity(): number;
	clear(): Buffer;
	flip(): Buffer;
	hasArray(): boolean;
	hasRemaining(): boolean;
	isDirect(): boolean;
	isReadOnly(): boolean;
	limit(): number;
	limit(arg0: number): Buffer;
	mark(): Buffer;
	position(): number;
	position(arg0: number): Buffer;
	remaining(): number;
	reset(): Buffer;
	rewind(): Buffer;
}

export default class Buffer {
	public static get $javaClass(): any {
		return Java.type('java.nio.Buffer');
	}
	public static $isInstance(obj: any): obj is Buffer {
		return obj instanceof Buffer.$javaClass;
	}

}

