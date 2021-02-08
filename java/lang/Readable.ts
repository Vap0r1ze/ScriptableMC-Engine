declare var Java: any;
import CharBuffer from '../../java/nio/CharBuffer.js'

export default interface Readable {
	read(arg0: CharBuffer): number;
}

export default class Readable {
	public static get $javaClass(): any {
		return Java.type('java.lang.Readable');
	}
	public static $isInstance(obj: any): obj is Readable {
		return obj instanceof Readable.$javaClass;
	}

}

