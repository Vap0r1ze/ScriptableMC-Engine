declare var Java: any;
import Object from '../../../../java/lang/Object.js'

export default interface ByteProcessor {
	getResult(): Object;
	processBytes(arg0: Array<number>, arg1: number, arg2: number): boolean;
}

export default class ByteProcessor {
	public static get $javaClass(): any {
		return Java.type('com.google.common.io.ByteProcessor');
	}
	public static $isInstance(obj: any): obj is ByteProcessor {
		return obj instanceof ByteProcessor.$javaClass;
	}

}

