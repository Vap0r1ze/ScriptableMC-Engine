declare var Java: any;
import AutoCloseable from '../../java/lang/AutoCloseable.js'

export default interface Closeable extends AutoCloseable {
	close(): void;
}

export default class Closeable {
	public static get $javaClass(): any {
		return Java.type('java.io.Closeable');
	}
	public static $isInstance(obj: any): obj is Closeable {
		return obj instanceof Closeable.$javaClass;
	}

}

