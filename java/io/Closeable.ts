declare var Java: any;

export default interface Closeable {
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

